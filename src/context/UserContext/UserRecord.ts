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
  /** Title of the avatar image, stored in assets. */
  avatar:     string;

  /** Current job title as i18n-identifier. */
  jobtitle:   string;

  constructor(
    id:         number,

    forname:    string,
    lastname:   string,
    avatar:     string,

    jobtitle:   string
  ) {
      this.id         = id;

      this.forname    = forname;
      this.lastname   = lastname;
      this.avatar     = avatar;

      this.jobtitle   = jobtitle;
  }
}
