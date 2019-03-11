'use strict';

(function (root) {

  // svg for all
  svg4everybody();

  $('.slider').owlCarousel({
    items: 1
  });

  // function init() {
  //   $('[data-tabs-nav]').each(function(i, tab) {
  //     $(tab).children().first().trigger('click');
  //   });
  // };
  //
  // // Global
  // var winWidth = $(window).width();
  //
  // // Sliders
  // $('[data-slider] .slider__list').owlCarousel({
  //   items: 1,
  //   loop: true,
  //   margin: 20,
  //   smartSpeed: 400,
  //   autoplay: true,
  //   autoplayTimeout: 5000,
  //   onChange: function(e) {
  //     var sliderData = $(this.$element).closest('[data-slider]').data('slider');
  //
  //     setTimeout(function() {
  //       var slider = $('[data-slider='+sliderData+']'),
  //           active = $(slider).find('.owl-item.active'),
  //           msg = $(active).find('[data-message]').data('message'),
  //           link = $(active).find('.slide__link').attr('href');
  //
  //       $(slider).find('.slider__message').fadeOut(200, function() {
  //         $(slider).find('.slider__more').attr('href', link);
  //         $(this).html(msg).fadeIn(200);
  //       })
  //
  //     },1);
  //   }
  // });
  //
  // // Tabs
  // $('[data-tabs-nav] > *').on('click', function() {
  //   var index = $(this).index(),
  //       data = $(this).parent().data('tabs-nav'),
  //       scroll = Boolean($('[data-tabs-content='+data+']').data('simplebar')),
  //       content = (scroll) ? $('[data-tabs-content='+data+'] .simplebar-content > *').get(index) : $('[data-tabs-content='+data+'] > *').get(index);
  //
  //   $(this).addClass('tab_active').siblings('.tab').removeClass('tab_active');
  //   $('[data-tabs-content='+data+'] .show').removeClass('show');
  //   $(content).addClass('show');
  // });
  //
  // // Custom select
  // $('.select').niceSelect();
  //
  // $('.select').on('click', function() {
  //   new SimpleBar($(this).find('.list').get(0))
  // });
  //
  // // app init
  // setTimeout(function() {
  //   init();
  // }, 1);
})(window);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJyb290Iiwic3ZnNGV2ZXJ5Ym9keSIsIiQiLCJvd2xDYXJvdXNlbCIsIml0ZW1zIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsVUFBU0EsSUFBVCxFQUFlOztBQUVkO0FBQ0FDOztBQUVBQyxJQUFFLFNBQUYsRUFBYUMsV0FBYixDQUF5QjtBQUN2QkMsV0FBTztBQURnQixHQUF6Qjs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVELENBcEVELEVBb0VHQyxNQXBFSCIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24ocm9vdCkge1xuXG4gIC8vIHN2ZyBmb3IgYWxsXG4gIHN2ZzRldmVyeWJvZHkoKTtcblxuICAkKCcuc2xpZGVyJykub3dsQ2Fyb3VzZWwoe1xuICAgIGl0ZW1zOiAxXG4gIH0pXG5cbiAgLy8gZnVuY3Rpb24gaW5pdCgpIHtcbiAgLy8gICAkKCdbZGF0YS10YWJzLW5hdl0nKS5lYWNoKGZ1bmN0aW9uKGksIHRhYikge1xuICAvLyAgICAgJCh0YWIpLmNoaWxkcmVuKCkuZmlyc3QoKS50cmlnZ2VyKCdjbGljaycpO1xuICAvLyAgIH0pO1xuICAvLyB9O1xuICAvL1xuICAvLyAvLyBHbG9iYWxcbiAgLy8gdmFyIHdpbldpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gIC8vXG4gIC8vIC8vIFNsaWRlcnNcbiAgLy8gJCgnW2RhdGEtc2xpZGVyXSAuc2xpZGVyX19saXN0Jykub3dsQ2Fyb3VzZWwoe1xuICAvLyAgIGl0ZW1zOiAxLFxuICAvLyAgIGxvb3A6IHRydWUsXG4gIC8vICAgbWFyZ2luOiAyMCxcbiAgLy8gICBzbWFydFNwZWVkOiA0MDAsXG4gIC8vICAgYXV0b3BsYXk6IHRydWUsXG4gIC8vICAgYXV0b3BsYXlUaW1lb3V0OiA1MDAwLFxuICAvLyAgIG9uQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gIC8vICAgICB2YXIgc2xpZGVyRGF0YSA9ICQodGhpcy4kZWxlbWVudCkuY2xvc2VzdCgnW2RhdGEtc2xpZGVyXScpLmRhdGEoJ3NsaWRlcicpO1xuICAvL1xuICAvLyAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgLy8gICAgICAgdmFyIHNsaWRlciA9ICQoJ1tkYXRhLXNsaWRlcj0nK3NsaWRlckRhdGErJ10nKSxcbiAgLy8gICAgICAgICAgIGFjdGl2ZSA9ICQoc2xpZGVyKS5maW5kKCcub3dsLWl0ZW0uYWN0aXZlJyksXG4gIC8vICAgICAgICAgICBtc2cgPSAkKGFjdGl2ZSkuZmluZCgnW2RhdGEtbWVzc2FnZV0nKS5kYXRhKCdtZXNzYWdlJyksXG4gIC8vICAgICAgICAgICBsaW5rID0gJChhY3RpdmUpLmZpbmQoJy5zbGlkZV9fbGluaycpLmF0dHIoJ2hyZWYnKTtcbiAgLy9cbiAgLy8gICAgICAgJChzbGlkZXIpLmZpbmQoJy5zbGlkZXJfX21lc3NhZ2UnKS5mYWRlT3V0KDIwMCwgZnVuY3Rpb24oKSB7XG4gIC8vICAgICAgICAgJChzbGlkZXIpLmZpbmQoJy5zbGlkZXJfX21vcmUnKS5hdHRyKCdocmVmJywgbGluayk7XG4gIC8vICAgICAgICAgJCh0aGlzKS5odG1sKG1zZykuZmFkZUluKDIwMCk7XG4gIC8vICAgICAgIH0pXG4gIC8vXG4gIC8vICAgICB9LDEpO1xuICAvLyAgIH1cbiAgLy8gfSk7XG4gIC8vXG4gIC8vIC8vIFRhYnNcbiAgLy8gJCgnW2RhdGEtdGFicy1uYXZdID4gKicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAvLyAgIHZhciBpbmRleCA9ICQodGhpcykuaW5kZXgoKSxcbiAgLy8gICAgICAgZGF0YSA9ICQodGhpcykucGFyZW50KCkuZGF0YSgndGFicy1uYXYnKSxcbiAgLy8gICAgICAgc2Nyb2xsID0gQm9vbGVhbigkKCdbZGF0YS10YWJzLWNvbnRlbnQ9JytkYXRhKyddJykuZGF0YSgnc2ltcGxlYmFyJykpLFxuICAvLyAgICAgICBjb250ZW50ID0gKHNjcm9sbCkgPyAkKCdbZGF0YS10YWJzLWNvbnRlbnQ9JytkYXRhKyddIC5zaW1wbGViYXItY29udGVudCA+IConKS5nZXQoaW5kZXgpIDogJCgnW2RhdGEtdGFicy1jb250ZW50PScrZGF0YSsnXSA+IConKS5nZXQoaW5kZXgpO1xuICAvL1xuICAvLyAgICQodGhpcykuYWRkQ2xhc3MoJ3RhYl9hY3RpdmUnKS5zaWJsaW5ncygnLnRhYicpLnJlbW92ZUNsYXNzKCd0YWJfYWN0aXZlJyk7XG4gIC8vICAgJCgnW2RhdGEtdGFicy1jb250ZW50PScrZGF0YSsnXSAuc2hvdycpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gIC8vICAgJChjb250ZW50KS5hZGRDbGFzcygnc2hvdycpO1xuICAvLyB9KTtcbiAgLy9cbiAgLy8gLy8gQ3VzdG9tIHNlbGVjdFxuICAvLyAkKCcuc2VsZWN0JykubmljZVNlbGVjdCgpO1xuICAvL1xuICAvLyAkKCcuc2VsZWN0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIC8vICAgbmV3IFNpbXBsZUJhcigkKHRoaXMpLmZpbmQoJy5saXN0JykuZ2V0KDApKVxuICAvLyB9KTtcbiAgLy9cbiAgLy8gLy8gYXBwIGluaXRcbiAgLy8gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgLy8gICBpbml0KCk7XG4gIC8vIH0sIDEpO1xuXG59KSh3aW5kb3cpO1xuIl19
