import ExperienceRecord from '../Experience/ExperienceRecord';

/**
 * LeisureRecord.
 */
export default class LeisureRecord extends ExperienceRecord {
  /** User. */
  userId:      number;

  constructor(
    id:          number,
    title:       string,
    feature:     number,

    userId:      number
  ) {
    super(id, title, feature);

    this.userId = userId;
  }
}
