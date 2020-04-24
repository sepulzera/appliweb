import React from 'react';

/** {@link PageTitleFixer} Props. */
interface IPageTitleFixerProps {
  /** Page title. */
  title:       string;
  /** Page component to render. */
  component:   React.ReactNode;
}

/**
 * HOC to properly set the browser title to assure accessibilty.
 */
export default class PageTitleFixer extends React.Component<IPageTitleFixerProps> {
  componentDidMount() {
    // ARIA: Titles should contain the application name and page title.
    document.title = (`Frank Hartung - ${this.props.title}`);
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
