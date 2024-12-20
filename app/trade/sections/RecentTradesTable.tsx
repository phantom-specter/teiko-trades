import { JSX } from "react";

const headers = ["Date", "Type", "Token Amount", "Transaction ID"];

const RecentTradesTable = (): JSX.Element => {
  return (
    <div className="rounded-lg bg-appDarkBlue400">
      <div className="mb-3 mt-4 flex items-center gap-2 p-3 text-xs text-white">
        <span>Trades</span>
      </div>

      <hr className="mb-2" />

      <ul className="bg-appDarkBlue500 grid grid-cols-4 px-4 py-2 font-medium">
        {headers?.map((value, key) => <li key={key}>{value}</li>)}
      </ul>
    </div>
  );
};

export default RecentTradesTable;
