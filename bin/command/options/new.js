export default (program, call) => {
  program
    .command("new <file-name>")
    .description("create a new file")
    .option("-vue", "create a vue file")
    .option("-jsx", "create a jsx file")
    .option("-js", "create a js file")
    .option("-json", "create a json file")
    .option("-md", "create a markdown file")
    .option("--file", "create a new file")
    .option("--folder", "create a new folder")
    .action((fileName, option) => {
      call && call({ fileName, option });
    });
};
