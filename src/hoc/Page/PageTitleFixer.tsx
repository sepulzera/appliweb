import React from 'react';

import { AnyComponent } from '../../types/Types';

/** {@link PageTitleFixer} Props. */
interface IPageTitleFixerProps {
  /** Page title. */
  title:       string;
  /** Page component to render. */
  component:   AnyComponent;
}

/**
 * HOC to properly set the browser title to assure accessibilty.
 */
export default class PageTitleFixer extends React.Component<IPageTitleFixerProps> {
  componentDidMount() {
    // ARIA: Titles should contain the application name and page title.
    document.title = (`${this.props.title} - Frank Hartung`);
  }

  render() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const PageComponent = this.props.component as any;

    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <PageComponent {...this.props} />
    );
  }
}
