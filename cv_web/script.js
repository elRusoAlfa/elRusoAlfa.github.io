let options = {
    root: document.querySelector('#languages'),
    rootMargin: '0px',
    threshold: 1.0
  }

let observer = new IntersectionObserver(callback, options);

var target = document.querySelector('#languages');
observer.observe(target);

var callback = function(entries, observer) {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
    });
  };

observer.observe(document.querySelector('#languages'));