export const getposts = (rows, title) => {
  const cols = ["id", "title", "body"];
  return {
    rows,
    cols,
    title,
  };
};
export const getcomments = (rows, title) => {
  const cols = ["id", "name", "email", "body"];
  return {
    rows,
    cols,
    title,
  };
};
export const getalbums = (rows, title) => {
  const cols = ["id", "title"];
  return {
    rows,
    cols,
    title,
  };
};
export const getphotos = (rows, title) => {
  const cols = ["id", "title", "url"];
  return {
    rows,
    cols,
    title,
  };
};
export const gettodos = (rows, title) => {
  const cols = ["id", "title", "completed"];
  return {
    rows,
    cols,
    title,
  };
};
export const getusers = (rows, title) => {
  const cols = ["id", "name", "username", "email", "phone", "website"];
  return {
    rows,
    cols,
    title,
  };
};
