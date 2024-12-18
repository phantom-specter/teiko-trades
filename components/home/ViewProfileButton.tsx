import routes from "@/navigation/routes";
import Link from "next/link";
import ActiveLinkBorder from "./ActiveLinkBorder";

const ViewProfileButton = () => {
  return (
    <li className="flex flex-col gap-1 sm:text-base">
      <Link href={routes.PROFILE_PAGE}>View Profile</Link>
      <ActiveLinkBorder link={routes.PROFILE_PAGE} />
    </li>
  );
};

export default ViewProfileButton;
