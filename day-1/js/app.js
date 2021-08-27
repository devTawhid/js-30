let btn = document.querySelectorAll(`.key`);

"click keypress".split(" ").forEach(function (e) {
  [...btn].forEach(function (btn) {
    btn.addEventListener(e, () => {
      let id = btn.getAttribute("data-id");
      let audio = document.getElementById(id);
      audio.currentTime = 0;
      audio.play();

      btn.setAttribute("class", "key playing sound");
      setTimeout(() => {
        btn.setAttribute("class", "key");
      }, 1000);
    });
  });
});
