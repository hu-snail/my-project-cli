import inquirer from "inquirer";
import { changeTemlate } from "./options/index.js";

export default () => {
  return inquirer.prompt([changeTemlate()]);
};
