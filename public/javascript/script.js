document.addEventListener(
    "DOMContentLoaded",
    () => {
      console.log("JS is connected");
    },
    false
  );

  window.addEventListener('change', function(e) {
    let select = document.querySelector('#by').value
    const DIVinput = document.querySelector('#coresponding-input')
    
   console.log(DIVinput.children[0])

    if (select==='name') {
        DIVinput.children[0].placeholder = 'e.g: my-app-011'
        DIVinput.children[1].placeholder = 'e.g: my-app-015'
        let s =[...DIVinput.children].forEach(element => {
            element.type='text';
    
        });
       

    }else if( select === 'id'){
        DIVinput.children[0].placeholder = 'starts at id'
        DIVinput.children[1].placeholder = 'ends at id'
        let s =[...DIVinput.children].forEach(element => {
            element.type='number';
            element.min='1'
        });
    }
});


window.addEventListener('load', function(e) {
    let select = document.querySelector('#by').value
    const DIVinput = document.querySelector('#coresponding-input')
    select='name'
    DIVinput.children[0].placeholder = 'e.g: my-app-011'
    DIVinput.children[1].placeholder = 'e.g: my-app-015'
    let s =[...DIVinput.children].forEach(element => {
        element.type='text';
    });

});