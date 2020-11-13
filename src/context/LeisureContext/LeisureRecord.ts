import ExperienceRecord, { FeaturePageData } from '../Experience/ExperienceRecord';

/**
 * LeisureRecord.
 */
export default class LeisureRecord extends ExperienceRecord {
  /** User. */
  userId:      number;

  constructor(
    id:          number,
    userId:      number,

    title:       string,
    image:       string,
    feature:     Array<FeaturePageData>
  ) {
    super(id, title, feature, image);

    this.userId      = userId;
  }
}
