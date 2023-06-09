const div = document.querySelector('.nature')
div.innerHTML = '';
const added = JSON.parse(localStorage.getItem('added')) || []
added.forEach(item => {
    const temp = `<div class="nature31">
        <img class="nnn" src="${item.sekil}" alt="nature2">
        <p>${item.kitab}<br>${item.elaqe}</p>
        <br>
        <h4>${item.qiymet} azn</h4>
        <p class="al1">
            <button class="delete">Sil</button>
            <a class="al" href="#">Sifariş et</a>
        </p>
    </div>`;
    div.innerHTML += temp    
    const btns = document.querySelectorAll('.delete');
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const book = e.target.parentElement.parentElement.children[0].src;
            let id = -1;
            for(let i=0; i<added.length; i++) {
                if(added[i].sekil === book) {
                    id = i;
                    break;
                }
            }
            if(id >= 0) {
                added.splice(id, 1);
                localStorage.setItem('added', JSON.stringify(added));
                location.reload();
            }
        })
    })
})

