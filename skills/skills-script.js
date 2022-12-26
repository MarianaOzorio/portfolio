const cards = document.querySelectorAll(".flip-card-inner");

function showSkillCardInformation() {
    this.classList.toggle("flip-skill-card");
}

cards.forEach((card) =>
card.addEventListener("click", showSkillCardInformation));