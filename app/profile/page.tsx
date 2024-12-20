"use client";

import { MageImageUpload, ZondiconsCloseOutline } from "@/components/icons";
import { useAppStateStore } from "@/stores/appState.store";
import { useRouter } from "next/navigation";
import ChangeAvatarModal from "./ChangeAvatarModal";
import Image from "next/image";

const image =
  "https://c8.alamy.com/comp/TC2FPE/young-man-avatar-cartoon-character-profile-picture-TC2FPE.jpg";

const ProfilePage = () => {
  const router = useRouter();
  const { setActiveModal } = useAppStateStore();

  return (
    <main className="flex min-h-[100dvh] items-center justify-center bg-[url('/images/blurred-bg.png')] bg-cover bg-center bg-no-repeat px-5 lg:px-0">
      <section className="w-full max-w-[49.25rem] rounded-lg bg-appDarkBlue200 p-7 md:px-8 lg:p-9">
        <header className="relative mb-5 flex items-center justify-center">
          <h1 className="font-spaceGrotesk font-semibold md:text-base lg:text-lg">
            PROFILE
          </h1>

          <button
            onClick={() => router?.back()}
            className="absolute right-0 text-lg transition-all duration-300 hover:text-appRed100 md:text-xl lg:text-2xl"
            type="button"
          >
            <ZondiconsCloseOutline />
          </button>
        </header>

        <div className="mx-auto w-full max-w-[28rem]">
          <figure className="mb-8 flex justify-center gap-4">
            <Image
              width={100}
              height={100}
              src={image}
              alt="profile"
              className="size-28 rounded-[14px] object-cover md:size-32 lg:size-36"
            />

            <figcaption className="flex flex-col gap-y-2">
              <p className="text-xl font-bold">GeekCoiner</p>
              <button
                onClick={() =>
                  setActiveModal({
                    emptyModalComponent: <ChangeAvatarModal />,
                    modalType: "EMPTY_MODAL",
                  })
                }
                type="button"
                className="flex items-center gap-2 rounded-lg border border-appGray200 px-4 py-3 font-bold transition-all duration-300 hover:border-appYellow100 hover:text-appYellow100"
              >
                <span>Change Avatar</span>
                <MageImageUpload className="text-xl" />
              </button>
            </figcaption>
          </figure>

          <p className="gap-2 py-11 text-center text-lg font-semibold">
            <span>User Info</span>
            <span className="block h-1 w-full rounded-full bg-appYellow300" />
          </p>
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;
