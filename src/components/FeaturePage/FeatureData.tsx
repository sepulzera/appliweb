import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Components from './ComponentRenderer';
import { AnyFeaturePageData } from '../../context/FeatureContext/FeatureRecord';

/**
 * {@link List} Props.
 */
export interface IFeatureDataProps {
  data: Array<AnyFeaturePageData>;
}

const useStyles = makeStyles(theme => ({
  featureData: {
    paddingLeft:  theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
}));

/**
 * Renders the feature page data (main content).
 *
 * @param props - {@link IFeatureDataProps}.
 */
const FeatureData: React.FC<IFeatureDataProps> = (props: IFeatureDataProps) => {
  const classes = useStyles();

  return (
    <div className={classes.featureData}>
      {props.data.map(block => Components(block))}
    </div>
  );
};

export default FeatureData;
