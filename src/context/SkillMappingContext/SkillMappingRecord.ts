/**
 * SkillMapping.
 */
export default class SkillMappingRecord {
  /** ID. */
  id:      number;

  /** User. */
  userId:  number;

  /** Leisure/Education/CareerTask ... */
  type:    'leisure' | 'education' | 'career';
  /** ID of the type record. */
  typeId:  number;

  /** ID of the skill record. */
  skillId: number;

  constructor(
    id:      number,

    userId:  number,

    type:    'leisure' | 'education' | 'career',
    typeId:  number,

    skillId: number
  ) {
      this.id      = id;

      this.userId  = userId;

      this.type    = type;
      this.typeId  = typeId;

      this.skillId = skillId;
  }
}
