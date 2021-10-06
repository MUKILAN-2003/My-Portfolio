$(window).scroll(function () {
    AOS.init()
	var offsets = $('#about').offset();
    if ($(window).scrollTop()+screen.height-420 > offsets.top) {
        $(".about-details").addClass("blur");
    } else {
        $(".about-details").removeClass("blur");
    }
});