import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';

import DescriptionContext from '../../context/DescriptionContext/DescriptionContext';
import TaskContext from '../../context/TaskContext/TaskContext';

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
    marginBottom: '1rem',
  },
}));

/**
 * Tasks.
 *
 * @param props - {@link IFeatureTasksProps}.
 */
const FeatureTasks: React.FC<IFeatureTasksProps> = (props: IFeatureTasksProps) => {
  const { t, i18n } = useTranslation();
  const classes = useStyles();

  const descriptionContext = useContext(DescriptionContext);
  const taskContext        = useContext(TaskContext);
  if (descriptionContext == null || taskContext == null) throw new Error('Context uninitialized');

  if (props.tasks.length === 0) return null;

  const taskList: Array<React.ReactElement> = [];
  for (let index = 0; index < props.tasks.length; ++index) {
    const nextTask = props.tasks[index];
    const feature = descriptionContext.getDescription(nextTask.description, i18n.language);
    if (feature == null) continue;

    taskList.push(
      <ListItem key={`tasks-${nextTask.id}`} className={classes.taskItem}>
        {feature != null && feature.data.map(block => Components(block))}
      </ListItem>
    );
  }

  return (
    <div className={classes.featureTasks}>
      <P className={classes.tasksHeading}>{`${t('task:heading')}:`}</P>
      <List>
        {taskList}
      </List>
    </div>
  );
};

export default FeatureTasks;
