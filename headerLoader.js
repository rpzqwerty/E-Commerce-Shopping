async function loadHeader() {
    try {
      
        const header = await fetch('header.html');
        const footer = await fetch('footer.html');

        if (!header.ok || !footer.ok) {
            throw new Error('Network response was not ok');
        }
        const headerData = await header.text();
        const footerData = await footer.text();

        document.getElementById('headerContainer').innerHTML = headerData;
        document.getElementById('footerContainer').innerHTML = footerData;

    } catch (error) {
        console.error('Error loading header:', error);
    }
  }
  
  // Call the async function to load the header
loadHeader();