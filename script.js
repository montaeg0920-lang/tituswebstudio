const form = document.querySelector('#inquiry-form');
const status = document.querySelector('#form-status');
document.querySelector('#year').textContent = new Date().getFullYear();

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const submit = form.querySelector('button[type="submit"]');
  const data = Object.fromEntries(new FormData(form).entries());
  submit.disabled = true;
  submit.innerHTML = 'Sending…';
  status.textContent = '';
  status.className = 'form-status';

  try {
    const result = await fetch('/api/send-inquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
    const payload = await result.json();
    if (!result.ok) throw new Error(payload.error || 'Something went wrong.');
    form.reset();
    status.textContent = 'Thank you—your inquiry is on its way. I’ll be in touch soon.';
    status.classList.add('success');
  } catch (error) {
    status.textContent = error.message || 'Unable to send right now. Please email tituswebdesign1@gmail.com.';
    status.classList.add('error');
  } finally {
    submit.disabled = false;
    submit.innerHTML = 'Send project inquiry <span>→</span>';
  }
});
