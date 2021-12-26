/**
 * @description 创建模板相关工具函数
 * @author hu-snail 1217437592@qq.com
 * @createtime 2021-12-24
 */
import ejs from "ejs";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = fileURLToPath(import.meta.url);

/**
 * @description 解析ejs模板
 * @param {Object} config
 * @param {String} templatePath
 * @returns code
 */
export function getCode(config, templatePath) {
  const template = fs.readFileSync(
    path.resolve(__dirname, `../../template/${templatePath}.ejs`)
  );
  const code = ejs.render(template.toString(), {
    ...config.middleware,
  });
  return code;
}

/**
 * @description 创建文件或者文件夹
 * @example 创建vue文件 new fileName -vue --file
 * @param {String} fileName
 * @param {Object} option
 */
export function createFile(fileName, option) {
  const options = Object.keys(option);
  options.map((type) => {
    if (type === "file" || type === "folder") false;
    else newFile(fileName, option, type);
  });
}

/**
 * @description 复制文件，比如图片/图标静态资源
 * @param {*} rootPath 根目录
 * @param {*} item 静态文件配置项
 */
export function copyFile(rootPath, item) {
  const fromFileName = path.resolve(
    __dirname,
    `../../template/${item.staticPath}`
  );
  const toFileName = `${rootPath}/${item.path}`;
  const rs = fs.createReadStream(fromFileName, {
    autoClose: true,
    encoding: "utf-8",
    highWaterMark: 64 * 1024 * 1024,
    flags: "r",
  });
  const ws = fs.createWriteStream(toFileName, {
    encoding: "utf-8",
    flags: "a",
    highWaterMark: 16 * 1024 * 1024,
    autoClose: true,
  });
  rs.on("data", (chunk) => {
    const wsFlag = ws.write(chunk, "utf-8");
    if (!wsFlag) {
      rs.pause();
    }
  });
  ws.on("drain", () => {
    // 继续读取
    rs.resume();
  });

  rs.on("end", () => {
    ws.end();
  });
}

function newFile(fileName, option, type) {
  const isFolder = option.file ? true : false;
  const fileType = type.toLowerCase();
  if (isFolder) fs.mkdirSync(`./${fileName}`);
  else {
    fs.writeFileSync(`./${fileName}.${fileType}`, "vue");
  }
}
