/**
 * Skill.
 */
export default class SkillRecord {
  /** ID. */
  id:     number;

  /** Skill title as i18n-identifier. */
  title:    string;
  /** Skill category as i18n-identifier. */
  category: string;
  /** Whether the skill should be displayed on the main page. */
  featured: boolean;
  /** How developed this skill is. */
  rating: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

  constructor(
    id: number,

    title:    string,
    category: string,
    featured: boolean,
    rating:   0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  ) {
      this.id = id;

      this.title    = title;
      this.category = category;
      this.featured = featured;
      this.rating   = rating;
  }
}
