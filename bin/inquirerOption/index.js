import inquirer from "inquirer";
import changeLang from "./changeLang.js";
import changeBuild from "./changeBuild.js";

export default () => {
  return inquirer.prompt([changeLang(), changeBuild()]);
};
