document.addEventListener(
    'DOMContentLoaded',
    function () {
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                console.log(data.slip.advice);
                document.querySelector('body').innerHTML =
                    `Conselhos do sábio anão: ${data.slip.advice}`;
            })
            .catch(e => {
                console.error("Deu erro " + e);
            })
    }
);