const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("quoteForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent("Website quote request - E&A Construction");
  const body = encodeURIComponent(
`Name: ${data.get("name")}
Phone: ${data.get("phone")}
Area: ${data.get("area")}
Service: ${data.get("service")}

Project details:
${data.get("details") || "Not provided"}`
  );

  window.location.href = `mailto:eaconstruction.uk@gmail.com?subject=${subject}&body=${body}`;
});
