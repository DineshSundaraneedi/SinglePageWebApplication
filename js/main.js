window.onhashchange = fnHasChange;

function fnHasChange(oEv) {
    var sNewToken = location.hash;

    switch (sNewToken) {
        case '#Home':
            fnGetHome();
            break;
        case '#HumanFace':
            fnGetHumanFace();
            break;
        case '#MouseHover':
            fnGetMouseHover();
            break;
        case '#Box-Sizing':
            fnGetBoxSizing();
            break;
        case '#OrderList':
            fnGetOrderList();
            break;
        case '#Button':
            fnGetButton();
            break;
        case '#Ribbon':
            fnGetRibbon();
            break;
        case '#Triangle':
            fnGetTriangle();
            break;
        case '#BorderImage':
            fnGetBorder();
            break;
        case '#TextColumns':
            fnGetTextColumns();
            break;
        case '#EmptyBox':
            fnGetEmptyBox();
            break;
        case '#TextBlur':
            fnGetTextBlur();
            break;
        case '#ParagraphModel-1':
            fnGetPara1();
            break;
        case '#ParagraphModel-2':
            fnGetPara2();
            break;
        case '#AboutUs':
            fnGetAboutUs();
            break;
        case '#Contact':
            fnGetContact();
            break;

        default:

            break;
    }

}
