export default () => {
  return {
    type: "list",
    prefix: "🔥",
    name: "build",
    choices: [
      {
        name: "Vite",
      },
      {
        name: "Webpack",
      },
    ],
    message: "Select a build tool",
  };
};
