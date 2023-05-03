function openModal() {
    const modal = document.querySelector(".window");
    modal.classList.remove("d-none")
}
function closeModal(){
    const modal = document.querySelector(".window");
    modal.classList.add("d-none");
}
let arr=-1;
function createStudent(){
    let nameInp = document.querySelector("input[name='ad']");
    let surnameInp = document.querySelector("input[name='soyad']");
    let human={
        name:nameInp.value,
        surname:surnameInp.value
    }
    let array=[]
    array.push(human)
    console.log(array);
    const tbody = document.querySelector("tbody");
    for (let i = 0; i < array.length; i++) {
       
     tbody.innerHTML += `<tr class="tr"><td>${arr += 1}</td><td>${array[i].name}</td><td>${array[i].surname}</td><td><button class="btn btn-sucess" onclick="deleterow()">Delete</button></td></tr>`;
    }
    nameInp.value = '';
    surnameInp.value = '';
    closeModal();
   
   
}
function deleterow() {
    const row = document.getElementsByClassName("tr");
    for (i = 0; i < row.length; i++) {
        row -= row[i].remove()
    }
}