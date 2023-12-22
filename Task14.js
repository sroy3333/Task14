function saveToLocalStorage(event){
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
  
    const obj = {
      username,
      email,
      phone
    }
    localStorage.setItem(obj.email,JSON.stringify(obj))
    showUserOnScreen(obj)
  }
  function showUserOnScreen(obj) {
    const parentElem = document.getElementById('listOfitems')
    parentElem.innerHTML = parentElem.innerHTML + `<li>${obj.name} - ${obj.email} - ${obj.phone}</li>`
   
}