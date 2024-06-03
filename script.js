var p = document.querySelector("#a")
var p2 = document.querySelector("#c")
var button = document.querySelector("#b")

button.addEventListener("click", () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) =>{
            p.textContent = position.coords.latitude,
            p2.textContent = position.coords.longitude
            console.log(position)
        },
        (error) => {
            console.log(error.message);
        })
    }
})