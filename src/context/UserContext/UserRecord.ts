/**
 * User.
 */
export default class UserRecord {
  /** ID. */
  id:         number;

  /** First name. */
  forname:    string;
  /** Last name. */
  lastname:   string;

  /** Current job title. */
  jobtitle:   string;

  constructor(
    id:         number,

    forname:    string,
    lastname:   string,

    jobtitle:   string
  ) {
      this.id         = id;

      this.forname    = forname;
      this.lastname   = lastname;

      this.jobtitle   = jobtitle;
  }
}
