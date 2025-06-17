fetch('AlwaysData/P_Head.html')
    .then(r => r.text())
    .then(t => {
        document.head.insertAdjacentHTML('beforeend', t);
    });
