export const getposts = (a, title) => {
  const rows = a;
  const cols = ["id", "title", "body"];
  return {
    rows,
    cols,
    title,
  };
};
export const getcomments = (a, title) => {
  const cols = ["id", "name", "email", "body"];
  return {
    rows,
    cols,
    title,
  };
};
export const getalbums = (a, title) => {
  const cols = ["id", "title"];
  return {
    rows,
    cols,
    title,
  };
};
export const getphotos = (a, title) => {
  const cols = ["id", "title", "url"];
  return {
    rows,
    cols,
    title,
  };
};
export const gettodos = (a, title) => {
  const cols = ["id", "title", "completed"];
  return {
    rows,
    cols,
    title,
  };
};
export const getusers = (a, title) => {
  const cols = ["id", "name", "username", "email", "phone", "website"];
  return {
    rows,
    cols,
    title,
  };
};
