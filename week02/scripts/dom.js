const list = document.querySelector('#list'); 
const input = document.querySelector('#favchap'); 
const button = document.querySelector('button'); 

button.addEventListener('click', function () {

    if (input.value.trim() !== "") {
        let li = document.createElement('li');
        li.textContent = input.value;

      
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';


        li.append(deleteButton);
        list.append(li); 

        deleteButton.addEventListener('click', function () {
            list.removeChild(li); 
            input.focus(); 
        });

        input.value = "";
        input.focus();
    } else {
        input.focus(); 
    }
});
