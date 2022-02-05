import DescriptionRecord, { AnyDescriptionData } from '../DescriptionContext/DescriptionRecord';

/**
 * FeatureRecord.
 */
export default class FeatureRecord extends DescriptionRecord {
  title:    string;
  image:    string;

  constructor(
    id:       number,
    language: string,

    title:    string,
    image:    string,

    data:     Array<AnyDescriptionData>
  ) {
    super(id, language, data);

    this.title    = title;
    this.image    = image;
  }
}
