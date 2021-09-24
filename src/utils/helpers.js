export const randomNumber = (min, max) => {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};