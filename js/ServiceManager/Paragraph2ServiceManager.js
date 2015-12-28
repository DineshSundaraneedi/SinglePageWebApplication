function fnShowPara2() {
    location.hash = "ParagraphModel-2";
}

function fnGetPara2() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/Paragraph2/views/FirstLine.html');

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
