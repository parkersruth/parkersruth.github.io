
function toggleFish() {
  var fishy = document.getElementById("fishbtn").getAttribute("fishy");
  if (fishy == "true") {
    document.getElementById("fishbtn").setAttribute("fishy", "false");
    document.getElementById("particles-js").style.visibility = "hidden";
  } else {
    document.getElementById("fishbtn").setAttribute("fishy", "true");
    document.getElementById("particles-js").style.visibility = "visible";
  }
}

particlesJS('particles-js',

{
  "particles": {
    "number": {
      "value": 30,
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "shape": {
      "type": "image",
      "image": {
        "src": "/img/fish.png",
        "width": 100,
        "height": 100
      }
    },
    "size": {
      "value": 25,
      "random": false,
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "left",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false,
      },
      "resize": true
    },
    "modes": {
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3,
      },
    }
  },
  "retina_detect": true
}

);
