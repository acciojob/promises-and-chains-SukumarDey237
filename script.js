import "./styles.css";
//your JS code here. If required. 
const btn      = document.getElementById('btn');
    const statusEl = document.getElementById('status');

    // Returns a Promise that resolves if age > 18, rejects otherwise
    function checkEligibility(name, age) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (age > 18) resolve(name);
          else          reject(name);
        }, 4000);
      });
    }

    function setStatus(type, html) {
      statusEl.className = 'status ' + type;
      statusEl.innerHTML = html;
    }

    btn.addEventListener('click', () => {
      const nameVal = document.getElementById('name').value.trim();
      const ageInput = document.getElementById('age').value;
      const age = parseInt(ageInput, 10);

      // Validation: both fields must be filled
      if (!nameVal || !ageInput || isNaN(age)) {
        alert('Please enter valid details.');
        return;
      }

      btn.disabled = true;
      setStatus(
        'pending',
        'Checking eligibility<span class="dots"><span>.</span><span>.</span><span>.</span></span>'
      );

      checkEligibility(nameVal, age)
        .then(n => {
          setStatus('success', '✓ Welcome, ' + n + '. You can vote.');
          alert('Welcome, ' + n + '. You can vote.');
        })
        .catch(n => {
          setStatus('error', '✗ Oh sorry ' + n + ". You aren't old enough.");
          alert('Oh sorry ' + n + ". You aren't old enough.");
        })
        .finally(() => {
          btn.disabled = false;
        });
    });