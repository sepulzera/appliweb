import * as React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';

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
interface IFeatureTasksProps extends WithTranslation {
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
 * Tasks.
 *
 * @param props - {@link IFeatureTasksProps}.
 */
const FeatureTasks: React.FC<IFeatureTasksProps> = (props: IFeatureTasksProps) => {
  const { t, i18n } = useTranslation();
  const classes = useStyles();

  const descriptionContext = React.useContext(DescriptionContext);
  const taskContext        = React.useContext(TaskContext);
  if (descriptionContext == null || taskContext == null) throw new Error('Context uninitialized');

  if (props.tasks.length === 0) return null;

  const taskList = [];
  for (let index = 0; index < props.tasks.length; ++index) {
    const nextTask = props.tasks[index];
    const feature = descriptionContext.getDescription(nextTask.description, i18n.language);
    if (feature == null) continue;

    taskList.push(
      <ListItem key={`tasks-${nextTask.id}`}>
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

export default withTranslation()(FeatureTasks);
