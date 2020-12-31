import React from 'react';

import { AnyComponent } from '../../types/Types';

/** {@link PageTitleFixer} Props. */
interface IPageTitleFixerProps {
  /** Page title. */
  title:    string;
  /** Page component to render. */
  children: AnyComponent;
}

/**
 * HOC to properly set the browser title to assure accessibilty.
 */
export default class PageTitleFixer extends React.Component<IPageTitleFixerProps> {
  componentDidMount() {
    // ARIA: Titles should contain the application name and page title.
    document.title = (`${this.props.title != null && this.props.title.length > 0 ? `${this.props.title} - ` : ''}Frank Hartung`);
  }

  render() {
    return this.props.children;
  }
}
