import logo from '../../assets/images/logo.svg';

function component() {
    let m = document.getElementById('main_div');
    let p = document.createElement('p');
    let img = document.createElement('img');
    m.append(p);
    p.append(img);
    img.src = logo;
    img.alt = 'sample logo';
    m.classList.add("img-class");
}

export default component;