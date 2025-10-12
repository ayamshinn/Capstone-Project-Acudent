
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".my-account-btn-left .my-account-btn");
  const sections = document.querySelectorAll(".my-account-section");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      buttons.forEach(b => b.classList.remove("active"));

      // Add active class to the clicked button
      btn.classList.add("active");

      // Hide all sections
      sections.forEach(sec => sec.classList.add("d-none"));

      // Show the target section
      const target = document.querySelector(btn.dataset.target);
      if (target) target.classList.remove("d-none");
    });
  });
});
