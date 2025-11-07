document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("search-btn");

  searchBtn.addEventListener("click", () => {
    fetch("superheroes.php")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text(); // assuming superheroes.php returns plain text
      })
      .then(data => {
        alert(data); // show the list in an alert box
      })
      .catch(error => {
        console.error("Fetch error:", error);
        alert("Failed to load superheroes.");
      });
  });
});
