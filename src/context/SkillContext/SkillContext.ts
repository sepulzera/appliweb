import { createContext } from 'react';
import SkillRecord from './SkillRecord';

export interface ISkillContext {
  data: Map<number, SkillRecord>;
  getSkill: (id: number) => SkillRecord | undefined;
}

const SkillContext = createContext<ISkillContext>({} as ISkillContext);

export default SkillContext;
