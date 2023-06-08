const link = document.querySelector('.sifre1')
link.addEventListener('click', (e) => {
    const login = document.querySelector('#login').value
    const parol = document.querySelector('#parol').value
    if((login !== 'elshannadiev') || (parol !== '31102001elsen')) {
        alert("Ad və ya şifrə yanlışdır")
        e.preventDefault()
    }
})