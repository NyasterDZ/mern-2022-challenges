/* square surface */
var len, surface, square_result, form1

form1 = document.getElementById("form1")
square_result = document.querySelector('.square_result')

form1.addEventListener("submit", function(event) {
    event.preventDefault()
    len = document.getElementById('height').value
    unit = document.getElementById('unit1').value
    if (len > 0) {
        surface = len * len
        square_result.innerHTML = `Square area is:  <span style="color:blue;width:100px;
        background-color:white;padding: 5px;">${surface} ${unit}²</span>.`
    } else { square_result.innerHTML = `<span style="color:red"> invalid input</span>.` }
})
