/**
 * @description 创建项目语言选择
 * @author hu-snail 1217437592@qq.com
 * @createtime 2021-12-27
 */

export const changeTemplate = () => {
  return {
    type: "list",
    name: "template",
    choices: [
      {
        name: "react",
      },
      {
        name: "vue",
      },
    ],
    message: "Select a framework",
  };
};
