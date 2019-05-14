const toggleSwitch = document.querySelector('.toggleWrapper input[type="checkbox"]');

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

$(function() {
	$('.contact-mail').click(function(e) {
		e.preventDefault();
		$(this).replaceWith(function() {
			return '<a href="mailto:yatharth1555@gmail.com">yatharth1555@gmail.com</a>';
		});
	});
	$('.scroll').click(function() {
	    $('html,body').animate({
	    	scrollTop: $('.skills').offset().top
	    }, 1000);
	});

	var goToTop = function() {
		$('.js-gotop').on('click', function(event){
			event.preventDefault();
			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			return false;
		});

		$(window).scroll(function(){
			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}
		});
	};
});