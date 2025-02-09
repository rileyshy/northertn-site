document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        alert('Saving is disabled.');
    }
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C'))) {
        e.preventDefault();
        alert('Developer tools are disabled.');
    }
});

document.querySelector('.logo').addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('Saving the logo is disabled.');
});

document.querySelector('.new-logo').addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('Saving the new logo is disabled.');
});
