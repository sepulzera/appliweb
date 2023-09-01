import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { makeStyles } from 'tss-react/mui';

import DescriptionContext from '../../context/DescriptionContext/DescriptionContext';
import ListItem from '../Ui/ListItem';
import P from '../Ui/P';
import TaskRecord from '../../context/TaskContext/TaskRecord';
import List from '../Ui/List';
import Components from './ComponentRenderer';

/**
 * {@link FeatureTasks} Props.
 */
interface IFeatureTasksProps {
  /** Tasks to display. */
  tasks: Array<TaskRecord>;
}

const useStyles = makeStyles()((theme => ({
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
    marginBottom: '1rem',
  },
})));

/**
 * Tasks.
 *
 * @param props - {@link IFeatureTasksProps}.
 */
const FeatureTasks: React.FC<IFeatureTasksProps> = ({ tasks, ...rest }: IFeatureTasksProps) => {
  const { t, i18n } = useTranslation();
  const { classes } = useStyles();

  const descriptionContext = useContext(DescriptionContext);

  if (tasks.length === 0) return null;

  const taskList: Array<React.ReactElement> = [];
  for (let index = 0; index < tasks.length; ++index) {
    const nextTask = tasks[index];
    const feature = descriptionContext.getDescription(nextTask.description, i18n.language);
    if (feature == null) continue;

    taskList.push(
      <ListItem key={`tasks-${nextTask.id}`} className={classes.taskItem}>
        {feature != null && feature.data.map(block => Components(block))}
      </ListItem>
    );
  }

  return (
    <div className={classes.featureTasks} {...rest}>
      <P className={classes.tasksHeading}>{`${t('task:heading')}:`}</P>
      <List>
        {taskList}
      </List>
    </div>
  );
};

export default FeatureTasks;
