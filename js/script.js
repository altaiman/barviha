'use strict';

(function (root) {

  // svg for all
  svg4everybody();

  $('.slider').owlCarousel({
    items: 1
  });

  // Gallery
  setTimeout(function () {
    $('.gallery__item').on('click', function () {
      var img = $(this).find('img').clone();

      $('.gallery__image').attr('data-featherlight', $(img).attr('src')).html(img);
    });
  }, 100);
})(window);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJyb290Iiwic3ZnNGV2ZXJ5Ym9keSIsIiQiLCJvd2xDYXJvdXNlbCIsIml0ZW1zIiwic2V0VGltZW91dCIsIm9uIiwiaW1nIiwiZmluZCIsImNsb25lIiwiYXR0ciIsImh0bWwiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBQyxVQUFTQSxJQUFULEVBQWU7O0FBRWQ7QUFDQUM7O0FBRUFDLElBQUUsU0FBRixFQUFhQyxXQUFiLENBQXlCO0FBQ3ZCQyxXQUFPO0FBRGdCLEdBQXpCOztBQUlBO0FBQ0FDLGFBQVcsWUFBVztBQUNwQkgsTUFBRSxnQkFBRixFQUFvQkksRUFBcEIsQ0FBdUIsT0FBdkIsRUFBZ0MsWUFBVztBQUN6QyxVQUFJQyxNQUFNTCxFQUFFLElBQUYsRUFBUU0sSUFBUixDQUFhLEtBQWIsRUFBb0JDLEtBQXBCLEVBQVY7O0FBRUFQLFFBQUUsaUJBQUYsRUFBcUJRLElBQXJCLENBQTBCLG1CQUExQixFQUErQ1IsRUFBRUssR0FBRixFQUFPRyxJQUFQLENBQVksS0FBWixDQUEvQyxFQUFtRUMsSUFBbkUsQ0FBd0VKLEdBQXhFO0FBQ0QsS0FKRDtBQUtELEdBTkQsRUFNRyxHQU5IO0FBU0QsQ0FuQkQsRUFtQkdLLE1BbkJIIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbihyb290KSB7XG5cbiAgLy8gc3ZnIGZvciBhbGxcbiAgc3ZnNGV2ZXJ5Ym9keSgpO1xuXG4gICQoJy5zbGlkZXInKS5vd2xDYXJvdXNlbCh7XG4gICAgaXRlbXM6IDFcbiAgfSlcblxuICAvLyBHYWxsZXJ5XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgJCgnLmdhbGxlcnlfX2l0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpbWcgPSAkKHRoaXMpLmZpbmQoJ2ltZycpLmNsb25lKCk7XG5cbiAgICAgICQoJy5nYWxsZXJ5X19pbWFnZScpLmF0dHIoJ2RhdGEtZmVhdGhlcmxpZ2h0JywgJChpbWcpLmF0dHIoJ3NyYycpKS5odG1sKGltZyk7XG4gICAgfSk7XG4gIH0sIDEwMClcblxuXG59KSh3aW5kb3cpO1xuIl19
