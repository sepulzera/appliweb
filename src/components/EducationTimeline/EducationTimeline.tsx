import * as React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';

import EducationRecord from '../../context/EducationContext /EducationRecord';
import Timeline from '../Timeline/Timeline';
import TimelineHeading from '../Timeline/TimelineHeading';
import TimelineRecords from '../Timeline/TimelineRecords';
import TimelineRecord from '../Timeline/TimelineRecord';

/**
 * {@link EducationTimeline} Props.
 */
interface IEducationTimelineProps extends WithTranslation {
  /** Leisures to display. */
  educations: Array<EducationRecord>;
  onEducationClick: (edu: EducationRecord) => void;
}

/**
 * Education Timeline.
 *
 * @param props - {@link IEducationTimelineProps}.
 */
const EducationTimeline: React.FC<IEducationTimelineProps> = (props: IEducationTimelineProps) => {
  const { t } = useTranslation();

  const educationList: Array<React.ReactElement> = [];
  let index: number, nextEducation: EducationRecord;
  for (index = 0; index < props.educations.length; ++index) {
    nextEducation = props.educations[index];
    educationList.push(
      <TimelineRecord
          key     = {`timeline-record-education-${nextEducation.title}`}
          heading = {`${t(`education:${nextEducation.title}`)}${nextEducation.profession != null ? `: ${t(`education:${nextEducation.profession}`)}` : ''}`}
          place   = {t(`education:${nextEducation.place}`)}
          begin   = {nextEducation.begin}
          end     = {nextEducation.end}>
        <div>
          TODO Education Timeline Record
        </div>
      </TimelineRecord>
    );
  }

  return (
    <Timeline>
      <TimelineHeading>{t('education:timeline')}</TimelineHeading>
      <TimelineRecords>
        {educationList}
      </TimelineRecords>
    </Timeline>
  );
};

export default withTranslation()(EducationTimeline);
