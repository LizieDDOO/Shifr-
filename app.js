var modal = document.getElementById("myModel")
var btn = document.getElementById("myBtn")
var span = document.getElementsByClassName("close")[0]

btn.onclick = function () {
    modal.style.display = "block"
}
span.onclick = function () {
    modal.style.display = "none"
}
window.onclick = function (e) {
    if(e.target == modal){
        modal.style.display = "none"
    }
}