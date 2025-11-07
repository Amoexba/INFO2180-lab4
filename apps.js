document.getElementById('searchBtn').addEventListener('click', () => {
  const query = document.getElementById('searchInput').value.trim();

  const safeQuery = encodeURIComponent(query);

  fetch(`superheroes.php?query=${safeQuery}`)
    .then(response => response.text())
    .then(data => {
      document.getElementById('result').innerHTML = data;
    })
    .catch(error => {
      document.getElementById('result').innerHTML = `<p>Error: ${error.message}</p>`;
    });
});
