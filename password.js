function generatePassword(length) {
  let password = ""
  for (i=0; i < length; i++) {
    password = password + "Math.floor(Math.random()*10)"
  }
}
