/*!
 * parallax.js v1.5.0 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */

 $(function titlePin() { // wait for document ready
     // build scene
     var controller = new ScrollMagic.Controller(); 

     var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 800})
             .setPin("#pin1")
            // .addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
            .addTo(controller);
   });
$(function titleColor() { // wait for document ready
  var controller = new ScrollMagic.Controller(); 
     new ScrollMagic.Scene({
              triggerElement: "#trigger",
              triggerHook: 0.9, // show, when scrolled 10% into view
              duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
              offset: 200 // move trigger to center of element
            })
            .setClassToggle("img", "color") // add class toggle
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
          }); 


$(function secondtitleShow() {
    var controller = new ScrollMagic.Controller();    

    new ScrollMagic.Scene({
        triggerElement: "#activate",
        triggerHook: 0.1, // show, when scrolled 10% into view
        duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 600 // move trigger to center of element
    })
    .setClassToggle("#scrollMagic", "visible") // add class to reveal
    //.addIndicators({name: "reveal"}) // add indicators (requires plugin)
    .addTo(controller);
});


$(function slideBox1() {
  var controller = new ScrollMagic.Controller();
  //tween
  var tween = TweenMax.staggerFromTo(".box", 2, {left: 1000}, {left: 0, ease: Power3.easeOut}, 0.15);

  // build scene
  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger4", duration: 600,
    triggerHook: 0.1, // show, when scrolled 10% into view
    duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 200 // move trigger to center of element
})
          .setTween(tween)
         // .addIndicators({name: "staggering"}) // add indicators (requires plugin)
          .addTo(controller);
    
});

$(function slideBox2() {
  var controller = new ScrollMagic.Controller();
  //tween
  var tween = TweenMax.staggerFromTo(".box-2", 2, {left: 0}, {left: 800, ease: Power3.easeOut}, 0.15);

  // build scene
  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger5", duration: 600,
    triggerHook: 0.1, // show, when scrolled 10% into view
    duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 200 // move trigger to center of element
})
          .setTween(tween)
          //.addIndicators({name: "staggering"}) // add indicators (requires plugin)
          .addTo(controller);
    
});


(function slideBox3() {
  var controller = new ScrollMagic.Controller();
  //tween
  var tween = TweenMax.staggerFromTo(".box-3", 2, {left: 1000}, {left: 0, ease: Power3.easeOut}, 0.15);

  // build scene
  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger6", duration: 700,
    triggerHook: 0.1, // show, when scrolled 10% into view
    duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 10 // move trigger to center of element
})
          .setTween(tween)
         // .addIndicators({name: "staggering"}) // add indicators (requires plugin)
          .addTo(controller);
    
});

$(function lastParagraph() {
    var controller = new ScrollMagic.Controller();    

    new ScrollMagic.Scene({
        triggerElement: "#activateLast",
        triggerHook: 0.1, // show, when scrolled 10% into view
        duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 10 // move trigger to center of element
    })
    .setClassToggle("#lastP", "visible") // add class to reveal
    //.addIndicators({name: "reveal"}) // add indicators (requires plugin)
    .addTo(controller);
});

$(function bikeDraw() { // wait for document ready
     // build scene
     var controller = new ScrollMagic.Controller(); 

     var revealElements = document.getElementsByClassName("svg-elem-1");
    for (var i=0; i<revealElements.length; i++) { // create a scene for each element
      new ScrollMagic.Scene({
                triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                offset: 50,                        // start a little later
                triggerHook: 0.9,
              })
              .setClassToggle(revealElements[i], "visible") // add class toggle
              //.addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
              .addTo(controller);
    }
   });
$(function bikeDraw() { // wait for document ready
     // build scene
     var controller = new ScrollMagic.Controller(); 

     var revealElements = document.getElementsByClassName("svg-elem-2");
    for (var i=0; i<revealElements.length; i++) { // create a scene for each element
      new ScrollMagic.Scene({
                triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                offset: 50,                        // start a little later
                triggerHook: 0.9,
              })
              .setClassToggle(revealElements[i], "visible") // add class toggle
             // .addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
              .addTo(controller);
    }
   });
$(function bikeDraw() { // wait for document ready
     // build scene
     var controller = new ScrollMagic.Controller(); 

     var revealElements = document.getElementsByClassName("svg-elem-3");
    for (var i=0; i<revealElements.length; i++) { // create a scene for each element
      new ScrollMagic.Scene({
                triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                offset: 50,                        // start a little later
                triggerHook: 0.9,
              })
              .setClassToggle(revealElements[i], "visible") // add class toggle
             // .addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
              .addTo(controller);
    }
   });
