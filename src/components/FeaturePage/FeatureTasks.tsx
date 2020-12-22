import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';

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
  /** Callback when clicking on a task. */
  onTaskClick: (skill: TaskRecord) => void;
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
      <Button onClick={() => props.onTaskClick(task)}>
        <P className={classes.taskItem}>{t(`task:${task.title}`)}</P>
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
