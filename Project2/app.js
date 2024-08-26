let age = prompt("กรุณากรอกอายุของคุณ:")
if (age > 13) {
    console.log("Hello")
    document.getElementById("content").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/EHKCJyEb1uA?si=eoOHiuKgQLSDJMIN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
}