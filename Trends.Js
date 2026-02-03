let Trends = ['T-Shirt', 'Hat'];
let TrendsDiv = document.querySelector('.Trends');

if (Trends.length > 0) {
    TrendsDiv.innerHTML = ''; 
    let TrendsHasElements = document.createElement('div');
    TrendsHasElements.className = 'HasElements';
    TrendsDiv.appendChild(TrendsHasElements);

    for (const Item of Trends) {
        let NewDiv = document.createElement('div');
        let NewImg = document.createElement('img');
        let NewGraph = document.createElement('p');

        NewDiv.className = 'Trend';
        NewImg.src = `Products/${Item}.png`;
        NewImg.alt = Item;
        NewGraph.innerText = Item;

        NewDiv.appendChild(NewImg);
        NewDiv.appendChild(NewGraph);
        TrendsHasElements.appendChild(NewDiv);
    }
}