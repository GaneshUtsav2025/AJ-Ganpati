const ganpatis = [
  {
    name: "Bal Ganesh",
    price: "₹850",
    size: "12 inches",
    image: "images/gpGanpati_num_1_Type_1_Name_balGaneshGanpati_code_0001.jpeg",
    details: "Beautiful clay finish with charming features"
  },
  {
    name: "Eco Friendly Ganpati",
    price: "₹1200",
    size: "18 inches",
    image: "images/gpGanpati_num_2_Type_2_Name_mayurMukutGanpati_code_0002.jpeg",
    details: "Made with eco-friendly material and Mayur Mukut design"
  },
  {
    name: "Friendly Ganpati",
    price: "₹1100",
    size: "18 inches",
    image: "images/gpGanpati_num_3_Type_2_Name_shwetMarbleGanpati_code_0003.jpeg",
    details: "Shwet Marble look, ideal for home decor"
  }
  // Continue adding entries for all 65 Ganpatis
];

const gallery = document.getElementById('gallery');
const sortSelect = document.getElementById('sortSelect');

// Initial render
renderGallery(ganpatis);

sortSelect.addEventListener('change', function () {
  const selected = this.value;
  let sorted = [...ganpatis];

  if (selected === 'priceAsc') {
    sorted.sort((a, b) => extractPrice(a.price) - extractPrice(b.price));
  } else if (selected === 'priceDesc') {
    sorted.sort((a, b) => extractPrice(b.price) - extractPrice(a.price));
  } else if (selected === 'sizeAsc') {
    sorted.sort((a, b) => extractSize(a.size) - extractSize(b.size));
  } else if (selected === 'sizeDesc') {
    sorted.sort((a, b) => extractSize(b.size) - extractSize(a.size));
  }

  renderGallery(selected === 'default' ? ganpatis : sorted);
});

function extractPrice(price) {
  return parseInt(price.replace(/[^0-9]/g, '')) || 0;
}

function extractSize(size) {
  return parseInt(size.replace(/[^0-9]/g, '')) || 0;
}

function renderGallery(list) {
  gallery.innerHTML = '';
  list.forEach(ganpati => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${ganpati.image}" alt="${ganpati.name}" />
      <div class="card-body">
        <h4>${ganpati.name}</h4>
        <p><strong>Price:</strong> ${ganpati.price}</p>
        <p><strong>Size:</strong> ${ganpati.size}</p>
        ${ganpati.details ? `<p><strong>Details:</strong> ${ganpati.details}</p>` : ''}
      </div>
    `;
    gallery.appendChild(card);
  });
}
