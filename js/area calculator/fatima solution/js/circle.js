/* circle surface */
var radius, cirSurface, cirResult, form3
const PI = 3.14

form3 = document.getElementById("form3")
cirResult = document.querySelector('.circle_result')

form3.addEventListener("submit", function(event) {
    event.preventDefault()
    radius = document.getElementById('radius').value
    unit = document.getElementById('unit3').value
    if (radius > 0) {
        cirSurface = (radius * radius) * PI
        cirResult.innerHTML = `Circle area is:  <span style="color:blue;width:100px;
        background-color:white;padding: 5px;">${cirSurface} ${unit}²</span>.`
    } else {
        cirResult.innerHTML = `<span style="color:red"> invalid input</span>.`
    }
})