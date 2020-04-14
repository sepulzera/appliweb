import React from 'react';

/** {@link Page} Props. */
interface IPageProps {
  /** Page title. */
  title:       string;
  /** Page component to render. */
  component:   any;
}

/*
 * Wrapper component for single pages.
 *
 * @author Frank Hartung
 */
export default class Page extends React.Component<IPageProps> {
  componentDidMount() {
    // ARIA: Titles should contain the application name and page title.
    document.title = (`Frank Hartung - ${this.props.title}`);
  }

  render() {
    const PageComponent = this.props.component;

    return (
      <PageComponent {...this.props} />
    );
  }
}
