import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  isVisible: boolean;
  className?: string;
}

const AppCollapse = ({ isVisible, children, className }: Props) => {
  return (
    <div
      className={`app-collapse ${
        isVisible ? "app-collapse-open" : "app-collapse-close"
      }`}
    >
      <div className={`overflow-hidden ${className}`}>{children}</div>
    </div>
  );
};

export default AppCollapse;
