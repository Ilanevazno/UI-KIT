import connectDonut from './donut-config';

const donutSettings = [{
  type: 'doughnut',
  innerRadius: 40,
  dataPoints: [
    { y: 25, color: '#E5E5E5' },
    { y: 10, color: '#747474' },
    { y: 25, color: '#E75735' },
    { y: 25, color: '#4EB7A8' },
  ],
}];

connectDonut('js-ui-kit-donut', donutSettings);
