
function explore() {
    const featured = document.getElementById("featured");

    if (featured) {
        featured.scrollIntoView({
            behavior: "smooth"
        });
    } else {
        window.location.href = "products.html";
    }
}

function buy() {
    alert("Thank you for choosing Tara Fashion! We will be in touch soon.");
}

function contact() {
    const messageSection = document.querySelector(".message-section");

    if (messageSection) {
        messageSection.scrollIntoView({
            behavior: "smooth"
        });
    } else {
        window.location.href = "contact.html";
    }
}

function sendMessage(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        alert("Please fill in all the fields.");
        return;
    }

    alert("Thank you, " + name + "! Your message has been received.");

    event.target.reset();
}

document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname;

    if (currentPage.includes("contact.html")) {
        document.title = "Tara Fashion | Contact Us";
    }

    if (currentPage.includes("products.html")) {
        document.title = "Tara Fashion | Products";
    }
});
