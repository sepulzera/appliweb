import * as React from 'react';

export type AnyComponent = React.ReactNode | React.ReactElement | Array<AnyComponent> | string | number
  | boolean | null;
