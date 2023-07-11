const btn = document.querySelector('#btn');


function handleClick() {
    getData()
}

async function getData() {
    try {
        const response = await fetch('https://api.ipify.org/?format=json', {
            method: 'GET',
        })
        let adress = await response.json();
        fetchAdressInfo(adress.ip)
    }
    catch (error) {
        console.error(error)
    }

}

async function fetchAdressInfo(adress) {
    try {
        const response = await fetch(`http://ip-api.com/json/${adress}?fields=status,message,continent,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,isp,org,as,query`, {
            method: 'GET',
        })
        const data = await response.json();
        displayData(data)
    }
    catch (error) {
        console.error(error)
    }

}

function displayData(data) {
    console.log(data)
    
    const div = document.createElement('div');
    div.innerHTML = `
    <h3>Continent: ${data.continent}</h3>
    <h3>Country: ${data.country}</h3>
    <h3>Region: ${data.region}</h3>
    <h3>City: ${data.city}</h3>
    <h3>District:${(data.district ? data.district : ' No District')} </h3>
    `
    document.body.appendChild(div)
}

btn.addEventListener('click', handleClick)