'use strict';

(function (root) {

  // svg for all
  svg4everybody();

  function removeHash() {
    location.hash = '';
    history.replaceState(null, null, ' ');
    $(window).scrollTop(scroll);
  }

  function hashChange() {
    var hash = location.hash;

    if (hash) {
      $(hash).find('.offer__more').trigger('click');
    } else {
      $('.featherlight-close').trigger('click');
    }
  }

  var scroll = 0;

  $('.offer__more').featherlight({
    beforeOpen: function beforeOpen() {
      scroll = $(window).scrollTop();
    },
    beforeClose: removeHash
  });

  $('.slider').owlCarousel({
    items: 1
  });

  // Gallery-Page
  $('.g-block__list').each(function (i, gallery) {
    var items = 1;

    if ($(gallery).children().length > items) {
      $(gallery).addClass('owl-carousel');
      $(gallery).owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: true
      });
    }
  });

  // Gallery
  setTimeout(function () {
    $('.gallery__item').on('click', function () {
      var img = $(this).find('img').clone();

      $('.gallery__image').attr('data-featherlight', $(img).attr('src')).html(img);
    });

    hashChange();
  }, 100);

  // Sections
  $('.offer__more').on('click', function () {
    var id = $(this).closest('.section').attr('id'),
        bg = $(this).closest('.section').css('background-color');

    if (bg === 'rgba(0, 0, 0, 0)') bg = '#bdc7ae';
    $('.featherlight').css('background-color', bg);
    location.hash = '#' + id;
  });

  $(document).on('click', '.featherlight [data-close]', function (e) {
    e.preventDefault();

    console.log(123);

    $('.featherlight-close').trigger('click');
  });

  window.onhashchange = hashChange;
})(window);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJyb290Iiwic3ZnNGV2ZXJ5Ym9keSIsInJlbW92ZUhhc2giLCJsb2NhdGlvbiIsImhhc2giLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwiJCIsIndpbmRvdyIsInNjcm9sbFRvcCIsInNjcm9sbCIsImhhc2hDaGFuZ2UiLCJmaW5kIiwidHJpZ2dlciIsImZlYXRoZXJsaWdodCIsImJlZm9yZU9wZW4iLCJiZWZvcmVDbG9zZSIsIm93bENhcm91c2VsIiwiaXRlbXMiLCJlYWNoIiwiaSIsImdhbGxlcnkiLCJjaGlsZHJlbiIsImxlbmd0aCIsImFkZENsYXNzIiwibG9vcCIsIm5hdiIsImRvdHMiLCJzZXRUaW1lb3V0Iiwib24iLCJpbWciLCJjbG9uZSIsImF0dHIiLCJodG1sIiwiaWQiLCJjbG9zZXN0IiwiYmciLCJjc3MiLCJkb2N1bWVudCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJvbmhhc2hjaGFuZ2UiXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBQyxVQUFTQSxJQUFULEVBQWU7O0FBRWQ7QUFDQUM7O0FBRUEsV0FBU0MsVUFBVCxHQUF1QjtBQUNyQkMsYUFBU0MsSUFBVCxHQUFnQixFQUFoQjtBQUNBQyxZQUFRQyxZQUFSLENBQXFCLElBQXJCLEVBQTJCLElBQTNCLEVBQWlDLEdBQWpDO0FBQ0FDLE1BQUVDLE1BQUYsRUFBVUMsU0FBVixDQUFvQkMsTUFBcEI7QUFDRDs7QUFFRCxXQUFTQyxVQUFULEdBQXNCO0FBQ3BCLFFBQUlQLE9BQU9ELFNBQVNDLElBQXBCOztBQUVBLFFBQUlBLElBQUosRUFBVTtBQUNSRyxRQUFFSCxJQUFGLEVBQVFRLElBQVIsQ0FBYSxjQUFiLEVBQTZCQyxPQUE3QixDQUFxQyxPQUFyQztBQUNELEtBRkQsTUFFTztBQUNMTixRQUFFLHFCQUFGLEVBQXlCTSxPQUF6QixDQUFpQyxPQUFqQztBQUNEO0FBQ0Y7O0FBRUQsTUFBSUgsU0FBUyxDQUFiOztBQUVBSCxJQUFFLGNBQUYsRUFBa0JPLFlBQWxCLENBQStCO0FBQzdCQyxnQkFBWSxzQkFBVztBQUNyQkwsZUFBU0gsRUFBRUMsTUFBRixFQUFVQyxTQUFWLEVBQVQ7QUFDRCxLQUg0QjtBQUk3Qk8saUJBQWFkO0FBSmdCLEdBQS9COztBQU9BSyxJQUFFLFNBQUYsRUFBYVUsV0FBYixDQUF5QjtBQUN2QkMsV0FBTztBQURnQixHQUF6Qjs7QUFJQTtBQUNBWCxJQUFFLGdCQUFGLEVBQW9CWSxJQUFwQixDQUF5QixVQUFTQyxDQUFULEVBQVlDLE9BQVosRUFBcUI7QUFDNUMsUUFBSUgsUUFBUSxDQUFaOztBQUVBLFFBQUlYLEVBQUVjLE9BQUYsRUFBV0MsUUFBWCxHQUFzQkMsTUFBdEIsR0FBK0JMLEtBQW5DLEVBQTBDO0FBQ3hDWCxRQUFFYyxPQUFGLEVBQVdHLFFBQVgsQ0FBb0IsY0FBcEI7QUFDQWpCLFFBQUVjLE9BQUYsRUFBV0osV0FBWCxDQUF1QjtBQUNyQkMsZUFBTyxDQURjO0FBRXJCTyxjQUFNLElBRmU7QUFHckJDLGFBQUssSUFIZ0I7QUFJckJDLGNBQU07QUFKZSxPQUF2QjtBQU1EO0FBQ0YsR0FaRDs7QUFjQTtBQUNBQyxhQUFXLFlBQVc7QUFDcEJyQixNQUFFLGdCQUFGLEVBQW9Cc0IsRUFBcEIsQ0FBdUIsT0FBdkIsRUFBZ0MsWUFBVztBQUN6QyxVQUFJQyxNQUFNdkIsRUFBRSxJQUFGLEVBQVFLLElBQVIsQ0FBYSxLQUFiLEVBQW9CbUIsS0FBcEIsRUFBVjs7QUFFQXhCLFFBQUUsaUJBQUYsRUFBcUJ5QixJQUFyQixDQUEwQixtQkFBMUIsRUFBK0N6QixFQUFFdUIsR0FBRixFQUFPRSxJQUFQLENBQVksS0FBWixDQUEvQyxFQUFtRUMsSUFBbkUsQ0FBd0VILEdBQXhFO0FBQ0QsS0FKRDs7QUFNQW5CO0FBQ0QsR0FSRCxFQVFHLEdBUkg7O0FBVUE7QUFDQUosSUFBRSxjQUFGLEVBQWtCc0IsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsWUFBVztBQUN2QyxRQUFJSyxLQUFLM0IsRUFBRSxJQUFGLEVBQVE0QixPQUFSLENBQWdCLFVBQWhCLEVBQTRCSCxJQUE1QixDQUFpQyxJQUFqQyxDQUFUO0FBQUEsUUFDSUksS0FBSzdCLEVBQUUsSUFBRixFQUFRNEIsT0FBUixDQUFnQixVQUFoQixFQUE0QkUsR0FBNUIsQ0FBZ0Msa0JBQWhDLENBRFQ7O0FBR0EsUUFBSUQsT0FBTyxrQkFBWCxFQUErQkEsS0FBSyxTQUFMO0FBQy9CN0IsTUFBRSxlQUFGLEVBQW1COEIsR0FBbkIsQ0FBdUIsa0JBQXZCLEVBQTJDRCxFQUEzQztBQUNBakMsYUFBU0MsSUFBVCxHQUFnQixNQUFJOEIsRUFBcEI7QUFDRCxHQVBEOztBQVNBM0IsSUFBRStCLFFBQUYsRUFBWVQsRUFBWixDQUFlLE9BQWYsRUFBd0IsNEJBQXhCLEVBQXNELFVBQVNVLENBQVQsRUFBWTtBQUNoRUEsTUFBRUMsY0FBRjs7QUFFQUMsWUFBUUMsR0FBUixDQUFZLEdBQVo7O0FBRUFuQyxNQUFFLHFCQUFGLEVBQXlCTSxPQUF6QixDQUFpQyxPQUFqQztBQUVELEdBUEQ7O0FBU0FMLFNBQU9tQyxZQUFQLEdBQXNCaEMsVUFBdEI7QUFJRCxDQW5GRCxFQW1GR0gsTUFuRkgiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKHJvb3QpIHtcblxuICAvLyBzdmcgZm9yIGFsbFxuICBzdmc0ZXZlcnlib2R5KCk7XG5cbiAgZnVuY3Rpb24gcmVtb3ZlSGFzaCAoKSB7XG4gICAgbG9jYXRpb24uaGFzaCA9ICcnO1xuICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIG51bGwsICcgJyk7XG4gICAgJCh3aW5kb3cpLnNjcm9sbFRvcChzY3JvbGwpXG4gIH1cblxuICBmdW5jdGlvbiBoYXNoQ2hhbmdlKCkge1xuICAgIHZhciBoYXNoID0gbG9jYXRpb24uaGFzaDtcblxuICAgIGlmIChoYXNoKSB7XG4gICAgICAkKGhhc2gpLmZpbmQoJy5vZmZlcl9fbW9yZScpLnRyaWdnZXIoJ2NsaWNrJylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLmZlYXRoZXJsaWdodC1jbG9zZScpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHNjcm9sbCA9IDA7XG5cbiAgJCgnLm9mZmVyX19tb3JlJykuZmVhdGhlcmxpZ2h0KHtcbiAgICBiZWZvcmVPcGVuOiBmdW5jdGlvbigpIHtcbiAgICAgIHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICB9LFxuICAgIGJlZm9yZUNsb3NlOiByZW1vdmVIYXNoXG4gIH0pXG5cbiAgJCgnLnNsaWRlcicpLm93bENhcm91c2VsKHtcbiAgICBpdGVtczogMVxuICB9KVxuXG4gIC8vIEdhbGxlcnktUGFnZVxuICAkKCcuZy1ibG9ja19fbGlzdCcpLmVhY2goZnVuY3Rpb24oaSwgZ2FsbGVyeSkge1xuICAgIHZhciBpdGVtcyA9IDE7XG5cbiAgICBpZiAoJChnYWxsZXJ5KS5jaGlsZHJlbigpLmxlbmd0aCA+IGl0ZW1zKSB7XG4gICAgICAkKGdhbGxlcnkpLmFkZENsYXNzKCdvd2wtY2Fyb3VzZWwnKTtcbiAgICAgICQoZ2FsbGVyeSkub3dsQ2Fyb3VzZWwoe1xuICAgICAgICBpdGVtczogMSxcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgbmF2OiB0cnVlLFxuICAgICAgICBkb3RzOiB0cnVlXG4gICAgICB9KVxuICAgIH1cbiAgfSlcblxuICAvLyBHYWxsZXJ5XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgJCgnLmdhbGxlcnlfX2l0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpbWcgPSAkKHRoaXMpLmZpbmQoJ2ltZycpLmNsb25lKCk7XG5cbiAgICAgICQoJy5nYWxsZXJ5X19pbWFnZScpLmF0dHIoJ2RhdGEtZmVhdGhlcmxpZ2h0JywgJChpbWcpLmF0dHIoJ3NyYycpKS5odG1sKGltZyk7XG4gICAgfSk7XG5cbiAgICBoYXNoQ2hhbmdlKCk7XG4gIH0sIDEwMClcblxuICAvLyBTZWN0aW9uc1xuICAkKCcub2ZmZXJfX21vcmUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgaWQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5zZWN0aW9uJykuYXR0cignaWQnKSxcbiAgICAgICAgYmcgPSAkKHRoaXMpLmNsb3Nlc3QoJy5zZWN0aW9uJykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XG5cbiAgICBpZiAoYmcgPT09ICdyZ2JhKDAsIDAsIDAsIDApJykgYmcgPSAnI2JkYzdhZSc7XG4gICAgJCgnLmZlYXRoZXJsaWdodCcpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsIGJnKTtcbiAgICBsb2NhdGlvbi5oYXNoID0gJyMnK2lkO1xuICB9KVxuXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuZmVhdGhlcmxpZ2h0IFtkYXRhLWNsb3NlXScsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zb2xlLmxvZygxMjMpXG5cbiAgICAkKCcuZmVhdGhlcmxpZ2h0LWNsb3NlJykudHJpZ2dlcignY2xpY2snKTtcblxuICB9KVxuXG4gIHdpbmRvdy5vbmhhc2hjaGFuZ2UgPSBoYXNoQ2hhbmdlXG5cblxuXG59KSh3aW5kb3cpO1xuIl19
