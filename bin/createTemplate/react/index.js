/**
 * @description 创建react模板
 * @author hu-snail 1217437592@qq.com
 * @createtime 2021-12-24
 */
import { getCode, copyFile } from "../../utils/index.js";
import fs from "fs";

import { dirList, moduleTemps, staticList } from "./config.js";

export default (config, rootPath) => {
  // 创建相关文件夹
  dirList.map((item) => {
    fs.mkdirSync(`${rootPath}/${item}`);
  });

  // 保存静态资源地址
  staticList.map((item) => {
    copyFile(rootPath, item);
  });

  // 创建相关文件
  moduleTemps.map((item) =>
    fs.writeFileSync(
      `${rootPath}/${item.path}.${item.fileType}`,
      getCode(config, item.templatePath)
    )
  );
};
