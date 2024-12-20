import { useStore } from "zustand";
import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";

import { AppModalProps } from "../types";

interface AppStateStore {
  activeModal: AppModalProps | null;
  isAppModalLoading: boolean;

  closeActiveModal: () => void;
  setActiveModal: (value: AppModalProps) => void;
  setIsAppModalLoading: (value: boolean) => void;
}

const appStateStore = createWithEqualityFn<AppStateStore>(
  (set) => ({
    activeModal: null,
    isAppModalLoading: false,

    closeActiveModal: () => set(() => ({ activeModal: null })),

    setIsAppModalLoading: (isAppModalLoading) => set({ isAppModalLoading }),

    setActiveModal: (activeModal) => set(() => ({ activeModal })),
  }),
  shallow,
);

export const useAppStateStore = () => {
  return useStore(appStateStore);
};
