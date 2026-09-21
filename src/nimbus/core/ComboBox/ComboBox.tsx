// @ts-nocheck
import React from 'react';
import { useComboBox, useFilter, AriaComboBoxProps } from 'react-aria';
import { ComboBoxStateOptions, useComboBoxState } from 'react-stately';
import classNames from 'classnames';
import { LoadingState } from '@react-types/shared';
import { isNil, omit } from 'lodash-es';
import { CaretDropDown } from '@nimbus/icons';
import { Button } from '@nimbus/core';
import { NimbusDataAttributeProps, useDataAttributes } from '@nimbus/utils';
import { Popover } from './Popover';
import { ListBox } from './Listbox';
import { TextInput } from '../TextInput/TextInput';
import styles from './ComboBox.module.scss';
import { Item } from './Item';
import { Section } from './Section';

export interface ComboBoxClasses {
  root?: string;
  inputRoot?: string;
  label?: string;
  input?: string;
  hint?: string;
  popover?: string;
  listbox?: string;
  option?: string;
  group?: string;
}

interface ComboBoxOwnProps {
  /**
   * Whether the input is full width
   */
  fullWidth?: boolean;
  /**
   * A description for the field. Provides a hint such as specific requirements for what to choose.
   */
  hint?: React.ReactNode;
  /**
   * Whether the input is loading
   * @deprecated Use `loadingState` instead
   */
  loading?: boolean;
  /**
   * Whether the input is disabled
   */
  disabled?: boolean;
  /**
   * Whether the input is invalid
   */
  invalid?: boolean;
  /**
   * Whether the input is requied
   */
  required?: boolean;
  /**
   * Whether the input can be selected but not changed by the user.
   */
  readonly?: boolean;
  /**
   * Custom class names to add to underlying DOM elements for styling.
   */
  classes?: ComboBoxClasses;
  /**
   * ID data attribute for use in tests.
   */
  'data-testid'?: string;
  /**
   * Optional element to display when there are no options to display.
   */
  emptyStateNode?: React.ReactNode;
  /**
   * Whether the combo box allows the menu to be open when the collection is empty.
   * @default true
   */
  allowsEmptyCollection?: boolean;
  /**
   * The loading state of the ComboBox
   */
  loadingState?: LoadingState;
  /**
   * Handler that is called when more items should be loaded
   */
  onLoadMore?: () => void;
}

type AriaComboBoxBooleanProps = 'isDisabled' | 'isInvalid' | 'isRequired' | 'isReadOnly';
type OmittedAriaComboBoxProps =
  | AriaComboBoxBooleanProps
  | 'description'
  | 'errorMessage'
  | 'menuTrigger'
  | 'validationState'
  | 'shouldFocusWrap';

export type ComboBoxProps<T> = Omit<AriaComboBoxProps<T>, OmittedAriaComboBoxProps> &
  ComboBoxOwnProps;

export function ComboBox<T extends object>({
  allowsEmptyCollection = true,
  ...props
}: Readonly<ComboBoxProps<T>>) {
  const {
    label,
    required,
    hint,
    invalid,
    loading,
    readonly,
    disabled,
    classes,
    fullWidth,
    emptyStateNode,
    loadingState,
    onLoadMore,
    'data-testid': testId,
  } = props;

  const ref = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const listBoxRef = React.useRef<HTMLUListElement>(null);
  const popoverRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef(null);

  const { contains } = useFilter({ sensitivity: 'base' });
  const comboboxStateOptions: ComboBoxStateOptions<T> = {
    ...omit(
      props,
      ...([
        'classes',
        'data-testid',
        'disabled',
        'emptyStateNode',
        'fullWidth',
        'hint',
        'invalid',
        'loading',
        'readonly',
        'required',
      ] as Array<keyof ComboBoxOwnProps>)
    ),
    allowsEmptyCollection,
    isDisabled: disabled,
    isInvalid: invalid,
    isReadOnly: readonly,
    isRequired: required,
    defaultFilter: contains,
    menuTrigger: 'focus',
  };
  const state = useComboBoxState(comboboxStateOptions);
  const isPopoverOpen = state.isOpen && !readonly && !isNil(ref.current);
  const { buttonProps, inputProps, listBoxProps, labelProps } = useComboBox(
    {
      ...comboboxStateOptions,
      shouldFocusWrap: true,
      inputRef,
      buttonRef,
      listBoxRef,
      popoverRef,
    },
    state
  );

  /**
   * Set up data shared nimbus-ui data attributes
   */
  const dataAttributeProps = useDataAttributes(props as NimbusDataAttributeProps);

  return (
    <div
      className={classNames(styles.root, classes?.root)}
      ref={ref}
      data-testid={testId ?? 'combobox-root'}
      data-full-width={fullWidth}
      {...dataAttributeProps}
    >
      <TextInput
        classes={{
          label: classes?.label,
          hint: classes?.hint,
          input: classes?.input,
          root: classes?.inputRoot,
        }}
        fullWidth
        inputProps={inputProps}
        labelProps={labelProps}
        ref={inputRef}
        label={label}
        required={required}
        hint={hint}
        invalid={invalid}
        disabled={disabled}
        endAddon={
          <Button
            variant={invalid ? 'negative' : 'subtle'}
            disabled={disabled}
            size="sm"
            classes={{ root: styles.toggle }}
            {...omit(buttonProps, ['aria-labelledby', 'elementType'])}
            ref={buttonRef}
          >
            <CaretDropDown />
          </Button>
        }
        // Leaving `loading` for backwards compatability
        loading={loading || loadingState === 'loading' || loadingState === 'filtering'}
      />
      {isPopoverOpen && (
        <Popover
          state={state}
          triggerRef={inputRef}
          portalContainer={ref.current}
          popoverRef={popoverRef}
          containerPadding={0}
          isNonModal
          placement="bottom start"
          classes={classes}
          crossOffset={-10}
        >
          <ListBox
            {...listBoxProps}
            state={state}
            classes={classes}
            emptyStateNode={emptyStateNode}
            isLoading={loadingState === 'loadingMore'}
            onLoadMore={onLoadMore}
          />
        </Popover>
      )}
    </div>
  );
}

ComboBox.Item = Item;
ComboBox.Section = Section;
ComboBox.displayName = 'ComboBox';
