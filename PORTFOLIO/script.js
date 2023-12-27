
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
      document.querySelector("#circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) `;
    });
  }
  
  
  circleMouseFollower();