import React from 'react';

import NotFound from '../../components/Page/NotFound';
import Page from '../../components/Page/Page';

/**
 * Page that is rendered for invalid url paths.
 *
 * See also: {@link NotFound}
 */
const NotFoundPage = () => (
  <Page title='missing' component={NotFound} />
);

export default NotFoundPage;
