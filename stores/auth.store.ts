import { createWithEqualityFn } from "zustand/traditional";
import { persist } from "zustand/middleware";
import { shallow } from "zustand/vanilla/shallow";

import { encryptedStore } from ".";

import { useStore } from "zustand";
import { UserData } from "@/types";

export interface AuthStore {
  loginResponse: UserData | null;

  logout: () => void;
  setLoginResponse: (value: UserData) => void;
}

const authStoreName = "useAuthStore";

export const authStore = createWithEqualityFn(
  persist<AuthStore>(
    (set) => ({
      // DEFAULT STATE
      loginResponse: null,

      //   ACTIONS OR MUTATORS
      logout: () => set(() => ({ loginResponse: null })),

      setLoginResponse: (loginResponse) => set(() => ({ loginResponse })),
    }),
    {
      name: authStoreName,
      storage: encryptedStore("sessionStorage"),
    },
  ),
  shallow,
);

export const useAuthStore = () => {
  return useStore(authStore);
};
