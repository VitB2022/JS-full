export const parseUser = jsonData => {
  let result = {};
  try {
    result = JSON.parse(jsonData);
  } catch (err) {
    return null;
  }
  return result;
};
// console.log(parseUser('{"name":"Tom"}'));
