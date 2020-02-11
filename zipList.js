const testData1 = ['a', 'b', 'c'];
const testData2 = [1, 2, 3];

function zipList(data1, data2) {
  const finalList = [];
  for (let x = 0; x < data1.length; x++) {
    finalList.push(data1[x], data2[x]);
  }
  return finalList;
}

console.log(zipList(testData1, testData2));

function zipListTheSimpleWay(data1, data2) {
  return _.flatten(_.zip(data1, data2));
}

console.log(zipListTheSimpleWay(testData1, testData2));
