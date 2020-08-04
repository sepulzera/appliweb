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

  /** Current job title as i18n-identifier. */
  jobtitle:   string;
  /** Title of the avatar image, stored in assets. */
  avatar:     string;

  constructor(
    id:         number,

    forname:    string,
    lastname:   string,

    jobtitle:   string,
    avatar:     string
  ) {
      this.id         = id;

      this.forname    = forname;
      this.lastname   = lastname;

      this.jobtitle   = jobtitle;
      this.avatar     = avatar;
  }
}
