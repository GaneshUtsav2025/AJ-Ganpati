const ganpatis = [
  {
    name: "Bal Ganesh",
    type: "Type 1",
    size: "12 inches",
    image: "images/gpGanpati_num_1_Type_1_Name_balGaneshGanpati_code_0001.jpg"
  },
  {
    name: "Eco Friendly Ganpati",
    type: "Type 2",
    size: "18 inches",
    image: "images/gpGanpati_num_2_Type_2_Name_ecoGanpati_code_0002.jpg"
  },
  // Add more entries up to 65...
];

const gallery = document.getElementById('gallery');

ganpatis.forEach(ganpati => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${ganpati.image}" alt="${ganpati.name}" />
    <div class="card-body">
      <h4>${ganpati.name}</h4>
      <p>Type: ${ganpati.type}</p>
      <p>Size: ${ganpati.size}</p>
    </div>
  `;
  gallery.appendChild(card);
});
