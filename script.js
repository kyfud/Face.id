document.addEventListener('DOMContentLoaded', () => {
  const dropArea = document.getElementById('drop-area');
  const fileElem = document.getElementById('fileElem');
  const searchButton = document.getElementById('searchButton');

  ['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropArea.style.background = '#e9ecef';
    }, false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropArea.style.background = '#ffffff';
    }, false);
  });

  dropArea.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
  });

  fileElem.addEventListener('change', function() {
    handleFiles(this.files);
  });

  function handleFiles(files) {
    if (files.length > 0) {
      alert(`Selected file: ${files[0].name}`);
    }
  }

  searchButton.addEventListener('click', () => {
    const agree = document.getElementById('iagree_main').checked;
    if (!agree) {
      alert('Please agree to the terms of use first.');
      return;
    }
    alert('Search initiated! (Backend database integration required for live results)');
  });
});
