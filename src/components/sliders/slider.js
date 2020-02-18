import '../../vendor/jRange/jquery.range-min';
import '../../vendor/jRange/jquery.range.css'
import './slider.scss';

$('.first-slider').jRange({
	from: 0,
	to: 100,
	theme: 'theme-orange',
	step: 1,
	scale: [],
	format: '%s',
	width: 365
});

$('.second-slider').jRange({
	theme: 'theme-mint',
    from: 0,
    to: 100,
    step: 25,
    scale: [0, 25, 50, 75, 100],
    format: '%s',
    width: 300,
    showLabels: true,
    snap: true
});


//fix plugin bug
$(document).on('DOMContentLoaded', () => {
	const moveLabels = (target) => {
		$(document).on('mousemove', function() {
			let position = $(target).position().left;
			let offset = $(target).width() / 2;
			$(target).next().css('left', `${position - offset}px`);
		})
	}

	$('.slider-container').each(function(idx, itm) {
		$(itm).find('.pointer').each(function(idx, itm) {
			moveLabels(itm);

			$(itm).on('mousedown', function() {
				moveLabels(itm);
			});
		})
	})
})