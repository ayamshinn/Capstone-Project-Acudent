document.addEventListener("DOMContentLoaded", () => {
    const patientSidebarContainer = document.getElementById('patient-sidebar-container');
    const mainContentContainer = document.querySelector('.user-patient-content-area');
    const topbar = document.getElementById('user-patient-topbar');
    const toggleButton = document.querySelector('.toggle');

    toggleButton.onclick = function() {
        patientSidebarContainer.classList.toggle('active');
        mainContentContainer.classList.toggle('active');
        topbar.classList.toggle('active');
    }

    
    
});

