
      // Cambia el color del fondo cuando el mouse pasa por encima
      const boxHovers = document.querySelectorAll('.boxHover');
      boxHovers.forEach(function(boxHover) {
        boxHover.addEventListener('mouseover', function() {
          boxHover.style.backgroundColor = '#ffd700';
        });
        boxHover.addEventListener('mouseout', function() {
          boxHover.style.backgroundColor = '';
        });
      });
    