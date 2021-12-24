/**
 * @description react目录配置文件
 * @author hu-snail 1217437592@qq.com
 * @createtime 2021-12-24
 */

/**
 * @description 导出文件夹列表，根据自己的目录结构配置，注意第一级目录位置在前面，不然会报错
 * @returns list
 */
export const dirList = [
  "src",
  "src/views",
  "src/styles",
  "src/router",
  "src/compontents",
  "src/layout",
];

/**
 * 路径：template/react
 * @description 导出模版文件
 * @param {string} path 解析后的路径地址
 * @param {string} templatePath 模板对应的地址
 * @param {string} fileType 生成后的文件类型
 * @returns list
 */
export const moduleTemps = [
  {
    path: "src/App",
    templatePath: "react/src/App",
    fileType: "jsx",
  },
  {
    path: "src/App",
    templatePath: "react/src/App.css",
    fileType: "css",
  },
  {
    path: "src/main",
    templatePath: "react/src/main",
    fileType: "jsx",
  },
  {
    path: "index",
    templatePath: "react/index",
    fileType: "html",
  },
  {
    path: "src/index",
    templatePath: "react/src/index.css",
    fileType: "css",
  },
  {
    path: "package",
    templatePath: "react/package",
    fileType: "json",
  },
  {
    path: "vite.config",
    templatePath: "react/vite.config",
    fileType: "js",
  },
];
