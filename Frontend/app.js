
if (document.getElementById("loginForm")) {
  document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
      localStorage.setItem("auth", "true");
      window.location.href = "dashboard.html";
    } else {
      document.getElementById("error").innerText = "Credenciales inválidas";
    }
  });
}

let products = JSON.parse(localStorage.getItem("products")) || [];

function renderProducts() {
  const list = document.getElementById("productList");
  if (!list) return;

  list.innerHTML = "";

  products.forEach((p, index) => {
    list.innerHTML += `
      <li>
        ${p.name} - $${p.price}
        <button onclick="editProduct(${index})">Editar</button>
        <button onclick="deleteProduct(${index})">Eliminar</button>
      </li>
    `;
  });
}

if (document.getElementById("productForm")) {
  document.getElementById("productForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;

    products.push({ name, price });
    localStorage.setItem("products", JSON.stringify(products));
    renderProducts();
  });
}

function deleteProduct(index) {
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  renderProducts();
}

renderProducts();