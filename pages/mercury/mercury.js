const buttons = document.querySelectorAll("button");
const text = document.querySelector(".hero-desc");
const img = document.querySelector(".img-planet");

buttons[0].addEventListener("click", () => {
    buttons[1].classList.remove("active");
    buttons[2].classList.remove("active");
    buttons[0].classList.add("active");
    text.textContent = "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.";
    img.setAttribute("src", "./../../assets/images/planet-mercury.svg");
});

buttons[1].addEventListener("click", () => {
    buttons[0].classList.remove("active");
    buttons[2].classList.remove("active");
    buttons[1].classList.add("active");
    text.textContent = "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density."
    img.setAttribute("src", "./../../assets/images/planet-mercury-internal.svg");
});

buttons[2].addEventListener("click", () => {
    buttons[0].classList.remove("active");
    buttons[1].classList.remove("active");
    buttons[2].classList.add("active");
    text.textContent = "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density."
    img.setAttribute("src", "./../../assets/images/planet-mercury-geology.png");
});

// window.location.href = `./../../pages/${}.html`