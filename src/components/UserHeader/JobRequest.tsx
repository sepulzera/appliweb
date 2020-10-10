import * as React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';

import JobRequestRecord from '../../context/JobRequestContext/JobRequestRecord';

import ResponsiveList from '../Ui/ResponsiveList';
import ListItem from '../Ui/ListItem';

/**
 * {@link JobRequest} Props.
 */
interface IJobRequestProps extends WithTranslation {
  /** Jobrequest to display. */
  jobRequest: JobRequestRecord;
  asRow:      boolean;
}

/**
 * Jobrequest displayed in the {@link UserHeader}.
 *
 * @param props - {@link IJobRequestProps}.
 */
const JobRequest: React.FC<IJobRequestProps> = (props: IJobRequestProps) => {
  const { t } = useTranslation();

  const salaryToString = (salary: number): string => `> ${salary.toString()}`;

  const jobRequestToString = (requestState: number): string => {
    switch (requestState) {
      case 1:  return 'state open';
      case 2:  return 'state looking';
      default: return 'state not interested';
    }
  };

  const { requestState, city, salary } = props.jobRequest;
  if (requestState == null && city == null && salary == null) return null;

  return (
    <ResponsiveList
        title = {t('job:job request')}
        asRow = {props.asRow}
        stretchList>
      {requestState != null && (
        <ListItem>{t(`job:${jobRequestToString(props.jobRequest.requestState)}`)}</ListItem>
      )}
      {city != null && (
        <ListItem>{t(`city:${props.jobRequest.city}`)}</ListItem>
      )}
      {salary != null && (
        <ListItem>{`${salaryToString(salary)} €`}</ListItem>
      )}
    </ResponsiveList>
  );
};

export default withTranslation()(JobRequest);
