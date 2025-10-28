    const loginForm = document.getElementById("loginForm");
        const loginCard = document.getElementById("loginCard");
        const tableMain = document.querySelector(".tableMain");
        const usernameInput = document.getElementById("Username");
        const passwordInput = document.getElementById("password");

        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const expectedUsername = "staff_members";
            const expectedPassword = "restaurant2024";

            if (usernameInput && passwordInput) {
                const enteredUsername = usernameInput.value;
                const enteredPassword = passwordInput.value;

                if (enteredUsername === expectedUsername && enteredPassword === expectedPassword) {
                      loginCard.style.display = "none";
            tableMain.style.display = "block";
                } else {
                    alert("Invalid username or password. Please try again.");
                }

               tableMain.scrollIntoView({ behavior: "smooth" });
            loginForm.reset();
            }
      
        });
