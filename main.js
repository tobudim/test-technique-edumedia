(() => {
  const canvas = document.getElementById("canvas");

  // Browser supports canvas ? If not, stop here.
  if (!canvas.getContext) return;

  const context = canvas.getContext("2d");
  const center = {
    x: canvas.width / 2,
    y: canvas.height / 2,
  };
})();
