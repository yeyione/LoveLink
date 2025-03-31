async function insertContent() {
    try {
        const headerResponse = await fetch('header-inicio.html');
        const footerResponse = await fetch('footer-inicio.html');

        if (!headerResponse.ok || !footerResponse.ok) {
            throw new Error('No se pudo cargar el encabezado o el pie de página.');
        }

        const headerHtml = await headerResponse.text();
        const footerHtml = await footerResponse.text();

        const headerPlaceholder = document.getElementById('header-placeholder');
        const footerPlaceholder = document.getElementById('footer-placeholder');

        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = headerHtml;
        }

        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = footerHtml;
        }
    } catch (error) {
        console.error('Error al insertar contenido:', error);
    }
}

insertContent();