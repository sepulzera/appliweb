import { makeStyles } from 'tss-react/mui';

import Components from './ComponentRenderer';
import { AnyDescriptionData } from '../../context/DescriptionContext/DescriptionRecord';

/**
 * {@link FeatureData} Props.
 */
export interface IFeatureDataProps {
  data: Array<AnyDescriptionData>;
}

const useStyles = makeStyles()((theme => ({
  featureData: {
    paddingLeft:  theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
})));

/**
 * Renders the feature page data (main content).
 *
 * @param props - {@link IFeatureDataProps}.
 */
const FeatureData: React.FC<IFeatureDataProps> = ({ data, ...rest }: IFeatureDataProps) => {
  const { classes } = useStyles();

  return (
    <div className={classes.featureData} {...rest}>
      {data.map(block => Components(block))}
    </div>
  );
};

export default FeatureData;
