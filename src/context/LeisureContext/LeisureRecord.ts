/**
 * LeisureRecord.
 */
export default class LeisureRecord {
  /** ID. */
  id:          number;

  /** User. */
  userId:      number;

  /** Title as i18n-identifier. */
  title:       string;

  /** FeaturePage. */
  feature:     any;

  constructor(
    id:          number,

    userId:      number,

    title:       string,

    feature:     any
  ) {
      this.id          = id;

      this.userId      = userId;

      this.title       = title;

      this.feature     = feature;
  }
}
