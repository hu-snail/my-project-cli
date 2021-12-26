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
        name: "H5",
      },
    ],
    message: "Select a development language",
  };
};
