// @ts-nocheck
import React from 'react';
import type { StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/addons';
import Pagination from '..';
import { PaginationControlsProps } from '../Controls/Controls';

export default {
  title: 'nimbus-core/Pagination',
  component: Pagination.Controls,
  parameters: {
    status: {
      type: 'in development', // 'beta' | 'stable' | 'deprecated' | 'in development'
    },
  },
  subcomponents: {
    Records: Pagination.Records,
  },
};

const defaultPageSize = 25;

export const Primary: StoryObj<PaginationControlsProps> = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [controlArgs, updateArgs] = useArgs<PaginationControlsProps>();
    return (
      <div style={{ display: 'flex', width: '100%', gap: 20 }}>
        <Pagination.Records
          currentPage={controlArgs.currentPage}
          pageSize={controlArgs.pageSize ?? defaultPageSize}
          totalItems={controlArgs.totalItems}
        />
        <Pagination.PageSize>
          <Pagination.PageSize.Button>Items: {controlArgs.pageSize}</Pagination.PageSize.Button>
          <Pagination.PageSize.Menu
            header="Items per page"
            onChange={(pageSize) => {
              updateArgs({
                pageSize,
                currentPage: 1,
              });
            }}
          />
        </Pagination.PageSize>
        <Pagination.Controls
          {...args}
          onPageChange={(newPageNumber) => updateArgs({ currentPage: newPageNumber })}
        />
      </div>
    );
  },
  args: {
    totalItems: 76,
    currentPage: 1,
    pageSize: defaultPageSize,
  },
};

export const Separate: StoryObj<PaginationControlsProps> = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [controlArgs, updateArgs] = useArgs<PaginationControlsProps>();
    return (
      <>
        <Pagination.Records
          currentPage={controlArgs.currentPage}
          pageSize={controlArgs.pageSize ?? defaultPageSize}
          totalItems={controlArgs.totalItems}
        />
        <div style={{ width: '100%', height: '100px', backgroundColor: 'red' }}>
          Some Content Here
        </div>
        <Pagination.Controls
          {...args}
          onPageChange={(newPageNumber) => updateArgs({ currentPage: newPageNumber })}
        />
      </>
    );
  },
  args: {
    totalItems: 238,
    currentPage: 1,
    pageSize: defaultPageSize,
  },
};
