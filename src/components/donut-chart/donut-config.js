import '../../vendor/canvas2d/canvasjs.min';

export default function connectDonut(selector, settings) {
  if ($(`#${selector}`).length !== 0) {
    const chart = new CanvasJS.Chart(selector, {
      animationEnabled: true,
      data: settings,
    });
    chart.render();
  }
}
