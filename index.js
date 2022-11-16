import data from './data.json'  assert {type: 'json'};
import data2 from './data2.json'  assert {type: 'json'};
console.log(data);
var newData = document.getElementById('txt');
var viz_btn = document.getElementById('section_button');
viz_btn.addEventListener('click',function(){
    processData(JSON.stringify(newData.value));
    console.log((newData.value));
});

function processData(JSONstring)
{
    //clear any left-over data
    document.getElementById('visualizer').innerHTML="";

    //get count of top-level properties
    let count = Object.keys(JSONstring).length
    //go through each top-level property
    for(var i = 0; i < count; i++){
        var prop = Object.values(JSONstring)[i];
        var keys = Object.keys(JSONstring);
        //check for all different types of properties
        switch(typeof(prop)){
            case "number":
                // break;
            case "string":
                formatString(prop,keys[i]);
                break;
            case "boolean":
                formatBoolean(prop,keys[i]);
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
}


//get count of top-level properties
let count = Object.keys(data).length

//go through each top-level property
for(var i = 0; i < count; i++){
    var prop = Object.values(data)[i];
    var keys = Object.keys(data);
    console.log(Array.isArray(prop));
    //check for all different types of properties
    switch(typeof(prop)){
        case "number":
            // break;
        case "string":
            formatString(prop,keys[i]);
            break;
        case "boolean":
            formatBoolean(prop,keys[i]);
            break;
        case "object":
            if(Array.isArray(prop))
            {
                formatArray(prop,keys[i]);
            }else{
                formatObject(prop,keys[i]);
            }
            break;
        case "NULL":
            break;
        case "undefined":
            break;
    }
}
function formatBoolean(prop, name){
    //HTML div which everything gets appended to
    let viz = document.getElementById('visualizer');
    //creating container for this el
    let parent = document.createElement('div');
    parent.id = "bool_parent";
    //String proptery name
    let head1 = document.createElement('h1');
    head1.id = "boolean";
    head1.innerHTML = name;
    parent.appendChild(head1);
    //creating container for value
    let val = document.createElement('h1');
    val.id = "value";
    val.innerHTML = prop;
    parent.appendChild(val);

    viz.appendChild(parent);
}

function formatString(prop,name){
    //HTML div which everything gets appended to
    let viz = document.getElementById('visualizer');
    //creating container for this el
    let parent = document.createElement('div');
    parent.id = "bool_parent";
    //String proptery name
    let head1 = document.createElement('h1');
    head1.id = "string";
    head1.innerHTML = name;
    parent.appendChild(head1);
    //creating container for value
    let val = document.createElement('h1');
    val.id = "value";
    val.innerHTML = `\'${prop}\'`;
    parent.appendChild(val);
    viz.appendChild(parent);
}

function formatObject(obj, name){
    //HTML div which everything gets appended to
    let viz = document.getElementById('visualizer');
    //creating container for this el
    let parent = document.createElement('div');
    parent.id = "obj_parent";
    //Obect proptery name
    let head1 = document.createElement('h1');
    head1.id = "object";
    head1.innerHTML = name;
    parent.appendChild(head1);
    //Object propterty list parent
    let ul = document.createElement('ul');
    ul.id = "value"; ul.className="objli";
    viz.appendChild(parent);
}

function formatArray(obj, name){
    //HTML div which everything gets appended to
    let viz = document.getElementById('visualizer');
    //Obect proptery name
    let head1 = document.createElement('h1');
    head1.id = "object";
    head1.innerHTML = name;
    //Object propterty list parent
    let ul = document.createElement('ul');
    ul.id = "value"; ul.className="objli";
    viz.appendChild(head1);
    viz.appendChild(ul);
    for(let j = 0; j < obj.length; j++){
        //Object propertery list item
        let li = document.createElement('li');
        li.innerHTML=obj[j];
        li.id="list_item";
        ul.appendChild(li);
    }
}