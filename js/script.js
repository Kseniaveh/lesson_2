let chooseBtn = document.getElementById('choose'),      
    receivenBtn = document.getElementById('receive'),  
    heading = document.getElementsByTagName('h2')[0],      
    modal = document.querySelector(".modal"),
    nameInput = document.getElementsByClassName("contactform_name")[0],
    closer = document.querySelector(".close"),
    text = document.getElementsByName('message')[0];

function hover(){
    heading.textContent = "All";
};


/*heading.onmouseenter = hover;*/
heading.addEventListener("click", hover);
heading.addEventListener("dblclick", function (){
    heading.textContent = "Все включено";
});

receivenBtn.addEventListener('click', function(){
    modal.style.display = "block";
});

closer.addEventListener('click',function(){
    modal.style.display = "none";
});

nameInput.addEventListener('input', function() {
    text.value = "Меня зовут " + nameInput.value + ". И я хочу спросить: "
    if (nameInput.value ==""){
        text.value = "";
    }
});
