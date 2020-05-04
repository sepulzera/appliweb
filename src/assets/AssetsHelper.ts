// See: https://github.com/survivejs/webpack-book/issues/80
const assets = require.context('./', true);

/**
 * Helper.
 */
export default class AssetsHelper {
  /**
   * Returns the asset with the title.
   *
   * @param title - Title of the asset.
   *
   * @return The asset, probably an image.
   */
  static getAsset(title: string): any {
    return assets(`./${title}`);
  }
}
