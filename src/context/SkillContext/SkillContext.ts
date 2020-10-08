import React from 'react';
import SkillRecord from './SkillRecord';

interface ISkillContextProvider {
  data: Map<number, SkillRecord>;
  getSkill: (id: number) => SkillRecord | undefined;
}

const SkillContext = React.createContext<ISkillContextProvider | null>(null);

export default SkillContext;
