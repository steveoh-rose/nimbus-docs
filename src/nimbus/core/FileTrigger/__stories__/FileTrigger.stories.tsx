// @ts-nocheck
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FileTrigger, Button, Pressable } from '@nimbus/core';
import { useId } from 'react-aria';
import { FileTriggerArgTypes } from './FileTriggerArgTypes';
import { FileTriggerProps } from '../FileTrigger';

type Story = StoryObj<FileTriggerProps>;
type MetaPreview = Meta<FileTriggerProps>;

const meta: MetaPreview = {
  title: 'nimbus-core/FileTrigger',
  parameters: {
    status: {
      type: 'in development',
    },
    controls: { sort: 'alpha' },
  },
  component: FileTrigger,
};

export default meta;

/**
 * Extract source code between comments.
 * Used to show the original source code of a story, rather than the output.
 */
const transformStorySource = (code: string) => {
  const regex = /\/\*\* <SOURCE> \*\/([\s\S]*?)\/\*\* <\/SOURCE> \*\//;
  const renderContentMatch = code.match(regex);
  return renderContentMatch ? renderContentMatch[1].trim() : code;
};

export const Primary: Story = {
  render: (args) => (
    <FileTrigger {...args}>
      <Button variant="secondary">Select Files</Button>
    </FileTrigger>
  ),
  parameters: {
    controls: {
      include: [...Object.keys(FileTriggerArgTypes)],
    },
    sort: 'alpha',
  },
  argTypes: {
    ...FileTriggerArgTypes,
  },
  args: {
    children: undefined,
    allowsMultiple: undefined,
    acceptedFileTypes: undefined,
    acceptDirectory: undefined,
    defaultCamera: undefined,
    onSelect: undefined,
    'data-test-id': undefined,
    'data-rac-id': undefined,
  },
};

/**
 * A FileTrigger wraps around a pressable child such as a button,
 * and includes a visually hidden input element that allows the user to select files from their device.
 * Use the `onSelect` prop to control state for the component.
 */
export const OnSelect: Story = {
  render: () => {
    const OnSelectStory = () => {
      /** <SOURCE> */
      const [file, setFile] = React.useState<string[] | null>(null);

      return (
        <>
          <FileTrigger
            onSelect={(e: FileList | null): void => {
              const files: File[] = e ? Array.from(e) : [];
              const filenames: string[] = files.map((f) => f.name);
              setFile(filenames);
            }}
          >
            <Button variant="secondary">Select a file</Button>
          </FileTrigger>
          {file && <div>{file.join(', ')}</div>}
        </>
      );
    };
    /** </SOURCE> */
    return <OnSelectStory />;
  },
  parameters: {
    docs: {
      source: {
        transform: transformStorySource,
      },
    },
    controls: {
      include: ['onSelect'],
    },
  },
};

/**
 * By default, the file trigger will accept any file type. To support only certain file types,
 * pass an array of the mime type of files via the `acceptedFileTypes` prop.
 */
export const AcceptedFileTypes: Story = {
  render: (args) => (
    <FileTrigger {...args}>
      <Button variant="secondary">Select Files</Button>
    </FileTrigger>
  ),
  parameters: {
    controls: {
      include: ['acceptedFileTypes'],
    },
  },
  args: {
    acceptedFileTypes: ['image/png'],
  },
};

/**
 * A file trigger can accept multiple files by passsing the allowsMultiple property.
 */
export const MultipleFiles: Story = {
  render: (args) => (
    <FileTrigger {...args}>
      <Button variant="secondary">Select Files</Button>
    </FileTrigger>
  ),
  parameters: {
    controls: {
      include: ['allowsMultiple'],
    },
  },
  args: {
    allowsMultiple: true,
  },
};

/**
 * To enable selecting directories instead of files, use the `acceptDirectory` property.
 */
export const DirectorySelection: Story = {
  render: () => {
    const DirectSelectionStory = () => {
      /** <SOURCE> */
      const [files, setFiles] = React.useState([]);
      const id = useId();

      return (
        <>
          <FileTrigger
            acceptDirectory
            onSelect={(e: FileList | null) => {
              if (e) {
                const fileList = [...e].map((file) =>
                  file.webkitRelativePath !== '' ? file.webkitRelativePath : file.name
                );
                setFiles(fileList);
              }
            }}
          >
            <Button variant="secondary">Select a file</Button>
          </FileTrigger>
          {files && (
            <ul>
              {files.map((file) => (
                <li key={id}>{file}</li>
              ))}
            </ul>
          )}
        </>
      );
    };
    /** </SOURCE> */
    return <DirectSelectionStory />;
  },
  parameters: {
    docs: {
      source: {
        transform: transformStorySource,
      },
    },
    controls: {
      include: ['acceptDirectory'],
    },
  },
};

export const Pending: Story = {
  render: (): React.ReactElement => {
    const PendingStory: React.FC = () => {
      /** <SOURCE> */
      const [file, setFile] = React.useState<string[] | null>(null);
      const [isLoading, setLoading] = React.useState(false);

      const handleSelect = async (files: FileList | null): Promise<void> => {
        if (!files || files.length === 0) return;
        setLoading(true);
        try {
          await new Promise<void>((resolve) => {
            setTimeout(resolve, 4500);
          });
        } finally {
          setLoading(false);
          const filenames: string[] = Array.from(files).map((f) => f.name);
          setFile(filenames);
        }
      };

      return (
        <>
          <FileTrigger onSelect={handleSelect}>
            <Button
              variant="secondary"
              loading={isLoading}
              loadingText="Uploading…"
              disabled={isLoading}
            >
              Upload a file
            </Button>
          </FileTrigger>

          {file && (
            <div aria-live="polite" style={{ marginTop: 8 }}>
              Uploaded: {file.join(', ')}
            </div>
          )}
        </>
      );
    };
    /** </SOURCE> */
    return <PendingStory />;
  },
  parameters: {
    docs: {
      source: {
        transform: transformStorySource,
      },
    },
    controls: {
      include: ['onSelect'],
    },
  },
};

/**
 * In order to use the fileTrigger you must use the `<Pressable>` component exported from `@nimbus-ui/core`
 * This ensures all the correct props are used.
 */
export const PolymorphicComponent: Story = {
  render: () => {
    const PolymorphicComponentStory = () => {
      /** <SOURCE> */
      const [file, setFile] = React.useState<string[] | null>(null);

      return (
        <>
          <FileTrigger
            onSelect={(e: FileList | null): void => {
              const files: File[] = e ? Array.from(e) : [];
              const filenames: string[] = files.map((f) => f.name);
              setFile(filenames);
            }}
          >
            <Pressable>
              <p>Select a file</p>
            </Pressable>
          </FileTrigger>
          {file && <div>{file.join(', ')}</div>}
        </>
      );
    };
    /** </SOURCE> */
    return <PolymorphicComponentStory />;
  },
  parameters: {
    docs: {
      source: {
        transform: transformStorySource,
      },
    },
    controls: {
      include: ['onSelect'],
    },
  },
};
