export type FeaturePageData = {
  uid:       string;
  component: string;
  text?:     string;
  props:     Array<any>;
  children?: Array<FeaturePageData>;
}

/**
 * FeatureRecord.
 */
export default class FeatureRecord {
  id:       number;
  language: string;

  title:    string;
  image:    string;
  data:     Array<FeaturePageData>;

  constructor(
    id:       number,
    language: string,

    title:    string,
    image:    string,
    data:     Array<FeaturePageData>
  ) {
    this.id       = id;
    this.language = language;

    this.title    = title;
    this.image    = image;

    this.data     = data;
  }
}
