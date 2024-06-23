const boton = document.querySelector('swal2-confirm swal2-styled');

const logout = document.getElementById('logout');

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === '' || password === '') {
    } else {
        if (username === 'brayanperutty@gmail.com' && password === '12345') {
            Swal.fire({
                title: '¡ Correcto !',
                text: 'Inicio de sesión realizado con éxito',
                icon: 'success',
                //timer: 4000, 
                //timerProgressBar: true,
                allowOutsideClick: true, 
                allowEscapeKey: true,
                allowEnterKey: true
            }).then((result) => {
                if(result.isConfirmed){
                    window.location.href = 'cursos.html';
                }
            });
        } else {
            Swal.fire({
                title: '¡ Incorrecto !',
                text: 'Verifique sus datos, por favor',
                icon: 'error',
                //timer: 4000, 
                //timerProgressBar: true,
                allowOutsideClick: true, 
                allowEscapeKey: true,
                allowEnterKey: true
            });
        }
        
        
    }
});