$(function bikeDraw() { // wait for document ready
     // build scene
     var controller = new ScrollMagic.Controller(); 

     var revealElements = document.getElementsByClassName("svg-elem-4");
    for (var i=0; i<revealElements.length; i++) { // create a scene for each element
      new ScrollMagic.Scene({
                triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                offset: 50,                        // start a little later
                triggerHook: 0.9,
              })
              .setClassToggle(revealElements[i], "visible") // add class toggle
             // .addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
              .addTo(controller);
    }
   });
$(function bikeDraw() { // wait for document ready
     // build scene
     var controller = new ScrollMagic.Controller(); 

     var revealElements = document.getElementsByClassName("svg-elem-5");
    for (var i=0; i<revealElements.length; i++) { // create a scene for each element
      new ScrollMagic.Scene({
                triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                offset: 50,                        // start a little later
                triggerHook: 0.9,
              })
              .setClassToggle(revealElements[i], "visible") // add class toggle
             // .addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
              .addTo(controller);
    }
   });
$(function bikeDraw() { // wait for document ready
     // build scene
     var controller = new ScrollMagic.Controller(); 

     var revealElements = document.getElementsByClassName("svg-elem-6");
    for (var i=0; i<revealElements.length; i++) { // create a scene for each element
      new ScrollMagic.Scene({
                triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                offset: 50,                        // start a little later
                triggerHook: 0.9,
              })
              .setClassToggle(revealElements[i], "visible") // add class toggle
            //  .addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
              .addTo(controller);
    }
   });
$(function bikeDraw() { // wait for document ready
     // build scene
     var controller = new ScrollMagic.Controller(); 

     var revealElements = document.getElementsByClassName("svg-elem-7");
    for (var i=0; i<revealElements.length; i++) { // create a scene for each element
      new ScrollMagic.Scene({
                triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                offset: 50,                        // start a little later
                triggerHook: 0.9,
              })
              .setClassToggle(revealElements[i], "visible") // add class toggle
             // .addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
              .addTo(controller);
    }
   });
$(function bikeDraw() { // wait for document ready
     // build scene
     var controller = new ScrollMagic.Controller(); 

     var revealElements = document.getElementsByClassName("svg-elem-8");
    for (var i=0; i<revealElements.length; i++) { // create a scene for each element
      new ScrollMagic.Scene({
                triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                offset: 50,                        // start a little later
                triggerHook: 0.9,
              })
              .setClassToggle(revealElements[i], "visible") // add class toggle
            //  .addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
              .addTo(controller);
    }
   });
$(function bikeDraw() { // wait for document ready
     // build scene
     var controller = new ScrollMagic.Controller(); 

     var revealElements = document.getElementsByClassName("svg-elem-9");
    for (var i=0; i<revealElements.length; i++) { // create a scene for each element
      new ScrollMagic.Scene({
                triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                offset: 50,                        // start a little later
                triggerHook: 0.9,
              })
              .setClassToggle(revealElements[i], "visible") // add class toggle
             // .addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
              .addTo(controller);
    }
   });
$(function bikeDraw() { // wait for document ready
     // build scene
     var controller = new ScrollMagic.Controller(); 

     var revealElements = document.getElementsByClassName("svg-elem-10");
    for (var i=0; i<revealElements.length; i++) { // create a scene for each element
      new ScrollMagic.Scene({
                triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                offset: 50,                        // start a little later
                triggerHook: 0.9,
              })
              .setClassToggle(revealElements[i], "visible") // add class toggle
             // .addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
              .addTo(controller);
    }
   });
$(function bikeDraw() { // wait for document ready
     // build scene
     var controller = new ScrollMagic.Controller(); 

     var revealElements = document.getElementsByClassName("svg-elem-11");
    for (var i=0; i<revealElements.length; i++) { // create a scene for each element
      new ScrollMagic.Scene({
                triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                offset: 50,                        // start a little later
                triggerHook: 0.9,
              })
              .setClassToggle(revealElements[i], "visible") // add class toggle
            //  .addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
              .addTo(controller);
    }
   });
