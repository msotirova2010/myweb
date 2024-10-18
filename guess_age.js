function checkForm() {
  fname = document.getElementById('fname')
  if ( fname.value === '' ) {
    alert("Please, enter your first name!")
    fname.focus()
    return false
  }
  lname = document.getElementById('lname')
  if ( lname.value === '' ) {
    alert("Please, enter your last name!")
    lname.focus()
    return false
  }
  bdate = document.getElementById('bdate')
  if ( bdate.value === '' ) {
    alert("Please, enter your birth date!")
    bdate.focus()
    return false
  }

  return true
}
function calcAge() {
  bdate = new Date(document.getElementById('bdate').value)
  fname = document.getElementById('fname').value
  lname = document.getElementById('lname').value
  today = new Date()
  age = Math.floor((today - bdate) / (365.25 * 24 * 60 * 60 * 1000))
  alert(fname + " " + lname + " you are " + age + " years old")
}
function formAction() {
  if ( checkForm() ) calcAge()
}

