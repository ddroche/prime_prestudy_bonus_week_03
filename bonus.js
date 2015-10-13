function funcA (a) {
	return a * 2;
}

function funcB (b) {
	return b + 15;
}

function funcC (c) {
	return c - 1;
}

var x = funcA(funcB(funcC(19)));

console.log("The output of the function chain is " + x + ".");