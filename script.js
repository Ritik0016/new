var p = document.querySelector("#a")
var button = document.querySelector("#b")

button.addEventListener("click", () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) =>{
            console.log(position);
        },
        (error) => {
            console.log(error.message);
        })
    }
})