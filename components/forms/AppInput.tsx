import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import ErrorMessage from "./ErrorMessage";

export interface AppInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  isLoading?: boolean;
  hookFormProps: {};
  errorMessage: string | null;
  title: string;
}

const AppInput = (props: AppInputProps) => {
  const { errorMessage, hookFormProps, isLoading, type, title, ...otherProps } =
    props;

  return (
    <div className="w-full">
      <label className="text-appGray100" htmlFor={title}>
        {title}
      </label>
      <input
        id={title}
        type={type ?? "text"}
        {...hookFormProps}
        {...otherProps}
        className="mt-2 block h-10 w-full rounded-md bg-appLightBlue100 px-3 outline-0 ring-appBlue200 transition-all duration-300 placeholder:font-spaceGrotesk placeholder:text-appGray100 focus:ring-2"
      />
      <ErrorMessage message={errorMessage} />
    </div>
  );
};

export default AppInput;
