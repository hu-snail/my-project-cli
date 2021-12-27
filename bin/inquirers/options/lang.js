/**
 * @description 创建项目语言选择
 * @author hu-snail 1217437592@qq.com
 * @createtime 2021-12-27
 */

export default () => {
  return {
    type: "list",
    prefix: "🎉",
    name: "lang",
    choices: [
      {
        name: "React",
      },
      {
        name: "Vue3",
      },
      {
        name: "Vue",
      },
      {
        name: "H5",
      },
    ],
    message: "Select a development language",
  };
};
