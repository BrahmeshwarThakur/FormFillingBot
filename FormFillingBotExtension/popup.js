document.getElementById("saveData").addEventListener("click", () => {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
  
    // Save user data to local storage
    chrome.storage.local.set({
      firstName,
      lastName,
      email,
      phone,
      
    });
  });
  