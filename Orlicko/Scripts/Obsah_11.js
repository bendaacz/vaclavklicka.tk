function showSubMenu(menuName) {
  hide();
  var currentElement = document.getElementById(menuName);
  currentElement.style.visibility = "visible";
}

function hide(){
  var pocet = 1;
  for (i=0;i<pocet;i++) {
    var currentElement = document.getElementById("subMenu"+i);
    currentElement.style.visibility = "hidden";
  }
}

function NapsatObsah(Hloubka, Menu, PodMenu, Lomitko) {
  document.write("  <TABLE WIDTH='100%' BORDER=0 ALIGN=LEFT vALIGN=TOP CLASS='Menu_L'>");

  document.write("  <TR><TD CLASS='Menu_L'>");

  document.write("<!-- <table id='subMenu0' style='position:absolute; left:25px;top: 35px;visibility:hidden;z-index: 1;' cellpadding='3' cellspacing='0' style='border: 1px solid #1871AD' bgcolor='#E7E3E7'> -->");
  document.write("<table id='subMenu0' style='position:relative; left:1px;top: 70px;visibility:hidden;z-index: 1;' cellpadding='3' cellspacing='0' style='border: 1px solid #1871AD' bgcolor='#E7E3E7'>");
  document.write("<tr><td NOWRAP>");
  document.write("• <A TITLE='Kapitola 1' HREF='" + Hloubka + "#Mráz'>Kapitola 1</A><BR>");
  document.write("</td></tr>");
  document.write("<tr><td NOWRAP>");
  document.write("• <A TITLE='Kapitola 2' HREF='" + Hloubka + "#Hernych'>Kapitola 2</A><BR>");
  document.write("</td></tr>");
  document.write("</table>");
  document.write("");

  document.write("  <A HREF='" + Hloubka + "Kontakt.htm' TARGET='desk' onMouseOver=showSubMenu('subMenu0');><B>OBSAH</B></A>");
  document.write("  </TD></TR>");
  document.write("");

  document.write("  </TABLE>");
}
