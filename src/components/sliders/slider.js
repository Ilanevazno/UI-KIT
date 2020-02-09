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
	width: 710
});

$('.second-slider').jRange({
	from: 0,
	to: 100,
	theme: 'theme-mint',
	step: 25,
	scale: [0, 25, 50, 75, 100],
	format: '%s',
	width: 710,
});