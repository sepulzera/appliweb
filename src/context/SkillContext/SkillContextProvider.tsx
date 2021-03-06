import * as React from 'react';

import { AnyComponent } from '../../types/Types';

import SkillContext from './SkillContext';
import SkillRecord from './SkillRecord';
import SkillData from './SkillData.json';

/** {@link SkillContextProvider} Props. */
interface ISkillContextProviderProps {
  /** App container that should have access to the providers. */
  children: AnyComponent;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createSkillFromJson(input: any) {
  return new SkillRecord(input.id,
      input.title, input.category, input.featured, input.rating);
}

function getSkillMap() {
  const map: Map<number, SkillRecord> = new Map();
  let index, nextSkill;
  for (index = 0; index < SkillData.skills.length; ++index) {
    nextSkill = createSkillFromJson(SkillData.skills[index]);
    map.set(nextSkill.id, nextSkill);
  }
  return map;
}

/**
 * {@link SkillContext} Provider.
 *
 * @param props - {@link ISkillContextProviderProps}.
 */
const SkillContextProvider: React.FC<ISkillContextProviderProps> = (props: ISkillContextProviderProps) => {
  const [data] = React.useState(getSkillMap());

  const getSkill = (id: number): SkillRecord | undefined => {
    const skill: SkillRecord | undefined = data.get(id);
    return skill;
  };

  return (
    <SkillContext.Provider value={{
      data: data,
      getSkill: getSkill,
    }}>
      {props.children}
    </SkillContext.Provider>
   );
};

export default SkillContextProvider;
