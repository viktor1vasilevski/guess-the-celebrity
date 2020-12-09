var allBoxes = document.querySelectorAll('.box');
var input = document.getElementById('input');
const theAnswer = "MONICA BELLUCCI";

allBoxes.forEach(element => {
    element.addEventListener('click', function (event) {
        var theBox = event.target;
        gsap.from(theBox, { duration: 4, rotationX: 720 });

    });
});

input.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        if (theAnswer === input.value.toUpperCase()) {
            allBoxes.forEach(element => {
                element.style.display = 'none';
            });
        }
        else {
            allBoxes.forEach(element => {
                input.value = '';
               element.classList.add('show-red-color');
               setTimeout(function(){
                   element.classList.remove('show-red-color');
               },500);
           });
        }
    }
})
