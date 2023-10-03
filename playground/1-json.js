const fs = require("fs");

const jsonData = fs.readFileSync('1-json.json');
console.log(jsonData.toString(),"jsondata...........");

const parsedJson = JSON.parse(jsonData);
console.log(parsedJson,"parsedjson......");

const updatedParsedJson = {
    ...parsedJson,
    name: "Deepali Narang, God's child",
    age: "23"
}

console.log(updatedParsedJson);

const updatedJsonData = JSON.stringify(updatedParsedJson);
console.log(updatedJsonData);

fs.writeFileSync('1-json.json',updatedJsonData)