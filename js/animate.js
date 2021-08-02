const fn = () => {};

/**
 * 使用 requestAnimationFrame 实现 setInterval
 * @param {*} ms
 */
export function setInterval(cb = fn, ms = 1000) {
  let startTime = Date.now();
  function handleTicker() {
    foo(Date.now() - startTime);
    startTime = Date.now();
    requestAnimationFrame(handleTicker);
  }
  requestAnimationFrame(handleTicker);

  let t = 0;
  function foo(timeInterval) {
    t += timeInterval;
    if (t > ms) {
      cb();
      t = 0;
    }
  }
}
