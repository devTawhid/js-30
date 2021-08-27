const inputs = document.querySelectorAll(".controls input");

function handleUpdates() {
  const suffix = this.dataset.sizing || "";
  console.log(suffix);
  document.documentElement.style.setProperty(
    `--${this.name}`,
    `${this.value}${suffix}`
  );
}

"change mousemove".split(" ").forEach((ev) => {
  inputs.forEach(function (input) {
    input.addEventListener(ev, handleUpdates);
  });
});
