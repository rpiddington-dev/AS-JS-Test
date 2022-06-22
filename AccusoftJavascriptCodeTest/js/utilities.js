  createDomElement = function (name, attributes) {
    var node = document.createElement(name);
    if (attributes) {
      for (var attr in attributes)
        if (attributes.hasOwnProperty(attr))
          node.setAttribute(attr, attributes[attr]);
    }
    for (var i = 2; i < arguments.length; i++) {
      var child = arguments[i];
      if (typeof child == "string")
        child = document.createTextNode(child);
      node.appendChild(child);
    }
    return node;
  };

  relativePos = function (event, element) {
    var rect = element.getBoundingClientRect();
    return {
      x: Math.floor(event.clientX - rect.left),
      y: Math.floor(event.clientY - rect.top)
    };
  };

  trackDrag = function (onMove, onEnd) {
    function end(event) {
      removeEventListener("mousemove", onMove);
      removeEventListener("mouseup", end);
    }
    addEventListener("mousemove", onMove);
    addEventListener("mouseup", end);
  };

  loadImageURL = function (cx, url) {
    var image = document.createElement("img");
    image.addEventListener("load", function () {
      var color = cx.fillStyle,
        size = cx.lineWidth;
      cx.canvas.width = image.width;
      cx.canvas.height = image.height;
      cx.drawImage(image, 0, 0);
      cx.fillStyle = color;
      cx.strokeStyle = color;
      cx.lineWidth = size;
    });
    image.src = url;
  };

  randomPointInRadius = function (radius) {
    for (;;) {
      var x = Math.random() * 2 - 1;
      var y = Math.random() * 2 - 1;
      if (x * x + y * y <= 1)
        return {
          x: x * radius,
          y: y * radius
        };
    }
  };
