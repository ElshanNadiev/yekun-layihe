const form = document.querySelector('#add')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const temp = {}
    temp.kitab = data.get('kitab');
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        temp.sekil = event.target.result;
        temp.qiymet = data.get('qiymet');
        temp.elaqe = data.get('elaqe');
        const added = JSON.parse(localStorage.getItem('added')) || [];
        added.push(temp);
        localStorage.setItem('added', JSON.stringify(added));
        alert('Əlavə edildi')
        e.target.reset();
    });
    reader.readAsDataURL(data.get('sekil'));
});