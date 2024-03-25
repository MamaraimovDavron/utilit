import classNames from "classnames";

const nightDay = () => {
  let className = "container";
  const theme1 = "dark";
  const theme2 = "light";

  className = classNames(
    className,
    { dark: theme1 === "dark" },
    { light: theme2 === "light" }
  );
  console.log(className);
};

nightDay();
