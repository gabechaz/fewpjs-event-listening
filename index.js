
function addingEventListener() {
   const input = document.getElementById('#input');
    input.addingEventListener ('click', 
        function() {
            alert('I was clicked')
            return 'clicked'
        }
    )
}
