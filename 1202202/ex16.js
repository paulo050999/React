const submit = document.querySelector("#submit");
const tarefa = document.querySelector("#tarefa");


        submit.disabled = true;

        tarefa.onkeyup = () => {
            if (tarefa.value.length > 0) {
                submit.disabled = false;
            } else {
                submit.disabled = true;
            }
        }
        const form = document.querySelector("form");
        form.addEventListenner('submit', (evento)=>{
            evento.preventDefault();
        
        const newTask = tarefa.value.trim();
            const li = document.createElement('li');
            li.innerHTML = newTask;
            document.querySelector("#tasks").append(li);
            tarefa.value = '';
            submit.disabled = true;
        
        return false;
        }
);