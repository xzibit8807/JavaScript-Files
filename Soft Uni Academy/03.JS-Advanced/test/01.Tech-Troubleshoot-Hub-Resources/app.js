window.addEventListener('load', solution);

function solution() {
  const employeeInput = document.getElementById('employee');
  const categoryInput = document.getElementById('category');
  const urgencyInput = document.getElementById('urgency');
  const teamInput = document.getElementById('team');
  const descriptionInput = document.getElementById('description');
  const addBtn = document.getElementById('add-btn');
  const previewList = document.querySelector('.preview-list');
  const pendingList = document.querySelector('.pending-list');
  const resolvedList = document.querySelector('.resolved-list');

  addBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const employee = employeeInput.value;
    const category = categoryInput.value;
    const urgency = urgencyInput.value;
    const team = teamInput.value;
    const description = descriptionInput.value;

    if (employee && category && urgency && team && description) {
      const listItem = document.createElement('li');
      listItem.textContent = `Employee: ${employee}, Category: ${category}, Urgency: ${urgency}, Assigned Team: ${team}, Description: ${description}`;

      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.classList.add('edit-btn');
      editButton.addEventListener('click', handleEdit);

      const continueButton = document.createElement('button');
      continueButton.textContent = 'Continue';
      continueButton.classList.add('continue-btn');
      continueButton.addEventListener('click', handleContinue);

      listItem.appendChild(editButton);
      listItem.appendChild(continueButton);

      previewList.appendChild(listItem);


      employeeInput.value = '';
      categoryInput.value = '';
      urgencyInput.value = '';
      teamInput.value = '';
      descriptionInput.value = '';
      addBtn.style.display = "none";

      disableInputsAndButton(true);
    }
  });

  function handleEdit() {
    const listItem = this.parentElement;
    const [employee, category, urgency, team, description] = listItem.textContent
      .split(', ')
      .map((item) => item.split(': ')[1]);

    employeeInput.value = employee;
    categoryInput.value = category;
    urgencyInput.value = urgency;
    teamInput.value = team;
    descriptionInput.value = description;

    listItem.remove();
    addBtn.style.display = "block";
    disableInputsAndButton(false);

  }
  //////////////////////////////////////////////////////////////////////
  function handleContinue() {
   
    const pendingItem = document.createElement('li');

    pendingItem.textContent = `Employee: ${employee}, Category: ${category}, Urgency: ${urgency}, Assigned Team: ${team}, Description: ${description}`;



    pendingList.appendChild(pendingItem);
    pendingList.appendChild(resolvedButton)
    //listItem.remove();
    //   handleContinue.style.display = "none"
    //   handleEdit.style.display = "none"
  }

  /*
    function handleResolve() {
      const listItem = this.parentElement;
      const resolvedButton = document.createElement('button');
      resolvedButton.textContent = 'Resolved';
      resolvedButton.classList.add('resolved-btn');
      resolvedButton.addEventListener('click', handleResolved);
  
      listItem.removeChild(this);
      listItem.appendChild(resolvedButton);
      resolvedList.removeChild(listItem);
      previewList.appendChild(listItem);
    }
  */
  function handleResolved() {
    const listItem = this.parentElement;
    const continueButton = document.createElement('button');
    continueButton.textContent = 'Continue';
    continueButton.classList.add('continue-btn');
    continueButton.addEventListener('click', handleContinue);

    const resolveButton = document.createElement('button');
    resolveButton.textContent = 'Resolve';
    resolveButton.classList.add('resolve-btn');
    resolveButton.addEventListener('click', handleEdit);

    resolveButton.addEventListener("click", handleResolved);

    listItem.removeChild(this);
    listItem.appendChild(continueButton);
    previewList.appendChild(listItem);
  }


  function handleResolved() {
    const listItem = this.parentElement;
    const resolvedItem = document.createElement('li');
    resolvedItem.innerHTML = listItem.innerHTML + '<button class="resolved-btn">Resolved</button>';
    resolvedItem.querySelector('.resolved-btn').addEventListener('click', function () {
      resolvedList.removeChild(resolvedItem);
    });

    resolvedList.appendChild(resolvedItem);
    listItem.remove();
  }

  function disableInputsAndButton(disable) {
    employeeInput.disabled = disable;
    categoryInput.disabled = disable;
    urgencyInput.disabled = disable;
    teamInput.disabled = disable;
    descriptionInput.disabled = disable;
  }


  function clearInputFields() {
    employeeInput.value = '';
    categoryInput.value = '';
    urgencyInput.value = '';
    teamInput.value = '';
    descriptionInput.value = '';
  }
}















