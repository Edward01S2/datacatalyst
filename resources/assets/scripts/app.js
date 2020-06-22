/**
 * External Dependencies
 */
import 'jquery';
import 'alpinejs';

// import './particles.js'
var json = require('./particlesjs.json');
import { tsParticles } from "tsparticles";

//console.log(json);

$(document).ready(() => {
  // console.log('Hello world');
  $('input[type=checkbox]').addClass('form-checkbox');

  //console.log(particleUrl)
  // particlesJS.load('particles-js', json, function() {
  //   console.log('callback - particles.js config loaded');
  // });

  // console.log($('#tsparticles').is(':visible'))
  if($('#tsparticles').is(':visible')) {
    tsParticles
    .load("tsparticles", json)
    // .then((container) => {
    //   // console.log("callback - tsparticles config loaded");
    // })
    .catch((error) => {
      console.error(error);
    });
  }

  $(document).bind('gform_post_render', function() {
    $('input[type=checkbox]').addClass('form-checkbox');
  })

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

    $('.acf-map').each(function(){
      var map = initMap( $(this) );
  });

});


function initMap( $el ) {

  // Find marker elements within map.
  var $markers = $el.find('.marker');

  // Create gerenic map.
  var mapArgs = {
      zoom        : $el.data('zoom') || 16,
      mapTypeId   : google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map( $el[0], mapArgs );

  // Add markers.
  map.markers = [];
  $markers.each(function(){
      initMarker( $(this), map );
  });

  // Center map based on markers.
  centerMap( map );

  // Return map instance.
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
function initMarker( $marker, map ) {

  // Get position from marker.
  var lat = $marker.data('lat');
  var lng = $marker.data('lng');
  var latLng = {
      lat: parseFloat( lat ),
      lng: parseFloat( lng )
  };

  // Create marker instance.
  var marker = new google.maps.Marker({
      position : latLng,
      map: map
  });

  // Append to reference for later use.
  map.markers.push( marker );

  // If marker contains HTML, add it to an infoWindow.
  if( $marker.html() ){

      // Create info window.
      var infowindow = new google.maps.InfoWindow({
          content: $marker.html()
      });

      // Show info window when marker is clicked.
      google.maps.event.addListener(marker, 'click', function() {
          infowindow.open( map, marker );
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
function centerMap( map ) {

  // Create map boundaries from all map markers.
  var bounds = new google.maps.LatLngBounds();
  map.markers.forEach(function( marker ){
      bounds.extend({
          lat: marker.position.lat(),
          lng: marker.position.lng()
      });
  });

  // Case: Single marker.
  if( map.markers.length == 1 ){
      map.setCenter( bounds.getCenter() );

  // Case: Multiple markers.
  } else{
      map.fitBounds( bounds );
  }
}