import React from 'react';
import SkillMappingRecord from './SkillMappingRecord';

interface ISkillMappingContextProvider {
  data: Map<number, SkillMappingRecord>;
  getSkillMapping: (id: number) => SkillMappingRecord | undefined;
  getSkillMappingsByUser: (userId: number) => Array<SkillMappingRecord>;
  getSkillMappingsByUserAndType: (userId: number, type: string, typeId: number) => Array<SkillMappingRecord>;
  getSkillMappingsByUserAndSkill: (userId: number, skillId: number) => Array<SkillMappingRecord>;
}

const SkillMappingContext = React.createContext<ISkillMappingContextProvider | null>(null);

export default SkillMappingContext;
