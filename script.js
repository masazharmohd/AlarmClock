// Retrieve alarms from local storage or initialize an empty array
let alarms = JSON.parse(localStorage.getItem('alarms')) || [];

// Function to render the alarms list
function renderAlarms() {
  const alarmsList = document.getElementById('alarms');
  
  // Clear the existing list
  alarmsList.innerHTML = '';
  
  // Create list items for each alarm
  alarms.forEach((alarm, index) => {
    const listItem = document.createElement('li');
    
    
    const time = document.createElement('span');
    time.textContent = alarm;
    
    const editLink = document.createElement('button');
    editLink.href = '#';
    editLink.textContent = 'Edit';
    editLink.addEventListener('click', () => editAlarm(index));
    
    const deleteLink = document.createElement('button');
    deleteLink.href = '#';
    deleteLink.textContent = 'Delete';
    deleteLink.addEventListener('click', () => deleteAlarm(index));
    
    listItem.appendChild(time);
    listItem.appendChild(editLink);
    listItem.appendChild(deleteLink);
    
    alarmsList.appendChild(listItem);
  });
}

// Function to add a new alarm
function addAlarm(time) {
  alarms.push(time);
  
  // Save the updated alarms to local storage
  localStorage.setItem('alarms', JSON.stringify(alarms));
  
  renderAlarms();
}

// Function to delete an existing alarm
function deleteAlarm(index) {
  alarms.splice(index, 1);
  
  // Save the updated alarms to local storage
  localStorage.setItem('alarms', JSON.stringify(alarms));
  
  renderAlarms();
}

// Function to edit an existing alarm
function editAlarm(index) {
  const newTime = prompt('Enter the new alarm time:');
  
  if (newTime) {
    alarms[index] = newTime;
    
    // Save the updated alarms to local storage
    localStorage.setItem('alarms', JSON.stringify(alarms));
    
    renderAlarms();
  }
}

// Handle form submission to set a new alarm
document.getElementById('alarm-form').addEventListener('submit', (event) => {
  event.preventDefault();
  
  const alarmTime = document.getElementById('alarm-time').value;
  
  if (alarmTime) {
    addAlarm(alarmTime);
    document.getElementById('alarm-time').value = '';
  }
});

// Render the initial list of alarms
renderAlarms();


// Analog Clock 
setInterval(() => {
  d = new Date(); //object of date()
  hr = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();
  hr_rotation = 30 * hr + min / 2; //converting current time
  min_rotation = 6 * min;
  sec_rotation = 6 * sec;

  hour.style.transform = `rotate(${hr_rotation}deg)`;
  minute.style.transform = `rotate(${min_rotation}deg)`;
  second.style.transform = `rotate(${sec_rotation}deg)`;

  const time = document.getElementById("watchTime");
  time.innerHTML = hr + ':' + min + ':' + sec;
}, 1000);