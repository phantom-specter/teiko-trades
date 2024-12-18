const createToken = [
  "Click CREATE TOKEN, Fill in details about your token and launch.",
  "Buy/Sell your token any time to grow your ownership or to lock in profit or losses, this contributes to the trading fee revenue your token makes.",
  "The trader holding the most tokens becomes the token admin, with unique perks. They can withdraw trading fees anytime, reward token holders to encourage holding, and view ordinals for added insights. This setup keeps things engaging and benefits both the admin and the community.",
  "You can create Ordinal to represent  X amount of your tokens supply and earn yield daily from trading fees.",
];

const HowItWorksPage = () => {
  return (
    <ul className="flex flex-col gap-y-6">
      {createToken?.map((value, key) => (
        <li
          className="font-baiJamjuree text-sm md:text-base lg:text-lg"
          key={key}
        >
          <span className="text-appYellow100">Step {key + 1}:</span> {value}
        </li>
      ))}
    </ul>
  );
};

export default HowItWorksPage;
