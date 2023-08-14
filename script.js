document.getElementById("myinput").onclick = function () {
    var link = document.getElementById("linkinput").value;
    var data = {
        "domain": "sayed.click",
        "originalURL": link,
        "allowDuplicates": false
    };
    fetch('https://api.short.cm/links/public', {
        method: 'post',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': 'pk_EMxhiiczgumWQ1S1'
        },
        body: JSON.stringify(data)
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        document.getElementById("message").innerHTML = "Your short link is ready!";
        document.getElementById("shortURL").textContent = data.shortURL;
        document.getElementById("shortLink").style.display = "block";
    });
};

document.getElementById("copyButton").onclick = function () {
    var shortURL = document.getElementById("shortURL").textContent;
    var tempInput = document.createElement("input");
    tempInput.value = shortURL;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Display popup notification
    var popup = document.getElementById("popup");
    popup.style.display = "block";
    setTimeout(function () {
        popup.style.display = "none";
    }, 1500);
};