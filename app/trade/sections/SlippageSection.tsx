import { JSX } from "react";

const percentages = [25, 50, 75, 100];

const SlippageSection = (): JSX.Element => {
  return (
    <ul className="my-3 flex items-center justify-end gap-2">
      {percentages?.map((_, key) => (
        <li
          key={key}
          className="w-full max-w-[4.563rem] cursor-pointer rounded-lg border border-appYellow500 py-[0.625rem] text-center text-xs font-bold text-appYellow500 transition-all duration-300 hover:bg-appYellow500 hover:text-appDarkBlue400"
        >
          ?
        </li>
      ))}
    </ul>
  );
};

export default SlippageSection;
