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
 * @returns list
 */
export const moduleTemps = [
  {
    name: "App",
    templatePath: "react/src/App",
    fileType: "jsx",
  },
  {
    name: "main",
    templatePath: "react/src/main",
    fileType: "jsx",
  },
];
