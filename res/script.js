if (localStorage.getItem("inter") == null) {
inter = localStorage.setItem("inter", 0);
location.reload();
} else {
inter = localStorage.getItem("inter");
}
$(".layout").click(function() {
inter ++;
if (inter == 3) {
inter = 0;
parent.location="https://inter";
}
localStorage.setItem("inter", inter);
    $('.lg').css({ transform: 'translateY(-110%)' });
    $('.layout, .premium').css({opacity: '0' });
    $('.loading').css({display: 'flex'});
});

$("#a").click(function() {
	$('html,body').animate({
	scrollTop: $(".a").offset().top},
	'slow');
	});

$("#b").click(function() {
    $('html,body').animate({
        scrollTop: $(".b").offset().top},
        'slow');
});

$("#c").click(function() {
    $('html,body').animate({
        scrollTop: $(".c").offset().top},
        'slow');
});

$("#d").click(function() {
    $('html,body').animate({
        scrollTop: $(".d").offset().top},
        'slow');
});

$("#f").click(function() {
    $('html,body').animate({
        scrollTop: $(".f").offset().top},
        'slow');
});

$("#g").click(function() {
    $('html,body').animate({
        scrollTop: $(".g").offset().top},
        'slow');
});

$("#h").click(function() {
    $('html,body').animate({
        scrollTop: $(".h").offset().top},
        'slow');
});

$("#i").click(function() {
    $('html,body').animate({
        scrollTop: $(".i").offset().top},
        'slow');
});

$("#j").click(function() {
    $('html,body').animate({
        scrollTop: $(".j").offset().top},
        'slow');
});

$("#l").click(function() {
    $('html,body').animate({
        scrollTop: $(".l").offset().top},
        'slow');
});

$("#m").click(function() {
    $('html,body').animate({
        scrollTop: $(".m").offset().top},
        'slow');
});

$("#n").click(function() {
    $('html,body').animate({
        scrollTop: $(".n").offset().top},
        'slow');
});

$("#o").click(function() {
    $('html,body').animate({
        scrollTop: $(".o").offset().top},
        'slow');
});

$("#p").click(function() {
    $('html,body').animate({
        scrollTop: $(".p").offset().top},
        'slow');
});

$("#r").click(function() {
    $('html,body').animate({
        scrollTop: $(".r").offset().top},
        'slow');
});

$("#s").click(function() {
    $('html,body').animate({
        scrollTop: $(".s").offset().top},
        'slow');
});

$("#t").click(function() {
    $('html,body').animate({
        scrollTop: $(".t").offset().top},
        'slow');
});

$("#u").click(function() {
    $('html,body').animate({
        scrollTop: $(".u").offset().top},
        'slow');
});

$("#w").click(function() {
    $('html,body').animate({
        scrollTop: $(".w").offset().top},
        'slow');
});

$("#z").click(function() {
    $('html,body').animate({
        scrollTop: $(".z").offset().top},
        'slow');
});

$("#two").click(function() {
    $('html,body').animate({
        scrollTop: $(".2").offset().top},
        'slow');
});

$("#eight").click(function() {
    $('html,body').animate({
        scrollTop: $(".8").offset().top},
        'slow');
});