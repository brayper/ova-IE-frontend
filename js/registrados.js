const cursos = localStorage.getItem("idCursos");
const disponibles = document.querySelectorAll('.cuadro');
const cursados = cursos.split(", ");
const logout = document.getElementById('logout');
const cuadros = document.querySelectorAll('.cuadro');

disponibles.forEach(curso => {
    if(!cursados.includes(curso.id)){
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


cuadros.forEach(cuadro => {
    cuadro.addEventListener('click', function() {
        const nombre = this.getAttribute('name');

        window.location.href = 'curso'+nombre+'.html';
                    
     })
});