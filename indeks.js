const API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/list"
const box = document.getElementById("box")


async function bashky() {
    try {
        const res = await fetch(API)
        const data = await res.json();
        box.innerHTML = data.map(item => `<div class="card">
            <div class="card_img">
            <img src="${item.image}"></img>
            </div> 
            <h4> ${item.title}</h4> 
            <p> ${item.price}</p> 
            <button onclick="openModal('${item.id}')" class="update">UPDATE</button>
            <button onclick="deleteProduct('${item.id}')" class="delete">DELETE</button>
       </div>`).join(" ")
        console.log(data);
    }

    catch (error) {
        console.log(error);

    }
}

bashky()


async function deleteProduct(id) {
    confirm("Өчүрүүнү каалайспы?")
    //  if(response === )
    try {
        const res = await fetch(`${API}/${id}`, {
            method: "DELETE"
        })
        console.log(res);
        bashky()


    }
    catch (error) {
        console.log(error);
    }
}
const content = document.querySelector(".content")
cancelBtn = document.getElementById("cancel")
const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const input3 = document.getElementById("input3")
const saveBtn = document.getElementById("save")

async function openModal(id) {
    content.style.display = "flex"
    try {
        const res = await fetch(`${API}/${id}`)
        const data = await res.json()

        input1.value = data.title
        input2.value = data.price
        input3.value = data.image

        console.log(data);

        saveBtn.onclick = function () {
            updateProduct(data.id)
        }
    }
    catch (error) {
        console.log(error);

    }
}

function closeModal() {
    content.style.display = "none"
}
cancelBtn.onclick = closeModal

async function updateProduct(id) {
    let payload = {
        title: input1.value,
        price: input2.value,
        image: input3.value
    }
    try {
        const res = await fetch(`${API}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)

        })
         if (res.status == 200) {
            closeModal()
            fetchAndRender()
            bashky()
         }

        console.log(res);


    } catch (error) {
        console.log(data.id);

    }
}
///


// const API2 = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/list";