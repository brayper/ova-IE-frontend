const boton = document.querySelector('swal2-confirm swal2-styled');

const logout = document.getElementById('logout');

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var user = document.getElementById('correo').value;
    var pass = document.getElementById('password').value;

    const datos = {
        correo: user,
        password: pass
    };

    fetch('http://localhost:8080/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        if(data.nombre){
            localStorage.setItem("nombre", data.nombre)
            fetch('http://localhost:8080/user/cursando/'+correo.value, {
            }).then(response => response.json())
            .then(data => {
                localStorage.setItem("idCursos", data);
               } 
            );

            Swal.fire({
                title: '¡ Correcto !',
                text: 'Inicio de sesión realizado con éxito',
                icon: 'success',
                allowOutsideClick: true, 
                allowEscapeKey: true,
                allowEnterKey: true
            }).then((result) => {
                if(result.isConfirmed){
                    window.location.href = 'cursos.html';
                }
            });
        }else{
            Swal.fire({
                title: '¡ Incorrecto !',
                text: 'Verifique sus datos, por favor',
                icon: 'error',
                allowOutsideClick: true, 
                allowEscapeKey: true,
                allowEnterKey: true
            });
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

