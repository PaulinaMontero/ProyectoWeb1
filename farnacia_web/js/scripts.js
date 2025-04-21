// Datos de productos (simulados)
const productos = [
    {
        id: 1,
        nombre: "Aspirina 500mg",
        descripcion: "Alivia dolores leves y moderados. Caja con 20 tabletas.",
        precio: "$89.00",
        categoria: "medicamentos",
        imagen: "/api/placeholder/250/200"
    },
    {
        id: 2,
        nombre: "Vitamina C 1000mg",
        descripcion: "Suplemento alimenticio. Frasco con 60 tabletas.",
        precio: "$199.50",
        categoria: "vitaminas",
        imagen: "/api/placeholder/250/200"
    },
    {
        id: 3,
        nombre: "Crema Hidratante",
        descripcion: "Para piel seca y sensible. Tubo con 200ml.",
        precio: "$129.00",
        categoria: "cuidado-personal",
        imagen: "/api/placeholder/250/200"
    },
    {
        id: 4,
        nombre: "Antiséptico",
        descripcion: "Solución para desinfectar heridas. Frasco con 250ml.",
        precio: "$85.50",
        categoria: "primeros-auxilios",
        imagen: "/api/placeholder/250/200"
    },
    {
        id: 5,
        nombre: "Pañales Talla 2",
        descripcion: "Paquete con 50 piezas para bebés de 5-8kg.",
        precio: "$259.00",
        categoria: "bebés",
        imagen: "/api/placeholder/250/200"
    },
    {
        id: 6,
        nombre: "Paracetamol 500mg",
        descripcion: "Reduce la fiebre y alivia el dolor. Caja con 24 tabletas.",
        precio: "$65.00",
        categoria: "medicamentos",
        imagen: "/api/placeholder/250/200"
    },
    {
        id: 7,
        nombre: "Complejo B",
        descripcion: "Suplemento de vitaminas del complejo B. Frasco con 30 cápsulas.",
        precio: "$149.90",
        categoria: "vitaminas",
        imagen: "/api/placeholder/250/200"
    },
    {
        id: 8,
        nombre: "Gel Antibacterial",
        descripcion: "Con 70% de alcohol. Botella con 500ml.",
        precio: "$95.00",
        categoria: "cuidado-personal",
        imagen: "/api/placeholder/250/200"
    },
    {
        id: 9,
        nombre: "Vendas Elásticas",
        descripcion: "Pack de 3 vendas de diferentes tamaños.",
        precio: "$78.50",
        categoria: "primeros-auxilios",
        imagen: "/api/placeholder/250/200"
    },
    {
        id: 10,
        nombre: "Fórmula Infantil",
        descripcion: "Etapa 1, para bebés de 0-6 meses. Lata de 900g.",
        precio: "$379.00",
        categoria: "bebés",
        imagen: "/api/placeholder/250/200"
    },
    {
        id: 11,
        nombre: "Ibuprofeno 400mg",
        descripcion: "Antiinflamatorio y analgésico. Caja con 30 cápsulas.",
        precio: "$115.00",
        categoria: "medicamentos",
        imagen: "/api/placeholder/250/200"
    },
    {
        id: 12,
        nombre: "Ácido Fólico",
        descripcion: "Suplemento para embarazadas. Frasco con 90 tabletas.",
        precio: "$175.00",
        categoria: "vitaminas",
        imagen: "/api/placeholder/250/200"
    }
];

// Datos de ofertas (simulados)
const ofertas = [
    {
        id: 1,
        nombre: "Aspirina 500mg",
        descuento: "25% de descuento",
        precioOriginal: "$89.00",
        precioNuevo: "$66.75",
        imagen: "/api/placeholder/80/80"
    },
    {
        id: 2,
        nombre: "Vitamina C 1000mg",
        descuento: "30% de descuento",
        precioOriginal: "$199.50",
        precioNuevo: "$139.65",
        imagen: "/api/placeholder/80/80"
    },
    {
        id: 3,
        nombre: "Gel Antibacterial",
        descuento: "20% de descuento",
        precioOriginal: "$95.00",
        precioNuevo: "$76.00",
        imagen: "/api/placeholder/80/80"
    },
    {
        id: 4,
        nombre: "Ácido Fólico",
        descuento: "15% de descuento",
        precioOriginal: "$175.00",
        precioNuevo: "$148.75",
        imagen: "/api/placeholder/80/80"
    }
];

