import EducationRecord from '../context/EducationContext/EducationRecord';

/**
 * Helper.
 */
export default class Helper {
  /**
   * Returns the array with unique items, compared by the key property.
   *
   * __See also:__ https://reactgo.com/removeduplicateobjects/
   *
   * @return The array with unique items only.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static getUnique(arr: Array<any>, key: string): Array<any> {
    // store the comparison  values in array
    const unique = arr.map(e => e[key])
        // store the indexes of the unique objects
        .map((e, i, final) => final.indexOf(e) === i && i)
        // eliminate the false indexes & return unique objects
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .filter((e: number) => arr[e]).map(e => arr[e]);

    return unique;
  }

  static getHighestEducation(educations: Array<EducationRecord> | undefined): EducationRecord | undefined {
    if (educations == null) return undefined;

    let index = educations.findIndex(edu => edu.title === 'master graduation');
    if (index >= 0) return educations[index];

    index = educations.findIndex(edu => edu.title === 'bachelor graduation');
    if (index >= 0) return educations[index];

    index = educations.findIndex(edu => edu.title === 'A-level');
    if (index >= 0) return educations[index];

    index = educations.findIndex(edu => edu.title === 'B-level');
    if (index >= 0) return educations[index];

    return undefined;
  }

  /**
   * Parse the input string to a number.
   *
   * Returns ifNull, if the string is undefined or null, or if the string is not a number.
   *
   * @param str String to parse to a number.
   * @param ifNull Returned if str is undefined, null or not a number.
   *
   * @return str or ifNull, if str is undefined, null or not a number.
   */
  static parseInt(str: string | undefined | null, ifNull: number) {
    if (str == null) return ifNull;

    try {
      const num = Number.parseInt(str);
      return num;
    } catch (e) {
      return ifNull;
    }
  }

  static upperFirst(str: string) {
    if (str.length === 0) return '';
    else if (str.length === 1) return str.toUpperCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
