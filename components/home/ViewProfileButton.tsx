import routes from "@/navigation/routes";
import Link from "next/link";
import ActiveLinkBorder from "./ActiveLinkBorder";
import { useAuthenticate } from "@/hooks/useAuthenticate";

const ViewProfileButton = () => {
  const { isLoggedIn } = useAuthenticate();
  if (!isLoggedIn) return <></>;
  return (
    <li className="flex flex-col gap-1 sm:text-base">
      <Link href={routes.PROFILE_PAGE}>View Profile</Link>
      <ActiveLinkBorder link={routes.PROFILE_PAGE} />
    </li>
  );
};

export default ViewProfileButton;
