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

function NapsatMenu(Hloubka, Menu, PodMenu, Lomitko) {
  document.write("  <TABLE WIDTH='100%' BORDER=0 ALIGN=LEFT vALIGN=TOP CLASS='Menu_L'>");

  document.write("  <TR><TD CLASS='Menu_L'>");
  document.write("  &nbsp;<A HREF='" + Hloubka + "Home.htm' TARGET='desk' onMouseOver=hide();><B>HOME</B></A>");
  document.write("  </TD></TR>");
  document.write("");

  document.write("  <TR><TD CLASS='Menu_L'>");
  document.write("  &nbsp;<A HREF='" + Hloubka + "Home.htm' TARGET='desk' onMouseOver=hide();><B>výroba ponožek</B></A><BR>");
  document.write("  ");
  document.write("  &nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;<A HREF='" + Hloubka + "Home.htm' TARGET='desk' onMouseOver=hide();><B>katalog výrobkù</B></A><BR>");
  document.write("  &nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;<A HREF='" + Hloubka + "Prodej.htm' TARGET='desk' onMouseOver=hide();><B>ON-LINE prodej</B></A>");
  document.write("  </TD></TR>");
  document.write("");

  document.write("  <TR><TD CLASS='Menu_L'>");
  document.write("  &nbsp;<A HREF='" + Hloubka + "LPG_rekonstr.htm' TARGET='desk' onMouseOver=hide();><B>pøestavba aut na LPG</B></A>");
  document.write("  <BR>");
  document.write("  &nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;<A HREF='" + Hloubka + "Home.htm' TARGET='desk' onMouseOver=hide();><B>návratnost investice</B></A>");
  document.write("  </TD></TR>");
  document.write("");

  document.write("  <TR><TD CLASS='Menu_L'>");
  document.write("  &nbsp;<A HREF='" + Hloubka + "Home.htm' TARGET='desk' onMouseOver=hide();><B>èerpací stanice LPG</B></A>");
  document.write("  </TD></TR>");
  document.write("");

  document.write("  <TR><TD CLASS='Menu_L'>");
  document.write("  &nbsp;<A HREF='" + Hloubka + "Home.htm' TARGET='desk' onMouseOver=hide();><B>zabezpeèení automobilù</B></A>");
  document.write("  </TD></TR>");
  document.write("");

  document.write("  <TR><TD CLASS='Menu_L'>");

  document.write("<table id='subMenu0' style='position:absolute; left:115px;top: 35px;visibility:hidden;z-index: 1;' cellpadding='3' cellspacing='0' style='border: 1px solid #1871AD' bgcolor='#E7E3E7'>");
  document.write("<tr><td NOWRAP>");
  document.write("• <A TITLE='golfový simulátor' HREF='" + Hloubka + "Indoor.htm'>INDOOR</a><br>");
  document.write("</td></tr>");
  document.write("<tr><td NOWRAP>");
  document.write("• <A TITLE='høištì pro trénink dlouhé a krátké hry' HREF='" + Hloubka + "Range.htm'>DRIVING RANGE</a><br>");
  document.write("</td></tr>");
  document.write("</table>");
  document.write("");

  document.write("<!--   <A HREF='" + Hloubka + "Kontakt.htm' TARGET='desk' onMouseOver=showSubMenu('subMenu0');><B>Kontakt</B></A> -->");
  document.write("  &nbsp;<A HREF='" + Hloubka + "Kontakt.htm' TARGET='desk' onMouseOver=hide('');><B>Kontakt</B></A>");
  document.write("  </TD></TR>");
  document.write("");

  document.write("  <TR><TD CLASS='Menu_L'>");
  document.write("  &nbsp;<BR>&nbsp;");
  document.write("  <A HREF='Home.htm'><IMG SRC='" + Hloubka + Lomitko + "Images/Flags/CZ.bmp' BORDER=1></A>&nbsp;");
  document.write("  <A HREF='Home.htm'><IMG SRC='" + Hloubka + Lomitko + "Images/Flags/UK.bmp' BORDER=1></A>&nbsp;");
  document.write("  <A HREF='Home.htm'><IMG SRC='" + Hloubka + Lomitko + "Images/Flags/GR.bmp' BORDER=1></A>&nbsp;");
  document.write("  <BR>");

  document.write("  </TD></TR>");

  document.write("  </TABLE>");
}
