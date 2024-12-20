"use client";

import { JSX, useEffect } from "react";

import { useAppStateStore } from "@/stores/appState.store";

const AppModal1 = (): JSX.Element => {
  const { activeModal, closeActiveModal, isAppModalLoading } =
    useAppStateStore();

  const modalOpen = !!activeModal?.modalType;
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (
        !modalOpen ||
        keyCode !== 27 ||
        !activeModal?.shouldBackgroundClose ||
        !isAppModalLoading
      )
        return;
      closeActiveModal();
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  const handleClose = () => {
    if (!isAppModalLoading && activeModal?.shouldBackgroundClose) {
      closeActiveModal();
    }
  };

  return (
    <aside
      onClick={handleClose}
      className={`bg-appBlack400 fixed inset-0 z-[60] flex items-center justify-center backdrop-blur-sm backdrop-filter transition-all duration-200 ${
        modalOpen ? "translate-y-0" : "translate-y-full"
      } `}
    >
      {activeModal?.modalType === "EMPTY_MODAL" &&
        activeModal?.emptyModalComponent}
    </aside>
  );
};

export default AppModal1;
