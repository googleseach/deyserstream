// Lógica del Modo Claro/Oscuro
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Comprobar preferencia guardada
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme === 'light') {
        document.body.classList.add('light-mode');
        if(themeToggleBtn) themeToggleBtn.textContent = '☀️';
    }

    // Evento de click
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            
            if (document.body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light');
                themeToggleBtn.textContent = '☀️';
            } else {
                localStorage.setItem('theme', 'dark');
                themeToggleBtn.textContent = '🌙';
            }
        });
    }
});
