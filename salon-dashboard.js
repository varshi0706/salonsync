document.getElementById('add-salon-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const salonName = document.getElementById('salon-name').value;
  const salonTime = document.getElementById('salon-time').value;

  // You would save this info to a database in a real application
  const salon = { name: salonName, time: salonTime };
  addSalonToList(salon);
});

function addSalonToList(salon) {
  const salonList = document.getElementById('salon-list');
  const salonItem = document.createElement('div');
  salonItem.textContent = `${salon.name} - ${salon.time}`;
  salonList.appendChild(salonItem);
}
