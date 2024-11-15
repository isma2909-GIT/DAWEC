
        const taskInput = document.getElementById('newTaskInput');
        const addTaskBtn = document.getElementById('addTaskBtn');
        const taskList = document.getElementById('taskList');

       
        function addTask() {
            const taskValue = taskInput.value.trim(); 

         

            const li = document.createElement('li');
            li.textContent = taskValue; 

          
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'X'; 
            deleteBtn.classList.add('deleteBtn');

           
            deleteBtn.addEventListener('click', function() {
                taskList.removeChild(li); 
            });

            
            li.appendChild(deleteBtn);

           
            taskList.appendChild(li);

            
            taskInput.value = "";
        }

       
        addTaskBtn.addEventListener('click', addTask);