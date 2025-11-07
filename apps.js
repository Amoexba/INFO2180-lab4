document.getElementById('searchBtn').addEventListener('click', () => {
  fetch('superheroes.php')
    .then(response => response.text()) 
    .then(html => {
      alert(html); 
    })
    .catch(error => {
      alert('Error fetching superheroes: ' + error.message);
    });
});
