function isWorkingHours() {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const hours = now.getHours();
  
    // Check if it's Monday to Friday (dayOfWeek from 1 to 5) and between 9 and 17 (9 AM to 5 PM)
    return dayOfWeek >= 1 && dayOfWeek <= 5 && hours >= 9 && hours < 17;
  }
  
  // Redirect to a "closed" page if it's outside working hours
  if (!isWorkingHours()) {
    window.location.href = "Closed.html";
  }
