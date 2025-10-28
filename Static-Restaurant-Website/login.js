    const loginForm = document.getElementById("loginForm");
        const loginCard = document.getElementById("loginCard");
        const tableMain = document.querySelector(".tableMain");

        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            loginCard.style.display = "none";
            tableMain.style.display = "block";
            tableMain.scrollIntoView({ behavior: "smooth" });
            loginForm.reset();
        });