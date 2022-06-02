const openPopUp = document.getElementById('open_pop_up')

const closePopUp = document.getElementById('close_pop_up');

const popUp = document.getElementById('pop_up');

function openPopUp(){
    popUp.classList.add('active');
}

function closePopUp(){
    popUp.classList.remove('active');
}

