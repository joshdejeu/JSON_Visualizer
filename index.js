import data from './data.json'  assert {type: 'json'};
import data2 from './data2.json'  assert {type: 'json'};
console.log(data);

//get count of top-level properties
let count = Object.keys(data).length

//go through each top-level property
for(var i = 0; i < count; i++){
    var prop = Object.values(data)[i];
    var keys = Object.keys(data);

    //check for all different types of properties
    switch(typeof(prop)){
        case "number":
            // break;
        case "string":
            // break;
        case "boolean":
            formatString(keys[i]);
            break;
        case "object":
            formatObject(prop,keys[i]);
            break;
        case "NULL":
            break;
        case "undefined":
            break;
    }
}

function formatString(name){
    //HTML div which everything gets appended to
    var viz = document.getElementById('visualizer');
    //String proptery name
    var head1 = document.createElement('h1');
    head1.id = "string";
    head1.innerHTML = name;
    viz.appendChild(head1);
    console.log('left off line 40')
}

function formatObject(obj, name){
    //HTML div which everything gets appended to
    var viz = document.getElementById('visualizer');
    //Obect proptery name
    var head1 = document.createElement('h1');
    head1.id = "objet";
    head1.innerHTML = name;
    //Object propterty list parent
    var ul = document.createElement('ul');
    ul.id = "object_list";
    viz.appendChild(head1);
    viz.appendChild(ul);
    for(var j = 0; j < obj.length; j++){
        //Object propertery list item
        var li = document.createElement('li');
        li.innerHTML=obj[j];
        li.id="list_item";
        ul.appendChild(li);
    }
}