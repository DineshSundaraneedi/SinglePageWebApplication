function fnShowMobMenu() {
    location.hash = "MobHome";
}

function fnLoadMobMenu() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/Menu/views/menu.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('hide').innerHTML = oEv.currentTarget.responseText;
            }
        }
    };
    fnShowMobMenu();
    oXhr.send();
}
