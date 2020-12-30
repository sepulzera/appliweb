type GeneralDescriptionData = {
  uid:       string;
  component: string;
};

export type DescriptionDataHeadline = {
  component: 'h',
  text:      string;
  variant:   string;
} & GeneralDescriptionData;

export type DescriptionDataParagraph = {
  component: 'p',
  text:      string;
} & GeneralDescriptionData;

export type DescriptionDataSpan = {
  component: 'span',
  text:      string;
} & GeneralDescriptionData;

export type DescriptionDataList = {
  component: 'ul',
  children:  Array<DescriptionDataListItem>;
} & GeneralDescriptionData;

export type DescriptionDataListItem = {
  component: 'li',
  text:      string;
} & GeneralDescriptionData;

export type DescriptionDataImage = {
  component: 'img',
  image:     string;
  alt?:      string;
} & GeneralDescriptionData;

export type AnyDescriptionData = DescriptionDataHeadline | DescriptionDataParagraph | DescriptionDataSpan | DescriptionDataList | DescriptionDataListItem | DescriptionDataImage;
export const isHeadline  = (dat: AnyDescriptionData): dat is DescriptionDataHeadline  => (dat as DescriptionDataHeadline).component  === 'h';
export const isImage     = (dat: AnyDescriptionData): dat is DescriptionDataImage     => (dat as DescriptionDataImage).component     === 'img';
export const isList      = (dat: AnyDescriptionData): dat is DescriptionDataList      => (dat as DescriptionDataList).component      === 'ul';
export const isListItem  = (dat: AnyDescriptionData): dat is DescriptionDataListItem  => (dat as DescriptionDataListItem).component  === 'li';
export const isParagraph = (dat: AnyDescriptionData): dat is DescriptionDataParagraph => (dat as DescriptionDataParagraph).component === 'p';
export const isSpan      = (dat: AnyDescriptionData): dat is DescriptionDataSpan      => (dat as DescriptionDataSpan).component === 'span';

/**
 * DescriptionRecord.
 */
export default class DescriptionRecord {
  id:       number;
  language: string;
  data:     Array<AnyDescriptionData>;

  constructor(
    id:       number,
    language: string,
    data:     Array<AnyDescriptionData>
  ) {
    this.id       = id;
    this.language = language;
    this.data     = data;
  }
}
