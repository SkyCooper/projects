
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

//* def isValid(s) : pyton çözümü
//*    while "()" in s or "[]" in s or "{}" in s:
//*         s = s.replace("()", "").replace("[]", "").replace("{}", "")
//*     return s == ""

const brackets1 = "{ [ ( ] ) }";        //* false
const brackets2 = "[([({})})({})]";     //* false
const brackets3 = "[({})]"              //* true

const bracketValidator = (str) =>{
while (str.includes("()") || str.includes("[]") || str.includes("{}")){
  str = str.replace("()", "").replace("[]", "").replace("{}", "");
}
return str === ""
}

console.log(bracketValidator(brackets1));
