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