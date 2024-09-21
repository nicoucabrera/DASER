function changeCategory() {
    // Ocultar todas las secciones de imágenes
    const sections = document.querySelectorAll('.jobs');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Obtener el valor de la selección y mostrar la sección correspondiente
    const selectedCategory = document.getElementById('categorySelect').value;
    document.getElementById(selectedCategory).style.display = 'flex';
}






