
function burger(){
    let icon = document.querySelector('.burger-block');
    let header =  document.querySelector('.header');
    let line_1 =  document.querySelector('.line-1');
    let line_2 =  document.querySelector('.line-2');
    let line_3 =  document.querySelector('.line-3');
    icon.classList.toggle("burger-close");
    header.classList.toggle("header-active");
    line_1.classList.toggle("line-1-special");
    line_2.classList.toggle("line-2-special");
    line_3.classList.toggle("line-3-special");

}