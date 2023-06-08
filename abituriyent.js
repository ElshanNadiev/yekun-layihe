const div = document.querySelector('.nature')
div.innerHTML = '';
const added = JSON.parse(localStorage.getItem('added')) || []
added.forEach(item => {
    const temp = `<div class="nature31">
        <img class="nnn" src="${item.sekil}" alt="nature2">
        <p>${item.kitab}<br>${item.elaqe}</p>
        <br>
        <h4>${item.qiymet} azn</h4>
        <p class="al1"><a class="al" href="#">Sifariş et</a></p>
    </div>`;
    div.innerHTML += temp    
    
})

