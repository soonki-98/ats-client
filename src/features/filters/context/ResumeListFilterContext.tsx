import { createContext, PropsWithChildren, useState } from 'react';

export const ResumeListFilterContext = createContext<{
  order: 'desc' | 'asc' | 'name';
  position: string | null;
  status: 'accepted' | 'pending' | 'rejected' | null;
  setOrder: (order: 'desc' | 'asc' | 'name') => void;
  setPosition: (position: string | null) => void;
  setStatus: (status: 'accepted' | 'pending' | 'rejected' | null) => void;
} | null>(null);

export function ResumeListFilterProvider(props: PropsWithChildren) {
  const [order, setOrder] = useState<'desc' | 'asc' | 'name'>('desc');
  const [position, setPosition] = useState<string | null>(null);
  const [status, setStatus] = useState<
    'accepted' | 'pending' | 'rejected' | null
  >(null);

  return (
    <ResumeListFilterContext.Provider
      value={{
        order,
        position,
        status,
        setOrder,
        setPosition,
        setStatus,
      }}
    >
      {props.children}
    </ResumeListFilterContext.Provider>
  );
}
