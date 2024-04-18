let input = document.getElementById('input');
let sbtn = document.getElementById('search');
let r = document.getElementById('result');
let m = document.getElementById('main');
sbtn.addEventListener('click',()=>{
    let countryn = input.value.toUpperCase();

    let url = `https://restcountries.com/v3.1/name/${countryn}?fullText=true`;

    fetch(url).then((response) => response.json()).then((data)=> {
        m.style.border = "2px solid  rgb(21, 128, 119)";
        r.innerHTML = `
        <img src = "${data[0].flags.svg}" id= "img">
        <h2 id = "cname">${data[0].name.common}</h2>
        <div id = "box">
        <div id = "box1"> Capital:  <h4 id = "data">${data[0].capital[0]}</h2>  </div>
        <div id = "box1"> Continent:  <h4 id = "data">${data[0].continents[0]}</h2>  </div>
        <div id = "box1"> Currencies:  <h4 id = "data">${data[0].currencies[Object.keys(data[0].currencies)].name}</h2>  </div>
        <div id = "box1"> Common Language:  <h4 id = "data">${Object.values(data[0].languages).toString().split(",").join(",")}</h2>  </div>
        <div id = "box1"> Area:  <h4 id = "data">${data[0].area}</h2>  </div>
        <div id = "box1"> Population:  <h4 id = "data">${data[0].population}</h2>  </div>
        <div id = "box1"> Drivinge Side:  <h4 id = "data">${data[0].car.side}</h2> </div> 
</div>
        `
    })
})
