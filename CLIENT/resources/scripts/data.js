let myAccounts;
let myFurniture;
let myOrderForms;
const accountUrl = "http://localhost:5178/api/account"
const furnitureUrl = "http://localhost:5178/api/furniture"
const orderUrl = "http://localhost:5178/api/order"

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
            `
            // document.getElementById("type").textContent = furniture.type;
            // document.getElementById("quality").textContent = furniture.quality;
            // document.getElementById("city").textContent = furniture.city;
            // document.getElementById("price").textContent = furniture.price;
            // document.getElementById("image").src = furniture.image;
        }
    })
    document.getElementById('app').innerHTML = html
}


// <body>
//     <h1>Product Details</h1>
//     <div>
//         <strong>Type:</strong> <span id="type"></span>
//     </div>
//     <div>
//         <strong>Quality:</strong> <span id="quality"></span>
//     </div>
//     <div>
//         <strong>City:</strong> <span id="city"></span>
//     </div>
//     <div>
//         <strong>Price:</strong> <span id="price"></span>
//     </div>
//     <div>
//         <strong>Image:</strong> <img id="image" src="" alt="Product Image">
//     </div>

//     <script>
//         // Sample data
//         const product = {
//             Type: "Product Type",
//             Quality: "High",
//             City: "Example City",
//             Price: "100",
//             Image: "https://example.com/image.jpg"
//         };

//         // Set the text content of the spans
//         document.getElementById("type").textContent = product.Type;
//         document.getElementById("quality").textContent = product.Quality;
//         document.getElementById("city").textContent = product.City;
//         document.getElementById("price").textContent = product.Price;
//         document.getElementById("image").src = product.Image;
//     </script>
// </body>






// public int Id{get; set;}

//         public string Type{get; set;}

//         public string Quality{get;set;}

//         public string City{get;set;}

//         public bool Sold{get; set;}

//         public int Price{get;set;}

//         public string Image{get; set;}

//         public int SellerId{get; set;}