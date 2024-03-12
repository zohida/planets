const buttons = document.querySelectorAll("button");
const text = document.querySelector(".hero-desc");
const img = document.querySelector(".img-planet");

buttons[0].addEventListener("click", () => {
    buttons[1].classList.remove("active");
    buttons[2].classList.remove("active");
    buttons[0].classList.add("active");
    text.textContent = `Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".`;
    img.setAttribute("src", "./../../assets/images/planet-mars.svg");
});

buttons[1].addEventListener("click", () => {
    buttons[0].classList.remove("active");
    buttons[2].classList.remove("active");
    buttons[1].classList.add("active");
    text.textContent = "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur."
    img.setAttribute("src", "./../../assets/images/planet-mars-internal.svg");
});

buttons[2].addEventListener("click", () => {
    buttons[0].classList.remove("active");
    buttons[1].classList.remove("active");
    buttons[2].classList.add("active");
    text.textContent = "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt."
    img.setAttribute("src", "./../../assets/images/planet-mars-geology.png");
});