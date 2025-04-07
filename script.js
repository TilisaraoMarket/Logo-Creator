function changeShape(shape) {
    const preview = document.getElementById('logoPreview');
    const backgroundLayer = document.getElementById('backgroundLayer');
    const shapes = document.querySelectorAll('.shape-option');
    
    shapes.forEach(s => s.classList.remove('selected'));
    document.querySelector(`.shape-option.${shape}`).classList.add('selected');

    // Eliminar todas las clases de forma
    preview.classList.remove('circle', 'rounded');
    
    // Agregar la nueva clase de forma
    if (shape !== 'square') {
        preview.classList.add(shape);
    }
    
    currentShape = shape;
}

function selectBackground(style) {
    const backgroundLayer = document.getElementById('backgroundLayer');
    backgroundLayer.style.backgroundImage = 'none';
    backgroundLayer.style.opacity = 1;
    
    // Mantener la forma actual aplicando el border-radius heredado
    backgroundLayer.style.borderRadius = 'inherit';
    
    switch(style) {
        case 'gradient1':
            backgroundLayer.style.background = 'linear-gradient(45deg, #833AB4, #C13584, #E1306C)';
            break;
        case 'gradient2':
            backgroundLayer.style.background = 'linear-gradient(45deg, #405DE6, #5B51D8)';
            break;
        case 'gradient3':
            backgroundLayer.style.background = 'linear-gradient(45deg, #11998e, #38ef7d)';
            break;
        case 'solid1':
            backgroundLayer.style.background = '#000000';
            break;
        case 'solid2':
            backgroundLayer.style.background = '#E1306C';
            break;
        case 'solid3':
            backgroundLayer.style.background = '#4A90E2';
            break;
        case 'solid4':
            backgroundLayer.style.background = '#FFC107';
            break;
        case 'solid5':
            backgroundLayer.style.background = '#26A69A';
            break;
    }
    currentBackground = style;
}