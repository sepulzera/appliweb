import * as React from 'react';

import { AnyComponent } from '../../types/Types';

import SkillMappingContext from './SkillMappingContext';
import SkillMappingRecord from './SkillMappingRecord';
import SkillMappingData from './SkillMappingData.json';
import Helper from '../../helper/Helper';

/** {@link SkillMappingContextProvider} Props. */
interface ISkillMappingContextProviderProps {
  /** App container that should have access to the providers. */
  children: AnyComponent;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createSkillMappingFromJson(input: any) {
  return new SkillMappingRecord(input.id,
      input.userId,
      input.type, input.typeId,
      input.skillId);
}

function getSkillMappingMap() {
  const map: Map<number, SkillMappingRecord> = new Map();
  let index, nextSkillMapping;
  for (index = 0; index < SkillMappingData.skillMappings.length; ++index) {
    nextSkillMapping = createSkillMappingFromJson(SkillMappingData.skillMappings[index]);
    map.set(nextSkillMapping.id, nextSkillMapping);
  }
  return map;
}

/**
 * {@link SkillMappingContext} Provider.
 *
 * @param props - {@link ISkillMappingContextProviderProps}.
 */
const SkillMappingContextProvider: React.FC<ISkillMappingContextProviderProps> = (props: ISkillMappingContextProviderProps) => {
  const [data] = React.useState(getSkillMappingMap());

  const getSkillMapping = (id: number): SkillMappingRecord | undefined => {
    const skillMapping: SkillMappingRecord | undefined = data.get(id);
    return skillMapping;
  };

  const getSkillMappingsByUser = (userId: number): Array<SkillMappingRecord> => {
    const skillMappings: Array<SkillMappingRecord> = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const entry of Array.from(data.entries())) {
      // const key = entry[0];
      const value = entry[1];
      if (value.userId === userId) {
        skillMappings.push(value);
      }
    }

    return Helper.getUnique(skillMappings, 'skillId');
  };

  const getSkillMappingsByUserAndType = (userId: number, type: string, typeId: number): Array<SkillMappingRecord> => {
    const skillMappings: Array<SkillMappingRecord> = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const entry of Array.from(data.entries())) {
      // const key = entry[0];
      const value = entry[1];
      if (value.userId === userId && value.type === type && value.typeId === typeId) {
        skillMappings.push(value);
      }
    }

    return Helper.getUnique(skillMappings, 'skillId');
  };

  const getSkillMappingsByUserAndSkill = (userId: number, skillId: number): Array<SkillMappingRecord> => {
    const skillMappings: Array<SkillMappingRecord> = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const entry of Array.from(data.entries())) {
      // const key = entry[0];
      const value = entry[1];
      if (value.userId === userId && value.skillId === skillId) {
        skillMappings.push(value);
      }
    }

    return Helper.getUnique(skillMappings, 'skillId');
  };

  return (
    <SkillMappingContext.Provider value={{
      data: data,
      getSkillMapping: getSkillMapping,
      getSkillMappingsByUser: getSkillMappingsByUser,
      getSkillMappingsByUserAndType: getSkillMappingsByUserAndType,
      getSkillMappingsByUserAndSkill: getSkillMappingsByUserAndSkill,
    }}>
      {props.children}
    </SkillMappingContext.Provider>
   );
};

export default SkillMappingContextProvider;
