function downloadPDF() {
  const btn = document.querySelector('.download-btn');
  btn.style.display = 'none';

  window.print();

  btn.style.display = 'block';
}
  