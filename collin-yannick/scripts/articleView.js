'use strict';

let articleView = {};

articleView.populateFilters = function() {
  $('article').each(function() {

    let authorName, category, optionTag;
    if (!$(this).hasClass('template')) {


      authorName = $(this).attr('data-author');

      optionTag = `<option value="${authorName}">${authorName}</option>`;
      console.log(authorName);
      if ($('#author-filter option[value="' + authorName + '"]').length === 0) {
        $('#author-filter').append(optionTag);
      }

      category = $(this).attr('data-category');

      optionTag = `<option value=${category}>${category}</option>`;

      if ($('#category-filter option[value="' + category + '"]').length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};

articleView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {

    if ($(this).val()) {

      let $currentSelected = $(this).val()

      $('article').hide(200);

      $(`[data-author="${$currentSelected}"]`).show(400);

    } else {
      $('article').show(300);
      $('.template').hide();

    }
    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = function() {

  $('#category-filter').on('change', function() {

    if ($(this).val()) {

      let $currentSelected = $(this).val()

      $('article').hide();

      $(`[data-category="${$currentSelected}"]`).show(300);


    } else {
      $('article').show(300);
      $('.template').hide();

    }
    $('#author-filter').val('');
  });


};

articleView.handleMainNav = function() {

  $('.tab').click(function(){
    let $selectedTab = $(this).attr('data-content');
    $('.tab-content').hide();
    $(`#${$selectedTab}`).show();
    $('.template').hide();
  });
  $('.main-nav .tab:first').click(function);
};

articleView.setTeasers = function() {
  // REVIEW: Hide elements beyond the first 2 in any article body.
  $('.article-body *:nth-of-type(n+2)').hide();

  // TODO: Add an event handler to reveal all the hidden elements, when the .read-on link is clicked. You can go ahead and hide the "Read On" link once it has been clicked. Be sure to prevent the default link-click action!
  // Ideally, we'd attach this as just one event handler on the #articles section, and let it process (in other words... delegate) any .read-on clicks that happen within child nodes.
};

$(document).ready(function() {
  articleView.populateFilters();
  articleView.handleAuthorFilter();
  articleView.handleCategoryFilter();
  articleView.handleMainNav();
  articleView.setTeasers();
});
