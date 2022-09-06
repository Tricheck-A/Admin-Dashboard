document.documentElement.className = 'Dark'; // DEFAULT THEME WIRD AUF 'DARK' GESTELLT

function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'Dark' ? 'Light' : 'Dark';
    root.className = newTheme;
    
    document.querySelector('.theme-name').textContent = newTheme;
  }


let themeSwitch = document.getElementById("themeSlider");

themeSwitch.addEventListener("click", setTheme);