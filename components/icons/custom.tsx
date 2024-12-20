import { JSX, SVGProps } from "react";

export const OrdinalIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 15"
    {...props}
  >
    <path
      stroke="#fff"
      strokeWidth="0.613"
      d="M15.049 7.52a7.048 7.048 0 1 1-14.097 0 7.048 7.048 0 0 1 14.097 0Zm-1.746 0a5.303 5.303 0 1 1-10.606 0 5.303 5.303 0 0 1 10.606 0ZM8 13.436A5.916 5.916 0 1 0 8 1.604a5.916 5.916 0 0 0 0 11.832Z"
    ></path>
  </svg>
);

export const SpinnerIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <span className="text-2xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
        className={`animate-spin ${props?.className}`}
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
    </span>
  );
};
