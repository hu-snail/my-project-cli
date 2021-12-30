/**
 * @description react相关配置
 * @author hu-snail 1217437592@qq.com
 * @createtime 2021-12-28
 */

export const reactInquire = () => {
  return {
    type: "list",
    name: "ui",
    choices: [
      {
        name: "Ant Design",
      },
      {
        name: "Element React",
      },
      {
        name: "Semi Design",
      },
      {
        name: "Arco Design",
      },
    ],
    message: "Select a React UI framework",
  };
};
