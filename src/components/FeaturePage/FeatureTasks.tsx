import * as React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';

import ListItem from '../Ui/ListItem';
import P from '../Ui/P';
import Button from '../Ui/Button';
import TaskRecord from '../../context/TaskContext/TaskRecord';
import List from '../Ui/List';

/**
 * {@link FeatureSkills} Props.
 */
interface IFeatureSkillsProps extends WithTranslation {
  /** Tasks to display. */
  tasks: Array<TaskRecord>;
}

const useStyles = makeStyles(theme => ({
  featureTasks: {
    paddingLeft:  theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  tasksHeading: {
    marginTop: '1rem !important',
    '&:first-letter': {
      textTransform: 'uppercase',
    },
  },
  taskItem: {
    margin: 0,
    textAlign: 'start',
  },
}));

/**
 * Skills.
 *
 * @param props - {@link IFeatureSkillsProps}.
 */
const FeatureSkills: React.FC<IFeatureSkillsProps> = (props: IFeatureSkillsProps) => {
  const { t } = useTranslation();
  const classes = useStyles();

  const taskList = props.tasks.map(task => (
    <ListItem key={`tasks-${task.id}`}>
      <Button component={Link} to={`/home?d=task&id=${task.id}`}>
        {t(`task:${task.title}`)}
      </Button>
    </ListItem>
  ));

  return (
    <div className={classes.featureTasks}>
      <P className={classes.tasksHeading}>{`${t('task:heading')}:`}</P>
      <List>
        {taskList}
      </List>
    </div>
  );
};

export default withTranslation()(FeatureSkills);
