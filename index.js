let paramsValue = document.querySelector(".params__value");
let result = document.querySelector(".result");
let resultObj = {};

let span1Text, span2Text;
let startResultText;

function setCondition() {
	span1Text = "Если "
	span2Text = "равняется";
	startResultText = "/set_condition [command_index] [answer_index] ";
	generate();
}

function setEffect() {
	span1Text = "Установить"
	span2Text = "значение";
	startResultText = "/set_effect [command_index] [answer_index] ";
	generate();
}

function generate() {
	paramsValue.innerText = "";
	AND();
};

function AND() {
	const div = document.createElement("div");
	const span1 = document.createElement("span");
	const input1 = document.createElement("input");
	const span2 = document.createElement("span");
	const input2 = document.createElement("input");
	const button = document.createElement("button");
	
	input1.setAttribute("type", "text");
	input1.setAttribute("placeholder", "key");
	input2.setAttribute("type", "text");
	input2.setAttribute("placeholder", "value");
	button.setAttribute("onclick", "AND();");
	
	span1.innerText = span1Text;
	span2.innerText = span2Text;
	button.innerText = "И";
	
	div.appendChild(span1);
	div.appendChild(input1);
	div.appendChild(span2);
	div.appendChild(input2);
	div.appendChild(button);
	
	paramsValue.appendChild(div);
}

setInterval(() => {
	resultObj = {};
	if (paramsValue.childElementCount > 0) {
		for (element of paramsValue.children) {
			const key = element.children[1].value;
			const value = element.children[3].value;
			resultObj[key] = value;
		};
		
		result.innerText = startResultText + JSON.stringify(resultObj);
	}
}, 1000)