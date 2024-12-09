const tradeToken = [
  "Pick a token you like.",
  "Buy/Sell your token any time to grow your ownership or to lock in profit or losses, this contributes to the trading fee revenue the token makes.",
  "When enough people trade the token it will reach X in locked trading fees minimum.",
  "You can create Ordinal to represent  210k of your tokens supply and earn yeild daily from trading fees.",
];

const TradeATokenPage = () => {
  return (
    <ul className="flex flex-col gap-y-6">
      {tradeToken?.map((value, key) => (
        <li
          className="font-baiJamjuree text-base md:text-lg lg:text-xl"
          key={key}
        >
          <span className="text-appYellow100">Step {key + 1}:</span> {value}
        </li>
      ))}
    </ul>
  );
};

export default TradeATokenPage;
