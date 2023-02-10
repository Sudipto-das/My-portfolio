
// Download CV

function downloadPDF(filePath) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", filePath, true);
    xhr.responseType = "blob";
    xhr.onload = function(e) {
      const blob = xhr.response;
      const objectURL = URL.createObjectURL(blob);
    
      const link = document.createElement("a");
      link.href = objectURL;
      link.download = filePath.substring(filePath.lastIndexOf("/") + 1);
    
      link.click();
    
      URL.revokeObjectURL(objectURL);
    };
    xhr.send();
  }
  
  const button = document.getElementById("download-button");
  button.addEventListener("click", function() {
    downloadPDF("./cv/Document 1.pdf");
  });

// contact Me

document.getElementById("contact-button").addEventListener("click", function() {
    window.location.href = "mailto:sudiptodas877@gmail.com";
  });
  
