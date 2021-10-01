let input = Number(process.argv[2]);
function calculateArea() {
  if (input > 0) {
    let result = 3.14 * Math.pow(input, 2);
    console.log(result);
  } else {
    console.log("lutfen pozitif bir deger giriniz...");
  }
}
calculateArea();
