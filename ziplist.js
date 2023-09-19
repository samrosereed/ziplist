const listA = [1, 2, 3];

const listB = ['a', 'b', 'c'];

function zipList(list1, list2) {
  if (list1.length !== list2.length) {
    throw new Error("Input lists must have equal lengths");
  }
  const result = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i], list2[i]);
  }
  return result;
}

console.log(zipList(listA, listB));

function zipListTheSimpleWay(list1, list2) {
  if (list1.length !== list2.length) {
    throw new Error("Input lists must have equal lengths");
  }

  const result = _.zip(list1, list2);
  return _.flatten(result);
}

console.log(zipListTheSimpleWay(listA, listB));
