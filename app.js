var mainlist = document.getElementById("mainlist");

function addElem(){
    var inp1 = document.getElementById("inp1");

    var a = document.createElement("LI");
    var b = document.createTextNode(inp1.value);

    a.appendChild(b);
    mainlist.appendChild(a);
    console.log(a);
    var delBtn = document.createElement("BUTTON");
    var delText = document.createTextNode("Delete");
    delBtn.appendChild(delText);
    a.appendChild(delBtn);
    var edtbtn = document.createElement("BUTTON");
    var edttext = document.createTextNode("Edit");
    edtbtn.appendChild(edttext);
    a.appendChild(edtbtn);

    delBtn.setAttribute('class' , 'editing');
    delBtn.setAttribute('onclick' , 'delbutton(this)');
    edtbtn.setAttribute('class' , 'editing2');
    edtbtn.setAttribute('onclick' , 'edtbutton(this)'); 
}

function delbutton(element){
    element.parentNode.remove();

}

function edtbutton(element){
    console.log(element.parentNode);
    element.parentNode.firstChild.nodeValue = prompt();
}
function deleteAll(){
    mainlist.innerHTML = "";
}












