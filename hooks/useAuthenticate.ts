import { UserData } from "@/types";
import { showConnect } from "@stacks/connect";
import { useAuthStore } from "@/stores/auth.store";
import { appToast } from "@/utils/appToast";
import { appUserSession } from "@/utils/appUserSession";

export function useAuthenticate() {
  const { setLoginResponse, logout, loginResponse } = useAuthStore();

  const isLoggedIn = !!loginResponse?.profile?.stxAddress?.testnet;

  function Login() {
    if (isLoggedIn) return appToast.Warning("User already logged in.");

    showConnect({
      appDetails: {
        name: "Testing Ghost App",
        icon: window.location.origin + "/my-app-logo.svg",
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
