let grades = [];
for(let i = 0; i < 10; i++){
	grades[i] = +prompt(`Введіть ${i + 1} оцінку`);

	console.log(`Оцінка ${i + 1} : ${grades[i]} \n`);
}

let choice;
do {
	choice = +prompt(`Виберіть варіант \n1. Вивід оцінок \n2. Перездача іспиту \n3. Чи виходить стипендія \n0. Вихід`);
	switch (choice) {
		case 1:
			alert(`Оцінки: ${grades}`);
			break;
		case 2:
			let index = +prompt(`Введіть номер оцінки, яку потрібно змінити`);
			let newMark = +prompt(`Введіть нову оцінку`);
			grades[index-1] = newMark;
			alert(`Оцінка номер ${index} була змінена на ${newMark}`);
			break;
		case 3:
			let sum = 0;
			for(let j = 0; j < grades.length; j++){
				sum += grades[j];
			}
			let avr = sum / grades.length;
			if(avr >= 10.7){
				alert(`Студент отримує стипендію`);
			} else{
				alert(`Студент не отримує стипендію`);
			}
			break;
		case 0:
			alert(`Програма завершена.`);
			break;
		default:
			alert(`Невірний варіант. Спробуйте ще раз.`);
			break;
	}
} while (choice != 0);