export default Object.freeze({
  CREATE_TOKEN_PAGE: "/create-token",
  HOME_PAGE: "/",
  MY_FAVOURITE_TOKENS_PAGE: "/my-favourite-tokens",
  MY_CREATED_TOKENS_PAGE: "/my-created-tokens",
  HOW_IT_WORKS_PAGE: "/how-it-works",
  HOW_TO_TRADE_A_TOKEN_PAGE: "/how-it-works/trade-a-token",
  PROFILE_PAGE: "/profile",
  TOKEN_DETAILS_PAGE: (id: string) => `/trade/${id}`,
});
