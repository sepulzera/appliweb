export type FeaturePageData = {
  uid:      string;
  component: string;
  props:     Array<any>;
}

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
  feature:     Array<FeaturePageData>;
  /** FeaturePage. */
  image:       string;

  constructor(
    id:          number,

    userId:      number,

    title:       string,
    feature:     Array<FeaturePageData>,
    image:       string
  ) {
      this.id          = id;

      this.userId      = userId;

      this.title       = title;
      this.feature     = feature;
      this.image       = image;
  }
}
