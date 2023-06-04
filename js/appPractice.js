console.log("this is for practicing js");
display();

function display() {
    let html = "";
    let noteCard = document.getElementById('notes');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.forEach(function(element, index) {
        JSON.stringify(element);
        html +=
            `<div class="noteCard card my-2 mx-2" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button id = ${index} onclick = "deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>`

        
    });

    if(notesObj.length!=0)
    {
        noteCard.innerHTML = html;
    }
    else
    {
        noteCard.innerHTML = "sorry nothing to show";
    }

}


let addBtn = document.getElementById('addBtn');



addBtn.addEventListener('click', function () {
    let txt = document.getElementById('addTxt');
    let txtVal = txt.value;
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }

    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(txtVal);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";
    display();

})


function deleteNote(index)
{
    let notes = localStorage.getItem("notes");
    if(notes == null)
    {
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));

    display();
}


let search = document.getElementById('searchTxt');

let notes = localStorage.getItem('notes');

if(notes==null)
{
    notesObj = [];
}
else 
{
    notesObj = JSON.parse(notes);
}

notesObj.forEach(element)
{
    if(JSON.stringify(element).includes(search.value))
    {
        
    }
}