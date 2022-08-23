
var allStudents = []
if (localStorage.allStudentsDetail) {
  allStudents = JSON.parse(localStorage.getItem("allStudentsDetail"))
}
function signIn() {
  var studentSign = {
    fName: firstName.value,
    mName: middleName.value,
    lName: lastName.value,
    eMail: userEmail.value,
    pWord: userPassword.value
  }
  if ((fName = firstName.value) && (mName = middleName) && (lName = lastName.value) && (eMail = userEmail.value) && (pWord = userPassword.value)) {
    window.location.href = "login.html", allStudents.push(studentSign)
    firstName.value = "", middleName.value = "", lastName.value = "", userEmail.value = "", userPassword.value = ""
    //  console.log (allStudents)
  }
  else {
    alert`please fill in the ommitted spaces`
  }
  localStorage.setItem("allStudentsDetail", JSON.stringify(allStudents))
}


function confirmLogin() {
  var eCheck = emailCheck.value
  var pCheck = passwordCheck.value
  var allStudents = JSON.parse(localStorage.getItem("allStudentsDetail"))

  for (let index = 0; index < allStudents.length; index++) {
    if (allStudents[index].eMail == eCheck && allStudents[index].pWord == pCheck) {
      passwordCheck.value = ""
      emailCheck.value =" "
      alert("login successful")

      window.location.href = "new2.html"
    }
 
    else {
      alert("invalid email or password")
    }
  }
}

function searchStudents() {
  var number = `KRN${Math.round(Math.random() * 100000)}`
  var date = new Date()
  date.getFullYear
  var allStudents = JSON.parse(localStorage.getItem("allStudentsDetail"))
  var checkStudents = findStudent.value
  if (checkStudents = allStudents[findStudent.value]) {
    first.innerHTML = " <em> Firstname: </em>"  + allStudents[findStudent.value].fName,
      middle.innerHTML = "<em> Secondname:</em>"  + allStudents[findStudent.value].mName,
      last.innerHTML = "<em> Middlename: </em>"  + allStudents[findStudent.value].lName,
      email.innerHTML = "<em> Firstname: </em>"  + allStudents[findStudent.value].eMail,
      // pass.innerHTML = "<em> Your Passowrd: </em>"  + allStudents[findStudent.value].pWord,
      numb.innerHTML ="<em> Your ID number: </em>"  +  number,
      date.innerHTML = date


  }

}


// var allStudents = JSON.parse(localStorage.getItem("allStudentsDetail")) 
for (let index = 0; index < allStudents.length; index++) {
  myTable.innerHTML += `<tr>
  <td>${index+1 }</td>
  <td>${allStudents[index].fName }</td>
  <td>${allStudents[index].mName }</td>
  <td>${ allStudents[index].lName}</td>
  <td>${ allStudents[index].eMail}</td>
  <td>${ allStudents[index].pWord}</td>  
  <td><button onclick("")>delete</button>
      <button>edit</button>
  </td>
  </tr>
  `
}

