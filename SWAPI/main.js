let residentsBtn = document.querySelector('button')

const alderaanURL = 'https://swapi.dev/api/planets/?search=Alderaan'


const getResidents = ()=> {
    console.log('button clicked')

    axios.get(alderaanURL).then(response => {
    let residentsArr = response.data.results[0].residents;

    for(let i = 0; i < residentsArr.length; i++){
        // console.log(residentsArr[i])
        axios.get(residentsArr[i]).then(res => {
            // console.log(res.data)
            let name = document.createElement('h2')
            name.innerHTML = res.data.name
            // console.log(name)
            let divName = document.querySelector('div')
            divName.append(name)
        })
    }

})
}

residentsBtn.addEventListener('click', getResidents)


