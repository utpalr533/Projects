const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

const swiperHome = new Swiper(".home-swiper", {
  loop: true,
  speed: 800,
  effect: 'fade',
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
   delay: 3000,
   disableOnInteraction: false,
  }
});

const scrollHeader = () => {
   const header = document.getElementById("header")
   window.scrollY >= 50 ?
   header.classList.add("scroll-header") : header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)

gsap.defaults({opacity: 0, ease: 'power4.out', duration: 1.4})

const tl = gsap.timeline()
tl.from(".home-logoes img", {y: 200, stagger: .15}, '.3')
.from(".nav > *", {y: -30}, '.9')
.from(".home-data", {y: 60}, '1.2')
.from(".home-image", {y: 100}, '1.5')
.from(".home .swiper-pagination", {scale: 0, opacity: 1}, '1.5')

const jacketData = [
  { id: 1, name: "Resistance", price: 110.00, img: "jacket-1.png", gradient: "home-green" },
  { id: 2, name: "Comfy Snug", price: 99.00, img: "jacket-2.png", gradient: "home-orange" },
  { id: 3, name: "Relaxed Fit", price: 105.00, img: "jacket-3.png", gradient: "home-sky-blue" },
  { id: 4, name: "Protective Type", price: 130.00, img: "jacket-4.png", gradient: "home-purple" },
];

let cart = JSON.parse(localStorage.getItem("jacketCart")) || [];

function saveCart() {
  localStorage.setItem("jacketCart", JSON.stringify(cart));
}

function updateCartBadge() {
  const badge = document.querySelector(".nav-cart-badge");
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? "flex" : "none";
  }
}

function renderCartItems() {
  const list = document.querySelector(".cart-items");
  const totalEl = document.querySelector(".cart-total-price");
  if (!list) return;
  if (cart.length === 0) {
    list.innerHTML = `<div class="cart-empty">Your cart is empty</div>`;
    if (totalEl) totalEl.textContent = "$0.00";
    updateCartBadge();
    return;
  }
  let total = 0;
  list.innerHTML = cart.map(item => {
    const subtotal = item.price * item.qty;
    total += subtotal;
    return `
      <div class="cart-item" data-id="${item.id}">
        <img src="/assets/img/${item.img}" alt="${item.name}" class="cart-item-img" />
        <div class="cart-item-info">
          <h4 class="cart-item-name">${item.name}</h4>
          <p class="cart-item-price">$${item.price.toFixed(2)}</p>
        </div>
        <div class="cart-item-qty">
          <button class="cart-qty-btn cart-qty-minus" data-id="${item.id}">-</button>
          <span class="cart-qty-count">${item.qty}</span>
          <button class="cart-qty-btn cart-qty-plus" data-id="${item.id}">+</button>
        </div>
        <button class="cart-item-remove" data-id="${item.id}">
          <i class="ri-delete-bin-line"></i>
        </button>
      </div>
    `;
  }).join("");
  if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
  updateCartBadge();
  bindCartEvents();
}

function bindCartEvents() {
  document.querySelectorAll(".cart-qty-plus").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      const item = cart.find(i => i.id === id);
      if (item) item.qty++;
      saveCart();
      renderCartItems();
    });
  });
  document.querySelectorAll(".cart-qty-minus").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      const idx = cart.findIndex(i => i.id === id);
      if (idx > -1) {
        if (cart[idx].qty > 1) cart[idx].qty--;
        else cart.splice(idx, 1);
      }
      saveCart();
      renderCartItems();
    });
  });
  document.querySelectorAll(".cart-item-remove").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      cart = cart.filter(i => i.id !== id);
      saveCart();
      renderCartItems();
    });
  });
}

function showNotification(message) {
  const container = document.querySelector(".notification-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = "notification-toast";
  toast.textContent = message;
  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

function addToCart(id) {
  const jacket = jacketData.find(j => j.id === id);
  if (!jacket) return;
  const existing = cart.find(i => i.id === jacket.id);
  if (existing) existing.qty++;
  else cart.push({ ...jacket, qty: 1 });
  saveCart();
  renderCartItems();
  showNotification(`${jacket.name} added to cart`);
}

document.querySelectorAll(".home-button").forEach((btn) => {
  btn.addEventListener("click", () => addToCart(parseInt(btn.dataset.id)));
});

document.querySelectorAll(".category-btn").forEach((btn) => {
  btn.addEventListener("click", () => addToCart(parseInt(btn.dataset.id)));
});

const cartToggle = document.getElementById("cart-toggle");
const cartOverlay = document.getElementById("cart-overlay");
const cartClose = document.getElementById("cart-close");

if (cartToggle) {
  cartToggle.addEventListener("click", () => {
    cartOverlay.classList.add("show-cart");
    renderCartItems();
  });
}
if (cartClose) {
  cartClose.addEventListener("click", () => {
    cartOverlay.classList.remove("show-cart");
  });
}
if (cartOverlay) {
  cartOverlay.addEventListener("click", (e) => {
    if (e.target === cartOverlay) cartOverlay.classList.remove("show-cart");
  });
}

const searchToggle = document.getElementById("search-toggle");
const searchOverlay = document.getElementById("search-overlay");
const searchClose = document.getElementById("search-close");

if (searchToggle) {
  searchToggle.addEventListener("click", () => {
    searchOverlay.classList.add("show-search");
    setTimeout(() => document.getElementById("search-input")?.focus(), 100);
  });
}
if (searchClose) {
  searchClose.addEventListener("click", () => {
    searchOverlay.classList.remove("show-search");
  });
}
if (searchOverlay) {
  searchOverlay.addEventListener("click", (e) => {
    if (e.target === searchOverlay) searchOverlay.classList.remove("show-search");
  });
}

const searchInput = document.getElementById("search-input");
const searchBtn = searchOverlay?.querySelector("button");

function performSearch(query) {
  const q = query.toLowerCase().trim();
  const results = jacketData.filter(j =>
    j.name.toLowerCase().includes(q)
  );
  const items = document.querySelector(".cart-items");
  if (!items) return;
  if (!q) {
    items.innerHTML = `<div class="cart-empty">Type a jacket name to search</div>`;
    return;
  }
  if (results.length === 0) {
    items.innerHTML = `<div class="cart-empty">No jackets found for "${query}"</div>`;
    return;
  }
  items.innerHTML = results.map(j => `
    <div class="cart-item">
      <img src="/assets/img/${j.img}" alt="${j.name}" class="cart-item-img" />
      <div class="cart-item-info">
        <h4 class="cart-item-name">${j.name}</h4>
        <p class="cart-item-price">$${j.price.toFixed(2)}</p>
      </div>
      <button class="home-button search-add-btn" data-id="${j.id}" style="padding:0.5rem 0.75rem;font-size:0.813rem">
        <i class="ri-shopping-bag-4-fill"></i> Add
      </button>
    </div>
  `).join("");
  items.querySelectorAll(".search-add-btn").forEach(btn => {
    btn.addEventListener("click", () => addToCart(parseInt(btn.dataset.id)));
  });
}

if (searchInput) {
  searchInput.addEventListener("input", (e) => performSearch(e.target.value));
}

if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    if (searchInput) performSearch(searchInput.value);
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    cartOverlay?.classList.remove("show-cart");
    searchOverlay?.classList.remove("show-search");
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

updateCartBadge();