// Función para cargar productos
function cargarProductos(categoria = 'todos') {
    const productsGrid = document.getElementById('productsGrid');
    
    if (!productsGrid) {
        return; // No estamos en la página de productos
    }
    
    // Limpiar el contenedor
    productsGrid.innerHTML = '';
    
    // Filtrar productos por categoría
    let productosFiltrados = productos;
    if (categoria !== 'todos') {
        productosFiltrados = productos.filter(producto => producto.categoria === categoria);
    }
    
    // Si no hay productos que mostrar
    if (productosFiltrados.length === 0) {
        productsGrid.innerHTML = '<p>No se encontraron productos en esta categoría.</p>';
        return;
    }
    
    // Agregar productos al grid
    productosFiltrados.forEach(producto => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <div class="product-image" style="background-image: url('${producto.imagen}')"></div>
            <div class="product-info">
                <div class="product-category">${producto.categoria}</div>
                <h3 class="product-name">${producto.nombre}</h3>
                <p class="product-description">${producto.descripcion}</p>
                <div class="product-price">${producto.precio}</div>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
}

// Función para cargar ofertas
function cargarOfertas() {
    const dealsGrid = document.getElementById('dealsGrid');
    
    if (!dealsGrid) {
        return; // No estamos en la página de ofertas
    }
    
    // Limpiar el contenedor
    dealsGrid.innerHTML = '';
    
    // Agregar ofertas al grid
    ofertas.forEach(oferta => {
        const dealCard = document.createElement('div');
        dealCard.className = 'deal-card';
        
        dealCard.innerHTML = `
            <div class="deal-image" style="background-image: url('${oferta.imagen}')"></div>
            <div class="deal-info">
                <div class="deal-title">${oferta.nombre}</div>
                <div class="deal-discount">${oferta.descuento}</div>
                <div class="deal-price">
                    <span class="original-price">${oferta.precioOriginal}</span>
                    <span class="new-price">${oferta.precioNuevo}</span>
                </div>
            </div>
        `;
        
        dealsGrid.appendChild(dealCard);
    });
}

// Función para filtrar productos por categoría
function filterProducts(categoria) {
    // Actualizar botones activos
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.classList.remove('active');
        if (button.textContent.toLowerCase() === categoria || 
            (button.textContent === 'Todos' && categoria === 'todos')) {
            button.classList.add('active');
        }
    });
    
    // Cargar productos filtrados
    cargarProductos(categoria);
}

// Función para buscar productos
function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        alert('Por favor ingresa un término de búsqueda');
        return;
    }
    
    // Redirigir a la página de productos si no estamos en ella
    if (!window.location.href.includes('index.html') && !window.location.href.endsWith('/')) {
        window.location.href = 'index.html?search=' + encodeURIComponent(searchTerm);
        return;
    }
    
    const productsGrid = document.getElementById('productsGrid');
    
    if (!productsGrid) {
        return; // No estamos en la página de productos
    }
    
    // Limpiar el contenedor
    productsGrid.innerHTML = '';
    
    // Filtrar productos por término de búsqueda
    const productosFiltrados = productos.filter(producto => 
        producto.nombre.toLowerCase().includes(searchTerm) || 
        producto.descripcion.toLowerCase().includes(searchTerm) ||
        producto.categoria.toLowerCase().includes(searchTerm)
    );
    
    // Si no hay productos que mostrar
    if (productosFiltrados.length === 0) {
        productsGrid.innerHTML = `<p>No se encontraron productos para "${searchTerm}".</p>`;
        return;
    }
    
    // Actualizar título de la sección
    const sectionTitle = document.querySelector('.section-title');
    if (sectionTitle) {
        sectionTitle.textContent = `Resultados para "${searchTerm}"`;
    }
    
    // Agregar productos al grid
    productosFiltrados.forEach(producto => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <div class="product-image" style="background-image: url('${producto.imagen}')"></div>
            <div class="product-info">
                <div class="product-category">${producto.categoria}</div>
                <h3 class="product-name">${producto.nombre}</h3>
                <p class="product-description">${producto.descripcion}</p>
                <div class="product-price">${producto.precio}</div>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
    
    // Desactivar filtros
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.classList.remove('active');
        if (button.textContent === 'Todos') {
            button.classList.add('active');
        }
    });
}

// Comprobar si hay un parámetro de búsqueda en la URL
function checkSearchParam() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('search');
    
    if (searchTerm) {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = searchTerm;
            searchProducts();
        }
    }
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', function() {
    // Cargar productos en la página de productos
    cargarProductos();
    
    // Cargar ofertas en la página de ofertas
    cargarOfertas();
    
    // Comprobar si hay parámetros de búsqueda en la URL
    checkSearchParam();
});