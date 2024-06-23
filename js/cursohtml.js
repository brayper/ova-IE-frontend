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