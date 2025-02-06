// Write a function that takes a string and returns a reversed version of it
const str = "Lakhan";

function revStr(str) {
  const temp = str.split("").reverse().join("");
  console.log(temp);
}

revStr(str);
