import { useContext, useMemo } from 'react';
import { makeStyles } from 'tss-react/mui';
import { useTranslation } from 'react-i18next';

import DescriptionContext from '../../context/DescriptionContext/DescriptionContext';
import EducationRecord from '../../context/EducationContext/EducationRecord';

import Timeline from '../Timeline/Timeline';
import TimelineHeading from '../Timeline/TimelineHeading';
import TimelineRecords from '../Timeline/TimelineRecords';
import TimelineRecord from '../Timeline/TimelineRecord';
import Components from '../FeaturePage/ComponentRenderer';
import P from '../Ui/P';

/**
 * {@link EducationTimeline} Props.
 */
interface IEducationTimelineProps {
  /** Educations to display. */
  educations: Array<EducationRecord>;
}

const useStyles = makeStyles()(() => ({
  educationTimelineFinalGrade: {
    '&:first-letter': {
      textTransform: 'uppercase',
    },
  },
}));

function sortCareerByTimeDesc(a: EducationRecord, b: EducationRecord): number {
  const aEnd = a.end;
  const bEnd = b.end;
  if (aEnd == null && bEnd == null) {
    const aBeginTime = a.begin.getTime();
    const bBeginTime = b.begin.getTime();
    if (aBeginTime === bBeginTime) return 0;
    else if (aBeginTime < bBeginTime) return 1;
    else return -1;
  } else if (aEnd == null && bEnd != null) {
    return -1;
  } else if (aEnd != null && bEnd == null) {
    return 1;
  } else if (aEnd != null && bEnd != null) {
    const aEndTime = aEnd.getTime();
    const bEndTime = bEnd.getTime();
    if (aEndTime === bEndTime) {
      const aBeginTime = a.begin.getTime();
      const bBeginTime = b.begin.getTime();
      if (aBeginTime === bBeginTime) return 0;
      else if (aBeginTime < bBeginTime) return 1;
      else return -1;
    } else if (aEndTime < bEndTime) {
      return 1;
    } else {
      return -1;
    }
  }

  return 0;
}

/**
 * Education Timeline.
 *
 * @param props - {@link IEducationTimelineProps}.
 */
const EducationTimeline: React.FC<IEducationTimelineProps> = ({ educations, ...rest }: IEducationTimelineProps) => {
  const { t, i18n } = useTranslation();
  const { classes } = useStyles();

  const descriptionContext = useContext(DescriptionContext);
  if (descriptionContext == null) throw new Error('Context uninitialized');

  const educationsSorted = useMemo(() => {
    const res = [...educations];
    res.sort(sortCareerByTimeDesc);
    return res;
  }, [educations]);

  const educationList: Array<React.ReactElement> = educationsSorted.map(nextEducation => {
    const feature = descriptionContext.getDescription(nextEducation.short, i18n.language);

    return (
      <TimelineRecord
          key     = {`timeline-record-education-${nextEducation.title}`}
          heading = {`${t(`education:${nextEducation.title}`)}${nextEducation.profession != null ? `: ${t(`education:${nextEducation.profession}`)}` : ''}`}
          place   = {t(`education:${nextEducation.place}`)}
          begin   = {nextEducation.begin}
          end     = {nextEducation.end}
          to      = {`${process.env.PUBLIC_URL}/home?d=education&id=${nextEducation.id}`}>
        <>
          {feature?.data.map(block => Components(block))}
          <P className={classes.educationTimelineFinalGrade}>{`${t('education:final grade')}: ${nextEducation.grade}`}</P>
        </>
      </TimelineRecord>
    );
  });

  return (
    <Timeline {...rest}>
      <TimelineHeading>{t('education:heading')}</TimelineHeading>
      <TimelineRecords>
        {educationList}
      </TimelineRecords>
    </Timeline>
  );
};

export default EducationTimeline;
