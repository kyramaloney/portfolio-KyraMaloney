// JavaScript to control the dropdown menu

// Toggle the dropdown menu on button click
document.querySelector(".dropbtn").addEventListener("click", function() {
  const dropdownContent = document.getElementById("dropdown-content");
  dropdownContent.classList.toggle("show");
});

// Close the dropdown menu if clicked outside
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

