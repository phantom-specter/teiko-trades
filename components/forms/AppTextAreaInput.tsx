import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import ErrorMessage from "./ErrorMessage";

export interface AppInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  isLoading?: boolean;
  hookFormProps: {};
  errorMessage: string | null;
  title: string;
}

const AppTextAreaInput = (props: AppInputProps) => {
  const { errorMessage, hookFormProps, isLoading, type, title, ...otherProps } =
    props;

  return (
    <div className="w-full">
      <label className="text-appGray100" htmlFor={title}>
        {title}
      </label>
      <textarea
        id={title}
        rows={5}
        {...hookFormProps}
        {...otherProps}
        className="mt-2 block w-full rounded-md bg-appLightBlue100 p-3 outline-0 ring-appBlue200 transition-all duration-300 placeholder:text-appGray100 focus:ring-2"
      />
      <ErrorMessage message={errorMessage} />
    </div>
  );
};

export default AppTextAreaInput;
