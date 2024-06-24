const logout = document.getElementById('logout');

document.addEventListener('DOMContentLoaded', () => {
    const innerDetails = document.querySelectorAll('.inner-details');

    innerDetails.forEach((detail) => {
        detail.addEventListener('toggle', (event) => {
            if (detail.open) {
                innerDetails.forEach((el) => {
                    if (el !== detail && el.open) {
                        el.open = false;
                    }
                });
            }
        });
    });
});

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