fetch('AlwaysData/P_Body.html')
    .then(r => r.text())
    .then(t => {
        document.body.insertAdjacentHTML(t, 'afterend');
    });
