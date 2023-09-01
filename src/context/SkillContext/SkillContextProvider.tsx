import { useCallback, useMemo, useState } from 'react';

import { AnyComponent } from '../../types/Types';

import SkillContext, { ISkillContext } from './SkillContext';
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
const SkillContextProvider: React.FC<ISkillContextProviderProps> = ({
    children }: ISkillContextProviderProps) => {
  const [data] = useState(getSkillMap());

  const getSkill = useCallback((id: number): SkillRecord | undefined => {
    const skill: SkillRecord | undefined = data.get(id);
    return skill;
  }, [data]);

  const value: ISkillContext = useMemo(() => ({
    data: data,
    getSkill: getSkill,
  }), [data, getSkill]);

  return (
    <SkillContext.Provider value={value}>
      {children}
    </SkillContext.Provider>
   );
};

export default SkillContextProvider;
