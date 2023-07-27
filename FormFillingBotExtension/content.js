function fillFormOnPage(userData) {
    // Your logic to identify and fill the form elements on the page with the userData
  }
  
  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.type === "fill_form") {
      // Retrieve user data from local storage
      chrome.storage.local.get(["firstName", "lastName", "email", "phone"], function (userData) {
        // Check if the bot has all the required user data
        if (userData.firstName && userData.lastName && userData.email && userData.phone) {
          // Fill the form with user data
          fillFormOnPage(userData);
          sendResponse({ success: true });
        } else {
          sendResponse({ success: false });
        }
      });
      
      // To keep the messaging channel open to receive the response
      return true;
    }
  });
  