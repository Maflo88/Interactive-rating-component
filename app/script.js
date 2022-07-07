let circleBtn = document.querySelectorAll('.circle__btn');
const btn = document.querySelector('.btn');
const rating = document.querySelector('.rating__content');
const thankYou = document.querySelector('.thanks__content');
let vote = document.querySelector('span');
let value;
let starnum = 0;


for (let i=0; i < circleBtn.length; i++){
    circleBtn[i].addEventListener('click', function() {
        var actual = document.getElementsByClassName('active');
        if (actual.length > 0) {
            actual[0].className = actual[0].className.replace(" active no__hover", "");
            value = false;
          }
        this.className += " active" + " no__hover";
        value = true;
        starnum = circleBtn[i].textContent;
        console.log(starnum);
    });
};

//another way to add active class to a list of elements
/*circleBtn.forEach(button => {
    button.addEventListener('click', function() {
        circleBtn.forEach(circle => {
            circle.classList.remove('active');
            value = false;
            console.log(value);
        });
        this.classList.add('active');
        value = true;
    });
});*/

btn.addEventListener('click', function(){
    if (value == true){
        rating.classList.add('hidden');
        thankYou.classList.remove('hidden');
        vote.innerHTML = ' ' + starnum;
    };
});