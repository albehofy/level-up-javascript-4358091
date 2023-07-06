// Write your code here
let username = Symbol("username")
let password = Symbol("password")
const USER = {
  [username]: "abcz",
  [password]: "1234**", 
  age: 23
}
console.log(USER.username)