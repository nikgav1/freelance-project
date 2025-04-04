function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());

    localStorage.setItem("userObject", JSON.stringify(value))
}
  
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);