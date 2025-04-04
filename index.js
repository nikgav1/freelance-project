const toMansionsButton = document.getElementById("redirectToMansionsPage")
const mansionsDescripionBtns = document.querySelectorAll(".btn-description")

mansionsDescripionBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        window.location.href = "./pages/mansions.html";
    })
})

toMansionsButton.addEventListener("click", () => {
    window.location.href = "./pages/mansions.html";
})
