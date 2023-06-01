import { usersList } from "./credentials.js";

export const cE = (type) => document.createElement(type);

export const tweetGen = (tweetData) => {
  const wrapperEl = cE("div");
  const userImageEl = cE("img");
  const contentEl = cE("div");
  const nameEl = cE("span");
  const userNameEl = cE("span");
  const textContentEl = cE("p");
  const reactionsEl = cE("div");
  const iconEl = cE("div");
  const likeValueEl = cE("div");
  const imagePlaceholder =
    "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";

  wrapperEl.className = "tweet";
  reactionsEl.className = "tweet__reactions";
  iconEl.className = "tweet__icon__heart";
  likeValueEl.className = "tweet__like__value";
  userImageEl.src = tweetData.user?.image || imagePlaceholder;
  ("https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg");
  userImageEl.alt = tweetData.user?.username;
  contentEl.className = "tweet__content";
  nameEl.className = "nameEl";
  userNameEl.className = "userNameEl";

  nameEl.textContent =
    tweetData.user?.firstName + " " + tweetData.user?.lastName;
  userNameEl.textContent = tweetData.user?.username;
  userNameEl.prepend("@");
  textContentEl.textContent = tweetData.body;
  reactionsEl.textContent = tweetData.reactions;

  contentEl.append(nameEl, userNameEl, textContentEl, reactionsEl);
  wrapperEl.append(userImageEl, contentEl);
  reactionsEl.append(iconEl, likeValueEl);

  return wrapperEl;
};
