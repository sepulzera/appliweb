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
}
