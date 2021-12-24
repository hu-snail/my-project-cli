/**
 * @description 创建模板相关工具函数
 * @author hu-snail 1217437592@qq.com
 * @createtime 2021-12-24
 */
import ejs from "ejs";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

/**
 * @description 解析ejs模板
 * @param {Object} config
 * @param {String} templatePath
 * @returns code
 */
export function getCode(config, templatePath) {
  const __dirname = fileURLToPath(import.meta.url);
  const template = fs.readFileSync(
    path.resolve(__dirname, `../../template/${templatePath}.ejs`)
  );
  const code = ejs.render(template.toString(), {
    ...config.middleware,
  });
  return code;
}
