import { createContext, ReactNode, useContext } from "react";

export interface ModalContextProps {
  isOpenModal: boolean;
}

interface ModalProviderProps {
  children: ReactNode;
  value: ModalContextProps;
}

const ModalContext = createContext<ModalContextProps | null>(null);

export const ModalProvider = ({ children, value }: ModalProviderProps) => {
  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  const context = useContext(ModalContext);

  if(!context) {
    return null;
  }
}
