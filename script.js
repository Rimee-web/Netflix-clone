
const slider  =  document.querySelector(".slider");
document.querySelector(".next").onclick = () => {
    slider.scrollBy({left : 300, behavior: "smooth"});

};

document.querySelector(".prev").onclick = () => {
    slider.scrollBy({left: -300, behavior: "smooth"});
};




const questions = document.querySelectorAll(".faq-question");

questions.forEach((q) => {
    q.addEventListener("click", () => {
        const answer = q.nextElementSibling;
        const icon = q.querySelector(".icon");

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            icon.textContent = "+";
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.textContent = "×";
        }
    });

});