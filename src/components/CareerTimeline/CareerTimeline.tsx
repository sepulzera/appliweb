import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';

import DescriptionContext from '../../context/DescriptionContext/DescriptionContext';
import CareerRecord from '../../context/CareerContext/CareerRecord';

import Timeline from '../Timeline/Timeline';
import TimelineHeading from '../Timeline/TimelineHeading';
import TimelineRecords from '../Timeline/TimelineRecords';
import TimelineRecord from '../Timeline/TimelineRecord';
import Components from '../FeaturePage/ComponentRenderer';
import TaskContext from '../../context/TaskContext/TaskContext';

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

/**
 * Career Timeline.
 *
 * @param props - {@link ICareerTimelineProps}.
 */
const CareerTimeline: React.FC<ICareerTimelineProps> = (props: ICareerTimelineProps) => {
  const { t, i18n } = useTranslation();
  const classes = useStyles();

  const descriptionContext = React.useContext(DescriptionContext);
  const taskContext        = React.useContext(TaskContext);
  if (descriptionContext == null || taskContext == null) throw new Error('Context uninitialized');

  const careerList: Array<React.ReactElement> = [];
  let index: number;
  for (index = 0; index < props.careers.length; ++index) {
    const nextCareer = props.careers[index];
    const feature = descriptionContext.getDescription(nextCareer.short, i18n.language);

    careerList.push(
      <TimelineRecord
          key     = {`timeline-record-career-${nextCareer.title}`}
          heading = {`${t(`career:${nextCareer.title}`)}`}
          place   = {t(`career:${nextCareer.place}`)}
          begin   = {nextCareer.begin}
          end     = {nextCareer.end}
          onClick = {() => props.onCareerClick(nextCareer)}>
        {feature != null && feature.data.map(block => Components(block))}
      </TimelineRecord>
    );
  }

  return (
    <Timeline className={classes.careerTimeline}>
      <TimelineHeading>{t('career:heading')}</TimelineHeading>
      <TimelineRecords>
        {careerList}
      </TimelineRecords>
    </Timeline>
  );
};

export default withTranslation()(CareerTimeline);