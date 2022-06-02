let cart = {
    'el1':0
}

document.onclick = event => {
    if (event.target.classList.contains('plus')){
        console.log(event.target.dataset.id);
    }
    if (event.target.classList.contains('minus')){
        minusFunction(event.target.dataset.id);
    }
}

const minusFunction = id => {
    if (cart[id]-1 == 0){
        delete cart[id];
    }
    cart[id]--;
    renderCart();
}

const plusFunction = id => {
    cart[id]++;
    renderCart();
}

const renderCart = () => {
    console.log(cart);
}