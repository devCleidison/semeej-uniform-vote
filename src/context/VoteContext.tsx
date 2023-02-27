import { createContext, ReactNode, useContext } from "react";

export interface VoteContextProps {
  vote: number;
}

interface VoteProviderProps {
  children: ReactNode;
  value: VoteContextProps;
}

const VoteContext = createContext<VoteContextProps | null>(null);

export const VoteProvider = ({ children, value }: VoteProviderProps) => {
  return (
    <VoteContext.Provider value={value}>
      {children}
    </VoteContext.Provider>
  )
}

export const useVote = () => {
  const context = useContext(VoteContext);

  if(!context) {
    return null;
  }
}
