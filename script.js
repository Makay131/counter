const counters = document.querySelectorAll('.counter');
const incVal = 200;

counters.forEach((counter) => {
  counter.textContent = '';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const c = +counter.textContent;
    const increment = target / incVal;

    //from now on the code is basically making a loop until the target is reached
    if (c < target) {
      counter.textContent = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 10);
    }
  };

  updateCounter();
});
