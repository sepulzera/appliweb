import ExperienceRecord from '../Experience/ExperienceRecord';

/**
 * TaskRecord.
 */
export default class TaskRecord extends ExperienceRecord {
  /** ID of the description. */
  description: number;
  /** ID of the career-record. */
  careerId:    number;

  constructor(
    id:          number,
    userId:      number,
    title:       string,
    feature:     number,

    description: number,
    careerId:    number
  ) {
    super(id, userId, title, feature);

    this.description = description;
    this.careerId    = careerId;
  }
}