$(function bikeDraw() { // wait for document ready
     // build scene
     var controller = new ScrollMagic.Controller(); 

     var revealElements = document.getElementsByClassName("svg-elem-12");
    for (var i=0; i<revealElements.length; i++) { // create a scene for each element
      new ScrollMagic.Scene({
                triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                offset: 60,                        // start a little later
                triggerHook: 0.9,
              })
              .setClassToggle(revealElements[i], "visible") // add class toggle
             // .addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
              .addTo(controller);
    }
   });
$(function bikeDraw() { // wait for document ready
     // build scene
     var controller = new ScrollMagic.Controller(); 

     var revealElements = document.getElementsByClassName("svg-elem-13");
    for (var i=0; i<revealElements.length; i++) { // create a scene for each element
      new ScrollMagic.Scene({
                triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                offset: 60,                        // start a little later
                triggerHook: 0.9,
              })
              .setClassToggle(revealElements[i], "visible") // add class toggle
             // .addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
              .addTo(controller);
    }
   });
$(function bikeDraw() { // wait for document ready
     // build scene
     var controller = new ScrollMagic.Controller(); 

     var revealElements = document.getElementsByClassName("svg-elem-14");
    for (var i=0; i<revealElements.length; i++) { // create a scene for each element
      new ScrollMagic.Scene({
                triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                offset: 50,                        // start a little later
                triggerHook: 0.9,
              })
              .setClassToggle(revealElements[i], "visible") // add class toggle
              //.addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
              .addTo(controller);
    }
   });


   //paralax

  ;(function ( $, window, document, undefined ) {

    // Polyfill for requestAnimationFrame
    // via: https://gist.github.com/paulirish/1579671

    (function() {
      var lastTime = 0;
      var vendors = ['ms', 'moz', 'webkit', 'o'];
      for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
      }

      if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback) {
          var currTime = new Date().getTime();
          var timeToCall = Math.max(0, 16 - (currTime - lastTime));
          var id = window.setTimeout(function() { callback(currTime + timeToCall); },
            timeToCall);
          lastTime = currTime + timeToCall;
          return id;
        };

      if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
          clearTimeout(id);
        };
    }());
