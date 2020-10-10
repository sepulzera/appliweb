import * as React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';

import Dialog from '../Ui/Dialog';
import { AnyComponent } from '../../types/Types';
import Image from '../Ui/Image';
import SkillRecord from '../../context/SkillContext/SkillRecord';
import FeatureSkills from './FeatureSkills';

/**
 * {@link List} Props.
 */
export interface IFeaturePageProps {
  /** Title/Heading. */
  title: string;
  /** Feature image. */
  image: string;
  /** Skills this feature learned. */
  skills: Array<SkillRecord>;
  /** Is dialog open? */
  isOpen: boolean;
  /** Callback for click. */
  onClose?: () => void;
  /** Featured content. */
  children:   AnyComponent;
}
type IProps = IFeaturePageProps & WithTranslation;

/**
 * Renders a feature page.
 *
 * @param props - {@link IFeaturePageProps}.
 */
const FeaturePage: React.FC<IProps> = (props: IProps) => {
  const { t } = useTranslation();

  const { title, isOpen, onClose } = props;

  return (
    <Dialog title={t(title)} isOpen={isOpen} onClose={onClose}>
      <div>
        <Image src={props.image} />
        {}
      </div>
      <div>
        <FeatureSkills skills={props.skills} />
        {props.children}
      </div>
    </Dialog>
  );
};

export default withTranslation()(FeaturePage);
