let acc = document.querySelectorAll(".questions");

console.log(acc);

for(let i=0;i<acc.length;i++){
    acc[i].addEventListener("click",function(){
        this.classList.toggle("questions-highlight");

        let answer = this.nextElementSibling;
        answer.classList.toggle("questions_answer--expanded");
    });
}