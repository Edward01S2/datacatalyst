(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(e,a,t){t("xYjq"),t("cpPS"),e.exports=t("q8Qp")},"8GB4":function(e){e.exports=JSON.parse('{"background":{},"backgroundMask":{"cover":{"color":{"value":"#fff"},"opacity":0.5},"enable":false},"detectRetina":true,"fpsLimit":30,"infection":{"cure":false,"delay":0,"enable":false,"infections":0,"stages":[]},"interactivity":{"detectsOn":"canvas","events":{"onClick":{"enable":true,"mode":"push"},"onDiv":{"elementId":"","enable":false,"mode":[]},"onHover":{"enable":true,"mode":"repulse","parallax":{"enable":false,"force":60,"smooth":10}},"resize":true},"modes":{"bubble":{"distance":400,"duration":2,"opacity":0.8,"size":40},"connect":{"distance":80,"links":{"opacity":0.5},"radius":60},"grab":{"distance":400,"links":{"opacity":1}},"push":{"quantity":4},"remove":{"quantity":2},"repulse":{"distance":200,"duration":0.4,"speed":1},"slow":{"factor":3,"radius":200}}},"particles":{"collisions":{"enable":false,"mode":"bounce"},"color":{"value":"#ffffff","animation":{"enable":false,"speed":1,"sync":true}},"links":{"blink":false,"color":{"value":"#ffffff"},"consent":false,"distance":150,"enable":true,"opacity":0.4,"shadow":{"blur":5,"color":{"value":"lime"},"enable":false},"triangles":{"enable":false},"width":1,"warp":false},"move":{"attract":{"enable":false,"rotate":{"x":600,"y":1200}},"direction":"none","enable":true,"noise":{"delay":{"random":{"enable":false,"minimumValue":0},"value":0},"enable":false,"factor":{"horizontal":{"value":50,"offset":0},"vertical":{"value":10,"offset":40000}}},"outMode":"out","random":false,"speed":2,"straight":false,"trail":{"enable":false,"length":10,"fillColor":{"value":"#000000"}},"vibrate":false,"warp":false},"number":{"density":{"enable":true,"area":800,"factor":1000},"limit":0,"value":80},"opacity":{"animation":{"enable":false,"minimumValue":0.1,"speed":1,"sync":false},"random":{"enable":false,"minimumValue":1},"value":0.5},"rotate":{"animation":{"enable":false,"speed":0,"sync":false},"direction":"clockwise","random":false,"value":0},"shadow":{"blur":0,"color":{"value":"#000000"},"enable":false,"offset":{"x":0,"y":0}},"shape":{"options":{"character":{"fill":true,"close":true,"font":"Verdana","style":"","value":"*","weight":"400"},"char":{"fill":true,"close":true,"font":"Verdana","style":"","value":"*","weight":"400"},"image":{"fill":true,"close":true,"height":100,"replaceColor":false,"src":"https://cdn.matteobruni.it/images/particles/github.svg","width":100},"images":{"fill":true,"close":true,"height":100,"replaceColor":false,"src":"https://cdn.matteobruni.it/images/particles/github.svg","width":100},"polygon":{"fill":true,"close":true,"sides":5},"star":{"fill":true,"close":true,"sides":5}},"type":"circle"},"size":{"animation":{"destroy":"none","enable":false,"minimumValue":0.1,"speed":40,"startValue":"max","sync":false},"random":{"enable":true,"minimumValue":1},"value":5},"stroke":{"color":{"value":"#000000"},"width":0,"opacity":1},"twinkle":{"lines":{"enable":false,"frequency":0.05,"opacity":1},"particles":{"enable":false,"frequency":0.05,"opacity":1}}},"pauseOnBlur":true}')},cpPS:function(e,a){},q8Qp:function(e,a){},xYjq:function(e,a,t){"use strict";t.r(a),function(e){t("xeH2"),t("3yRE");var a=t("OGap"),s=t("8GB4");e(document).ready((function(){e("input[type=checkbox]").addClass("form-checkbox"),e("#tsparticles").is(":visible")&&a.tsParticles.load("tsparticles",s).catch((function(e){console.error(e)})),e(document).bind("gform_post_render",(function(){e("input[type=checkbox]").addClass("form-checkbox")})),e(".rcdcLawsChart").each((function(){var a=e(this),t=a.find(".rcdcLawsChartHelpToggle"),s=a.find(".rcdcLawsChartTitle"),l=a.find(".rcdcLawsChartScore"),n=a.find(".rcdcLawsChartHelpLine"),i=a.find(".rcdcLawsChartHelpDisplay"),r=a.find(".rcdcLawsChartHelpDisplay__heading"),o=a.find(".rcdcLawsChartHelpDisplay_content"),c=window.rcdcPhpVars;t.click((function(){var a=e(this),d=a.data("row");i.addClass("rcdcLawsChartHelpDisplay--active"),t.removeClass("rcdcLawsChartHelpToggle--active"),a.addClass("rcdcLawsChartHelpToggle--active"),s.removeClass("rcdcLawsChartTitle--active"),s.filter('[data-row="'+d+'"]').addClass("rcdcLawsChartTitle--active"),l.removeClass("rcdcLawsChartScore--active"),l.filter('[data-row="'+d+'"]').addClass("rcdcLawsChartScore--active"),n.removeClass("rcdcLawsChartHelpLine--active"),n.filter(".rcdcLawsChartHelpLine--row--"+d).addClass("rcdcLawsChartHelpLine--active"),r.text(c.titles[d-1]),o.eq(0).text(c.descriptionsLines[d-1][0]),void 0!==c.descriptionsLines[d-1][1]&&o.eq(1).text(c.descriptionsLines[d-1][1])}))})),e(".acf-map").each((function(){!function(a){var t=a.find(".marker"),s={zoom:a.data("zoom")||16,mapTypeId:google.maps.MapTypeId.ROADMAP},l=new google.maps.Map(a[0],s);l.markers=[],t.each((function(){!function(e,a){var t=e.data("lat"),s=e.data("lng"),l={lat:parseFloat(t),lng:parseFloat(s)},n=new google.maps.Marker({position:l,map:a});if(a.markers.push(n),e.html()){var i=new google.maps.InfoWindow({content:e.html()});google.maps.event.addListener(n,"click",(function(){i.open(a,n)}))}}(e(this),l)})),function(e){var a=new google.maps.LatLngBounds;e.markers.forEach((function(e){a.extend({lat:e.position.lat(),lng:e.position.lng()})})),1==e.markers.length?e.setCenter(a.getCenter()):e.fitBounds(a)}(l)}(e(this))}))}))}.call(this,t("xeH2"))},xeH2:function(e,a){!function(){e.exports=this.jQuery}()}},[[0,0,4]]]);