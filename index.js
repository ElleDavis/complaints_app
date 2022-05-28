console.log("hello")
let choices = document.querySelectorAll('.choice')
//let item =`<div class=>${item.complaint_type} <button class=show> What did the Police Do?</button </div>`

function findBorough (e) {  
    
    let limit = Number(document.getElementById('comps').value);
    if (limit == '')   limit = 10

    if (e.target.id === 'brooklyn'){
        fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BROOKLYN&agency=NYPD&$limit='+limit)
        .then(response => response.json()).then(users => { 

        let div = "";
        users.forEach ((item) => {
        //  if (e.target.id === 'brooklyn'){
            const parentDiv=document.querySelector("#container")
            const brooklyn = document.createElement("div");
            //brooklyn.className = "item"
           brooklyn.innerHTML =`<div>${item.complaint_type} <button class=show> What did the Police Do?</button> <div  class="hidden">${item.complaint_type} </div></div>`
            document.body.appendChild(brooklyn);
        })
        })
        .catch(err => console.log(err))
    } else if (e.target.id === 'bronx'){
        fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BRONX&agency=NYPD&$limit='+limit)
        .then(response => response.json()).then(users => { 

        let div = "";
        users.forEach ((item) => {
        //  if (e.target.id === 'brooklyn'){
            const parentDiv=document.querySelector("#container")
            const bronx = document.createElement("div");
            bronx.innerHTML = `<div>${item.complaint_type} <button class=show> What did the Police Do?</button> <div  class="hidden">${item.complaint_type} </div></div>`
            document.body.appendChild(bronx);
        })
        })
        .catch(err => console.log(err))
    } else if (e.target.id === 'staten_island'){
        fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=STATEN ISLAND&agency=NYPD&$limit='+limit)
        .then(response => response.json()).then(users => { 

        let div = "";
        users.forEach ((item) => {

            const parentDiv=document.querySelector("#container")
            const staten_island = document.createElement("div");
            staten_island.innerHTML = `<div>${item.complaint_type} <button class=show> What did the Police Do?</button> <div  class="hidden">${item.complaint_type} </div></div>`
            document.body.appendChild(staten_island);
        })
        })
        .catch(err => console.log(err))
    } else if (e.target.id === 'manhattan'){
        fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=MANHATTAN&agency=NYPD&$limit='+limit)
        .then(response => response.json()).then(users => { 

        let div = "";
        users.forEach ((item) => {
            const parentDiv=document.querySelector("#container")
            const manhattan = document.createElement("div");
            manhattan.innerHTML = `<div>${item.complaint_type} <button class=show> What did the Police Do?</button> <div  class="hidden">${item.complaint_type} </div></div>`
            document.body.appendChild(manhattan);
        })
        })
        .catch(err => console.log(err))
    } else if (e.target.id === 'queens'){
            fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=QUEENS&agency=NYPD&$limit='+limit)
            .then(response => response.json()).then(users => { 
    
            let div = "";
            users.forEach ((item) => {
            //  if (e.target.id === 'brooklyn'){
                const parentDiv=document.querySelector("#container")
                const queens = document.createElement("div");
                queens.innerHTML = `<div>${item.complaint_type} <button class=show> What did the Police Do?</button> <div  class="hidden">${item.complaint_type} </div></div>`
                document.body.appendChild(queens);
            })
            })
            .catch(err => console.log(err))}

    document.getElementById('comps').value = ''  //reset input to 0
} 

// end of function


choices.forEach(choice => choice.addEventListener('click', findBorough))