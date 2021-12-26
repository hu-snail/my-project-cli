export default (program, call) => {
  program
    .command("create <app-name>")
    .description("create a new project powered by my-project-cli")
    .option("-vue", "create a Vue new project")
    .option("-react", "create a React new project")
    .option("--vite", "create a React new project for vite")
    .option("--webpack", "create a React new project for webpack")
    .action((projectName, option) => {
      call && call({ projectName, option });
    });
};
