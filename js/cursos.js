const logout = document.getElementById('logout');

logout.addEventListener('click', function(){
    Swal.fire({
        title: '¡ Correcto !',
        text: 'Sesión finalizada con éxito',
        icon: 'success',
        //timer: 4000, 
        //timerProgressBar: true,
        allowOutsideClick: true, 
        allowEscapeKey: true,
        allowEnterKey: true
    }).then((result) => {
        if(result.isConfirmed){
            window.location.href = 'index.html';
        }
    });
});

// Selecciona todos los elementos con la clase 'cuadro'
const cuadros = document.querySelectorAll('.cuadro');

// Itera sobre cada cuadro y agrega un event listener para el clic
cuadros.forEach(cuadro => {
    cuadro.addEventListener('click', function() {
        const curso = this.querySelector('h3').textContent;

        // Muestra un cuadro de diálogo de confirmación con SweetAlert2
        Swal.fire({
            text: `¿Deseas confirmar el registro al curso ${curso}?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí, confirmar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: '¡Registrado!',
                    text: `Has sido registrado correctamente en el curso ${curso}`,
                    icon: 'success'
                }).then((result) => {
                    if(result.isConfirmed){
                        window.location.href = 'cursohtml.html';
                    }
                });
            }
        });
    });
});


