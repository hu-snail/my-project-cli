/**
 * @description 创建react模板
 * @author hu-snail 1217437592@qq.com
 * @createtime 2021-12-24
 */
import { getCode } from "../../utils/index.js";
import fs from "fs";
import { dirList, moduleTemps } from "./config.js";

export default (config, rootPath) => {
  // 创建相关文件夹
  dirList.map((item) => {
    fs.mkdirSync(`${rootPath}/${item}`);
  });

  // 创建相关文件
  moduleTemps.map((item) =>
    fs.writeFileSync(
      `${rootPath}/src/${item.name}.${item.fileType}`,
      getCode(config, item.templatePath)
    )
  );
};
