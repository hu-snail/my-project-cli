/**
 * @description 创建项目指令
 * @author hu-snail 1217437592@qq.com
 * @createtime 2021-12-26
 */

import inquirer from "inquirer";
import { changeLang, changeBuild } from "../../inquirers/options/index.js";

export default (program, call) => {
  program
    .command("create <app-name>")
    .description("create a new project powered by my-project-cli")
    .option("-vue3", "create a Vue3 new project")
    .option("-vue2", "create a Vu2 new project")
    .option("-react", "create a React new project")
    .option("--vite", "create a React new project for vite")
    .option("--webpack", "create a React new project for webpack")
    .action(async (projectName, option) => {
      const item = await getCreateConfig(option);
      call && call({ projectName, ...item });
    });
};

async function getCreateConfig(option) {
  let type = null;
  if (option["Vue2"]) type = "Vue2";
  if (option["Vue3"]) type = "Vue3";
  if (option["React"]) type = "React";
  if (option["H5"]) type = "H5";
  return await setType(type, option);
}

async function setType(lang, option) {
  let item = {};
  if (option["vite"]) item.method = "vite";
  else if (option["wepack"]) item.method = "wepack";

  if (option[lang]) {
    item.lang = lang;
    if (!item.method) {
      let answer = await inquirer.prompt([changeBuild()]);
      item.method = answer.method;
    }
  } else {
    if (!item.method) {
      let answer = await inquirer.prompt([changeLang(), changeBuild()]);
      item = answer;
    } else {
      let answer = await inquirer.prompt([changeLang()]);
      item.lang = answer.lang;
    }
  }
  return item;
}
