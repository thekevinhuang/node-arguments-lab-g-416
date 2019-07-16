function generatePassword(length) {
  let password = ""
  for (i=0; i < length; i++) {
    password = password + `${Math.floor(Math.random()*10)}`
  }
  return password
}

function password(number, length) {
  for (i=0; i< number; i++) {
    console.log(generatePassword(length))
  }
}


