import { adjectives, nouns } from "./words";

// JS to create secrets or etc
// Random String generator: Math.random().toString(36).substring(2, 8);
export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`
};
