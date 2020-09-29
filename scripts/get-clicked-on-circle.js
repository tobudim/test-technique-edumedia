/**
 * If clicked on circle get it
 * => Return circle: object || noCircle: false
 * @param {array} circles
 * @param {object} mousePosition { x, y }
 */
export default function getClickedOnCircle(circles, mousePosition) {
  let result = false;
  circles.forEach((circle) => {
    const distances = {
      x: circle.position.x - mousePosition.x,
      y: circle.position.y - mousePosition.y,
    };
    if (
      distances.x * distances.x + distances.y * distances.y <
      circle.radius * circle.radius
    ) {
      result = circle;
    }
  });
  return result;
}
