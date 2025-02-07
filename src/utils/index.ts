export const snake_case_string = (str) => {
  return (
    str &&
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((s) => s?.toLowerCase())
      .join("_")
  );
};

// This is to allow us to see sections when importing pdf, until we have a more robust parser
export const divider = () => {
  let index = 75;
  let line = "";
  while (index > 0) {
    index--;
    line += "_";
  }
  return line;
};
