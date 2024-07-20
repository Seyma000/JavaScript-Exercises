function newElement() {  
    const taskInput = document.getElementById("task");  
    const taskValue = taskInput.value.trim();  
    const toastBody = document.querySelector('.toast-body');  

    if (taskValue === "") {  
        toastBody.textContent = "Listeye boş ekleme yapamazsınız!";  
        showToast();  
        return;  
    }  

    const li = document.createElement("li");  
    li.textContent = taskValue;  
    li.onclick = function() {  
        this.classList.toggle('checked');  
    };  

    const span = document.createElement("span");  
    span.className = "close";  
    span.textContent = "×";  
    span.onclick = function(event) {  
        removeElement(event);  
    };  

    li.appendChild(span);  
    document.getElementById("list").appendChild(li);  
    taskInput.value = "";  

    toastBody.textContent = "Listeye eklendi.";  
    showToast();  
}  

function removeElement(event) {  
    const li = event.target.parentElement;  
    li.remove();  
}  

function showToast() {  
    const toast = document.getElementById('liveToast');  
    const bootstrapToast = new bootstrap.Toast(toast);  
    bootstrapToast.show();  
}