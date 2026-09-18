/* Prepare a draft only. GitHub Pages has no server-side message handler. */
'use strict';
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  const status = document.getElementById('draft-status');
  const draftLink = document.getElementById('draft-link');
  const permittedRecipients = new Set([
    'pshapiro@umd.edu', 'bsreekum@umd.edu',
    'clin0817@terpmail.umd.edu', 'sdevara@umd.edu',
  ]);

  contactForm.addEventListener('input', () => { status.hidden = true; });
  contactForm.addEventListener('change', () => { status.hidden = true; });
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // HTML required accepts whitespace; text fields should contain actual text.
    for (const id of ['full-name', 'subject', 'message']) {
      const field = document.getElementById(id);
      field.setCustomValidity(field.value.trim() ? '' : 'Please enter text.');
    }
    contactForm.classList.add('was-validated');
    if (!contactForm.checkValidity()) {
      status.hidden = true;
      contactForm.querySelector(':invalid').focus();
      return;
    }
    const data = new FormData(contactForm);
    const recipient = data.get('recipient');
    if (!permittedRecipients.has(recipient)) return;
    const subject = String(data.get('subject')).trim();
    const body = `${String(data.get('message')).trim()}\n\nFrom: ${String(data.get('name')).trim()}\nReply to: ${String(data.get('email')).trim()}`;
    draftLink.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    status.hidden = false;
    // Keep mailto activation explicit, so the visitor controls opening an app.
    draftLink.focus();
  });
  for (const id of ['full-name', 'subject', 'message']) {
    document.getElementById(id).addEventListener('input', (event) => {
      event.target.setCustomValidity('');
    });
  }
}
