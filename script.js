// var input = document.getElementById("text");
// var btn = document.getElementById("btn");
// var ul = document.getElementById("ul");

// btn.onclick = function() {
// 	var input_text = input.value;
//   if(input_text != ""){
// 		var li = document.createElement("li");
// 		var btn2 = document.createElement("button");
// 		btn2.innerText = "remove";
// 		li.innerText = input_text;
// 		ul.appendChild(li);
// 		li.appendChild(btn2);
// 		localStorage.setItem("text",input_text);
// 		btn2.onclick = function(){
// 			localStorage.removeItem(input_text);
// 			li.remove();
// 		}
// 		input.value = "";
//   }
// };


// var input = document.getElementById("text");
// var btn = document.getElementById("btn");
// var ul = document.getElementById("ul");


// var items = [];

// if(localStorage.getItem("items")){
// 	items = JSON.parse(localStorage.getItem("items"));
// 	showitem();
// }

// btn.onclick = function(){
// 	var inputText = input.value;
// 	if( inputText != "" ){
// 		items.push(inputText);
// 		localStorage.setItem( "items" , JSON.stringify(items) );
// 		showitem();
// 		input.value = ""
// 	}
// }

// function showitem() {
// 	ul.innerText = "";
// 	for (let i = 0; i < items.length; i++) {
// 		var li = document.createElement("li");
// 		li.style.display = "grid";
// 		li.style.textAlign = "center";
// 		var btnRemove = document.createElement("button")
// 		btnRemove.innerText = "remove";
// 		btnRemove.onclick = function(event){
// 			var index = event.target.dataset.index;
// 			items.splice(index, 1);
// 			localStorage.setItem("items", JSON.stringify(items));
// 			showitem();
// 	  }

// 	  li.innerText = items[i];
// 	  ul.appendChild(li);
// 	  li.appendChild(btnRemove)
// 	}
//   }
  
var input = document.getElementById("text");
var btn = document.getElementById("btn");
var ul = document.getElementById("ul");

var items = [];

if(localStorage.getItem("items")){
    items = JSON.parse(localStorage.getItem("items"));
    showitem();
}

btn.onclick = function(){
    var inputText = input.value;
    if(inputText != ""){
        items.push(inputText);
        localStorage.setItem("items" , JSON.stringify(items));
        showitem();
    }
};

function showitem() {
    ul.innerHTML = "";
    for (var i = 0; i < items.length; i++) {
        var li = document.createElement("li");
        li.style.display = "grid";
        li.style.textAlign = "center";
        var btnRemove = document.createElement("button");
        btnRemove.innerText = "Remove";
        btnRemove.dataset.index = i;
        btnRemove.onclick = function(event) {
            var index = event.target.dataset.index;
            items.splice(index, 1);
            localStorage.setItem("items", JSON.stringify(items));
            showitem();
        };
        li.innerText = items[i];
        ul.appendChild(li);
        li.appendChild(btnRemove);
    }
}






