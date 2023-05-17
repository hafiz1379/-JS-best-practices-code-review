
function addNewTask() {
  const description = addInput.value;
  if (description) {
  Task.addTask(description);
  addInput.value = '';
  renderTasks();
  }
  }
  renderTasks();
  addButton.addEventListener('click', () => {
  addNewTask();
  });
  addInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
  addNewTask();
  }
  });
  clearAllButton.addEventListener('click', () => {
  Task.clearAllTasks();
  renderTasks();
  });

  clearAllButton.addEventListener('click', () => {
    const tasks = Task.getTasks();
    const newTasks = tasks.filter((task) => !task.completed);
    newTasks.forEach((task, index) => {
    task.id = index + 1;
    });
    // Remove the event listener to avoid potential memory leaks
    clearAllButton.removeEventListener('click', clearAllButtonClickHandler);
    renderTasks();
    });

 
