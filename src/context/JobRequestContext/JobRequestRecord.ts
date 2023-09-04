/**
 * JobRequest.
 */
export default class JobRequestRecord {
  /** ID. */
  id:     number;

  /** User. */
  userId: number;

  /** State of the jobrequest (0=uninterested, 1=open, 2=looking). */
  requestState: number;
  /** Salary level. */
  salary: string | undefined;
  /** Job title as i18n-identifier. */
  job:    string | undefined;
  /** Job location as i18n-identifier */
  city:   string | undefined;

  constructor(
    id:     number,

    userId: number,

    requestState: number,
    salary: string | undefined,
    job:    string | undefined,
    city:   string | undefined
  ) {
      this.id     = id;

      this.userId = userId;

      this.requestState = requestState;
      this.salary = salary;
      this.job    = job;
      this.city   = city;
  }
}
