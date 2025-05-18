document.addEventListener('DOMContentLoaded', function() {
    // State management
    const state = {
        fontSize: 16,
        isGrayscale: false,
        currentTheme: 'default'
    };
    
    // Helper function to check if element is part of accessibility controls
    function isAccessibilityControl(element) {
        return element.closest('.accessibility-item') || 
               element.closest('.accessibility-menu') || 
               element.classList.contains('accessibility-item') || 
               element.classList.contains('accessibility-menu');
    }
    
    // Accessibility functions
    document.getElementById('increase-text').addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event bubbling
        state.fontSize = Math.min(state.fontSize + 2, 24); // Cap at 24px
        
        // Apply font size to all elements except accessibility controls
        document.body.querySelectorAll('*').forEach(element => {
            if (!isAccessibilityControl(element)) {
                if (element.tagName.match(/^H[1-6]$/)) {
                    element.style.fontSize = (state.fontSize * 1.5) + 'px';
                } else {
                    element.style.fontSize = state.fontSize + 'px';
                }
            }
        });
    });
    
    document.getElementById('decrease-text').addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event bubbling
        state.fontSize = Math.max(state.fontSize - 2, 12); // Minimum 12px
        
        // Apply font size to all elements except accessibility controls
        document.body.querySelectorAll('*').forEach(element => {
            if (!isAccessibilityControl(element)) {
                if (element.tagName.match(/^H[1-6]$/)) {
                    element.style.fontSize = (state.fontSize * 1.5) + 'px';
                } else {
                    element.style.fontSize = state.fontSize + 'px';
                }
            }
        });
    });
    
    document.getElementById('grayscale').addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event bubbling
        state.isGrayscale = !state.isGrayscale;
        document.body.style.filter = state.isGrayscale ? 'grayscale(100%)' : 'none';
    });
    
    document.getElementById('high-contrast').addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event bubbling
        state.currentTheme = 'high-contrast';
        document.body.style.backgroundColor = '#000000';
        document.body.style.color = '#ffffff';
        
        // Update all text elements except accessibility controls
        document.body.querySelectorAll('*').forEach(element => {
            if (!isAccessibilityControl(element)) {
                element.style.color = '#ffffff';
            }
        });
    });
    
    document.getElementById('negative-contrast').addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event bubbling
        state.currentTheme = 'negative-contrast';
        document.body.style.backgroundColor = '#000000';
        document.body.style.color = '#ffff00';
        
        // Update all text elements except accessibility controls
        document.body.querySelectorAll('*').forEach(element => {
            if (!isAccessibilityControl(element)) {
                element.style.color = '#ffff00';
            }
        });
    });
    
    document.getElementById('light-background').addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event bubbling
        state.currentTheme = 'default';
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#000000';
        
        // Update all text elements except accessibility controls
        document.body.querySelectorAll('*').forEach(element => {
            if (!isAccessibilityControl(element)) {
                element.style.color = '#000000';
            }
        });
    });
    
    document.getElementById('links-underline').addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event bubbling
        // Toggle underline for all links except accessibility controls
        document.body.querySelectorAll('a').forEach(link => {
            if (!isAccessibilityControl(link)) {
                link.style.textDecoration = link.style.textDecoration === 'underline' ? 'none' : 'underline';
            }
        });
    });
    
    document.getElementById('readable-font').addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event bubbling
        document.body.classList.toggle('dyslexia-font');
        
        // Apply font to all text elements except accessibility controls
        const isReadableFont = document.body.classList.contains('dyslexia-font');
        document.body.querySelectorAll('*').forEach(element => {
            if (!isAccessibilityControl(element)) {
                element.style.fontFamily = isReadableFont ? 'OpenDyslexic, sans-serif' : 'Arial, sans-serif';
            }
        });
    });
    
    document.getElementById('reset').addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event bubbling
        // Reset state
        state.fontSize = 16;
        state.isGrayscale = false;
        state.currentTheme = 'default';
        
        // Reset all styles
        document.body.style.filter = 'none';
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#000000';
        document.body.classList.remove('dyslexia-font');
        
        // Reset all elements except accessibility controls
        document.body.querySelectorAll('*').forEach(element => {
            if (!isAccessibilityControl(element)) {
                element.style.color = '#000000';
                element.style.fontFamily = 'Arial, sans-serif';
                element.style.fontSize = '';  // Reset to default
                if (element.tagName === 'A') {
                    element.style.textDecoration = 'none';
                }
            }
        });
    });
}); 