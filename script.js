// Configuração do site. Edite só aqui.
const BOOKING_URL = "https://calendar.app.google/M5JJGD5ViEnHDFyY7"; 

// Botões de agendamento
document.querySelectorAll('[data-link="booking"]').forEach((el) => {
  el.href = BOOKING_URL;
});

// Ano do rodapé
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
