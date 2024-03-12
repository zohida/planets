const buttons = document.querySelectorAll("button");
const text = document.querySelector(".hero-desc");
const img = document.querySelector(".img-planet");

buttons[0].addEventListener("click", () => {
    buttons[1].classList.remove("active");
    buttons[2].classList.remove("active");
    buttons[0].classList.add("active");
    text.textContent = "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.";
    img.setAttribute("src", "./../../assets/images/planet-neptune.svg");
});

buttons[1].addEventListener("click", () => {
    buttons[0].classList.remove("active");
    buttons[2].classList.remove("active");
    buttons[1].classList.add("active");
    text.textContent = "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions."
    img.setAttribute("src", "./../../assets/images/planet-neptune-internal.svg");
});

buttons[2].addEventListener("click", () => {
    buttons[0].classList.remove("active");
    buttons[1].classList.remove("active");
    buttons[2].classList.add("active");
    text.textContent = "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum."
    img.setAttribute("src", "./../../assets/images/planet-neptune-geology.png");
    // img.setAttribute("width", "400");
    // img.setAttribute("height", "400");
});