let myAccounts;
let myFurniture;
let myOrderForms;
const accountUrl = "http://localhost:5178/api/account"
const furnitureUrl = "http://localhost:5178/api/furniture"
const orderUrl = "http://localhost:5178/api/order"
let tempFurn;

async function handleBuyLoad()
{
    await getFurnitureData()
    displayBuyTable()
}

async function getAccountData()
{
    let response = await fetch(accountUrl)
    myAccounts = await response.json()
    console.log(myAccounts) // remove later
}

async function getFurnitureData()
{
    let response = await fetch(furnitureUrl)
    myFurniture = await response.json();
    console.log(myFurniture) // remove later
}

async function getOrderData()
{
    let response = await fetch(orderUrl)
    myOrderForms = await response.json()
    console.log(myOrderForms) // remove later
}

function displayBuyTable()
{
    let html = ''
    myFurniture.forEach((furniture) =>
    {
        if(furniture.sold === false)
        {
            html +=
            `
            <h1>Product Details</h1>
                <div>
                    <strong>Type:</strong> <span id="type">${furniture.type}</span>
                </div>
                <div>
                    <strong>Quality:</strong> <span id="quality">${furniture.quality}</span>
                </div>
                <div>
                    <strong>City:</strong> <span id="city">${furniture.city}</span>
                </div>
                <div>
                    <strong>Price:</strong> <span id="price">$${furniture.price}</span>
                </div>
                <div>
                    <strong>Image:</strong> <img class="resize-image" id="image" src=${furniture.image} alt="Product Image">
                </div>
                <button onclick = "handleBuyClick('${furniture.id}')">Order</button>
                
            `
        }
    })
    document.getElementById('app').innerHTML = html
}


function handleBuyClick(id)
{
    console.log(id)
    const furnTempUrl = furnitureUrl+"/"+id
    localStorage.setItem('furnTempUrl', furnTempUrl)
    console.log(furnTempUrl)

    window.location.href = "../resources/order.html"
}

async function handleOrderLoad()
{
    await getTempFurnData()
    displayOrderForm()
}

async function getTempFurnData()
{
    let furnTempUrl = localStorage.getItem('furnTempUrl')
    console.log(furnTempUrl)
    let response = await fetch(furnTempUrl)
    tempFurn = await response.json()
    console.log(tempFurn) // remove later
}

function displayOrderForm()
{
    let html =
    `
        <h1>Product Details</h1>
        <div>
            <strong>Type:</strong> <span id="type">${tempFurn.type}</span>
        </div>
        <div>
            <strong>Quality:</strong> <span id="quality">${tempFurn.quality}</span>
        </div>
        <div>
            <strong>City:</strong> <span id="city">${tempFurn.city}</span>
        </div>
        <div>
            <strong>Price:</strong> <span id="price">$${tempFurn.price}</span>
        </div>
        <div>
            <strong>Image:</strong> <img class="resize-image" id="image" src=${tempFurn.image} alt="Product Image">
        </div>
    `
    document.getElementById('order').innerHTML = html
}








// public int Id{get; set;}

//         public string Type{get; set;}

//         public string Quality{get;set;}

//         public string City{get;set;}

//         public bool Sold{get; set;}

//         public int Price{get;set;}

//         public string Image{get; set;}

//         public int SellerId{get; set;}