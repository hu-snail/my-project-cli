#! /usr/bin/env node
/**
 * @description 脚手架入口文件
 * @author hu-snail 1217437592@qq.com
 * @createtime 2021-12-24
 */

import fs from "fs";
import path from "path";
import createReact from "./createTemplate/react/index.js";
import { execa } from "execa";
import command from "./command/index.js";

// 获取当前路径
var currentPath = path.resolve("./");

const config = await command();
console.log(config, "---");
// // 创建文件夹
fs.mkdirSync(getRootPath());

// // 创建React初始化文件
createReact(config, getRootPath());

// 安装依赖
execa("yarn", {
  cwd: getRootPath(),
  stdio: [2, 2, 2],
});

/** 获取根目录 */
function getRootPath() {
  return `${currentPath}/${config.projectName}`;
}
