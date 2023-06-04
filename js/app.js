console.log("this is notes app");
showNotes();

let addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', function(e){
    let addTxt = document.getElementById('addTxt');
    let addTitle = document.getElementById('addTitle');
    let notes = localStorage.getItem('notes');
    if(notes==null)
    {
        notesObj = [];
    }
    else 
    {
        notesObj = JSON.parse(notes);
    }

    let myObj = {
        title: addTitle.value,
        text: addTxt.value
    };

    notesObj.push(myObj);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    console.log(notes);

    showNotes();
})

function showNotes()
{
    let notes = localStorage.getItem('notes');

    if(notes==null)
    {
        notesObj = [];
    }
    else 
    {
        notesObj = JSON.parse(notes);
    }
    
    let html = "";

    notesObj.forEach(function(element, index){
        html+= 

        `<div class="noteCard card my-2 mx-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.text}</p>
                    <button id = ${index} onclick = "deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>` 

    });

    let notesElm = document.getElementById('notes');
    if(notesObj.length != 0)
    {
        notesElm.innerHTML = html;
    }
    else 
    {
        notesElm.innerHTML = `<h5 style="background-color:DodgerBlue;">Nothing to show! Add Notes to display</h5>`;
    }
}

function deleteNote(index)
{
    console.log(`note ${index} will be deleted`);

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

    showNotes();
}


let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){
    let inputVal = search.value;
    console.log("input event fired!", inputVal);
    let notecards = document.getElementsByClassName('noteCard');

    Array.from(notecards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal))
        {
            element.style.display = "block";
        }
        else 
        {
            element.style.display = "none";
        }

    })

})