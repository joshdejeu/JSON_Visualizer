import data from './data.json'  assert {type: 'json'};
import data2 from './data2.json'  assert {type: 'json'};

var newData = document.getElementById('txt');
var viz_btn = document.getElementById('section_button');
viz_btn.addEventListener('click',function(){
    processData(newData.value);
    console.log((newData.value));
});
newData.value = JSON.stringify(data);

function processData(JSONstring)
{
    console.log(JSONstring);
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
                if(Array.isArray(prop)){formatArray(prop, keys[i])}
                else{formatObject(prop,keys[i])};
                break;
            case "NULL":
                break;
            case "undefined":
                break;
        }
    }
}

processData(data);

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
    parent.id = "str_parent";
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

function formatArray(obj, name){
    //HTML div which everything gets appended to
    let viz = document.getElementById('visualizer');
    //creating container for this el
    let parent = document.createElement('div');
    parent.id = "array_parent";
    //Obect proptery name
    let head1 = document.createElement('h1');
    head1.id = "array";
    head1.innerHTML = name;
    parent.appendChild(head1);

    //Object propterty list parent
    let ul = document.createElement('ul');
    ul.id = "value"; ul.className="objli";
    viz.appendChild(parent);
    parent.appendChild(ul);
    for(let j = 0; j < obj.length; j++){
        //Object propertery list item
        let li = document.createElement('li');
        li.innerHTML=obj[j];
        li.id="list_item";
        ul.appendChild(li);
    }
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
    let ol = document.createElement('ol');
    ol.id = "value"; ol.className="objli";
    viz.appendChild(parent);
    parent.appendChild(ol);


    let count = Object.keys(obj).length

    //go through each inner-level property
    for(let i = 0; i < count; i++){
        let propertyName = Object.keys(obj)[i];
        let propertyValue = Object.values(obj)[i];
        let li = document.createElement('li');
        li.id="list_item";
        ol.appendChild(li);
        let inner_parent = document.createElement('div');
        let nam = document.createElement('h2');
        let val = document.createElement('h2');
        nam.id="string";
        val.id="value";
        inner_parent.id="new_list_item";
        nam.innerHTML=propertyName;
        val.innerHTML=propertyValue;
        inner_parent.appendChild(nam);
        inner_parent.appendChild(val);
        li.appendChild(inner_parent);
    }

}