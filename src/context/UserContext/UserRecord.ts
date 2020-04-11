export default class UserRecord {
  id:         number;

  forname:    string;
  lastname:   string;

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
