import { useAuthStore } from "@/stores/auth.store";
import { UserData } from "@/types";
import appConfig from "@/utils/appConfig";
import { appToast } from "@/utils/appToast";
import { appUserSession } from "@/utils/appUserSession";
import { showConnect } from "@stacks/connect";

export function useAuthenticate() {
  const { setLoginResponse, logout, loginResponse } = useAuthStore();

  const isLoggedIn = !!loginResponse?.profile?.stxAddress?.testnet;

  function Login() {
    if (isLoggedIn) return appToast.Warning("User already logged in.");

    showConnect({
      appDetails: {
        name: appConfig.APP_NAME,
        icon: window.location.origin + "/logo/teikolabs.svg",
      },
      redirectTo: "/",
      onCancel: () => {
        appToast.Error("Connection cancelled by user.");
      },
      onFinish: () => {
        const userData = appUserSession?.loadUserData() as UserData;
        setLoginResponse(userData);
        appToast.Success("Wallet connected successfully.");
      },
      userSession: appUserSession,
    });
  }

  function Logout() {
    if (!isLoggedIn) return appToast.Warning("User already logged out.");

    logout();
    appToast.Success("Wallet disconnected successfully");
  }

  return { Logout, Login, isLoggedIn, loginResponse };
}
