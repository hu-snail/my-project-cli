import { program } from "commander";
import chalk from "chalk";
import { create, _new } from "./options/index.js";
import config from "./config.js";
import { createFile } from "../utils/index.js";
import fs from "fs";
export default () => {
  program.name(chalk.blue("my project cli")).usage("[global options] command");
  // 版本信息
  program.version("1.0.0");
  // 帮助信息
  program.option("-F, --framework", "surport vue,react");
  // 创建项目命令
  create(program, ({ projectName, option }) => {
    console.log(projectName, option, "---");
  });
  // 创建文件或文件夹
  _new(program, ({ fileName, option }) => {
    createFile(fileName, option);
  });

  program
    .command("add <plugin>")
    .description("install a plugin")
    .option("-vue", "create a vue file")
    .option("-jsx", "create a jsx file")
    .option("-js", "create a js file")
    .option("-json", "create a json file")
    .option("-md", "create a markdown file")
    .action((projectName, option) => {
      const type = Object.keys(option)[0];
      console.log(type, "----");
    });
  program.addHelpText(
    "before",
    `使用案例：
  1.${chalk.green("react")}项目: ${chalk.green(
      "my-project-cli create react app-name"
    )}
  2.${chalk.green("vue")}项目: ${chalk.green(
      "my-project-cli create vue3 app-name"
    )}
`
  );
  program.addHelpText(
    "after",
    `
  Run ${chalk.green(
    "my-project-cli <command> --help"
  )} for detailed usage of given command.`
  );
  // 解析指令
  program.parse(process.argv);
};
