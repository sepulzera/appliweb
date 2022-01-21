import { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

import DescriptionContext from '../../context/DescriptionContext/DescriptionContext';
import CareerRecord from '../../context/CareerContext/CareerRecord';

import Timeline from '../Timeline/Timeline';
import TimelineHeading from '../Timeline/TimelineHeading';
import TimelineRecords from '../Timeline/TimelineRecords';
import TimelineRecord from '../Timeline/TimelineRecord';
import Components from '../FeaturePage/ComponentRenderer';

/**
 * {@link CareerTimeline} Props.
 */
interface ICareerTimelineProps {
  /** Careers to display. */
  careers: Array<CareerRecord>;
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
  const { t, i18n } = useTranslation('career');
  const classes = useStyles();

  const descriptionContext = useContext(DescriptionContext);
  if (descriptionContext == null) throw new Error('Context uninitialized');

  const careerList: Array<React.ReactElement> = [];
  let index: number;
  for (index = 0; index < props.careers.length; ++index) {
    const nextCareer = props.careers[index];
    const feature = descriptionContext.getDescription(nextCareer.short, i18n.language);

    careerList.push(
      <TimelineRecord
          key     = {`timeline-record-career-${nextCareer.title}`}
          heading = {t(`career:${nextCareer.title}`)}
          place   = {t(`career:${nextCareer.place}`)}
          begin   = {nextCareer.begin}
          end     = {nextCareer.end}
          to      = {`${process.env.PUBLIC_URL}/home?d=career&id=${nextCareer.id}`}>
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

export default CareerTimeline;
