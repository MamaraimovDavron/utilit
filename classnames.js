import classNames from "classnames";

const nightDay = () => {
  let className = "container";
  const theme = "dark";

  className = classNames(className, { dark: theme === "dark" });
  console.log(className);
};

nightDay();
