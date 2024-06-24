const logout = document.getElementById('logout');
const cursos = localStorage.getItem("idCursos");
const disponibles = document.querySelectorAll('.cuadro');
const cursados = cursos.split(", ");

disponibles.forEach(curso => {
    if(cursados.includes(curso.id)){
        var elemento = document.getElementById(curso.id);
        elemento.style.display = 'none';
    }
})

logout.addEventListener('click', function(){
    Swal.fire({
        title: '¡ Correcto !',
        text: 'Sesión finalizada con éxito',
        icon: 'success',
        allowOutsideClick: true, 
        allowEscapeKey: true,
        allowEnterKey: true
    }).then((result) => {
        if(result.isConfirmed){
            window.location.href = 'index.html';
        }
    });
});

const cuadros = document.querySelectorAll('.cuadro');

cuadros.forEach(cuadro => {
    cuadro.addEventListener('click', function() {
        const curso = this.querySelector('h3').textContent;

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


