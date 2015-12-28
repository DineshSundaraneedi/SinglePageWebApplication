 function fnShowMenu() {
     location.hash = "Menu";
 }

 function fnGetMenu() {
    alert('page loaded');

     var oXhr = new XMLHttpRequest();

     oXhr.open('GET', 'modules/Menu/views/menu.html');

     oXhr.onreadystatechange = function(oEv) {

         if (oEv.currentTarget.readyState == 4) {
             if (oEv.currentTarget.status != 200) {
                 alert('file not found');
             } else {
                 document.getElementById('menuID').innerHTML = oEv.currentTarget.responseText;
             }
         }
     };
     fnShowMenu();
     oXhr.send();
 }

