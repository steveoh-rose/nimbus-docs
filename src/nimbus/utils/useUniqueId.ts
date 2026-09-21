// @ts-nocheck
import * as React from 'react';
import { uniqueId } from 'lodash-es';

// Use specificId when you want to be able to predict the id return (eg, for e2e tests)
// If you pass specificId, you lose any guarantee of uniqueness (because you might pass the same specificId twice)
const useUniqueId = (prefix: string, specificId?: string) => {
  const [id] = React.useState(() =>
    specificId ? `${prefix}${specificId}` : uniqueId(prefix)
  );
  return id;
};

export default useUniqueId;
