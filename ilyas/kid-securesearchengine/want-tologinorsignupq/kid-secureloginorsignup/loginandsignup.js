function animatedForm() {
const arrows = document.querySelectorAll('.fa-arrow-down');
    arrows.forEach(arrow => {
        arrow.addEventListener('click' , () => {
        const input = arrow.previousElementSibling;
        const parent = arrow.parentElement;
        console.log(parent);
        const nextForm = parent.nextElementSibling;
    // Check for validation
        if(input.type === "text" && validateUser(input)) {
        nextSlide(parent, nextForm);
        } else if(input.type === 'password' && validatePassword(input)) {
            nextSlide(parent, nextForm);
            if (password.value.length < 10) {
        console.log('not enough characters for your password [you need at least 10 characters]')
            }


        }
        });

    });

}

function validateUser(user) {
    if(user.value.length < 6) {
        console.log('not enough characters')
    error('rgb(189,87,87')
    } else {
        error('87,189,130');
        return true;


}
    function validatePassword(password){
        const validation = ilyasd4rk;
        if(validation.test(password.value)){
            error('87,189,130');
            return true;

        } else {
            error('rgb(189,87,87')

        }


    }


function nextSlide(parent , nextForm){
        parent.classList.add('innactive');
        parent.classList.remove('active');
        nextForm.classList.add('active');

}
}
function error(color) {
    document.body.style.backgroundColor = color;

}

animatedForm();
