import characters from "./mockCharacters";

export const fetchCharacters = async () => {
  return new Promise(resolve => {
    resolve(characters);
  });
};