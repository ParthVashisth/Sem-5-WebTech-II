const rocket = document.querySelector('.rocket');
const infoPanel = document.querySelector('.info-panel');
const bodyInfo = document.getElementById('body-info');
const wingInfo = document.getElementById('wing-info');
const windowInfo = document.getElementById('window-info');

rocket.addEventListener('mouseenter', () => {
  gsap.to(rocket, { y: -150, duration: 1 });
  infoPanel.style.display = 'block';
});

rocket.addEventListener('mouseleave', () => {
  gsap.to(rocket, { y: 0, duration: 1 });
  infoPanel.style.display = 'none';
});

rocket.addEventListener('mousemove', (e) => {
  const rect = rocket.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  if (x > rect.width * 0.4 && x < rect.width * 0.6) {
    if (y < rect.height * 0.5) {
      showInfo(bodyInfo);
    } else {
      showInfo(wingInfo);
    }
  } else if (x > rect.width * 0.2 && x < rect.width * 0.8) {
    showInfo(windowInfo);
  } else {
    hideInfo();
  }
});

function showInfo(info) {
  gsap.to(infoPanel, { opacity: 1, duration: 0.2 });
  infoPanel.style.display = 'block';
  bodyInfo.style.display = 'none';
  wingInfo.style.display = 'none';
  windowInfo.style.display = 'none';
  info.style.display = 'block';
}

function hideInfo() {
  gsap.to(infoPanel, { opacity: 0, duration: 0.2 });
}