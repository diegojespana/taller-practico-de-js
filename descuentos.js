const btn = document.querySelector('#calcular');
const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento (){
    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value
    let discount;

    if (!price || !coupon) {
        pResult.innerHTML = 'Por favor ingresa el precio y/o cupón.';
        return;
    } 

    switch (coupon) {
        case 'diez':
            discount = 10;
            break;
        case 'quince':
            discount = 15;
            break;

        default:
            pResult.innerHTML = 'El cupón no es válido.';
            return;
    }

/*     if (coupon == 'diez'){
        discount = 10;
    } else if (coupon=='quince'){
        discount = 15;
    } else {
        pResult.innerHTML = 'El cupón no es válido.';
        return;
    }
 */





    const newPrice = (price * (100 - discount)) / 100;

    pResult.innerHTML = 'El nuevo precio con descuento es $' + newPrice;
}