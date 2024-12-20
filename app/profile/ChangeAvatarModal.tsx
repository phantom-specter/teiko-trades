import { micah } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import { JSX, useState } from "react";

import {
  LineMdCircleToConfirmCircleTransition,
  LineMdCloseCircle,
} from "@/components/icons";
import { SpinnerIcon } from "@/components/icons/custom";
import { useAppStateStore } from "@/stores/appState.store";
import { convertSVGtoURL, generateRandomNumber } from "@/utils";

const isLoading = false;

let avatars: string[] = [];

for (let i = 0; i < 100; i++) {
  const avatar = createAvatar(micah, {
    // ... options
    seed: generateRandomNumber(10, 20_000_000_000).toString(),
  });
  const svg = avatar.toString();
  if (svg.length < 9550) avatars.push(svg);
}

const ChangeAvatarModal = (): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { closeActiveModal } = useAppStateStore();

  //   const editProfileAPI = useMutation({
  //     mutationFn: editProfile,
  //   });

  //   const { updateProfile } = useStore(authStore);

  //   const isLoading = editProfileAPI.isPending;

  //   const handleSubmit = async () => {
  //     if (selectedImage === null)
  //       return appToast.Error(
  //         "No image selected. click on the close button by the left to go back.",
  //       );

  //     const response = await editProfileAPI.mutateAsync({
  //       imageURL: avatars[selectedImage],
  //     });

  //     if (response.ok) {
  //       if (response.data) updateProfile(response.data.data);
  //       appToast.Success(response.data?.message ?? "Profile edit success.");
  //       closeActiveModal();
  //     } else handleApiErrors(response);
  //   };
  const handleSubmit = () => {
    console.log("submitted");
  };

  return (
    <div className="h-full max-h-[90vh] overflow-y-scroll rounded-3xl bg-red-600/10 p-5">
      <h2 className="mx-auto max-w-4xl py-5 text-center text-xl font-semibold text-white md:text-2xl lg:text-2xl">
        Choose an avatar from our diverse selection of over 50 random options.
        Once you've found the perfect one, simply click the 'update' button to
        make it yours!
      </h2>

      <div className="mx-auto flex max-w-7xl items-center justify-between pb-10 pt-7">
        <button
          disabled={isLoading}
          onClick={closeActiveModal}
          className="flex items-center gap-x-2 rounded-xl bg-red-500 px-3 py-2 text-lg text-white transition-all duration-300 hover:scale-105 active:scale-95 md:text-lg lg:text-2xl"
        >
          <span>Close</span>
          <LineMdCloseCircle className="text-white/80" />
        </button>
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="bg-appBlue500 flex items-center gap-x-2 rounded-xl px-3 py-2 text-lg text-white transition-all duration-300 hover:scale-105 active:scale-95 md:text-lg lg:text-2xl"
        >
          <span>Update</span>
          {isLoading ? (
            <SpinnerIcon />
          ) : (
            <LineMdCircleToConfirmCircleTransition className="text-white/80" />
          )}
        </button>
      </div>
      <ul className="grid grid-cols-4 gap-9 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-9">
        {avatars.map((value, index) => (
          <li
            onClick={() => setSelectedImage(index)}
            className={`cursor-pointer rounded-full transition-all duration-300 ${selectedImage === index ? "bg-yellow-200" : "hover:bg-appBlue800 bg-transparent"}`}
            key={index}
          >
            <img
              className="w-full max-w-[10rem]"
              src={convertSVGtoURL(value)}
              alt="avatar"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChangeAvatarModal;
