/**
 * @description 安装插件
 * @author hu-snail 1217437592@qq.com
 * @createtime 2021-12-26
 */

import { installPlugin } from "../../utils/index.js";
export default (program) => {
  program
    .command("add <plugin>")
    .description("install plugin")
    .option("-yarn", "install by yarn")
    .option("-npm", "install by npm")
    .option("-cnpm", "install by cnpm")
    .option("--D, --save-dev", "install option")
    .option("--S, --save", "install option")
    .action((pluginName, option) => {
      installPlugin(pluginName, option);
    });
};
