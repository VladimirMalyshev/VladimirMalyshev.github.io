var element = document.getElementById('resume').cloneNode(true);
var button = element.querySelector('.download-btn');
if (button) {
    button.remove();
}
function downloadPDF() {
  var element = document.getElementById('resume');
  var opt = {
    margin:       0.5,
    filename:     'Vladimir_Malyshev_Resume.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  html2pdf().from(element).set(opt).save();
}