// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }

const month = 2;
switch (month) {
  case 1:
    console.log('January');
    break;
    // if a key matches, it executes all the code after it except default
  case 2:
    console.log('February');
    break;  // break breaks the control flow, 
  case 3:
    console.log('March');
    break;
  case 4:
    console.log('April');
    break;

  default:
    console.log(`Default Case Match`);
    break;
}