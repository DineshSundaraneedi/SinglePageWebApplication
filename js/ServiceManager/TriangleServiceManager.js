function fnShowTriangle() {
    location.hash = "Triangle";
}

function fnGetTriangle() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/Triangle/views/Triangle.html');

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
