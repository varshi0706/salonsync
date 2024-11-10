document.getElementById('booking-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const salon = document.getElementById('salon').value;
  const time = document.getElementById('time').value;

  // Simulate token generation
  const token = `${salon}-${time}-${Math.floor(Math.random() * 1000)}`;
  document.getElementById('token').innerText = `Your token: ${token}`;
});
