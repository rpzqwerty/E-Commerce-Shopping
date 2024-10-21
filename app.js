

// Get Data From Api

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products?limit=4");
  const data = await res.json();
  // const data = temp.splice(0, 2)
  const carouselItems = document.getElementById("myCarousel");
  const output = data.reduce((str, product, index) => {

    return str + `
      <div class="carousel-item ${index === 0 ? 'active' : ''}">
        <div class="row align-items-center p-4 ">
          <div class="col-md-6">
            <span class="product-title ">${product.title}</span>
            <p>${product.description}.</p>
            <button class="btn btn-primary">Shop Now</button>
          </div>
          <div class="col-md-6">
            <img src="${product.image}" class="d-block w-100" alt="${product.title}">
          </div>
        </div>
      </div>
    `;
  }, "");
  carouselItems.innerHTML = output;




  const categories = [
    {
      id: 'women',
      title: 'Shop Women',
      description: 'Lorem ipsum dolor sit amet',
      imageUrl: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg'
    },
    {
      id: 'men',
      title: 'Shop Men',
      description: 'Lorem ipsum dolor sit amet',
      imageUrl: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'
    },
    {
      id: 'jewellery',
      title: 'Jewellery',
      description: 'Lorem ipsum dolor sit amet',
      imageUrl: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_UL640_QL65_ML3_.jpg'
    },
    {
      id: 'electronics',
      title: 'Electronics',
      description: 'Lorem ipsum dolor sit amet',
      imageUrl: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg'
    }
  ];

  // Dynamically load category data
  categories.forEach(category => {
    document.getElementById(`${category.id}-img`).src = category.imageUrl;
    document.getElementById(`${category.id}`).addEventListener('click', async () => {
      
      window.location.href = `category.html?category=${category.id}`;
    });
  });


  
  // const signatureImage = "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg";
  const signatureSectionRes = await fetch("https://fakestoreapi.com/products/category/jewelery?limit=1");
  const signatureSectionData = await signatureSectionRes.json();
  const signatureImage = signatureSectionData[0].image; 
  const signatureContent = signatureSectionData[0].title;
  const signatureDescription = signatureSectionData[0].description;


  // Dynamically load the image for the Signature Legging section
  document.getElementById("signature-img").src = signatureImage;
  document.querySelector(".signature-content-titte").textContent = signatureContent;
  document.querySelector(".signature-description").textContent = signatureDescription;
  // signature-description




  const resElectronics = await fetch("https://fakestoreapi.com/products/category/electronics?limit=1");

  console.log(await resElectronics.json())




}

getData();
