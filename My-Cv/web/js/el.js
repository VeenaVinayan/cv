const scriptURL=''
const form=document.forms['contact-form']
form.addEventListener('submit',e=> {
    e.preventDefault()
    fetch(scriptURL,{method:'POST',body:new FormData(form)})
    .then(response=> alert("Thankyou ! your form is submitted Successfullly."))
    .then(() => {window.location.reload();})
    .catch(error =>console.error('Error !', error.message))
})