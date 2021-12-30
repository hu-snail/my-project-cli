/**
 * @description 公共模块
 * @author hu-snail 1217437592@qq.com
 * @createtime 2021-12-28
 */
import chalk from "chalk";
export const changeVariant = () => {
  return {
    type: "checkbox",
    name: "features",
    choices: [
      {
        name: "JavaScript",
      },
      {
        name: "TypeScript",
      },
      {
        name: "Router",
      },
      {
        name: "Linter / Formatter",
      },
      {
        name: "CSS Pre-processors",
      },
      {
        name: "Data State",
      },
    ],
    message: "Check the features needed for your project",
  };
};

export const changeFileStatus = (path) => {
  return {
    type: "list",
    name: "fileStatus",
    choices: [
      {
        name: "Overwrite",
      },
      {
        name: "Merge",
      },
      {
        name: "Cancel",
      },
    ],
    message: `Target directory ${chalk.green(
      path
    )} already exists. Pick an action:`,
  };
};
