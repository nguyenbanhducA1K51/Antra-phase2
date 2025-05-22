function checkEmailId(str) {
  const atIndex = str.toLowerCase().indexOf('@');
  const dotIndex = str.toLowerCase().indexOf('.', atIndex); 
  
  return atIndex > 0 && 
         dotIndex > atIndex + 1 && 
         dotIndex < str.length - 1;
}

console.log(checkEmailId("test@example.com")); 
console.log(checkEmailId("invalid.email@com")); 
console.log(checkEmailId("another@test.")); 
console.log(checkEmailId("noatsign.com")); 