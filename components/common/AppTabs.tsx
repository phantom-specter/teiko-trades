import { cn } from "@/lib/utils";
import { JSX } from "react";

interface Props {
  activeIndex: number;
  components: JSX.Element[];
  className?: string;
}

const AppTabs = ({
  activeIndex,
  components,
  className,
}: Props): JSX.Element => {
  return (
    <ul>
      {components?.map((value, index) => (
        <li
          key={index}
          className={cn(
            `!grid transition-all duration-0 ${
              index === activeIndex ? "app-collapse-open" : "app-collapse-close"
            }`,
            className,
          )}
        >
          <div className="overflow-hidden">{value}</div>
        </li>
      ))}
    </ul>
  );
};

export default AppTabs;
