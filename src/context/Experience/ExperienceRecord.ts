export type ExperienceType = {
  id:          number;
  userId:      number;
  title:       string;
  description: string;
  feature:     number;
}

/**
 * Base class for leisures, education, career and task.
 */
export default class ExperienceRecord {
  /** ID. */
  id:          number;
  /** ID to User. */
  userId:      number;

  /** Title as i18n-identifier. */
  title:       string;
  /** ID to FeatureData. */
  feature:     number;

  constructor(
    id:          number,
    userId:      number,

    title:       string,
    feature:     number
  ) {
      this.id          = id;
      this.userId      = userId;

      this.title       = title;
      this.feature     = feature;
  }
}
