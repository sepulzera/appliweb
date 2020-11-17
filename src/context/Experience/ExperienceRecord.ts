export type ExperienceType = {
  id:          number;
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

  /** Title as i18n-identifier. */
  title:       string;
  feature:     number;

  constructor(
    id:          number,

    title:       string,
    feature:     number
  ) {
      this.id          = id;

      this.title       = title;

      this.feature     = feature;
  }
}
