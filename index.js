const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]
function testFunc(record) {
  let f = record.find(e => e.result == "W");
  return f.year;
}
