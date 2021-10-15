function makeCase(input, case_) {
	if (typeof(case_) != "object") {
		case_ = [case_]
	}
	input = input.toLowerCase();
	for (let Case of case_) {
		switch (Case) {
			case "camel":
				for (let i = 0; i < input.length; i++) {
					if (input[i] == " ") {
						input = input.substring(0, i) + input[i + 1].toUpperCase() + input.substring(i + 2);
					}
				}
				break;
			case "pascal":
				input = input[0].toUpperCase() + input.substring(1);
				for (let i = 0; i < input.length; i++) {
					if (input[i] == " ") {
						input = input.substring(0, i) + input[i + 1].toUpperCase() + input.substring(i + 2);
					}
				}
				break;
			case "snake":
				for (let i = 0; i < input.length; i++) {
					if (input[i] == " ") {
						input = input.substring(0, i) + "_" + input.substring(i + 1);
					}
				}
				break;

			case "kebab":
				input = input.toLowerCase();
				for (let i = 0; i < input.length; i++) {
					if (input[i] == " ") {
						input = input.substring(0, i) + "-" + input.substring(i + 1);
					}
				}
				break;

			case "title":
				input = input[0].toUpperCase() + input.substring(1);
				for (let i = 0; i < input.length; i++) {
					if (input[i] == " ") {
						input = input.substring(0, i) + " " + input[i + 1].toUpperCase() + input.substring(i + 2);
					}
				}
				break;

			case "vowel":
				for (let i = 0; i < input.length; i++) {
					if (["a", "e", "i", "o", "u"].includes(input[i])) {
						input = input.substring(0, i) + input[i].toUpperCase() + input.substring(i + 1);
					}
				}
				break;

			case "consonant":
			case "vowel":
				for (let i = 0; i < input.length; i++) {
					if (["b", "c", "d", "f", "g", "j", "k", "l", "m", "n", "p", "q", "s", "t", "v", "x", "z", "h", "r", "w", "y"].includes(input[i])) {
						input = input.substring(0, i) + input[i].toUpperCase() + input.substring(i + 1);
					}
				}
				break;

			case "upper":
				input = input.toUpperCase();
				break;

			case "lower":
				break;
		}
	}
	return input;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
