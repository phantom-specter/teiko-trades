import { DetailedHTMLProps, InputHTMLAttributes, JSX } from "react";
import ErrorMessage from "./ErrorMessage";

export interface AppInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  hookFormProps: {};
  errorMessage: string | null;
  title: string;
  rightComponent?: JSX.Element;
}

const AppInput = (props: AppInputProps) => {
  const {
    errorMessage,
    hookFormProps,
    type,
    title,
    rightComponent,
    ...otherProps
  } = props;

  return (
    <div className="w-full">
      <label className="text-appGray100" htmlFor={title}>
        {title}
      </label>
      <div className="mt-2 flex h-10 w-full items-center gap-2 rounded-md bg-appLightBlue100 px-3 ring-appBlue200 transition-all duration-300 focus-within:ring-2">
        <input
          id={title}
          type={type ?? "text"}
          {...hookFormProps}
          {...otherProps}
          className="h-full w-full bg-transparent outline-0 placeholder:font-spaceGrotesk placeholder:text-appGray100"
        />
        {rightComponent}
      </div>
      <ErrorMessage message={errorMessage} />
    </div>
  );
};

export default AppInput;
