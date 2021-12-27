import inquirer from "inquirer";
import { changeLang } from "./options/index.js";

export default () => {
  return inquirer.prompt([changeLang()]);
};
