const elList = document.getElementById('list')

fetch('https://www.omdbapi.com/?apikey=72ec5480&s=spider-man')
.then((response) => response.json())
.then((data) => getFunction(data.Search))


function getFunction(item){
    console.log(item);

    item.forEach((inner , index) => {
        const elItem = document.createElement('li')
        const elImg = document.createElement('img')
        const elTitle = document.createElement('h3')
        const elType = document.createElement('p')
        // const elYear = document.createElement('p')   
        const eldiv = document.createElement('div')


        elImg.src = inner.Poster
        elTitle.textContent = inner.Title
        elType.textContent = inner.Type
        // elYear.textContent = inner.Year


        elList.append(elItem)
        elItem.append(elImg)
        elItem.append(elTitle)
        elItem.append(elType)
        // elItem.append(elYear)
        // elItem.append(eldiv)

    })
}