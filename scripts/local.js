const container = document.querySelector(".container")
const input = document.getElementById("getUser")
const btn = document.querySelector(".btn")

btn.addEventListener("click", () => {
    const name = input.value
    input.value = ""
    const localInfo = localStorage.getItem(`User:${name}`)
    const data = JSON.parse(localInfo)
    container.textContent = JSON.stringify(data)
})