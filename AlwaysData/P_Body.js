fetch('/www.dalsantv.ds/AlwaysData/P_Body.html')
    .then(r => r.text())
    .then(t => {
        document.body.insertAdjacentHTML('afterbegin', t);
    });
