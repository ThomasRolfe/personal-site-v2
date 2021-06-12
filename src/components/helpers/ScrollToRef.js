// Pass a reference (React.createRef()) and optional y offset to scroll to

const ScrollToRef = (ref, yOffset = 0) => {
  if (!ref.current || !ref.current.getBoundingClientRect()) {
    return;
  }

  const yValue = ref.current.getBoundingClientRect().y;
  window.scroll(0, yValue + yOffset, 4000);
};

export default ScrollToRef;
