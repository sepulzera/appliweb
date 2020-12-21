import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';

import DescriptionContext from '../../context/DescriptionContext/DescriptionContext';
import CareerRecord from '../../context/CareerContext/CareerRecord';

import Timeline from '../Timeline/Timeline';
import TimelineHeading from '../Timeline/TimelineHeading';
import TimelineRecords from '../Timeline/TimelineRecords';
import TimelineRecord from '../Timeline/TimelineRecord';

/**
 * {@link CareerTimeline} Props.
 */
interface ICareerTimelineProps extends WithTranslation {
  /** Careers to display. */
  careers: Array<CareerRecord>;
  /** Callback when clicking on a record. */
  onCareerClick: (car: CareerRecord) => void;
}

const useStyles = makeStyles({
  careerTimeline: {
    marginTop: '-0.6rem !important',
  },
});

function sortCareerByTimeDesc(a: CareerRecord, b: CareerRecord): number {
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
 * Career Timeline.
 *
 * @param props - {@link ICareerTimelineProps}.
 */
const CareerTimeline: React.FC<ICareerTimelineProps> = (props: ICareerTimelineProps) => {
  const { t } = useTranslation();
  const classes = useStyles();

  const descriptionContext = React.useContext(DescriptionContext);
  if (descriptionContext == null) throw new Error('Context uninitialized');

  const careersSorted = [...props.careers];
  careersSorted.sort(sortCareerByTimeDesc);

  const educationList: Array<React.ReactElement> = [];
  let index: number;
  for (index = 0; index < careersSorted.length; ++index) {
    const nextCareer = careersSorted[index];
    const feature = 'DUMMY: List of tasks'; // TODO Short descriptions of Tasks

    educationList.push(
      <TimelineRecord
          key     = {`timeline-record-career-${nextCareer.title}`}
          heading = {`${t(`career:${nextCareer.title}`)}`}
          place   = {t(`career:${nextCareer.place}`)}
          begin   = {nextCareer.begin}
          end     = {nextCareer.end}
          onClick = {() => props.onCareerClick(nextCareer)}>
        <>
          {feature}
        </>
      </TimelineRecord>
    );
  }

  return (
    <Timeline className={classes.careerTimeline}>
      <TimelineHeading>{t('career:heading')}</TimelineHeading>
      <TimelineRecords>
        {educationList}
      </TimelineRecords>
    </Timeline>
  );
};

export default withTranslation()(CareerTimeline);
