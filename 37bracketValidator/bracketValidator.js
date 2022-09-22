
//! Clarusway JS-CC-07 : Bracket Validator

// Let's say:
// '(', '{', '[' are called "openers."
// ')', '}', ']' are called "closers."

// Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.

//? Examples:
// " ( ) }" should return true
// "{ [ ( ] ) }" should return false
// "{ [ }" should return false

// Simply making sure each opener has a corresponding closer is not enough—we must also confirm that they are correctly ordered.
// For example, "{ [ ( ] ) }" should return false, even though each opener can be matched to a closer.

//? Input        Output
// --------:    ------:
// "()"         True
// "()[]{}"     True
// "(]"         False
// "([)]"       False
// "{[]}"       True
// ""           True


const brackets1 = "{ [ ( ] ) }";        //* false
const brackets2 = "[([({})})({})]";     //* false

const bracketValidator = (s) =>{
while(){
  
}
}
