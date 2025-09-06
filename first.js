let add=document.getElementById("add");
let list=document.getElementById("list")
let txt=document.getElementById("txt");

add.disabled=true;
add.style.color="black";


// enter input
txt.addEventListener("click",()=>{
  add.disabled=false;
  
})
// on clicking add
add.addEventListener("click", () => {
  if (txt.value.trim() === "") return;
  

  let newli = document.createElement("li");
  newli.classList.add("li");

  let circle = document.createElement("div");
  circle.classList.add("circle");
  let taskText = document.createElement("span");
  taskText.textContent = txt.value;

// clicking on check
  circle.addEventListener("click",()=>{
    if(circle.innerText !=="✔"){
      circle.innerText="✔";

// task shifts to completed
  let comp=document.getElementById("comp");
  comp.appendChild(newli);
  taskText.classList.add("completed");
  taskText.classList.remove("today");
}
  else{
    circle.innerText="";
    list.appendChild(newli);
    taskText.classList.add("today");
    taskText.classList.remove("completed")
  }
  
  

})

  newli.appendChild(circle);
  newli.append(taskText);
  list.appendChild(newli);
  txt.value = "";
});

