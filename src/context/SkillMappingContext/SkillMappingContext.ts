import { createContext } from 'react';
import SkillMappingRecord from './SkillMappingRecord';

export interface ISkillMappingContext {
  data: Map<number, SkillMappingRecord>;
  getSkillMapping: (id: number) => SkillMappingRecord | undefined;
  getSkillMappingsByUser: (userId: number) => Array<SkillMappingRecord>;
  getSkillMappingsByUserAndType: (userId: number, type: string, typeId: number) => Array<SkillMappingRecord>;
  getSkillMappingsByUserAndSkill: (userId: number, skillId: number) => Array<SkillMappingRecord>;
}

const SkillMappingContext = createContext<ISkillMappingContext>({} as ISkillMappingContext);

export default SkillMappingContext;
