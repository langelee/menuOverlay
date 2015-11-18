require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"menuOverlay":[function(require,module,exports){
exports.menuOverlay = function(screen, fade, hamburger, close, menuItems) {
  var delayItem, delayItemDecrement, i, item, len;
  delayItem = 0;
  delayItemDecrement = .05;
  for (i = 0, len = menuItems.length; i < len; i++) {
    item = menuItems[i];
    item.states.add({
      one: {
        opacity: 0,
        scale: .6,
        y: item.y - 100
      }
    });
    item.states.switchInstant("one");
  }
  screen.states.add({
    one: {
      scale: .9,
      blur: 20
    }
  });
  fade.states.add({
    one: {
      opacity: 0
    }
  });
  hamburger.states.add({
    one: {
      scale: 0,
      opacity: 0
    }
  });
  close.states.add({
    one: {
      scale: 0,
      opacity: 0
    }
  });
  close.states.switchInstant("one");
  fade.states.switchInstant("one");
  hamburger.on(Events.Click, function() {
    var j, len1, results;
    this.states["switch"]("one");
    close.states["switch"]("default");
    screen.states["switch"]("one");
    fade.states["switch"]("default");
    results = [];
    for (j = 0, len1 = menuItems.length; j < len1; j++) {
      item = menuItems[j];
      item.states.animationOptions = {
        delay: delayItem += delayItemDecrement
      };
      results.push(item.states["switch"]("default"));
    }
    return results;
  });
  return close.on(Events.Click, function() {
    var j, len1, results;
    delayItem = 0;
    this.states["switch"]("one");
    hamburger.states["switch"]("default");
    screen.states["switch"]("default");
    fade.states["switch"]("one");
    results = [];
    for (j = 0, len1 = menuItems.length; j < len1; j++) {
      item = menuItems[j];
      item.states.animationOptions = {
        delay: 0
      };
      results.push(item.states["switch"]("one"));
    }
    return results;
  });
};


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvb3Nmcm9sb3YvRHJvcGJveCAoQXZpdG8pL0Rlc2lnbiBNZWV0dXAvRnJhbWVyIE1lbnUvZGVtby5mcmFtZXIvbW9kdWxlcy9tZW51T3ZlcmxheS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNDQSxPQUFPLENBQUMsV0FBUixHQUFzQixTQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsU0FBZixFQUEwQixLQUExQixFQUFpQyxTQUFqQztBQUdwQixNQUFBO0VBQUEsU0FBQSxHQUFZO0VBQ1osa0JBQUEsR0FBcUI7QUFHckIsT0FBQSwyQ0FBQTs7SUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQVosQ0FDQztNQUFBLEdBQUEsRUFDQztRQUFBLE9BQUEsRUFBUyxDQUFUO1FBQ0EsS0FBQSxFQUFPLEVBRFA7UUFFQSxDQUFBLEVBQUcsSUFBSSxDQUFDLENBQUwsR0FBUyxHQUZaO09BREQ7S0FERDtJQUtBLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBWixDQUEwQixLQUExQjtBQU5EO0VBU0EsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFkLENBQ0M7SUFBQSxHQUFBLEVBQ0M7TUFBQSxLQUFBLEVBQU8sRUFBUDtNQUNBLElBQUEsRUFBTSxFQUROO0tBREQ7R0FERDtFQU1BLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBWixDQUNDO0lBQUEsR0FBQSxFQUNDO01BQUEsT0FBQSxFQUFTLENBQVQ7S0FERDtHQUREO0VBS0EsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFqQixDQUNDO0lBQUEsR0FBQSxFQUNDO01BQUEsS0FBQSxFQUFPLENBQVA7TUFDQSxPQUFBLEVBQVMsQ0FEVDtLQUREO0dBREQ7RUFNQSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQWIsQ0FDQztJQUFBLEdBQUEsRUFDQztNQUFBLEtBQUEsRUFBTyxDQUFQO01BQ0EsT0FBQSxFQUFTLENBRFQ7S0FERDtHQUREO0VBTUEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFiLENBQTJCLEtBQTNCO0VBQ0EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFaLENBQTBCLEtBQTFCO0VBR0EsU0FBUyxDQUFDLEVBQVYsQ0FBYSxNQUFNLENBQUMsS0FBcEIsRUFBMkIsU0FBQTtBQUMxQixRQUFBO0lBQUMsSUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFELENBQVYsQ0FBa0IsS0FBbEI7SUFDQSxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQUQsQ0FBWixDQUFvQixTQUFwQjtJQUNBLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBRCxDQUFiLENBQXFCLEtBQXJCO0lBQ0EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFELENBQVgsQ0FBbUIsU0FBbkI7QUFDQTtTQUFBLDZDQUFBOztNQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQVosR0FDQztRQUFBLEtBQUEsRUFBTyxTQUFBLElBQWEsa0JBQXBCOzttQkFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQUQsQ0FBWCxDQUFtQixTQUFuQjtBQUhEOztFQUwwQixDQUEzQjtTQVdBLEtBQUssQ0FBQyxFQUFOLENBQVMsTUFBTSxDQUFDLEtBQWhCLEVBQXVCLFNBQUE7QUFDdEIsUUFBQTtJQUFBLFNBQUEsR0FBWTtJQUNYLElBQUUsQ0FBQyxNQUFNLENBQUMsUUFBRCxDQUFWLENBQWtCLEtBQWxCO0lBQ0EsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFELENBQWhCLENBQXdCLFNBQXhCO0lBQ0EsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFELENBQWIsQ0FBcUIsU0FBckI7SUFDQSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQUQsQ0FBWCxDQUFtQixLQUFuQjtBQUNBO1NBQUEsNkNBQUE7O01BQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBWixHQUNDO1FBQUEsS0FBQSxFQUFPLENBQVA7O21CQUNELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBRCxDQUFYLENBQW1CLEtBQW5CO0FBSEQ7O0VBTnNCLENBQXZCO0FBdERvQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIjIFlvdSBjYW4gbGVhcm4gbW9yZSBhYm91dCBmcmFtZXIncyBtb2R1bGVzIGhlcmUg4oCTIGh0dHA6Ly9mcmFtZXJqcy5jb20vZG9jcy8jbW9kdWxlcy5tb2R1bGVzXG5leHBvcnRzLm1lbnVPdmVybGF5ID0gKHNjcmVlbiwgZmFkZSwgaGFtYnVyZ2VyLCBjbG9zZSwgbWVudUl0ZW1zKSAtPlxuXG5cdFx0IyBCYXNlIHZhcmlhYmxlc1xuXHRcdGRlbGF5SXRlbSA9IDBcblx0XHRkZWxheUl0ZW1EZWNyZW1lbnQgPSAuMDVcblxuXHRcdCMgU2V0IHRoZSBzdGF0ZXMgZm9yIGVhY2ggaXRlbSBpbiB0aGUgbWVudUl0ZW1zXG5cdFx0Zm9yIGl0ZW0gaW4gbWVudUl0ZW1zXG5cdFx0XHRpdGVtLnN0YXRlcy5hZGRcblx0XHRcdFx0b25lOlxuXHRcdFx0XHRcdG9wYWNpdHk6IDBcblx0XHRcdFx0XHRzY2FsZTogLjZcblx0XHRcdFx0XHR5OiBpdGVtLnkgLSAxMDBcblx0XHRcdGl0ZW0uc3RhdGVzLnN3aXRjaEluc3RhbnQoXCJvbmVcIilcblxuXHRcdCMgU2NyZWVuIHN0YXRlXG5cdFx0c2NyZWVuLnN0YXRlcy5hZGRcblx0XHRcdG9uZTpcblx0XHRcdFx0c2NhbGU6IC45XG5cdFx0XHRcdGJsdXI6IDIwXG5cblx0XHQjIEZhZGUgc3RhdGVcblx0XHRmYWRlLnN0YXRlcy5hZGRcblx0XHRcdG9uZTpcblx0XHRcdFx0b3BhY2l0eTogMFxuXG5cdFx0IyBIYW1idXJnZXIgc3RhdGVcblx0XHRoYW1idXJnZXIuc3RhdGVzLmFkZFxuXHRcdFx0b25lOlxuXHRcdFx0XHRzY2FsZTogMFxuXHRcdFx0XHRvcGFjaXR5OiAwXG5cblx0XHQjIENsb3NlIGJ1dHRvbiBzdGF0ZVxuXHRcdGNsb3NlLnN0YXRlcy5hZGRcblx0XHRcdG9uZTpcblx0XHRcdFx0c2NhbGU6IDBcblx0XHRcdFx0b3BhY2l0eTogMFxuXG5cdFx0IyBEaXNhcHBlYXIgdGhlIGNsb3NlIGJ1dHRvbiBhbmQgdGhlIGZhZGVcblx0XHRjbG9zZS5zdGF0ZXMuc3dpdGNoSW5zdGFudChcIm9uZVwiKVxuXHRcdGZhZGUuc3RhdGVzLnN3aXRjaEluc3RhbnQoXCJvbmVcIilcblxuXHRcdCMgRXZlbnQgZm9yIGhhbWJ1cmdlciBjbGlja1xuXHRcdGhhbWJ1cmdlci5vbiBFdmVudHMuQ2xpY2ssIC0+XG5cdFx0XHQoQCkuc3RhdGVzLnN3aXRjaChcIm9uZVwiKVxuXHRcdFx0Y2xvc2Uuc3RhdGVzLnN3aXRjaChcImRlZmF1bHRcIilcblx0XHRcdHNjcmVlbi5zdGF0ZXMuc3dpdGNoKFwib25lXCIpXG5cdFx0XHRmYWRlLnN0YXRlcy5zd2l0Y2goXCJkZWZhdWx0XCIpXG5cdFx0XHRmb3IgaXRlbSBpbiBtZW51SXRlbXNcblx0XHRcdFx0aXRlbS5zdGF0ZXMuYW5pbWF0aW9uT3B0aW9ucyA9XG5cdFx0XHRcdFx0ZGVsYXk6IGRlbGF5SXRlbSArPSBkZWxheUl0ZW1EZWNyZW1lbnRcblx0XHRcdFx0aXRlbS5zdGF0ZXMuc3dpdGNoKFwiZGVmYXVsdFwiKVxuXG5cdFx0IyBFdmVudCBmb3IgY2xvc2UgYnV0dG9uIGNsaWNrXG5cdFx0Y2xvc2Uub24gRXZlbnRzLkNsaWNrLCAtPlxuXHRcdFx0ZGVsYXlJdGVtID0gMFxuXHRcdFx0KEApLnN0YXRlcy5zd2l0Y2goXCJvbmVcIilcblx0XHRcdGhhbWJ1cmdlci5zdGF0ZXMuc3dpdGNoKFwiZGVmYXVsdFwiKVxuXHRcdFx0c2NyZWVuLnN0YXRlcy5zd2l0Y2goXCJkZWZhdWx0XCIpXG5cdFx0XHRmYWRlLnN0YXRlcy5zd2l0Y2goXCJvbmVcIilcblx0XHRcdGZvciBpdGVtIGluIG1lbnVJdGVtc1xuXHRcdFx0XHRpdGVtLnN0YXRlcy5hbmltYXRpb25PcHRpb25zID1cblx0XHRcdFx0XHRkZWxheTogMFxuXHRcdFx0XHRpdGVtLnN0YXRlcy5zd2l0Y2goXCJvbmVcIilcbiJdfQ==
