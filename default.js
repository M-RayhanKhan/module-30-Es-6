// default --> if value is not provided, take this as a default.

function add(num1 = 20, num2= 33 ){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}

// add(5, 7)
// add(5)
// add()
// add(5)
// add( 0, 20)
// add(5)

function fullName(first, last = ''){
  const full = first + " hossain " + last;
  console.log(full);
  return full;
}

// fullName('nasir')

function friend (numbs = []){

}


function person(human = {}){
    
}