/*

window.addEventListener('load', solution)

function solution() {

  const employeeInput = document.getElementById('employee');
  const categoryInput = document.getElementById('category');
  const urgencyInput = document.getElementById('urgency');
  const teamInput = document.getElementById('team');
  const descriptionInput = document.getElementById('description');
  const addBtn = document.getElementById('add-btn');
  const previewList = document.querySelector('.preview-list');
  const pendingList = document.querySelector('.pending-list');

  addBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const employee = employeeInput.value;
    const category = categoryInput.value;
    const urgency = urgencyInput.value;
    const team = teamInput.value;
    const description = descriptionInput.value;

    if (employee && category && urgency && team && description) {
      const listItem = document.createElement('li');
      listItem.textContent = `Employee: ${employee}, Category: ${category}, Urgency: ${urgency}, Assigned Team: ${team}, Description: ${description}`;

      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.classList.add('edit-btn');
      editButton.addEventListener('click', handleEdit);

      const continueButton = document.createElement('button');
      continueButton.textContent = 'Continue';
      continueButton.classList.add('continue-btn');
      continueButton.addEventListener('click', handleContinue);

      listItem.appendChild(editButton);
      listItem.appendChild(continueButton);

      previewList.appendChild(listItem);

      // Clear input fields
      employeeInput.value = '';
      categoryInput.value = '';
      urgencyInput.value = '';
      teamInput.value = '';
      descriptionInput.value = '';
      addBtn.style.display = "none";

      disableInputsAndButton(true);
    }
  });

  function handleEdit() {
    const listItem = this.parentElement;
    const [employee, category, urgency, team, description] = listItem.textContent
      .split(', ')
      .map((item) => item.split(': ')[1]);

    employeeInput.value = employee;
    categoryInput.value = category;
    urgencyInput.value = urgency;
    teamInput.value = team;
    descriptionInput.value = description;

    listItem.remove();
    addBtn.style.display = "block";
    disableInputsAndButton(false);

  }

  function handleContinue() {

    const listPending = document.createElement('li');
    listPending.textContent = `Employee: ${employee}, Category: ${category}, Urgency: ${urgency}, Assigned Team: ${team}, Description: ${description}`;

    const resolvedButton = document.createElement('button');
    resolvedButton.textContent = 'Resolved';
    resolvedButton.classList.add('resolved-btn');
    resolvedButton.addEventListener('click', handleResolve);


    listPending.appendChild(resolvedButton);
    pendingList.appendChild(listPending);


    function handleResolve() {
      const pendingListItem = document.createElement('li');
      pendingListItem.innerHTML = `<strong>${employee}</strong> - Category: ${category}, Urgency: ${urgency}, Team: ${team}, Description: ${description}
    <button class="resolved-btn">Resolved</button>`;

      pendingList.appendChild(pendingListItem);


      pendingListItem.querySelector('.resolved-btn').addEventListener('click', function () {

        pendingList.removeChild(pendingListItem);
      })
      resolvedItem.appendChild(resolvedButton);
      resolvedList.appendChild(resolvedItem);

    }



    previewList.remove();

    disableInputsAndButton(true);
  }

  function disableInputsAndButton(disable) {
    employeeInput.disabled = disable;
    categoryInput.disabled = disable;
    urgencyInput.disabled = disable;
    teamInput.disabled = disable;
    descriptionInput.disabled = disable;
  }



}




*/