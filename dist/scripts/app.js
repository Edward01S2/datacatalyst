(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/scripts/app"],{

/***/ "./resources/assets/scripts/app.js":
/*!*****************************************!*\
  !*** ./resources/assets/scripts/app.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/alpine.js");
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alpinejs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tsparticles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsparticles */ "./node_modules/tsparticles/dist/index.js");
/* harmony import */ var tsparticles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tsparticles__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External Dependencies
 */

 // import './particles.js'

var json = __webpack_require__(/*! ./particlesjs.json */ "./resources/assets/scripts/particlesjs.json");

 //console.log(json);

$(document).ready(function () {
  // console.log('Hello world');
  $('input[type=checkbox]').addClass('form-checkbox');
  $('#gform_2 .gform_footer').appendTo('#gform_2 .gform_fields');
  $(document).bind('gform_post_render', function () {
    $('#gform_2 .gform_footer').appendTo('#gform_2 .gform_fields');
  }); //console.log(particleUrl)
  // particlesJS.load('particles-js', json, function() {
  //   console.log('callback - particles.js config loaded');
  // });
  // console.log($('#tsparticles').is(':visible'))

  if ($('#tsparticles').is(':visible')) {
    tsparticles__WEBPACK_IMPORTED_MODULE_2__["tsParticles"].load("tsparticles", json) // .then((container) => {
    //   // console.log("callback - tsparticles config loaded");
    // })
    ["catch"](function (error) {
      console.error(error);
    });
  }

  $(document).bind('gform_post_render', function () {
    $('input[type=checkbox]').addClass('form-checkbox');
  });
  $('.rcdcLawsChart').each(function () {
    var $chart = $(this);
    var $toggles = $chart.find('.rcdcLawsChartHelpToggle');
    var $titles = $chart.find('.rcdcLawsChartTitle');
    var $scores = $chart.find('.rcdcLawsChartScore');
    var $helpLines = $chart.find('.rcdcLawsChartHelpLine');
    var $helpDisplay = $chart.find('.rcdcLawsChartHelpDisplay');
    var $helpDisplayHeading = $chart.find('.rcdcLawsChartHelpDisplay__heading');
    var $helpDisplayContent = $chart.find('.rcdcLawsChartHelpDisplay_content');
    var phpVars = window.rcdcPhpVars;
    $toggles.click(function () {
      var $toggle = $(this);
      var row = $toggle.data('row');
      $helpDisplay.addClass('rcdcLawsChartHelpDisplay--active');
      $toggles.removeClass('rcdcLawsChartHelpToggle--active');
      $toggle.addClass('rcdcLawsChartHelpToggle--active');
      $titles.removeClass('rcdcLawsChartTitle--active');
      $titles.filter('[data-row="' + row + '"]').addClass('rcdcLawsChartTitle--active');
      $scores.removeClass('rcdcLawsChartScore--active');
      $scores.filter('[data-row="' + row + '"]').addClass('rcdcLawsChartScore--active');
      $helpLines.removeClass('rcdcLawsChartHelpLine--active');
      $helpLines.filter('.rcdcLawsChartHelpLine--row--' + row).addClass('rcdcLawsChartHelpLine--active');
      $helpDisplayHeading.text(phpVars.titles[row - 1]);
      $helpDisplayContent.eq(0).text(phpVars.descriptionsLines[row - 1][0]);

      if (phpVars.descriptionsLines[row - 1][1] !== undefined) {
        $helpDisplayContent.eq(1).text(phpVars.descriptionsLines[row - 1][1]);
      }
    });
  });
  $('.acf-map').each(function () {
    var map = initMap($(this));
  });
});

