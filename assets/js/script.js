const toggleSwitch = document.querySelector('.toggleWrapper input[type="checkbox"]');

// Mock localStorage when it is not allowed
let localStorage;
try {
  localStorage = window.localStorage;
} catch (error) {
  localStorage = {
    getItem: key => undefined,
    setItem: () => {}
  };
}

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
	goToTop();
});

var goToTop = function() {
	$('.js-gotop').click(function() {
		$('html, body').animate({
			scrollTop: $('body').offset().top
		}, 1000);
	});

	$(window).scroll(function() {
		var $win = $(window);
		if ($win.scrollTop() > 200) {
            $('.js-top').addClass('active');
        } else {
            $('.js-top').removeClass('active');
        }
	});
};