// ////////////////////////////////////////////////////////////////////////////
    // Parallax Constructor

    function Parallax(element, options) {
      var self = this;

      if (typeof options == 'object') {
        delete options.refresh;
        delete options.render;
        $.extend(this, options);
        let currImgFunc = $('.parallax-slider:nth-child(1)').css('filter', 'grayscale(100%)')
      }

      this.$element = $(element);

      if (!this.imageSrc && this.$element.is('img')) {
        this.imageSrc = this.$element.attr('src');
      }

      var positions = (this.position + '').toLowerCase().match(/\S+/g) || [];

      if (positions.length < 1) {
        positions.push('center');
      }
      if (positions.length == 1) {
        positions.push(positions[0]);
      }

      if (positions[0] == 'top' || positions[0] == 'bottom' || positions[1] == 'left' || positions[1] == 'right') {
        positions = [positions[1], positions[0]];
      }

      if (this.positionX !== undefined) positions[0] = this.positionX.toLowerCase();
      if (this.positionY !== undefined) positions[1] = this.positionY.toLowerCase();

      self.positionX = positions[0];
      self.positionY = positions[1];

      if (this.positionX != 'left' && this.positionX != 'right') {
        if (isNaN(parseInt(this.positionX))) {
          this.positionX = 'center';
        } else {
          this.positionX = parseInt(this.positionX);
        }
      }

      if (this.positionY != 'top' && this.positionY != 'bottom') {
        if (isNaN(parseInt(this.positionY))) {
          this.positionY = 'center';
        } else {
          this.positionY = parseInt(this.positionY);
        }
      }

      this.position =
        this.positionX + (isNaN(this.positionX)? '' : 'px') + ' ' +
        this.positionY + (isNaN(this.positionY)? '' : 'px');

      if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
        if (this.imageSrc && this.iosFix && !this.$element.is('img')) {
          this.$element.css({
            backgroundImage: 'url(' + this.imageSrc + ')',
            backgroundSize: 'cover',
            backgroundPosition: this.position
          });
        }
        return this;
      }

      if (navigator.userAgent.match(/(Android)/)) {
        if (this.imageSrc && this.androidFix && !this.$element.is('img')) {
          this.$element.css({
            backgroundImage: 'url(' + this.imageSrc + ')',
            backgroundSize: 'cover',
            backgroundPosition: this.position
          });
        }
        return this;
      }

      this.$mirror = $('<div />').prependTo(this.mirrorContainer);

      var slider = this.$element.find('>.parallax-slider');
      var sliderExisted = false;

      if (slider.length == 0)
        this.$slider = $('<img />').prependTo(this.$mirror);
      else {
        this.$slider = slider.prependTo(this.$mirror)
        sliderExisted = true;
      }

      this.$mirror.addClass('parallax-mirror').css({
        visibility: 'hidden',
        zIndex: this.zIndex,
        position: 'fixed',
        top: 0,
        left: 0,
        overflow: 'hidden'
      });

      this.$slider.addClass('parallax-slider').one('load', function() {
        if (!self.naturalHeight || !self.naturalWidth) {
          self.naturalHeight = this.naturalHeight || this.height || 1;
          self.naturalWidth  = this.naturalWidth  || this.width  || 1;
        }
        self.aspectRatio = self.naturalWidth / self.naturalHeight;

        Parallax.isSetup || Parallax.setup();
        Parallax.sliders.push(self);
        Parallax.isFresh = false;
        Parallax.requestRender();
      });

      if (!sliderExisted)
        this.$slider[0].src = this.imageSrc;

      if (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || slider.length > 0) {
        this.$slider.trigger('load');
      }

    }


    // Parallax Instance Methods

    $.extend(Parallax.prototype, {
      speed:    0.2,
      bleed:    100,
      zIndex:   -100,
      iosFix:   true,
      androidFix: true,
      position: 'center',
      overScrollFix: false,
      mirrorContainer: 'body',

      refresh: function() {
        this.boxWidth        = this.$element.outerWidth();
        this.boxHeight       = this.$element.outerHeight() + this.bleed * 2;
        this.boxOffsetTop    = this.$element.offset().top - this.bleed;
        this.boxOffsetLeft   = this.$element.offset().left;
        this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;

        var winHeight = Parallax.winHeight;
        var docHeight = Parallax.docHeight;
        var maxOffset = Math.min(this.boxOffsetTop, docHeight - winHeight);
        var minOffset = Math.max(this.boxOffsetTop + this.boxHeight - winHeight, 0);
        var imageHeightMin = this.boxHeight + (maxOffset - minOffset) * (1 - this.speed) | 0;
        var imageOffsetMin = (this.boxOffsetTop - maxOffset) * (1 - this.speed) | 0;
        var margin;

        if (imageHeightMin * this.aspectRatio >= this.boxWidth) {
          this.imageWidth    = imageHeightMin * this.aspectRatio | 0;
          this.imageHeight   = imageHeightMin;
          this.offsetBaseTop = imageOffsetMin;

          margin = this.imageWidth - this.boxWidth;

          if (this.positionX == 'left') {
            this.offsetLeft = 0;
          } else if (this.positionX == 'right') {
            this.offsetLeft = - margin;
          } else if (!isNaN(this.positionX)) {
            this.offsetLeft = Math.max(this.positionX, - margin);
          } else {
            this.offsetLeft = - margin / 2 | 0;
          }
        } else {
          this.imageWidth    = this.boxWidth;
          this.imageHeight   = this.boxWidth / this.aspectRatio | 0;
          this.offsetLeft    = 0;

          margin = this.imageHeight - imageHeightMin;

          if (this.positionY == 'top') {
            this.offsetBaseTop = imageOffsetMin;
          } else if (this.positionY == 'bottom') {
            this.offsetBaseTop = imageOffsetMin - margin;
          } else if (!isNaN(this.positionY)) {
            this.offsetBaseTop = imageOffsetMin + Math.max(this.positionY, - margin);
          } else {
            this.offsetBaseTop = imageOffsetMin - margin / 2 | 0;
          }
        }
      },

      render: function() {
        var scrollTop    = Parallax.scrollTop;
        var scrollLeft   = Parallax.scrollLeft;
        var overScroll   = this.overScrollFix ? Parallax.overScroll : 0;
        var scrollBottom = scrollTop + Parallax.winHeight;

        if (this.boxOffsetBottom > scrollTop && this.boxOffsetTop <= scrollBottom) {
          this.visibility = 'visible';
          this.mirrorTop = this.boxOffsetTop  - scrollTop;
          this.mirrorLeft = this.boxOffsetLeft - scrollLeft;
          this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed);
        } else {
          this.visibility = 'hidden';
        }

        this.$mirror.css({
          transform: 'translate3d('+this.mirrorLeft+'px, '+(this.mirrorTop - overScroll)+'px, 0px)',
          visibility: this.visibility,
          height: this.boxHeight,
          width: this.boxWidth
        });

        this.$slider.css({
          transform: 'translate3d('+this.offsetLeft+'px, '+this.offsetTop+'px, 0px)',
          position: 'absolute',
          height: this.imageHeight,
          width: this.imageWidth,
          maxWidth: 'none'
        });
      }
    });


    // Parallax Static Methods

    $.extend(Parallax, {
      scrollTop:    0,
      scrollLeft:   0,
      winHeight:    0,
      winWidth:     0,
      docHeight:    1 << 30,
      docWidth:     1 << 30,
      sliders:      [],
      isReady:      false,
      isFresh:      false,
      isBusy:       false,

      setup: function() {
        if (this.isReady) return;

        var self = this;

        var $doc = $(document), $win = $(window);

        var loadDimensions = function() {
          Parallax.winHeight = $win.height();
          Parallax.winWidth  = $win.width();
          Parallax.docHeight = $doc.height();
          Parallax.docWidth  = $doc.width();
        };

        var loadScrollPosition = function() {
          var winScrollTop  = $win.scrollTop();
          var scrollTopMax  = Parallax.docHeight - Parallax.winHeight;
          var scrollLeftMax = Parallax.docWidth  - Parallax.winWidth;
          Parallax.scrollTop  = Math.max(0, Math.min(scrollTopMax,  winScrollTop));
          Parallax.scrollLeft = Math.max(0, Math.min(scrollLeftMax, $win.scrollLeft()));
          Parallax.overScroll = Math.max(winScrollTop - scrollTopMax, Math.min(winScrollTop, 0));
        };

        $win.on('resize.px.parallax load.px.parallax', function() {
            loadDimensions();
            self.refresh();
            Parallax.isFresh = false;
            Parallax.requestRender();
          })
          .on('scroll.px.parallax load.px.parallax', function() {
            loadScrollPosition();
            Parallax.requestRender();
          });

        loadDimensions();
        loadScrollPosition();

        this.isReady = true;

        var lastPosition = -1;

        function frameLoop() {
          if (lastPosition == window.pageYOffset) {   // Avoid overcalculations
            window.requestAnimationFrame(frameLoop);
            return false;
          } else lastPosition = window.pageYOffset;

          self.render();
          window.requestAnimationFrame(frameLoop);
        }

        frameLoop();
      },

      configure: function(options) {
        if (typeof options == 'object') {
          delete options.refresh;
          delete options.render;
          $.extend(this.prototype, options);
        }
      },

      refresh: function() {
        $.each(this.sliders, function(){ this.refresh(); });
        this.isFresh = true;
      },

      render: function() {
        this.isFresh || this.refresh();
        $.each(this.sliders, function(){ this.render(); });
      },

      requestRender: function() {
        var self = this;
        self.render();
        self.isBusy = false;
      },
      destroy: function(el){
        var i,
            parallaxElement = $(el).data('px.parallax');
        parallaxElement.$mirror.remove();
        for(i=0; i < this.sliders.length; i+=1){
          if(this.sliders[i] == parallaxElement){
            this.sliders.splice(i, 1);
          }
        }
        $(el).data('px.parallax', false);
        if(this.sliders.length === 0){
          $(window).off('scroll.px.parallax resize.px.parallax load.px.parallax');
          this.isReady = false;
          Parallax.isSetup = false;
        }
      }
    });


    // Parallax Plugin Definition

    function Plugin(option) {
      return this.each(function () {
        var $this = $(this);
        var options = typeof option == 'object' && option;

        if (this == window || this == document || $this.is('body')) {
          Parallax.configure(options);
        }
        else if (!$this.data('px.parallax')) {
          options = $.extend({}, $this.data(), options);
          $this.data('px.parallax', new Parallax(this, options));
        }
        else if (typeof option == 'object')
        {
          $.extend($this.data('px.parallax'), options);
        }
        if (typeof option == 'string') {
          if(option == 'destroy'){
              Parallax.destroy(this);
          }else{
            Parallax[option]();
          }
        }
      });
    }

    var old = $.fn.parallax;

    $.fn.parallax             = Plugin;
    $.fn.parallax.Constructor = Parallax;


    // Parallax No Conflict

    $.fn.parallax.noConflict = function () {
      $.fn.parallax = old;
      return this;
    };


    // Parallax Data-API

    $( function () { 
      $('[data-parallax="scroll"]').parallax(); 
    });
  }(jQuery, window, document));
