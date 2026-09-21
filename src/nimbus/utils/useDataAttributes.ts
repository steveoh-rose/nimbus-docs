// @ts-nocheck
export interface NimbusDataAttributeProps {
  'data-rac-id'?: string;
}

const useDataAttributes = ({ 'data-rac-id': customId }: NimbusDataAttributeProps) => {
  const id = customId;

  return {
    'data-rac': '',
    'data-rac-id': id ?? undefined,
  };
};

export { useDataAttributes };
