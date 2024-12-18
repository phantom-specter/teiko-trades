"use client";

import { usePathname } from "next/navigation";

interface Props {
  link: string;
}
const ActiveLinkBorder = ({ link }: Props) => {
  const pathName = usePathname();

  if (pathName === link)
    return <span className="block h-1 w-full rounded-full bg-appYellow300" />;
  else return null;
};

export default ActiveLinkBorder;
