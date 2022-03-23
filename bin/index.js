#! /usr/bin/env node
/**
 * @description 脚手架入口文件
 * @author hu-snail 1217437592@qq.com
 * @createtime 2021-12-24
 */

import fs, { mkdirSync } from "fs";
import path from "path";
import { createReact } from "./createTemplate/react/index.js";
import { execaSync } from "execa";
import command from "./command/index.js";
import { initInquires } from "./inquirers/index.js";

var currentPath = path.resolve("./");
let config = await command();
// 判断文件是否存在
const isExists = fs.existsSync(getRootPath());
const initConfig = await initInquires(config.template, {
  isExists: isExists,
  path: `${currentPath}/${config.projectName}`,
});

console.log(initConfig);
await init();

// createReact(config, getRootPath());

// execaSync("yarn", {
//   cwd: getRootPath(),
//   stdio: [2, 2, 2],
// });

// execaSync(`cd ${getRootPath()} && yarn dev`, {
//   cwd: "./",
//   stdio: [2, 2, 2],
//   shell: true,
// });

function getRootPath() {
  return `${currentPath}/${config.projectName}`;
}

async function init() {
  if (initConfig.fileStatus) {
    switch (initConfig.fileStatus) {
      case "Overwrite":
        execaSync(`rm -rf ${getRootPath()}`, {
          cwd: "./",
          stdio: [2, 2, 2],
          shell: true,
        });
        break;
      case "Merge":
        fs.mkdirSync(getRootPath(), { recursive: true });
        break;
      case "Cancel":
        return;
      default:
        break;
    }
  }
}
