import { eventSource, event_types } from '../../../script.js';

eventSource.on(event_types.APP_READY, () => {
  const select = document.querySelector('#themes');
  if (!select || select.options.length === 0) return;
  const options = select.options;
  const random = options[Math.floor(Math.random() * options.length)];
  console.log('随机主题：', random.value);
  select.value = random.value;
  select.dispatchEvent(new Event('change'));
});
