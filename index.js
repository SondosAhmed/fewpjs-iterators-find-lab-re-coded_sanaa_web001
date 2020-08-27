const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]
function testFunc(record) {
    return record.find(e => e.result == "W").year;
  
}
console.log(testFunc(record));
