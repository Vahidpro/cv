const greetingElement = document.getElementById("greeting");
const nameElement = document.getElementById("typing-text");
const roleElement = document.getElementById("role");
const typingDelay = 200;

function typeText(text, typingElement, typingDelay) {
	for (let i = 0; i < text.length; i++) {
		setTimeout(() => {
			typingElement.textContent += text[i];
		}, typingDelay * i);
	}
}

typeText("درود، خوش اومدی😃", greetingElement, 30);
typeText("من وحیدم ", nameElement, 160);
typeText("توسعه دهنده فرانت اند", roleElement, 120);
