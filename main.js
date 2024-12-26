  document.addEventListener("DOMContentLoaded", () => {
	const menuBtn = document.querySelector(".menu-btn");
    const hamburgerBtn = document.getElementById("bar-pembeni");
	// Select the modal and buttons
	const modal = document.getElementById("modal");
	const openModalBtn = document.getElementById("openModalBtn");
	const closeModalBtn = document.getElementById("closeModalBtn");



	let menuOpen = false;
    menuBtn.addEventListener("click", () => {
	if (!menuOpen) {
		menuBtn.classList.add("open");
		menuOpen = true;
	} else {
		menuBtn.classList.remove("open");
		menuOpen = false;
	}
});



document.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("hidden");

  });
  

	// Function to open the modal
	openModalBtn.addEventListener("click", () => {
	  modal.classList.remove("hidden");
	});

	// Function to close the modal
	closeModalBtn.addEventListener("click", () => {
	  modal.classList.add("hidden");
	});

	// Optional: Close the modal when clicking outside of it
	modal.addEventListener("click", (e) => {
	  if (e.target === modal) {
		modal.classList.add("hidden");
	  }
	});
  });
 
