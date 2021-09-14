import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { createContext, ReactNode, useContext } from 'react';
import { useEffect } from 'react';

interface SidebarProviderProps {
  children: ReactNode;
}

type SidebarDrawerContextDate = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextDate);

export function SidebarDrawerProvider({ children }: SidebarProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
