
document.addEventListener("DOMContentLoaded", () => {
  // Automatically update the footer year.
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Mobile navigation menu.
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
      });
    });
  }

  // Add your actual GitHub and LinkedIn profile URLs here.
  // Your uploaded resume does not contain these URLs.
  const profiles = {
    github: "YOUR_GITHUB_PROFILE_URL",
    linkedin: "YOUR_LINKEDIN_PROFILE_URL"
  };

  document.querySelectorAll("[data-profile]").forEach((link) => {
    const profileName = link.dataset.profile;
    const profileUrl = profiles[profileName];

    if (
      profileUrl &&
      profileUrl.startsWith("https://") &&
      !profileUrl.includes("YOUR_")
    ) {
      link.href = profileUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      link.href = "#contact";
      link.addEventListener("click", (event) => {
        event.preventDefault();
        alert(
          "Please add your real " +
          profileName +
          " profile URL in script.js before publishing."
        );
      });
    }
  });

  console.log("Naveen's portfolio loaded successfully.");
});
