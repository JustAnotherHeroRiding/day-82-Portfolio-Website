
let darkMode = false;

const toggleDarkMode = () => {
  darkMode = !darkMode;

  if (darkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
};

const darkModeButton = document.getElementById('dark-mode-button');
darkModeButton.addEventListener('click', toggleDarkMode);