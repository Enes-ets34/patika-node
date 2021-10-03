const Koa = require("koa");
const app = new Koa();
let port = 3000;

app.use((ctx) => {
  if (ctx.url === "/") {
    ctx.body = "<h1>İndex</h1>";
  }
  if (ctx.url === "/hakkimda") {
    ctx.body = `<h1>${ctx.url} Sayfasına hoş geldiniz</h1>`;
  }
  if (ctx.url === "/iletisim") {
    ctx.body = `<h1>${ctx.url} Sayfasına hoş geldiniz</h1>`;
  }
});

app.listen(port, () => {
  console.log("app is running: " + port);
});
