import ExperienceRecord from '../Experience/ExperienceRecord';

/**
 * CareerRecord.
 */
export default class CareerRecord extends ExperienceRecord {
  /** Name of the university/school as i18n-identifier. */
  place:       string;
  /** When the career started as epoch-seconds. */
  begin:       Date;
  /** When the career ended as epoch-seconds. */
  end:         Date | undefined;

  /** ID to DescriptionData. */
  description: number;

  constructor(
    id:          number,
    userId:      number,
    title:       string,
    feature:     number,

    place:       string,
    begin:       number,
    end:         number | undefined,

    description: number
  ) {
    super(id, userId, title, feature);

    this.place       = place;
    this.begin       = new Date(begin * 1000);
    this.end         = end != null ? new Date(end * 1000) : undefined;

    this.description = description;
  }
}
