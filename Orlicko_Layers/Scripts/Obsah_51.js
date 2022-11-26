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
  document.write("<div id='Menu' style='width:70px; height:40px; position:relative; left:1px; top:1px; z-index:1; visibility:visible;'>");

  document.write("  <TABLE WIDTH='100%' BORDER=0 ALIGN=LEFT vALIGN=TOP CLASS='Menu_L'>");

  document.write("  <TR><TD CLASS='Menu_L'>");

  document.write("<!-- <table id='subMenu0' style='position:relative; left:5px;top: 5px;visibility:hidden;z-index: 1;' cellpadding='3' cellspacing='0' style='border: 1px solid #1871AD' bgcolor='#E7E3E7'> -->");
  document.write("<table id='subMenu0' style='position:relative; left:1px;top: 1px;visibility:hidden;z-index: 1;' cellpadding='3' cellspacing='0' style='border: 1px solid #1871AD' bgcolor='#E7E3E7'>");
  document.write("<tr><td NOWRAP>");
  document.write("• <A TITLE='Kapitola 1' HREF='" + Hloubka + "#Mráz'>Kapitola 1</A><BR>");
  document.write("</td></tr>");
  document.write("<tr><td NOWRAP>");
  document.write("• <A TITLE='Kapitola 2' HREF='" + Hloubka + "#Hernych'>Kapitola 2</A><BR>");
  document.write("</td></tr>");
  document.write("</table>");
  document.write("");

  document.write("<!--   <A HREF='" + Hloubka + "Kontakt.htm' TARGET='desk' onMouseOver=showSubMenu('subMenu0');><B>&nbsp;</B></A> -->");
  document.write("  </TD></TR>");
  document.write("");

  document.write("  </TABLE>");

  document.write("  </DIV>");
}

function PlovHladInit()
{
  var name;
  var layer;
  var i;
  var j;

  j = 0;
  document._float_layers = new Array(Math.max(1, PlovHladInit.arguments.length/2));
  for (i = 0; i < PlovHladInit.arguments.length; i += 2) {
    name  = PlovHladInit.arguments[i];
    if (name == '')
      return;
    if (navigator.appName.indexOf('Netscape', 0) != -1) {
      layer = document.layers[name];
      layer._fl_pos_left = layer.left;
      layer._fl_pos_top  = layer.top;
    } else {
      layer = document.all[name];
      layer._fl_pos_left = layer.style.pixelLeft;
      layer._fl_pos_top  = layer.style.pixelTop;
    }
    layer._fl_pos = PlovHladInit.arguments[i+1];
    if (layer)
      document._float_layers[j++] = layer;
  }

  document._fl_interval = setInterval('PlovHladProcess()', 200);
}

function PageWidth()
{
  return (navigator.appName.indexOf('Netscape', 0) != -1) ? innerWidth  : document.body.clientWidth;
}

function PageHeight()
{
  return (navigator.appName.indexOf('Netscape', 0) != -1) ? innerHeight : document.body.clientHeight;
}

function PlovHladProcess()
{
  if (document._float_layers) {
      var i;
      var layer;
      for (i = 0; i < document._float_layers.length; i++) {
	  layer = document._float_layers[i];
	  if (navigator.appName.indexOf('Netscape', 0) != -1) {
	    if (layer._fl_pos == 1)
	      layer.left = layer._fl_pos_left + window.pageXOffset;
	    else if (layer._fl_pos == 2 || layer._fl_pos == 5) 
	      layer.left = window.pageXOffset;
	    else if (layer._fl_pos == 3 || layer._fl_pos == 6) 
	      layer.left = window.pageXOffset + (PageWidth() - layer.clip.width)/2;
	    else
	      layer.left = window.pageXOffset + PageWidth() - layer.clip.width - 16;
	    if (layer._fl_pos == 1)
	      layer.top = layer._fl_pos_top + window.pageYOffset;
	    else if (layer._fl_pos == 2 || layer._fl_pos == 3 || layer._fl_pos == 4)
	      layer.top = window.pageYOffset;
	    else
	      layer.top  = window.pageYOffset + PageHeight() - layer.clip.height;
	  } else {
	    if (layer._fl_pos == 1)
	      layer.style.pixelLeft = layer._fl_pos_left + document.body.scrollLeft;
	    else if (layer._fl_pos == 2 || layer._fl_pos == 5)
	      layer.style.pixelLeft = document.body.scrollLeft;
	    else if (layer._fl_pos == 3 || layer._fl_pos == 6)
	      layer.style.pixelLeft = document.body.scrollLeft + (PageWidth() - layer.style.pixelWidth)/2;
	    else
	      layer.style.pixelLeft = document.body.scrollLeft + PageWidth()  - layer.style.pixelWidth;
	    if (layer._fl_pos == 1)
	      layer.style.pixelTop = layer._fl_pos_top + document.body.scrollTop;
	    else if (layer._fl_pos == 2 || layer._fl_pos == 3 || layer._fl_pos == 4)
	      layer.style.pixelTop = document.body.scrollTop;
	    else
	      layer.style.pixelTop  = document.body.scrollTop  + PageHeight() - layer.style.pixelHeight;
         }
      }
  }
}
