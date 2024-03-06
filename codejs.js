// Fonction pour afficher ou masquer la modalité
function toggleModal() {
  var modal = document.getElementById("myModal");
  modal.classList.toggle("active");
}

// Fonction pour soumettre le formulaire
function submitForm(event) {
  event.preventDefault();
  var form = document.getElementById("myForm");
  var formData = new FormData(form);

  // Convertir les données du formulaire en objet JSON
  var jsonObject = {};
  formData.forEach(function(value, key) {
    jsonObject[key] = value;
  });

  // Remplacez 'https://api.example.com/sheets' par l'URL de déploiement
  var url = 'https://script.google.com/macros/s/AKfycbzDEP78QP8vhZWNEHimoSzlwACkLZe-rosQHEE5uM8O0OgelI8DtWZRn6zsmRGRZrAD/exec';

  // Envoyer les données JSON à Google Sheets
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jsonObject),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    alert('Application submitted successfully!');
    toggleModal(); // Fermer la modalité après avoir soumis le formulaire
  })
  .catch(error => {
    console.error('There was an error!', error);
    alert('Failed to submit application. Please try again later.');
  });
}
