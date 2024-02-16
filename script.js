document.addEventListener('DOMContentLoaded', function() {
    const counter = document.getElementById('counter');
    const incrementBtn = document.getElementById('increment');
    const decrementBtn = document.getElementById('decrement');
    const resetBtn = document.getElementById('reset');
    
    let count = 0;
  
    // Function to update the counter display
    function updateCounter() {
      counter.textContent = count;
    }
  
    // Increment button click event
    incrementBtn.addEventListener('click', function() {
      count++;
      updateCounter();
    });
  
    // Decrement button click event
    decrementBtn.addEventListener('click', function() {
      if (count > 0) {
        count--;
        updateCounter();
      }
    });
  
    // Reset button click event
    resetBtn.addEventListener('click', function() {
      count = 0;
      updateCounter();
    });
  
    // Initial counter display
    updateCounter();
  });
  