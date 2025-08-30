




AOS.init({
    duration: 1000,
    once: true,
    mirror: false
});

document.getElementById('subscribeForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('emailInput').value.trim();
    const message = document.getElementById('message');

    if (validateEmail(email)) {
        message.textContent = "با موفقیت در خبرنامه عضو شدید!";
        message.style.color = "green";
        document.getElementById('emailInput').value = "";
    } else {
        message.textContent = "لطفاً یک ایمیل معتبر وارد کنید.";
        message.style.color = "red";
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}








const goTopBtn = document.getElementById("goTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        goTopBtn.classList.add("show");
    } else {
        goTopBtn.classList.remove("show");
    }
});

goTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


