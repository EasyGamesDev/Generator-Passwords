$(window).on('load', function() {
	$('#content').css("display", "block");
	$('.loader').delay(350).fadeOut(500); // и скрываем сам блок прелоудера.
	$('body').delay(1000).css("overflow", "visible"); 
});
$("#showSettings").hide(0);
function inputTextIsNumber(inp) {
	$(inp).keyup(function() {
    $(inp).val(this.value.match(/[0-9]*/));
})};
inputTextIsNumber("#countChars");
function genPass() {
	passOut.innerHTML = "";
	if (countChars.value === "") {countChars.value = 16}
	for (let i = 0; i < Number(countChars.value); i++) {
		passOut.innerHTML += getChar();
	} 
} 
function getChar() {
	let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
	let chars = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "/", "]", "^", "_", "`", "{", "|", "}", "~", ];
	let nums = ["1","2","3","4","5","6","7","8","9","0",];
	var allMassives = [letters]; 
	if (isNumOn.checked){
		var allMassives = [letters, nums];  
	}  
	if (isCharOn.checked) {
		var allMassives = [letters, chars];  
		if (isNumOn.checked){
			var allMassives = [letters, chars, nums];  
		} 
	} 
    let rnm = Math.round(Math.random()*(allMassives.length-1));
    let rnmEl = Math.round(Math.random()*(allMassives[rnm].length-1));
    if (allMassives[rnm] == undefined) {
    console.log("Ошибка:\n" + allMassives[rnm] + "\n"  + rnmEl)
    } 
    if (allMassives[rnm][rnmEl] == undefined) {
    console.log("Ошибка:\n" + allMassives[rnm] + "\n"  + rnmEl)
    } 
    return allMassives[rnm][rnmEl];
}


