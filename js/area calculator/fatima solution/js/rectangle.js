/* Rectangle surface */
var lenth, width, rSurface, rectResult, form2

form2 = document.getElementById("form2")
rectResult = document.querySelector('.rectangle_result')

form2.addEventListener("submit", function(event) {
        event.preventDefault()
        lenth = document.getElementById('lenth').value
        width = document.getElementById('width').value
        unit = document.getElementById('unit2').value
        if (lenth > 0 && width > 0) {
            rSurface = lenth * width
            rectResult.innerHTML = `Rectangle area is:  <span style="color:blue;width:100px;
            background-color:white;padding: 5px;">${rSurface} ${unit}²</span>.`
        } else {
            rectResult.innerHTML = `<span style="color:red"> invalid input</span>.`
        }
})