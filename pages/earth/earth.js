const buttons = document.querySelectorAll("button");
const text = document.querySelector(".hero-desc");
const img = document.querySelector(".img-planet");

buttons[0].addEventListener("click", () => {
    buttons[1].style.backgroundColor = "transparent"
    buttons[2].style.backgroundColor = "transparent"
    buttons[0].style.backgroundColor = "#8800E1"
    text.textContent = "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.";
    img.setAttribute("src", "./../../assets/images/planet-earth.svg");
});

buttons[1].addEventListener("click", () => {
    buttons[0].style.backgroundColor = "transparent"
    buttons[2].style.backgroundColor = "transparent"
    buttons[1].style.backgroundColor = "#8800E1"
    text.textContent = "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle."
    img.setAttribute("src", "./../../assets/images/planet-earth-internal.svg");
});

buttons[2].addEventListener("click", () => {
    buttons[0].style.backgroundColor = "transparent"
    buttons[1].style.backgroundColor = "transparent"
    buttons[2].style.backgroundColor = "#8800E1"
    text.textContent = "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors."
    img.setAttribute("src", "./../../assets/images/planet-earth-geology.png");
});