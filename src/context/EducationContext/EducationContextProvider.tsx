import * as React from 'react';

import { AnyComponent } from '../../types/Types';

import EducationContext from './EducationContext';
import EducationRecord from './EducationRecord';
import EducationData from './EducationData.json';

/** {@link EducationContextProvider} Props. */
interface IEducationContextProviderProps {
  /** App container that should have access to the providers. */
  children: AnyComponent;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createEducationFromJson(input: any) {
  return new EducationRecord(input.id, input.userId, input.title, input.feature,
      input.place, input.begin, input.end, input.degree, input.profession, input.short, input.grade,
      input.description);
}

function getEducationMap() {
  const map: Map<number, EducationRecord> = new Map();
  let index, nextEducation;
  for (index = 0; index < EducationData.educations.length; ++index) {
    nextEducation = createEducationFromJson(EducationData.educations[index]);
    map.set(nextEducation.id, nextEducation);
  }
  return map;
}

function sortByTimeDesc(a: EducationRecord, b: EducationRecord): number {
  const aEnd = a.end;
  const bEnd = b.end;
  if (aEnd == null && bEnd == null) {
    const aBeginTime = a.begin.getTime();
    const bBeginTime = b.begin.getTime();
    if (aBeginTime === bBeginTime) return 0;
    else if (aBeginTime < bBeginTime) return 1;
    else return -1;
  } else if (aEnd == null && bEnd != null) {
    return -1;
  } else if (aEnd != null && bEnd == null) {
    return 1;
  } else if (aEnd != null && bEnd != null) {
    const aEndTime = aEnd.getTime();
    const bEndTime = bEnd.getTime();
    if (aEndTime === bEndTime) {
      const aBeginTime = a.begin.getTime();
      const bBeginTime = b.begin.getTime();
      if (aBeginTime === bBeginTime) return 0;
      else if (aBeginTime < bBeginTime) return 1;
      else return -1;
    } else if (aEndTime < bEndTime) {
      return 1;
    } else {
      return -1;
    }
  }

  return 0;
}

/**
 * {@link EducationContext} Provider.
 *
 * @param props - {@link IEducationContextProviderProps}.
 */
const EducationContextProvider: React.FC<IEducationContextProviderProps> = (props: IEducationContextProviderProps) => {
  const [data] = React.useState(getEducationMap());

  const getEducation = (id: number): EducationRecord | undefined => {
    const education: EducationRecord | undefined = data.get(id);
    return education;
  };

  const getEducationsForUser = (userId: number): Array<EducationRecord> => {
    const arr: Array<EducationRecord> = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const entry of Array.from(data.entries())) {
      // const key = entry[0];
      const value = entry[1];
      if (value.userId === userId) {
        arr.push(value);
      }
    }

    return arr.sort(sortByTimeDesc);
  };

  return (
    <EducationContext.Provider value={{
      data: data,
      getEducation: getEducation,
      getEducationsForUser: getEducationsForUser,
    }}>
      {props.children}
    </EducationContext.Provider>
   );
};

export default EducationContextProvider;
