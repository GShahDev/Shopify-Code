$(function() {
  initBrandFilter();
});

function initBrandFilter() {
  // Filter using navigation
  $(".brand-nav-item a").click(function() {
    var nav = $(this).attr("data-nav");


    // Remove & Add active class
    $(".brand-nav-item").removeClass("active");
    $(this)
      .parent()
      .toggleClass("active");

    // Hide all the results
    $(".brand-results-row").addClass("inactive");


    // Loop through the row
    $(".brand-results-row").each(function() {
      var term = $(this).attr("data-term");

      if (nav == term) {
        $(this).removeClass("inactive");
      }
    });

    // Only return false if data-toggle is brand
    if ($(this).attr("data-toggle") == "brand") {
      return false;
    }
  
    });
}

/* Search popup */

$("a#inline").fancybox({
		'hideOnContentClick': true
	});
