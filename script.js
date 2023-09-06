function encurtarUrl() {
    //validar se o link existe
    let url = document.getElementById("input-url").value;
    if(!url) {
        alert("para validar e nescessario colocar uma URL valida para usar o serviço");
        return;
    }

    //encurtar o link

    //headers
    let headers = {
        "Content-Type": "application/json",
        "apiKey": "11e8737178cd412ca1b77ceed1ca4e26" 
    }

    //dados
    let linkRequest = {
        destination: url,
        domain: { fullName: "rebrand.ly" }
    }

    fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(linkRequest)
    })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            let inputUrl = document.getElementById("input-url");
            inputUrl.value = json.shortUrl;
        });
}

function copiar() {
    let inputUrl = document.getElementById("input-url");

    inputUrl.select();
    inputUrl.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(inputUrl.value);

    alert(`URL copiada: ${inputUrl.value}`);
}
