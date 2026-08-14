const typeTarget = document.querySelector('#terminal-type');
const phrase = 'ready to make something?';
let typeIndex = 0;
function typeTerminal() {
  if (typeIndex < phrase.length) {
    typeTarget.textContent += phrase[typeIndex++];
    setTimeout(typeTerminal, 55);
  }
}
setTimeout(typeTerminal, 900);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const apps = {
  web: ['web.exe', 'BUILD A WEBSITE.', 'A corner of the internet that is completely yours.', '⌘'],
  mobile: ['mobile.app', 'BUILD AN APP.', 'Put an idea in everyone’s pocket.', '▤'],
  game: ['game.exe', 'BUILD A GAME.', 'Make play the whole point.', '♜'],
  ai: ['ai.tool', 'BUILD SOMETHING SMART.', 'Teach a machine a new trick.', '◉'],
  creative: ['weird.art', 'BUILD SOMETHING WEIRD.', 'Make the thing only you would make.', '✦'],
  hardware: ['hardware.io', 'BUILD IT FOR REAL.', 'Make code escape the screen.', '▥'],
  unknown: ['unknown.???', 'BUILD THE UNEXPECTED.', 'The best category is one we have not imagined yet.', '?']
};
const appWindow = document.querySelector('#app-window');
document.querySelectorAll('[data-app]').forEach((button) => {
  button.addEventListener('click', () => {
    const [name, title, copy, icon] = apps[button.dataset.app];
    document.querySelector('#app-name').textContent = name;
    document.querySelector('#app-title').textContent = title;
    document.querySelector('#app-copy').textContent = copy;
    document.querySelector('.app-art').textContent = icon;
    appWindow.classList.add('app-active');
    document.querySelectorAll('[data-app]').forEach((item) => item.classList.remove('selected'));
    button.classList.add('selected');
  });
});
document.querySelector('#close-app').addEventListener('click', () => appWindow.classList.remove('app-active'));

document.querySelector('.dialog-button').addEventListener('click', (event) => {
  event.currentTarget.textContent = 'ACKNOWLEDGED ✓';
  event.currentTarget.classList.add('acknowledged');
});
