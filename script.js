document.querySelector('#add-btn').addEventListener('click', function(e){
    const textArea = document.querySelector('#text-area');
    

    const li = document.createElement('li');
    li.innerText = textArea.value;
    li.classList.add('text-2xl');

    document.querySelector('#to-do-container').appendChild(li);
    textArea.value = '';
})