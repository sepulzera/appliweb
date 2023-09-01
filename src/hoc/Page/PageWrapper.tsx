import { useEffect } from 'react';

import { AnyComponent } from '../../types/Types';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

/** {@link PageTitleFixer} Props. */
interface IPageWrapperProps {
  /** Page title. */
  title:    string;
  /** Page component to render. */
  children: AnyComponent;
}

/**
 * HOC to properly set the browser title to assure accessibilty.
 */
 const PageWrapper: React.FC<IPageWrapperProps> = ({ title, children }: IPageWrapperProps) => {
  useEffect(() => {
    // ARIA: Titles should contain the application name and page title.
    document.title = (`${title ? `${title} - ` : ''}Frank Hartung`);
  }, [title]);

  return (
    <ErrorBoundary verbose printStack>
      {children}
    </ErrorBoundary>
  );
};

export default PageWrapper;
