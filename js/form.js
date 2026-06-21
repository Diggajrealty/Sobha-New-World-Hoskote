// form.js - Lead Form Handler

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('lead-form');
  const statusDiv = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Honeypot check
      const honeypot = document.getElementById('bot-check').value;
      if (honeypot) {
        return; // Silent block for bots
      }

      // Basic client-side validation
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const consent = document.getElementById('consent').checked;

      // Indian phone regex validation (10 digits starting with 6-9)
      const phoneRegex = /^[6-9]\d{9}$/;

      if (!name || !phone) {
        showStatus('Please fill in required fields.', 'error');
        return;
      }

      if (!phoneRegex.test(phone)) {
        showStatus('Please enter a valid 10-digit Indian phone number.', 'error');
        return;
      }

      if (!consent) {
        showStatus('You must agree to the privacy policy to continue.', 'error');
        return;
      }

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      
      // Update UI state
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerText;
      submitBtn.innerText = 'Submitting...';
      submitBtn.disabled = true;
      showStatus('', '');

      try {
        // Placeholder fetch request
        // In reality, wire this to actual CRM/Google Sheet endpoint
        // const response = await fetch('/api/lead', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(data)
        // });
        
        // Simulating network request for placeholder
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Simulating success
        const isSuccess = true;

        if (isSuccess) {
          // Fire Analytics Events if gtag is available
          if (typeof gtag === 'function') {
            gtag('event', 'generate_lead', {
              event_category: 'engagement',
              event_label: 'hero_form'
            });
          }
          if (typeof fbq === 'function') {
            fbq('track', 'Lead');
          }

          // Redirect to Thank You Page
          window.location.href = '/thank-you.html';
        } else {
          throw new Error('Server returned an error.');
        }

      } catch (error) {
        console.error('Form submission error:', error);
        showStatus('Something went wrong. Please try again.', 'error');
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
      }
    });
  }

  function showStatus(message, type) {
    if (statusDiv) {
      statusDiv.innerText = message;
      statusDiv.className = 'form-status ' + type;
    }
  }
});
