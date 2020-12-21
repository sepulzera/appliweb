import ExperienceRecord from '../Experience/ExperienceRecord';

/**
 * EducationRecord.
 */
export default class EducationRecord extends ExperienceRecord {
  /** Name of the university/school as i18n-identifier. */
  place:       string;
  /** When the education started as epoch-seconds. */
  begin:       Date;
  /** When the education ended as epoch-seconds. */
  end:         Date | undefined;
  /** Degree of the education as i18n-identifier. */
  degree:      string;
  /** Profession of the education as i18n-identifier. */
  profession:  string | undefined;
  /** Feature-ID to the short-description that is displayed on the main page.  */
  short:       number;
  /** Grade of the education. */
  grade:       string;

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
    degree:      string,
    profession:  string | undefined,
    short:       number,
    grade:       string,

    description: number
  ) {
    super(id, userId, title, feature);

    this.place       = place;
    this.begin       = new Date(begin * 1000);
    this.end         = end != null ? new Date(end * 1000) : undefined;
    this.degree      = degree;
    this.profession  = profession;
    this.short       = short;
    this.grade       = grade;

    this.description = description;
  }
}
