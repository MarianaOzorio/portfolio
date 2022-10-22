const cards = document.querySelectorAll(".skill-card");

function showSkillCardInformation() {
    this.classList.toggle("flip-skill-card");
}

cards.forEach((card) =>
card.addEventListener("click", showSkillCardInformation));



