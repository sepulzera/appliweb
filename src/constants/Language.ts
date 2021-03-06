export const SupportedLanguages: Array<string> = [
  'de',
  'en-US',
];

/**
 * Language Helper.
 */
export default class LanguageHelper {
  /**
   * Converts the language code to human readable name.
   *
   * @param lang - Language code - see {@link SupportedLanguages}.
   *
   * @return Localized name for the language code, i. e. de-DE -> Deutsch.
   */
  static languageToDisplayText(lang: string): string {
    switch (lang) {
      case 'de': return 'Deutsch';
      case 'en-US': return 'English';
      default:   return '';
    }
  }
}
