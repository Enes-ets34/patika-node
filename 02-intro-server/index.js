const http = require("http");
let PORT = 5000;
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    res.write(`<h2>Index sayfasına hoş geldiniz...</h2>`);
  } else if (req.url === "/hakkimda") {
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    res.write(`<h2>${req.url} sayfasina hos geldiniz...</h2>`);
  } else if (req.url === "/iletisim") {
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    res.write(`<h2>${req.url} sayfasina hos geldiniz...</h2>`);
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html;charset=utf-8",
    });
    res.write(`<h1>BÖYLE BIR SAYFA BULUNAMADI *_*</h1>`);
  }
  res.end();
});
server.listen(PORT, () => {
  console.log(`Server on Listen : ${PORT}`);
});
