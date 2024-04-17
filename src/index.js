document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  const taskInput = document.getElementById('new-task-description');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent form submission

      const taskText = taskInput.value.trim();
      if (taskText !== '') {
          addTask(taskText);
          taskInput.value = ''; // Clear input field after adding task
      }
  });

  function addTask(taskText) {
      const li = document.createElement('li');
      li.textContent = taskText;
      li.addEventListener('click', toggleTask);

      taskList.appendChild(li);
  }

  function toggleTask() {
      this.classList.toggle('completed');
  }
});
