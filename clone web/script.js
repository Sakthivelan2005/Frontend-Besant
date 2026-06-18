const findDuplicates = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
};

findDuplicates([1,2,1,3,4,2]);

document.getElementById("myButton").addEventListener("click", function() {
  alert("Button clicked!");
});