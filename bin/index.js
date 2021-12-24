#! /usr/bin/env node
/**
 * @description 脚手架入口文件
 * @author hu-snail 1217437592@qq.com
 * @createtime 2021-12-24
 */

import fs from "fs";
import path from "path";
import createReact from "./createTemplate/react/index.js";

// 获取当前路径
var currentPath = path.resolve("./");

const config = {
  packageName: "test",
};

// 1.创建文件夹
fs.mkdirSync(getRootPath());

// 创建React初始化文件
createReact(config, getRootPath());

/** 获取根目录 */
function getRootPath() {
  return `${currentPath}/${config.packageName}`;
}
