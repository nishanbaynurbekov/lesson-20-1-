 const API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/list"
const title = document.getElementById('title');
const price = document.getElementById('price');
// const discount = document.getElementById('discount');
const image = document.getElementById('image');
const creatBtn = document.getElementById('btn');

async function createProduct() {
   
    if(title.value === '' || price.value === '' || image.value === '') {
        alert("baardyk inputar tolturunuz");
        return;
    }

    let payload = {
        title: title.value,
        price: price.value,
        discount: 10,
        image: image.value
    }
    try {
        const res = await fetch(API,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        });

        const data = await res.json();
        console.log(res);
        if (res.status === 201) {
            title.value = '';
            price.value = '';
            image.value = '';
        }   
    } catch (error) {
         console.log(error);

         
    }
}

creatBtn.onclick = createProduct;

 