import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';

import DescriptionContext from '../../context/DescriptionContext/DescriptionContext';
import EducationRecord from '../../context/EducationContext /EducationRecord';

import Timeline from '../Timeline/Timeline';
import TimelineHeading from '../Timeline/TimelineHeading';
import TimelineRecords from '../Timeline/TimelineRecords';
import TimelineRecord from '../Timeline/TimelineRecord';
import Components from '../FeaturePage/ComponentRenderer';
import P from '../Ui/P';

/**
 * {@link EducationTimeline} Props.
 */
interface IEducationTimelineProps extends WithTranslation {
  /** Leisures to display. */
  educations: Array<EducationRecord>;
  onEducationClick: (edu: EducationRecord) => void;
}

const useStyles = makeStyles({
  educationTimelineFinalGrade: {
    '&:first-letter': {
      textTransform: 'uppercase',
    },
  },
});

/**
 * Education Timeline.
 *
 * @param props - {@link IEducationTimelineProps}.
 */
const EducationTimeline: React.FC<IEducationTimelineProps> = (props: IEducationTimelineProps) => {
  const { t, i18n } = useTranslation();
  const classes = useStyles();

  const descriptionContext = React.useContext(DescriptionContext);
  if (descriptionContext == null) throw new Error('Context unitialized');

  const educationList: Array<React.ReactElement> = [];
  let index: number, nextEducation: EducationRecord;
  for (index = 0; index < props.educations.length; ++index) {
    nextEducation = props.educations[index];
    const feature = descriptionContext.getDescription(nextEducation.short, i18n.language);

    educationList.push(
      <TimelineRecord
          key     = {`timeline-record-education-${nextEducation.title}`}
          heading = {`${t(`education:${nextEducation.title}`)}${nextEducation.profession != null ? `: ${t(`education:${nextEducation.profession}`)}` : ''}`}
          place   = {t(`education:${nextEducation.place}`)}
          begin   = {nextEducation.begin}
          end     = {nextEducation.end}>
        <>
          {feature != null && feature.data.map(block => Components(block))}
          <P className={classes.educationTimelineFinalGrade}>{`${t('education:final grade')}: ${nextEducation.grade}`}</P>
        </>
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
