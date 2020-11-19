import * as React from 'react';

// import { AnyComponent } from '../../types/Types';

/** {@link Timeline} Props. */
export interface ITimelineProps {
  /** Heading text. */
  children:   any;
}

/**
 * Renders a heading (h1 .. h6).
 *
 * @param props - {@link ITimelineProps}.
 */
const Timeline: React.FC<ITimelineProps> = (props: ITimelineProps) => (
  <div>
    {props.children}
  </div>
);

export default Timeline;
