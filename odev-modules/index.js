const fs = require("fs");

//  CREATE FILE
 fs.writeFile(
   "employee.json",
   "{'name':'Employee 1 Name','salary':2000}",
   (err, data) => {
     console.log("olusturuldu");
   }
 );

// READ FILE

fs.readFile("./employee.json", "utf8", function callback(err, data) {
  console.log("data :>> ", data);
});

// UPDATE FILE
fs.appendFile(
  "employee.json",
  "\n,{'name':'enes','salary':4000}",
  (err, data) => console.log(data)
);
// DELETE FILE
// fs.unlink("employee.json", (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("silindi");
//   }
// });
