var c = document.getElementsByClassName("col");
var i;
var s = document.querySelectorAll(".sub");
var collapse;
for (i = 0; i < c.length; i++){
    c[i].addEventListener("click", function() {
        this.classList.toggle("active");
        collapse = this.nextElementSibling;
        if(collapse.style.maxHeight){
            collapse.style.maxHeight = null;
        } else{
            collapse.style.maxHeight = collapse.scrollHeight + "px";
        }
    })
}

for(let sub of s){
    sub.addEventListener("click", function(){
        if(collapse.style.maxHeight){
            collapse.style.maxHeight = null;
        } else{
            collapse.style.maxHeight = collapse.scrollHeight + "px";
        }
    })
}