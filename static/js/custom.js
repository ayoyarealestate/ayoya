
//Initialize nice select
$(function () {
      var owlslider = jQuery("div.owl-carousel");
        owlslider.each(function () {
        var $this = $(this),
              $items = ($this.data('items')) ? $this.data('items') : 1,
              $loop = ($this.attr('data-loop')) ? $this.data('loop') : true,
              $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
              $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
              $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
              $autohgt = ($this.data('autoheight')) ? $this.data('autoheight') : false,
              $autowdt = ($this.data('autoWidth')) ? $this.data('autoWidth') : true,
              $space = ($this.attr('data-space')) ? $this.data('space') : 30;
         
              $(this).owlCarousel({
                  loop: $loop,
                  items: $items,
                  responsive: {
                    0:{items: $this.data('xx-items') ? $this.data('xx-items') : 1},
                    480:{items: $this.data('xs-items') ? $this.data('xs-items') : 1},
                    768:{items: $this.data('sm-items') ? $this.data('sm-items') : 2},
                    980:{items: $this.data('md-items') ? $this.data('md-items') : 3},
                    1200:{items: $items}
                  },
                  dots: $navdots,
                  autoHeight:$autohgt,
                  margin:$space,
                  nav: $navarrow,
                  navText:["<i class='fa fa-angle-left fa-2x'></i>","<i class='fa fa-angle-right fa-2x'></i>"],
                  autoplay: $autoplay,
                  autoplayHoverPause: true,
              });

       }); 
 });

 
 /* ===================================
       About Box Hover Setting
       ====================================== */
       $(".servicebox2").on("mouseenter", function () {
        $(".servicebox2.active").addClass("servicebox2-green");
    })

    $(".servicebox2").on("mouseleave", function () {
        $(".servicebox2.active").removeClass("servicebox2-green");
    })



    $(".servicebox3").on("mouseenter", function () {
        $(".servicebox3.active").addClass("servicebox3-green");
    })

    $(".servicebox3").on("mouseleave", function () {
        $(".servicebox3.active").removeClass("servicebox3-green");
    })

 
    $('.event-sec .event-cards .ev-card').on('mouseover', function () {
        $('.event-sec .event-cards .ev-card:nth-child(3)').removeClass('active');
    });
    $('.event-sec .event-cards .ev-card').on('mouseleave', function () {
		
		
        $('.event-sec .event-cards .ev-card:nth-child(3)').addClass('active');
    });



    /* ===================================
       About Box Hover Setting
       ====================================== */
    $(".servicebox1").on("mouseenter", function () {
        $(".servicebox1.active").addClass("servicebox1-green");
    })

    $(".servicebox1").on("mouseleave", function () {
        $(".servicebox1.active").removeClass("servicebox1-green");
    })

    

   
 /* ===================================
                blog slider
       =================================== */
    $("#blog-slider").owlCarousel({
        items: 1,
        dots: false,
        autoplay:true,
        autoplayTimeout:5000,
        smartSpeed:500,
        nav: false,
        loop: true,
    });
    $("#blog-slider-1").owlCarousel({
        items: 1,
        dots: false,
        autoplay:true,
        autoplayTimeout:6000,
        smartSpeed:600,
        nav: false,
        loop: true,
    });
    /* ===================================
             ends blog slider
       =================================== */

       const createSVG = (width, height, radius) => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  const rectangle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "rect"
  );

  svg.setAttributeNS(
    "http://www.w3.org/2000/svg",
    "viewBox",
    `0 0 ${width} ${height}`
  );

  rectangle.setAttribute("x", "0");
  rectangle.setAttribute("y", "0");
  rectangle.setAttribute("width", "100%");
  rectangle.setAttribute("height", "100%");
  rectangle.setAttribute("rx", `${radius}`);
  rectangle.setAttribute("ry", `${radius}`);
  rectangle.setAttribute("pathLength", "10");

  svg.appendChild(rectangle);

  return svg;
};

document.querySelectorAll(".sketch-button").forEach((button) => {
  const style = getComputedStyle(button);

  const lines = document.createElement("div");

  lines.classList.add("lines");

  const groupTop = document.createElement("div");
  const groupBottom = document.createElement("div");

  const svg = createSVG(
    button.offsetWidth,
    button.offsetHeight,
    parseInt(style.borderRadius, 10)
  );

  groupTop.appendChild(svg);
  groupTop.appendChild(svg.cloneNode(true));
  groupTop.appendChild(svg.cloneNode(true));
  groupTop.appendChild(svg.cloneNode(true));

  groupBottom.appendChild(svg.cloneNode(true));
  groupBottom.appendChild(svg.cloneNode(true));
  groupBottom.appendChild(svg.cloneNode(true));
  groupBottom.appendChild(svg.cloneNode(true));

  lines.appendChild(groupTop);
  lines.appendChild(groupBottom);

  button.appendChild(lines);

  button.addEventListener("pointerenter", () => {
    button.classList.add("start");
  });

  svg.addEventListener("animationend", () => {
    button.classList.remove("start");
  });
});

  $(".featurebox").on("mouseenter", function () {
        $(".featurebox.active").addClass("featurebox-green");
    })

    $(".featurebox").on("mouseleave", function () {
        $(".featurebox-green.active").removeClass("featurebox-green");
    })


