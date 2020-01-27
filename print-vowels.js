
var vowels = "ueoai";

function printVowelsFirst(str) {
    var rest = [];

    for (var index = 0; index < str.length; index++) {
        var char = str[index];
        (vowels.includes(char)) ? console.log(char) : rest.push(char);
    }

    // console.log(rest);
}

// printVowelsFirst("atmosphere");

//////////////
//////////////

var arr = [];
var arr = ["b", "c", "d"];

arr[-1] = "a";

for (var index = -1; index < arr.length; index++) {
    console.log(arr[i]);
}