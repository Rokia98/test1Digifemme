let BtnRouge =  document.getElementById('btn-rouge');
let BtnVert = document.getElementById('btn-vert');
let BtnBlue = document.getElementById('btn-bleu');
let btnReset = document.getElementById('reset');
let body = document.body;




BtnRouge.addEventListener('click',function() {
    body.style.backgroundColor ='red';

});
BtnBlue.addEventListener('click',function() {
    body.style.backgroundColor = 'blue';
});
BtnVert.addEventListener('click',function() {
    body.style.backgroundColor = 'green';
});
btnReset.addEventListener('click',function() {
    body.style.background = '';
});








