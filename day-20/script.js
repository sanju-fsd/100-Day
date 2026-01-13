const drawer = document.getElementById("drawer");
const overlay = document.getElementById("overlay");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const content = document.getElementById("content");
const links = document.querySelectorAll(".drawer-menu a");
const msgBadge = document.getElementById("msgBadge");

/* Drawer Controls */
menuBtn.onclick = openDrawer;
closeBtn.onclick = closeDrawer;
overlay.onclick = closeDrawer;

function openDrawer() {
  drawer.classList.add("open");
  overlay.classList.add("show");
}

function closeDrawer() {
  drawer.classList.remove("open");
  overlay.classList.remove("show");
}

/* ESC key */
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeDrawer();
});

/* Navigation */
links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    loadPage(link.dataset.page);
    closeDrawer();
  });
});

/* Dynamic Pages */
function loadPage(page) {
  if (page === "home") {
    content.innerHTML = `
      <div class="card">
        <h2>Hello Student 👋</h2>
        <p>Welcome to your personal learning dashboard.</p>
      </div>
    `;
  }

  if (page === "subjects") {
    content.innerHTML = `
      <div class="card">
        <h2>My Subjects</h2>
        <p>HTML, CSS, JavaScript, React</p>
      </div>
    `;
  }

  if (page === "notifications") {
    content.innerHTML = `
      <div class="card">
        <h2>Notifications</h2>
        <p>You have no new notifications.</p>
      </div>
    `;
    msgBadge.style.display = "none";
  }

  if (page === "performance") {
    content.innerHTML = `
      <div class="card">
        <h2>Performance</h2>
        <p>Course Completion: 20%</p>
      </div>
    `;
  }

  if (page === "profile") {
    content.innerHTML = `
      <div class="card">
        <h2>My Profile</h2>
        <p>Update your personal and academic details.</p>
      </div>
    `;
  }

  if (page === "support") {
    content.innerHTML = `
      <div class="card">
        <h2>Support Center</h2>
        <p>Email us at help@learnhub.com</p>
      </div>
    `;
  }
}

/* Default Page */
loadPage("home");