function initMap($el) {
  // Find marker elements within map.
  var $markers = $el.find('.marker'); // Create gerenic map.

  var mapArgs = {
    zoom: $el.data('zoom') || 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map($el[0], mapArgs); // Add markers.

  map.markers = [];
  $markers.each(function () {
    initMarker($(this), map);
  }); // Center map based on markers.

  centerMap(map); // Return map instance.

  return map;
}
/**
* initMarker
*
* Creates a marker for the given jQuery element and map.
*
* @date    22/10/19
* @since   5.8.6
*
* @param   jQuery $el The jQuery element.
* @param   object The map instance.
* @return  object The marker instance.
*/


function initMarker($marker, map) {
  // Get position from marker.
  var lat = $marker.data('lat');
  var lng = $marker.data('lng');
  var latLng = {
    lat: parseFloat(lat),
    lng: parseFloat(lng)
  }; // Create marker instance.

  var marker = new google.maps.Marker({
    position: latLng,
    map: map
  }); // Append to reference for later use.

  map.markers.push(marker); // If marker contains HTML, add it to an infoWindow.

  if ($marker.html()) {
    // Create info window.
    var infowindow = new google.maps.InfoWindow({
      content: $marker.html()
    }); // Show info window when marker is clicked.

    google.maps.event.addListener(marker, 'click', function () {
      infowindow.open(map, marker);
    });
  }
}
/**
* centerMap
*
* Centers the map showing all markers in view.
*
* @date    22/10/19
* @since   5.8.6
*
* @param   object The map instance.
* @return  void
*/


function centerMap(map) {
  // Create map boundaries from all map markers.
  var bounds = new google.maps.LatLngBounds();
  map.markers.forEach(function (marker) {
    bounds.extend({
      lat: marker.position.lat(),
      lng: marker.position.lng()
    });
  }); // Case: Single marker.

  if (map.markers.length == 1) {
    map.setCenter(bounds.getCenter()); // Case: Multiple markers.
  } else {
    map.fitBounds(bounds);
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./resources/assets/scripts/particlesjs.json":
/*!***************************************************!*\
  !*** ./resources/assets/scripts/particlesjs.json ***!
  \***************************************************/
/*! exports provided: background, backgroundMask, detectRetina, fpsLimit, infection, interactivity, particles, pauseOnBlur, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"background\":{},\"backgroundMask\":{\"cover\":{\"color\":{\"value\":\"#fff\"},\"opacity\":0.5},\"enable\":false},\"detectRetina\":true,\"fpsLimit\":30,\"infection\":{\"cure\":false,\"delay\":0,\"enable\":false,\"infections\":0,\"stages\":[]},\"interactivity\":{\"detectsOn\":\"canvas\",\"events\":{\"onClick\":{\"enable\":true,\"mode\":\"push\"},\"onDiv\":{\"elementId\":\"\",\"enable\":false,\"mode\":[]},\"onHover\":{\"enable\":true,\"mode\":\"repulse\",\"parallax\":{\"enable\":false,\"force\":60,\"smooth\":10}},\"resize\":true},\"modes\":{\"bubble\":{\"distance\":400,\"duration\":2,\"opacity\":0.8,\"size\":40},\"connect\":{\"distance\":80,\"links\":{\"opacity\":0.5},\"radius\":60},\"grab\":{\"distance\":400,\"links\":{\"opacity\":1}},\"push\":{\"quantity\":4},\"remove\":{\"quantity\":2},\"repulse\":{\"distance\":200,\"duration\":0.4,\"speed\":1},\"slow\":{\"factor\":3,\"radius\":200}}},\"particles\":{\"collisions\":{\"enable\":false,\"mode\":\"bounce\"},\"color\":{\"value\":\"#ffffff\",\"animation\":{\"enable\":false,\"speed\":1,\"sync\":true}},\"links\":{\"blink\":false,\"color\":{\"value\":\"#ffffff\"},\"consent\":false,\"distance\":150,\"enable\":true,\"opacity\":0.4,\"shadow\":{\"blur\":5,\"color\":{\"value\":\"lime\"},\"enable\":false},\"triangles\":{\"enable\":false},\"width\":1,\"warp\":false},\"move\":{\"attract\":{\"enable\":false,\"rotate\":{\"x\":600,\"y\":1200}},\"direction\":\"none\",\"enable\":true,\"noise\":{\"delay\":{\"random\":{\"enable\":false,\"minimumValue\":0},\"value\":0},\"enable\":false,\"factor\":{\"horizontal\":{\"value\":50,\"offset\":0},\"vertical\":{\"value\":10,\"offset\":40000}}},\"outMode\":\"out\",\"random\":false,\"speed\":2,\"straight\":false,\"trail\":{\"enable\":false,\"length\":10,\"fillColor\":{\"value\":\"#000000\"}},\"vibrate\":false,\"warp\":false},\"number\":{\"density\":{\"enable\":true,\"area\":800,\"factor\":1000},\"limit\":0,\"value\":80},\"opacity\":{\"animation\":{\"enable\":false,\"minimumValue\":0.1,\"speed\":1,\"sync\":false},\"random\":{\"enable\":false,\"minimumValue\":1},\"value\":0.5},\"rotate\":{\"animation\":{\"enable\":false,\"speed\":0,\"sync\":false},\"direction\":\"clockwise\",\"random\":false,\"value\":0},\"shadow\":{\"blur\":0,\"color\":{\"value\":\"#000000\"},\"enable\":false,\"offset\":{\"x\":0,\"y\":0}},\"shape\":{\"options\":{\"character\":{\"fill\":true,\"close\":true,\"font\":\"Verdana\",\"style\":\"\",\"value\":\"*\",\"weight\":\"400\"},\"char\":{\"fill\":true,\"close\":true,\"font\":\"Verdana\",\"style\":\"\",\"value\":\"*\",\"weight\":\"400\"},\"image\":{\"fill\":true,\"close\":true,\"height\":100,\"replaceColor\":false,\"src\":\"https://cdn.matteobruni.it/images/particles/github.svg\",\"width\":100},\"images\":{\"fill\":true,\"close\":true,\"height\":100,\"replaceColor\":false,\"src\":\"https://cdn.matteobruni.it/images/particles/github.svg\",\"width\":100},\"polygon\":{\"fill\":true,\"close\":true,\"sides\":5},\"star\":{\"fill\":true,\"close\":true,\"sides\":5}},\"type\":\"circle\"},\"size\":{\"animation\":{\"destroy\":\"none\",\"enable\":false,\"minimumValue\":0.1,\"speed\":40,\"startValue\":\"max\",\"sync\":false},\"random\":{\"enable\":true,\"minimumValue\":1},\"value\":5},\"stroke\":{\"color\":{\"value\":\"#000000\"},\"width\":0,\"opacity\":1},\"twinkle\":{\"lines\":{\"enable\":false,\"frequency\":0.05,\"opacity\":1},\"particles\":{\"enable\":false,\"frequency\":0.05,\"opacity\":1}}},\"pauseOnBlur\":true}");

/***/ }),

/***/ "./resources/assets/styles/app.scss":
/*!******************************************!*\
  !*** ./resources/assets/styles/app.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/styles/editor.scss":
/*!*********************************************!*\
  !*** ./resources/assets/styles/editor.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!************************************************************************************************************************!*\
  !*** multi ./resources/assets/scripts/app.js ./resources/assets/styles/app.scss ./resources/assets/styles/editor.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/edward/Desktop/wordpress/data/wp-content/themes/datacatalyst/resources/assets/scripts/app.js */"./resources/assets/scripts/app.js");
__webpack_require__(/*! /Users/edward/Desktop/wordpress/data/wp-content/themes/datacatalyst/resources/assets/styles/app.scss */"./resources/assets/styles/app.scss");
module.exports = __webpack_require__(/*! /Users/edward/Desktop/wordpress/data/wp-content/themes/datacatalyst/resources/assets/styles/editor.scss */"./resources/assets/styles/editor.scss");


/***/ }),

/***/ "jquery":
/*!**********************************!*\
  !*** external {"this":"jQuery"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["jQuery"]; }());

/***/ })

},[[0,"/scripts/manifest","/scripts/vendor"]]]);
//# sourceMappingURL=app.js.map