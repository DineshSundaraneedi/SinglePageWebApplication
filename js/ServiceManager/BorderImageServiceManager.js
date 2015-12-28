function fnShowBorder() {
    location.hash = "BorderImage";
}

function fnGetBorder() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/BorderImage/views/Border.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('load').innerHTML = oEv.currentTarget.responseText;
            }
        }
    };
    oXhr.send();
}
