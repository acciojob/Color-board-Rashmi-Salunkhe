//your JS code here. If required.
// script.js

document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('color-board');
    
    // Create 800 boxes and append to the board
    for (let i = 0; i < 800; i++) {
        const box = document.createElement('div');
        box.classList.add('square');
        board.appendChild(box);
        
        // Event listener for hover effect
        box.addEventListener('mouseover', () => {
            box.classList.add('change');
            setTimeout(() => {
                box.classList.remove('change');
            }, 1000); // 1 second to revert color
        });
    }
});
