import React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';

import H from '../components/Ui/H';
import P from '../components/Ui/P';
import PageWithHeaderAndFooter from '../hoc/Page/PageWithHeaderAndFooter';

/**
 * {@link HomePage} Props.
 */
interface IErrorPageProps extends WithTranslation {
  /** Page title as i18n string. */
  title: string;
  /** Page message as i18n string. */
  message: string;
}

/**
 * Error Page.
 */
const ErrorPage: React.FC<IErrorPageProps> = (props: IErrorPageProps) => {
  const { t } = useTranslation();

  return (
    <PageWithHeaderAndFooter header={t(props.title)}>
      <H variant='h4' component='h2'>{t(props.title)}</H>
      <P>{t(props.message)}</P>
    </PageWithHeaderAndFooter>
  );
};

export default withTranslation()(ErrorPage);
