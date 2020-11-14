type GeneralFeaturePageData = {
  uid:       string;
  component: string;
};

export type FeaturePageDataHeadline = {
  component: 'h',
  text:      string;
  variant:   string;
} & GeneralFeaturePageData;

export type FeaturePageDataParagraph = {
  component: 'p',
  text:      string;
} & GeneralFeaturePageData;

export type FeaturePageDataList = {
  component: 'ul',
  children:  Array<FeaturePageDataListItem>;
} & GeneralFeaturePageData;

export type FeaturePageDataListItem = {
  component: 'li',
  text:      string;
} & GeneralFeaturePageData;

export type FeaturePageDataImage = {
  component: 'img',
  image:     string;
  alt?:      string;
} & GeneralFeaturePageData;

export type AnyFeaturePageData = FeaturePageDataHeadline | FeaturePageDataParagraph | FeaturePageDataList | FeaturePageDataListItem | FeaturePageDataImage;
export const isHeadline  = (dat: AnyFeaturePageData): dat is FeaturePageDataHeadline  => (dat as FeaturePageDataHeadline).component  === 'h';
export const isImage     = (dat: AnyFeaturePageData): dat is FeaturePageDataImage     => (dat as FeaturePageDataImage).component     === 'img';
export const isList      = (dat: AnyFeaturePageData): dat is FeaturePageDataList      => (dat as FeaturePageDataList).component      === 'ul';
export const isListItem  = (dat: AnyFeaturePageData): dat is FeaturePageDataListItem  => (dat as FeaturePageDataListItem).component  === 'li';
export const isParagraph = (dat: AnyFeaturePageData): dat is FeaturePageDataParagraph => (dat as FeaturePageDataParagraph).component === 'p';

/**
 * FeatureRecord.
 */
export default class FeatureRecord {
  id:       number;
  language: string;

  title:    string;
  image:    string;
  data:     Array<AnyFeaturePageData>;

  constructor(
    id:       number,
    language: string,

    title:    string,
    image:    string,
    data:     Array<AnyFeaturePageData>
  ) {
    this.id       = id;
    this.language = language;

    this.title    = title;
    this.image    = image;

    this.data     = data;
  }
}
