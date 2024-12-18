import CreateTokenForm from "./CreateTokenForm";

const CreateTokenPage = () => {
  return (
    <main className="pb-20 pt-40">
      <div className="app-container bg-appDarkBlue200 py-12">
        <div className="mx-auto max-w-[45rem] font-baiJamjuree">
          <h1 className="text-center text-lg font-bold md:text-xl lg:text-2xl">
            Create New Token
          </h1>

          <h2 className="py-6 text-center md:text-base lg:text-lg">
            Teiko Tokens discourage dumps by making sure that all created tokens
            backed by trading fee revenue locked in smart contracts on-chain.
            Each Teiko Token is
            <span className="px-1 text-appGreen100">backed by trading fee</span>
            revenue incentive's token holders to
            <span className="px-1 text-appBlue200">HODL</span>
            and not
            <span className="pl-1 text-appRed100">DUMP</span>.
          </h2>

          <CreateTokenForm />
        </div>
      </div>
    </main>
  );
};

export default CreateTokenPage;
