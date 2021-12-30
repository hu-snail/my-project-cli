import inquirer from "inquirer";
import {
  changeTemplate,
  changeVariant,
  reactInquire,
  changeFileStatus,
} from "./options/index.js";

export const initInquires = async (framwork, option) => {
  // 判断创建的文件是否存在
  if (option.isExists)
    return await inquirer.prompt([changeFileStatus(option.path)]);
  switch (framwork) {
    case "vue":
      return await inquirer.prompt([changeTemplate()]);
    case "react":
      return await inquirer.prompt([changeVariant(), reactInquire()]);
    default:
      return;
  }
};
