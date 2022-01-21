// See: https://github.com/survivejs/webpack-book/issues/80
const assets = require.context('./', true);

/**
 * Assets Helper.
 */
export default class AssetsHelper {
  /**
   * Returns the asset with the title.
   *
   * @param title - Title of the asset.
   *
   * @return The asset, probably an image.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static getAsset(title: string): any {
    return assets(`./${title}`);
  }
}
