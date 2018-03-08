var clear = function() {
  while (slate.children[0])
    slate.removeChild(slate.children[0]);
};

var constructCirc = function(x, y, rad) {
  var r =  {
    x: x,
    y: y,
    r: rad,
    color: "lightsteelblue",
    element: document.createElementNS(NS, "circle"),

    display: function() {
      this.element.setAttribute("cx", this.x);
      this.element.setAttribute("cy", this.y);
      this.element.setAttribute("r", this.r);
      this.element.setAttribute("fill", this.color);
      slate.appendChild(this.element);
    },

    remove: function() { slate.removeChild(this.element); },

    circhameleon: function(e,r) {
      console.log("HIIII");
      e.stopPropagation();
      if (r.color == "palevioletred") {
        r.remove();
        addCirc({offsetX: Math.random() * 500, offsetY: Math.random() * 500}); //cheaty but legal
      }
      else {
        r.color = "palevioletred";
        r.display();
      }
    }

  };

  r.element.addEventListener("click", function(e){
    r.circhameleon(e,r);
  });

  return r;
};

var addCirc = function(e) {
  var circ = constructCirc(e.offsetX, e.offsetY, 20);
  circ.display();
};

var NS = "http://www.w3.org/2000/svg";

var slate = document.getElementById("slate");
slate.addEventListener("click", addCirc);
document.getElementById("clear").addEventListener("click", clear);
