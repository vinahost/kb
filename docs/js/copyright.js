// Get the current year
const currentYear = new Date().getFullYear();

// Find the footer element
const footer = document.querySelector('footer');

// Create a copyright notice element
const copyrightNotice = document.createElement('p');
copyrightNotice.textContent = `Copyright © ${currentYear} by Vinahost Team`;

// Append the copyright notice to the footer
footer.appendChild(copyrightNotice);