import data from './data.json'  assert {type: 'json'};
import data2 from './data2.json'  assert {type: 'json'};
console.log(data2);

var cnvs = document.getElementById('canvas');

//get count of top-level properties
let count = Object.keys(data2).length

//go through each top-level property
for(var i = 0; i < count; i++){
    var prop = Object.values(data2)[i];

    //check for all different types of properties
    switch(typeof(prop)){
        case "number":
            // break;
        case "string":
            // break;
        case "boolean":
            // break;
        case "object":
            break;
        case "NULL":
            break;
        case "undefined":
            break;
    }
}


