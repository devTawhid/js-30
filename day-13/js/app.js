function debounce(func, wait = 30, immediate = true) {
    var timeout;

    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

const images = document.getElementsByTagName('img');
let scrol = 0;

window.addEventListener('scroll', debounce((e) => {
    scrol = scrol + innerHeight;

    [...images].forEach(image => {
        const slideInAt = scrollY + innerHeight - image.height / 2;
        const slideEndAt = image.offsetTop + image.height;

        const isMiddle = scrollY + innerHeight>= slideInAt;
        const isBottom = scrollY + innerHeight>= slideEndAt;

        if(isMiddle){
          image.classList.add('active');
        }
        if(isBottom){
          image.classList.remove('active');
        }

        // the wes way
        // const isHalfShown = slideInAt > image.offsetTop;
        // const isNotScrollPass = scrollY < slideEndAt;

        // if(isHalfShown && isNotScrollPass) {
        //   image.classList.add('active');
        // }else{
        //   image.classList.remove('active');
        }

    });
}));