//Problem: Search filter for photo does not work
//Solution: When a user types in a key word into the search bar,
//have the photos filter out according to the key words in real time.

//Attach search bar to the header
  var $search = $("<input>").attr({"class": "filter_search","type": "text","placeholder": "Search"});
  $('.header').append($search);

    $search.keyup(function() {

      var filter = $(this).val();

      $("#gallery li a").each(function() {
        if ($(this).attr("data-title").search(new RegExp(filter, "i")) < 0) {
          $(this).fadeOut();
        } else {
            $(this).fadeIn();
        }

      });

    });
