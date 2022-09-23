addEventListener('scroll', () => {
    if (window.scrollY >= 54) {
        document.getElementById('header').style.boxShadow = '0px 1px 8px rgb(86 84 84 / 35%)';
    } else {
        document.getElementById('header').style.boxShadow = 'none';
    }
});

document.getElementById('left').addEventListener('click', () => {
    document.getElementById('left').src = './assets/Btn-2.svg';
    setTimeout(() => {
        document.getElementById('left').src = './assets/Btn-1.svg';
    }, 200);
});

document.getElementById('right').addEventListener('click', () => {
    document.getElementById('right').src = './assets/Btn-2.svg';
    setTimeout(() => {
        document.getElementById('right').src = './assets/Btn-1.svg';
    }, 200);
});

document.getElementById('section4left').addEventListener('click', () => {
    document.getElementById('section4left').src = './assets/Btn-2.svg';
    setTimeout(() => {
        document.getElementById('section4left').src = './assets/Btn-1.svg';
    }, 200);
});

document.getElementById('section4right').addEventListener('click', () => {
    document.getElementById('section4right').src = './assets/Btn-2.svg';
    setTimeout(() => {
        document.getElementById('section4right').src = './assets/Btn-1.svg';
    }, 200);
});

document.getElementById('section5left').addEventListener('click', () => {
    document.getElementById('section5left').src = './assets/Btn-2.svg';
    setTimeout(() => {
        document.getElementById('section5left').src = './assets/Btn-1.svg';
    }, 200);
});

document.getElementById('section5right').addEventListener('click', () => {
    document.getElementById('section5right').src = './assets/Btn-2.svg';
    setTimeout(() => {
        document.getElementById('section5right').src = './assets/Btn-1.svg';
    }, 200);
});

function slide(id) {
    let n = +id;
    x = n;
    document.getElementById(n.toString()).style.zIndex = '1';
    for (let i = 0; i <= n - 1; i++) {
        if (i == n - 1) {
            document.getElementById(i.toString()).style.zIndex = '0';
            document.getElementById(i.toString()).style.left = '-110%';
            document.getElementById(i.toString()).style.transform = 'scale(0.9)';
            document.getElementById(i.toString()).style.right = '0';
            document.getElementById('dot' + i.toString()).src = './assets/circle.svg';
        } else if (i != n - 1) {
            document.getElementById(i.toString()).style.zIndex = '0';
            document.getElementById(i.toString()).style.transform = 'scale(0.9)';
            document.getElementById(i.toString()).style.left = '-150%';
            document.getElementById(i.toString()).style.right = '0';
            document.getElementById('dot' + i.toString()).src = './assets/circle.svg';
        }
        // console.log('i = ', i);

    }

    for (let j = n; j <= 5; j++) {
        if (j == n + 1) {
            document.getElementById(j.toString()).style.zIndex = '0';
            document.getElementById(j.toString()).style.transform = 'scale(0.9)';
            document.getElementById(j.toString()).style.right = '0';
            document.getElementById(j.toString()).style.left = '105%';
            document.getElementById('dot' + j.toString()).src = './assets/circle.svg';
        } else if (j != n + 1) {
            document.getElementById(j.toString()).style.zIndex = '0';
            document.getElementById(j.toString()).style.transform = 'scale(0.9)';
            document.getElementById(j.toString()).style.right = '0';
            document.getElementById(j.toString()).style.left = '125%';
            document.getElementById('dot' + j.toString()).src = './assets/circle.svg';
        }
        // console.log('j = ', j);
    }

    document.getElementById(n.toString()).style.right = '0';
    document.getElementById(n.toString()).style.left = '0';
    document.getElementById(n.toString()).style.zIndex = '1';
    document.getElementById(n.toString()).style.transform = 'scale(1)';
    document.getElementById('dot' + n.toString()).src = './assets/circle-fill.svg';
}


let x = 0;


setInterval(() => {
    if (x <= 5) {
        slide(x);
        x++;
    } else {
        x = 0;
    }
}, 3000);