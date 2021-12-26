import { program } from "commander";
import chalk from "chalk";
import { create, newFile, addPlugin } from "./options/index.js";

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
  newFile(program);
  // 安装插件
  addPlugin(program);

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
