(function() {
  function trySwitch() {
    const select = document.querySelector('#themes');
    if (!select || select.options.length === 0) return false;
    const options = select.options;
    const random = options[Math.floor(Math.random() * options.length)];
    console.log('随机主题：', random.value);
    select.value = random.value;
    select.dispatchEvent(new Event('change'));
    return true;
  }

  function waitAndSwitch(retries = 20) {
    if (trySwitch()) return;
    if (retries <= 0) return console.warn('随机主题：找不到 #themes，放弃');
    setTimeout(() => waitAndSwitch(retries - 1), 500);
  }

  waitAndSwitch();
})();
