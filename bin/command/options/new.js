/**
 * @description 创建文件或文件夹
 * @author hu-snail 1217437592@qq.com
 * @createtime 2021-12-26
 */
import { createFile } from "../../utils/index.js";
export default (program) => {
  program
    .command("new <file-name>")
    .description("create a new file")
    .option("-vue", "create a vue file")
    .option("-jsx", "create a jsx file")
    .option("-js", "create a js file")
    .option("-json", "create a json file")
    .option("-md", "create a markdown file")
    .option("--file", "create a new file")
    .option("--folder", "create a new folder")
    .action((fileName, option) => {
      createFile(fileName, option);
    });
};
