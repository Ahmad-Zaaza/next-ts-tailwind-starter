import { INITIAL_STATE } from "@/lib/initialAppState";
import { createContext, useState } from "react";
import { createContainer } from "react-tracked";
const useMyState = () => useState(INITIAL_STATE);
export const ApplicationContext = createContext<ReturnType<
  typeof useMyState
> | null>(null);

export const {
  Provider: ApplicationProvider,
  useTracked: useApplicationState
} = createContainer(useMyState);
