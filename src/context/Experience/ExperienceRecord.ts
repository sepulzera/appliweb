export type FeaturePageData = {
  uid:       string;
  component: string;
  props:     Array<any>;
}

export type ExperienceType = {
  id:          number;
  title:       string;
  description: string;
  feature:     Array<FeaturePageData>;
}

/**
 * Base class for leisures, education, career and task.
 */
export default class ExperienceRecord {
  /** ID. */
  id:          number;

  /** Title as i18n-identifier. */
  title:       string;
  /** FeaturePage. */
  feature:     Array<FeaturePageData>;
  /** FeaturePage. */
  image:       string;

  constructor(
    id:          number,

    title:       string,
    feature:     Array<FeaturePageData>,
    image:       string
  ) {
      this.id          = id;

      this.title       = title;
      this.feature     = feature;
      this.image       = image;
  }
}
