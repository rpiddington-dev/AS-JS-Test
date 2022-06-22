function createPaint(parent) {
  var canvas1 = createDomElement("canvas", {
    width: 900,
    height: 500
  });
  var canvas2 = createDomElement("canvas", {
    width: 900,
    height: 500
  });

  var cx = canvas1.getContext("2d");
  var cx2 = canvas2.getContext("2d");

  var toolbar1 = createDomElement("div", {
    class: "toolbar"
  });
  var toolbar2 = createDomElement("div", {
    class: "toolbar"
  });

  for (var name in controls) {
    toolbar1.appendChild(controls[name](cx));
    toolbar2.appendChild(controls[name](cx2));
  }

  var panel1 = createDomElement("div", {
    class: "picturepanel1"
  }, canvas1);
  var panel2 = createDomElement("div", {
    class: "picturepanel2"
  }, canvas2);
  parent.appendChild(createDomElement("div", null, panel1, toolbar1));
  parent.appendChild(createDomElement("div", null, panel2, toolbar2));
  panel1.appendChild(toolbar1);
  $(panel2).append($(toolbar2));

  $(document).ready(function () {
    $("#tab1C").append($(panel1));
    $("#tab2C").append($(panel2));
  });
}
//show/hide content based on tab selected
function openCanvas(evt, canvasName) {
  var i, canvasContent, tablink;

  canvasContent = document.getElementsByClassName("container");
  for(i = 0; i < canvasContent.length; i++) {
    canvasContent[i].style.display = "none";
  }
  tablink = document.getElementsByClassName("tablink");
  for(i = 0; i < tablink.length; i++) {
    tablink[i].className = tablink[i].className.replace("active", "");
  }
  document.getElementById(canvasName).style.display = "block";
  evt.currentTarget.className += " active";
}