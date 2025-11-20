// JS Index

// 1. 3D Model Code
// 2. 3D Model Responsive Design Code
// 3. Mobile Menu
// 4. Hero Scroll Animation Code
// 5. Comparison Slider Code



(() => {

  gsap.registerPlugin(ScrollTrigger);
  console.log("JS File Connected");

  // 3D Model Code
    const hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [
    {
      title: "Comfortable Material",
      text: "Three pairs of ultra comfortable silicone tips are icluded.",
      img: "images/ear-listen-solid-full.svg",
      alt: "Earbuds Promo Poster"
    },
    {
      title: "Ergonomic Design",
      text: "Optimized for human performance, health, and well-being.",
      img: "images/headphones-solid-full.svg",
      alt: "Earbuds Promo Poster"
      
    },
    {
      title: "Ultra-Fast Charging",
      text: "Charging your earbuds in 30 minutes or less with our hyper charging technology.",
      img: "images/gauge-simple-high-solid-full.svg",
      alt: "Earbuds Promo Poster"
      
    }
  ];

  function loadInfo() {
    infoBoxes.forEach((infoBox, index) => {
      // console.log(index + 1);
      let selected = document.querySelector(`#hotspot-${index+1}`);
      // console.log(selected);

      // creates an image
      const imageElement = document.createElement('img');
      imageElement.src = infoBox.img;
      imageElement.alt = infoBox.alt;

      // console.log(imageElement);

      // creates an h2 element
      const titleElement = document.createElement('h3');
      titleElement.textContent = infoBox.title;

      

      // creates a p element
      const textElement = document.createElement('p');
      textElement.textContent = infoBox.text;

      // adds the created elements to the dom
      selected.appendChild(imageElement);
      selected.appendChild(titleElement);
      selected.appendChild(textElement);
      

    });

  }

    loadInfo();


   function showInfo() {
    // console.log("this.slot");
    //console.log(`#${this.slot}`);
    //since the slot value matches the id value I can use the slot value as a selector to get to the div I want.
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, { duration: 1, autoAlpha: 1 });
  }

  function hideInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, { duration: 1, autoAlpha: 0 });
  }
  
 hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

  //3D Model Responsive Design Code
function responsiveAnnotations () {

    const mobileAnnotationsWindow = document.querySelector(".annotations-mobile");
    const annotations = document.querySelectorAll(".HotspotAnnotation");

    
    if(window.innerWidth < 1200) {
    

    annotations.forEach((annotation) => {
      mobileAnnotationsWindow.appendChild(annotation);
      annotation.style.visibility = "visible"
    });
  } else {

    infoBoxes.forEach((_, index) => {
      const originalParent = document.querySelector(`button[slot="hotspot-${index+1}"]`);
      if (`#hotspot-${index+1}`) {
        const mobileAnnotation = document.querySelector(`#hotspot-${index+1}`);
        // console.log(originalParent);
        // console.log(mobileAnnotaion);

        if (originalParent && mobileAnnotation) {
          originalParent.appendChild(mobileAnnotation);
          mobileAnnotation.style.visibility = "hidden";
          mobileAnnotation.style.opacity = "1";
        }
      }
      
      
    });
  };
}

window.addEventListener("load", responsiveAnnotations);

window.addEventListener("resize", responsiveAnnotations);


// Mobile Menu

(function() {
    const mobileMenuBtn = document.querySelector(".mobileIcon");
    const closeMobileMenuBtn = document.querySelector("#mobileMenuCloseBtn");

    function toggleMobileMenu() {
        const mobileMenu = document.querySelector("#mobileMenu");

        if (mobileMenu.classList.contains("open")) {
            mobileMenu.classList.remove("open");
        } else {
            mobileMenu.classList.add("open") 
        }
    }

    mobileMenuBtn.addEventListener("click",toggleMobileMenu);
    closeMobileMenuBtn.addEventListener("click",toggleMobileMenu);
})();


// Hero Scroll Animation Code



  const canvas = document.querySelector("#explode-view");
  const context = canvas.getContext("2d");

  canvas.width = 1920;
  canvas.height = 1080;

  // the amout of still frames you have
  const frameCount = 384;

  // array to hold our images
  const images = [];

  // object will hold the current frame
  // we will use green sock to animate the frame property
  const buds = {
      frame: 0
  }
 

  for (let i = 0; i < frameCount; i++) {
    const image = new Image();

    image.src = `images/scrollAnimation_${(i).toString().padStart(5, '0')}.jpg`;
    
    images.push(image);

  }

  

  gsap.to(buds, {
    frame: frameCount - 1,
    snap: "frame",
    scrollTrigger: {
      trigger: "#explode-view",
      pin: true,
      scrub:1
    },
    onUpdate: render
  });

  images[0].addEventListener("load", render);


  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[buds.frame], 0, 0);
  }
  

  // Comparison Slider Code
  const divisor = document.querySelector("#divisor");
  const slider = document.querySelector("#slider");

  function moveDivisor() {
    divisor.style.width = `${slider.value}%`;
  };

  function resetSlider() {
    slider.value = 50;
  };

  slider.addEventListener("input", moveDivisor);
  window.addEventListener("load", resetSlider);


})();