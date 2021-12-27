/**
 * @description 选择构建工具
 * @author hu-snail 1217437592@qq.com
 * @createtime 2021-12-27
 */

export default () => {
  return {
    type: "list",
    prefix: "🎉",
    name: "method",
    choices: [
      {
        name: "vite",
      },
      {
        name: "webpack",
      },
    ],
    message: "Select build tools",
  };
};
