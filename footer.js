// This script runs when the page is loaded
fetch('footer.html')
  .then(response => {
    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text();
  })
  .then(data => {
    // Select the existing footer element by its class and inject the fetched HTML
    const footerElement = document.querySelector('.site-footer');
    if (footerElement) {
        footerElement.innerHTML = data;
    } else {
        console.error('Footer element with class .site-footer not found.');
    }
  })
  .catch(err => console.error('Footer load failed:', err));