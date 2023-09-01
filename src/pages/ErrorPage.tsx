import { useTranslation } from 'react-i18next';

import H from '../components/Ui/H';
import P from '../components/Ui/P';
import PageWrapper from '../hoc/Page/PageWrapper';
import PageWithHeaderAndFooter from '../hoc/Page/PageWithHeaderAndFooter';

/**
 * {@link HomePage} Props.
 */
interface IErrorPageProps {
  /** Page title as i18n string. */
  title: string;
  /** Page message as i18n string. */
  message: string;
}

/**
 * Error Page.
 */
const ErrorPage: React.FC<IErrorPageProps> = ({ title, message }: IErrorPageProps) => {
  const { t } = useTranslation();

  return (
    <PageWrapper title=''>
      <PageWithHeaderAndFooter header={t(title)}>
        <H variant='h4' component='h2'>{t(title)}</H>
        <P>{t(message)}</P>
      </PageWithHeaderAndFooter>
    </PageWrapper>
  );
};

export default ErrorPage;
