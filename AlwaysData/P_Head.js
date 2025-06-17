fetch('/www.dalsantv.ds/AlwaysData/P_Head.html')
    .then(r => r.text())
    .then(t => {
        document.head.insertAdjacentHTML('beforeend', t);
    });
