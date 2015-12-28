function fnShowPara1() {
    location.hash = "ParagraphModel-1";
}

function fnGetPara1() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/Paragraph1/views/Para.html');

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
