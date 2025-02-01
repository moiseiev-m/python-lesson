import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTasksStore = defineStore('tasks', () => {
	// State
	const birthday = ref({
		answer: '',
		error: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const converter = ref({
		usdAnswer: '',
		eurAnswer: '',
		usdError: '',
		eurError: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const flowerbed = ref({
		fenceAnswer: '',
		plantsAnswer: '',
		fenceError: '',
		plantsError: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const squirrels = ref({
		nutsPerSquirrelAnswer: '',
		remainingNutsAnswer: '',
		nutsPerSquirrelError: '',
		remainingNutsError: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const scales = ref({
		answer: '',
		error: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const cube = ref({
		volumeAnswer: '',
		areaAnswer: '',
		volumeError: '',
		areaError: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const pizzeria = ref({
		answer: '',
		error: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const cafe = ref({
		answer: '',
		error: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const discount = ref({
		answer: '',
		error: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const season = ref({
		answer: '',
		error: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const calculator = ref({
		answer: '',
		error: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const temperature = ref({
		answer: '',
		error: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const library = ref({
		answer: '',
		error: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const renovation = ref({
		wallAreaAnswer: '',
		paintAnswer: '',
		wallAreaError: '',
		paintError: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const grade = ref({
		answer: '',
		error: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const trafficLight = ref({
		answer: '',
		error: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const ageCategory = ref({
		answer: '',
		error: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const triangle = ref({
		answer: '',
		error: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const planet = ref({
		answer: '',
		error: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const tickets = ref({
		answer: '',
		error: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const calendar = ref({
		answer: '',
		error: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const delivery = ref({
		answer: '',
		error: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const geometry = ref({
		answer: '',
		error: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const unitConverter = ref({
		answer: '',
		error: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const password = ref({
		answer: '',
		error: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const numberCheck = ref({
		answer: '',
		error: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const timeCalc = ref({
		answer: '',
		error: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const textFormat = ref({
		answer: '',
		error: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const statistics = ref({
		answer: '',
		error: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const bankAccount = ref({
		answer: '',
		error: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const diceGame = ref({
		answer: '',
		error: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const textAnalysis = ref({
		answer: '',
		error: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const notepad = ref({
		answer: '',
		error: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const timer = ref({
		answer: '',
		error: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const colorGenerator = ref({
		answer: '',
		error: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const todoList = ref({
		answer: '',
		error: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const drawing = ref({
		answer: '',
		error: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const musicPlayer = ref({
		answer: '',
		error: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const bmiCalculator = ref({
		answer: '',
		error: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	const currencyConverterGui = ref({
		answer: '',
		error: '',
		showSolution: false,
		attempts: 0,
		isCorrect: false,
	});

	// Actions
	function checkBirthdayAnswer() {
		const expectedAnswer = 2 * 150 + 3 * 25;
		const userAnswer = parseFloat(birthday.value.answer);

		birthday.value.attempts++;
		birthday.value.showSolution = true;

		if (Math.abs(userAnswer - expectedAnswer) <= 0.01) {
			birthday.value.error = '';
			birthday.value.isCorrect = true;
		} else {
			birthday.value.error = 'Неправильна відповідь. Спробуйте ще раз';
			birthday.value.isCorrect = false;
		}
	}

	function checkConverterAnswers() {
		const expectedUsd = 26.67;
		const expectedEur = 24.69;
		const userUsd = parseFloat(converter.value.usdAnswer);
		const userEur = parseFloat(converter.value.eurAnswer);

		converter.value.attempts++;
		converter.value.showSolution = true;

		if (Math.abs(userUsd - expectedUsd) <= 0.01 && Math.abs(userEur - expectedEur) <= 0.01) {
			converter.value.usdError = '';
			converter.value.eurError = '';
			converter.value.isCorrect = true;
		} else {
			if (Math.abs(userUsd - expectedUsd) > 0.01) {
				converter.value.usdError = 'Неправильна сума в доларах';
			}
			if (Math.abs(userEur - expectedEur) > 0.01) {
				converter.value.eurError = 'Неправильна сума в євро';
			}
			converter.value.isCorrect = false;
		}
	}

	function checkFlowerbedAnswers() {
		const expectedFence = 2 * (5 + 3);
		const expectedPlants = 5 * 3 * 4;
		const userFence = parseFloat(flowerbed.value.fenceAnswer);
		const userPlants = parseInt(flowerbed.value.plantsAnswer);

		if (Math.abs(userFence - expectedFence) <= 0.01 && userPlants === expectedPlants) {
			flowerbed.value.fenceError = '';
			flowerbed.value.plantsError = '';
			flowerbed.value.showSolution = true;
			flowerbed.value.isCorrect = true;
			return;
		}

		flowerbed.value.attempts++;

		if (Math.abs(userFence - expectedFence) > 0.01) {
			flowerbed.value.fenceError = 'Неправильна довжина огорожі';
		}
		if (userPlants !== expectedPlants) {
			flowerbed.value.plantsError = 'Неправильна кількість саджанців';
		}

		if (flowerbed.value.attempts >= 3) {
			flowerbed.value.showSolution = true;
			flowerbed.value.isCorrect = false;
		}
	}

	function checkSquirrelsAnswers() {
		const expectedNutsPerSquirrel = Math.floor(23 / 5);
		const expectedRemainingNuts = 23 % 5;
		const userNutsPerSquirrel = parseInt(squirrels.value.nutsPerSquirrelAnswer);
		const userRemainingNuts = parseInt(squirrels.value.remainingNutsAnswer);

		if (userNutsPerSquirrel === expectedNutsPerSquirrel && userRemainingNuts === expectedRemainingNuts) {
			squirrels.value.nutsPerSquirrelError = '';
			squirrels.value.remainingNutsError = '';
			squirrels.value.showSolution = true;
			squirrels.value.isCorrect = true;
			return;
		}

		squirrels.value.attempts++;

		if (userNutsPerSquirrel !== expectedNutsPerSquirrel) {
			squirrels.value.nutsPerSquirrelError = 'Неправильна кількість горіхів на білочку';
		}
		if (userRemainingNuts !== expectedRemainingNuts) {
			squirrels.value.remainingNutsError = 'Неправильна кількість горіхів, що залишились';
		}

		if (squirrels.value.attempts >= 3) {
			squirrels.value.showSolution = true;
			squirrels.value.isCorrect = false;
		}
	}

	function checkScalesAnswer() {
		const d = 30;
		const k = 75;
		const expectedAnswer = k - (d + (d + 5));
		const userAnswer = parseFloat(scales.value.answer);

		if (Math.abs(userAnswer - expectedAnswer) <= 0.01) {
			scales.value.error = '';
			scales.value.showSolution = true;
			scales.value.isCorrect = true;
			return;
		}

		scales.value.attempts++;
		scales.value.error = 'Неправильна відповідь. Спробуйте ще раз';

		if (scales.value.attempts >= 3) {
			scales.value.showSolution = true;
			scales.value.isCorrect = false;
		}
	}

	function checkCubeAnswers() {
		const edge = 5;
		const expectedVolume = edge ** 3;
		const expectedArea = 6 * edge ** 2;
		const userVolume = parseFloat(cube.value.volumeAnswer);
		const userArea = parseFloat(cube.value.areaAnswer);

		if (Math.abs(userVolume - expectedVolume) <= 0.01 && Math.abs(userArea - expectedArea) <= 0.01) {
			cube.value.volumeError = '';
			cube.value.areaError = '';
			cube.value.showSolution = true;
			cube.value.isCorrect = true;
			return;
		}

		cube.value.attempts++;

		if (Math.abs(userVolume - expectedVolume) > 0.01) {
			cube.value.volumeError = "Неправильний об'єм куба";
		}
		if (Math.abs(userArea - expectedArea) > 0.01) {
			cube.value.areaError = 'Неправильна площа поверхні куба';
		}

		if (cube.value.attempts >= 3) {
			cube.value.showSolution = true;
			cube.value.isCorrect = false;
		}
	}

	function checkPizzeriaAnswer() {
		const count = 3;
		const price = 200;
		const total = count * price;
		const expectedAnswer = total * 0.9;
		const userAnswer = parseFloat(pizzeria.value.answer);

		if (Math.abs(userAnswer - expectedAnswer) <= 0.01) {
			pizzeria.value.error = '';
			pizzeria.value.showSolution = true;
			pizzeria.value.isCorrect = true;
			return;
		}

		pizzeria.value.attempts++;
		pizzeria.value.error = 'Неправильна відповідь. Спробуйте ще раз';

		if (pizzeria.value.attempts >= 3) {
			pizzeria.value.showSolution = true;
			pizzeria.value.isCorrect = false;
		}
	}

	function checkCafeAnswer() {
		const expectedAnswer = 12.93;
		const userAnswer = parseFloat(cafe.value.answer);

		if (Math.abs(userAnswer - expectedAnswer) <= 0.01) {
			cafe.value.error = '';
			cafe.value.showSolution = true;
			cafe.value.isCorrect = true;
			return;
		}

		cafe.value.attempts++;
		cafe.value.error = 'Неправильна відповідь. Спробуйте ще раз';

		if (cafe.value.attempts >= 3) {
			cafe.value.showSolution = true;
			cafe.value.isCorrect = false;
		}
	}

	function checkDiscountAnswer() {
		const amount = 2500;
		const expectedAnswer = amount * 0.95; // 5% знижка
		const userAnswer = parseFloat(discount.value.answer);

		discount.value.attempts++;

		if (Math.abs(userAnswer - expectedAnswer) <= 0.01) {
			discount.value.error = '';
			discount.value.showSolution = true;
			discount.value.isCorrect = true;
		} else {
			discount.value.error = 'Неправильна відповідь. Спробуйте ще раз';
			if (discount.value.attempts >= 3) {
				discount.value.showSolution = true;
				discount.value.isCorrect = false;
			}
		}
	}

	function checkSeasonAnswer() {
		const expectedAnswer = 'літо';
		const userAnswer = season.value.answer.toLowerCase().trim();

		season.value.attempts++;

		if (userAnswer === expectedAnswer) {
			season.value.error = '';
			season.value.showSolution = true;
			season.value.isCorrect = true;
		} else {
			season.value.error = 'Неправильна відповідь. Спробуйте ще раз';
			if (season.value.attempts >= 3) {
				season.value.showSolution = true;
				season.value.isCorrect = false;
			}
		}
	}

	function checkCalculatorAnswer() {
		calculator.value.attempts++;
		calculator.value.showSolution = true;
		calculator.value.isCorrect = true;
		calculator.value.error = '';
	}

	function checkTemperatureAnswer() {
		temperature.value.attempts++;
		temperature.value.showSolution = true;
		temperature.value.isCorrect = true;
		temperature.value.error = '';
	}

	function checkLibraryAnswer() {
		const booksCount = 5;
		const pricePerBook = 120;
		const expectedAnswer = booksCount * pricePerBook;
		const userAnswer = parseFloat(library.value.answer);

		if (Math.abs(userAnswer - expectedAnswer) <= 0.01) {
			library.value.error = '';
			library.value.showSolution = true;
			library.value.isCorrect = true;
			return;
		}

		library.value.attempts++;
		library.value.error = 'Неправильна відповідь. Спробуйте ще раз';

		if (library.value.attempts >= 3) {
			library.value.showSolution = true;
			library.value.isCorrect = false;
		}
	}

	function checkRenovationAnswers() {
		const length = 4;
		const width = 3;
		const height = 2.5;
		const paintPerMeter = 0.2;

		const expectedWallArea = 2 * (length + width) * height;
		const expectedPaint = expectedWallArea * paintPerMeter;

		const userWallArea = parseFloat(renovation.value.wallAreaAnswer);
		const userPaint = parseFloat(renovation.value.paintAnswer);

		if (Math.abs(userWallArea - expectedWallArea) <= 0.01 && Math.abs(userPaint - expectedPaint) <= 0.01) {
			renovation.value.wallAreaError = '';
			renovation.value.paintError = '';
			renovation.value.showSolution = true;
			renovation.value.isCorrect = true;
			return;
		}

		renovation.value.attempts++;

		if (Math.abs(userWallArea - expectedWallArea) > 0.01) {
			renovation.value.wallAreaError = 'Неправильна площа стін';
		}
		if (Math.abs(userPaint - expectedPaint) > 0.01) {
			renovation.value.paintError = 'Неправильна кількість фарби';
		}

		if (renovation.value.attempts >= 3) {
			renovation.value.showSolution = true;
			renovation.value.isCorrect = false;
		}
	}

	function checkGradeAnswer() {
		const score = 85;
		let expectedAnswer = '';

		if (score >= 90) expectedAnswer = 'A';
		else if (score >= 80) expectedAnswer = 'B';
		else if (score >= 70) expectedAnswer = 'C';
		else if (score >= 60) expectedAnswer = 'D';
		else expectedAnswer = 'F';

		const userAnswer = grade.value.answer.toUpperCase();

		grade.value.attempts++;

		if (userAnswer === expectedAnswer) {
			grade.value.error = '';
			grade.value.showSolution = true;
			grade.value.isCorrect = true;
		} else {
			grade.value.error = 'Неправильна відповідь. Спробуйте ще раз';
			if (grade.value.attempts >= 3) {
				grade.value.showSolution = true;
				grade.value.isCorrect = false;
			}
		}
	}

	function checkTrafficLightAnswer() {
		const number = 2;
		const expectedAnswer = number === 1 ? 'червоний' : number === 2 ? 'жовтий' : 'зелений';
		const userAnswer = trafficLight.value.answer.toLowerCase().trim();

		trafficLight.value.attempts++;

		if (userAnswer === expectedAnswer) {
			trafficLight.value.error = '';
			trafficLight.value.showSolution = true;
			trafficLight.value.isCorrect = true;
		} else {
			trafficLight.value.error = 'Неправильна відповідь. Спробуйте ще раз';
			if (trafficLight.value.attempts >= 3) {
				trafficLight.value.showSolution = true;
				trafficLight.value.isCorrect = false;
			}
		}
	}

	function checkAgeCategoryAnswer() {
		const age = 15;
		const expectedAnswer = age < 12 ? 'дитина' : age < 18 ? 'підліток' : 'дорослий';
		const userAnswer = ageCategory.value.answer.toLowerCase().trim();

		ageCategory.value.attempts++;

		if (userAnswer === expectedAnswer) {
			ageCategory.value.error = '';
			ageCategory.value.showSolution = true;
			ageCategory.value.isCorrect = true;
		} else {
			ageCategory.value.error = 'Неправильна відповідь. Спробуйте ще раз';
			if (ageCategory.value.attempts >= 3) {
				ageCategory.value.showSolution = true;
				ageCategory.value.isCorrect = false;
			}
		}
	}

	function checkTriangleAnswer() {
		const side1 = 5,
			side2 = 5,
			side3 = 5;
		let expectedAnswer = '';

		if (side1 === side2 && side2 === side3) {
			expectedAnswer = 'рівносторонній';
		} else if (side1 === side2 || side2 === side3 || side1 === side3) {
			expectedAnswer = 'рівнобедрений';
		} else {
			expectedAnswer = 'різносторонній';
		}

		const userAnswer = triangle.value.answer.toLowerCase().trim();

		triangle.value.attempts++;

		if (userAnswer === expectedAnswer) {
			triangle.value.error = '';
			triangle.value.showSolution = true;
			triangle.value.isCorrect = true;
		} else {
			triangle.value.error = 'Неправильна відповідь. Спробуйте ще раз';
			if (triangle.value.attempts >= 3) {
				triangle.value.showSolution = true;
				triangle.value.isCorrect = false;
			}
		}
	}

	function checkPlanetAnswer() {
		const distance = 150; // millions km
		const expectedAnswer = distance < 100 ? 'земна група' : distance < 750 ? 'гіганти' : 'карликові';
		const userAnswer = planet.value.answer.toLowerCase().trim();

		planet.value.attempts++;

		if (userAnswer === expectedAnswer) {
			planet.value.error = '';
			planet.value.showSolution = true;
			planet.value.isCorrect = true;
		} else {
			planet.value.error = 'Неправильна відповідь. Спробуйте ще раз';
			if (planet.value.attempts >= 3) {
				planet.value.showSolution = true;
				planet.value.isCorrect = false;
			}
		}
	}

	function checkTicketsAnswer() {
		const basePrice = 100;
		const age = 15;
		const isStudent = true;
		let discount = 0;

		if (age < 12) discount = 0.5;
		else if (isStudent) discount = 0.3;
		else if (age >= 60) discount = 0.4;

		const expectedAnswer = basePrice * (1 - discount);
		const userAnswer = parseFloat(tickets.value.answer);

		tickets.value.attempts++;

		if (Math.abs(userAnswer - expectedAnswer) <= 0.01) {
			tickets.value.error = '';
			tickets.value.showSolution = true;
			tickets.value.isCorrect = true;
		} else {
			tickets.value.error = 'Неправильна відповідь. Спробуйте ще раз';
			if (tickets.value.attempts >= 3) {
				tickets.value.showSolution = true;
				tickets.value.isCorrect = false;
			}
		}
	}

	function checkCalendarAnswer() {
		const month = 2;
		const year = 2024;
		let expectedAnswer = 31;

		if (month === 2) {
			expectedAnswer = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 29 : 28;
		} else if ([4, 6, 9, 11].includes(month)) {
			expectedAnswer = 30;
		}

		const userAnswer = parseInt(calendar.value.answer);

		calendar.value.attempts++;

		if (userAnswer === expectedAnswer) {
			calendar.value.error = '';
			calendar.value.showSolution = true;
			calendar.value.isCorrect = true;
		} else {
			calendar.value.error = 'Неправильна відповідь. Спробуйте ще раз';
			if (calendar.value.attempts >= 3) {
				calendar.value.showSolution = true;
				calendar.value.isCorrect = false;
			}
		}
	}

	function checkDeliveryAnswer() {
		const distance = 15; // km
		const weight = 5; // kg
		const basePrice = 50;
		let price = basePrice;

		if (distance > 10) price += (distance - 10) * 5;
		if (weight > 1) price += (weight - 1) * 10;

		const expectedAnswer = price;
		const userAnswer = parseFloat(delivery.value.answer);

		delivery.value.attempts++;

		if (Math.abs(userAnswer - expectedAnswer) <= 0.01) {
			delivery.value.error = '';
			delivery.value.showSolution = true;
			delivery.value.isCorrect = true;
		} else {
			delivery.value.error = 'Неправильна відповідь. Спробуйте ще раз';
			if (delivery.value.attempts >= 3) {
				delivery.value.showSolution = true;
				delivery.value.isCorrect = false;
			}
		}
	}

	function checkGeometryAnswer() {
		const radius = 5;
		const expectedAnswer = Math.PI * radius * radius;
		const userAnswer = parseFloat(geometry.value.answer);

		geometry.value.attempts++;

		if (Math.abs(userAnswer - expectedAnswer) <= 0.01) {
			geometry.value.error = '';
			geometry.value.showSolution = true;
			geometry.value.isCorrect = true;
		} else {
			geometry.value.error = 'Неправильна відповідь. Спробуйте ще раз';
			if (geometry.value.attempts >= 3) {
				geometry.value.showSolution = true;
				geometry.value.isCorrect = false;
			}
		}
	}

	function checkUnitConverterAnswer() {
		const kilometers = 10;
		const expectedAnswer = kilometers * 0.621371;
		const userAnswer = parseFloat(unitConverter.value.answer);

		unitConverter.value.attempts++;

		if (Math.abs(userAnswer - expectedAnswer) <= 0.01) {
			unitConverter.value.error = '';
			unitConverter.value.showSolution = true;
			unitConverter.value.isCorrect = true;
		} else {
			unitConverter.value.error = 'Неправильна відповідь. Спробуйте ще раз';
			if (unitConverter.value.attempts >= 3) {
				unitConverter.value.showSolution = true;
				unitConverter.value.isCorrect = false;
			}
		}
	}

	function checkPasswordAnswer() {
		const length = 8;
		const userAnswer = password.value.answer;
		const hasUpperCase = /[A-Z]/.test(userAnswer);
		const hasLowerCase = /[a-z]/.test(userAnswer);
		const hasNumbers = /\d/.test(userAnswer);
		const hasCorrectLength = userAnswer.length === length;

		password.value.attempts++;

		if (hasUpperCase && hasLowerCase && hasNumbers && hasCorrectLength) {
			password.value.error = '';
			password.value.showSolution = true;
			password.value.isCorrect = true;
		} else {
			password.value.error = 'Пароль не відповідає вимогам. Спробуйте ще раз';
			if (password.value.attempts >= 3) {
				password.value.showSolution = true;
				password.value.isCorrect = false;
			}
		}
	}

	function checkNumberCheckAnswer() {
		const number = 17;
		const expectedAnswer = 'просте';
		const userAnswer = numberCheck.value.answer.toLowerCase().trim();

		numberCheck.value.attempts++;

		if (userAnswer === expectedAnswer) {
			numberCheck.value.error = '';
			numberCheck.value.showSolution = true;
			numberCheck.value.isCorrect = true;
		} else {
			numberCheck.value.error = 'Неправильна відповідь. Спробуйте ще раз';
			if (numberCheck.value.attempts >= 3) {
				numberCheck.value.showSolution = true;
				numberCheck.value.isCorrect = false;
			}
		}
	}

	function checkTimeCalcAnswer() {
		const hours = 2;
		const minutes = 30;
		const addMinutes = 45;
		const totalMinutes = hours * 60 + minutes + addMinutes;
		const expectedHours = Math.floor(totalMinutes / 60);
		const expectedMinutes = totalMinutes % 60;
		const expectedAnswer = `${expectedHours}:${expectedMinutes.toString().padStart(2, '0')}`;
		const userAnswer = timeCalc.value.answer;

		timeCalc.value.attempts++;

		if (userAnswer === expectedAnswer) {
			timeCalc.value.error = '';
			timeCalc.value.showSolution = true;
			timeCalc.value.isCorrect = true;
		} else {
			timeCalc.value.error = 'Неправильна відповідь. Спробуйте ще раз';
			if (timeCalc.value.attempts >= 3) {
				timeCalc.value.showSolution = true;
				timeCalc.value.isCorrect = false;
			}
		}
	}

	function checkTextFormatAnswer() {
		const text = 'hello world';
		const expectedAnswer = 'Hello World';
		const userAnswer = textFormat.value.answer;

		textFormat.value.attempts++;

		if (userAnswer === expectedAnswer) {
			textFormat.value.error = '';
			textFormat.value.showSolution = true;
			textFormat.value.isCorrect = true;
		} else {
			textFormat.value.error = 'Неправильна відповідь. Спробуйте ще раз';
			if (textFormat.value.attempts >= 3) {
				textFormat.value.showSolution = true;
				textFormat.value.isCorrect = false;
			}
		}
	}

	function checkStatisticsAnswer() {
		const numbers = [1, 2, 2, 3, 4, 4, 4];
		const expectedAnswer = '4';
		const userAnswer = statistics.value.answer;

		statistics.value.attempts++;

		if (userAnswer === expectedAnswer) {
			statistics.value.error = '';
			statistics.value.showSolution = true;
			statistics.value.isCorrect = true;
		} else {
			statistics.value.error = 'Неправильна відповідь. Спробуйте ще раз';
			if (statistics.value.attempts >= 3) {
				statistics.value.showSolution = true;
				statistics.value.isCorrect = false;
			}
		}
	}

	function checkBankAccountAnswer() {
		const initialBalance = 1000;
		const deposit = 500;
		const withdrawal = 200;
		const expectedAnswer = initialBalance + deposit - withdrawal;
		const userAnswer = parseFloat(bankAccount.value.answer);

		bankAccount.value.attempts++;

		if (Math.abs(userAnswer - expectedAnswer) <= 0.01) {
			bankAccount.value.error = '';
			bankAccount.value.showSolution = true;
			bankAccount.value.isCorrect = true;
		} else {
			bankAccount.value.error = 'Неправильна відповідь. Спробуйте ще раз';
			if (bankAccount.value.attempts >= 3) {
				bankAccount.value.showSolution = true;
				bankAccount.value.isCorrect = false;
			}
		}
	}

	function checkDiceGameAnswer() {
		const dice1 = 6;
		const dice2 = 6;
		const expectedAnswer = dice1 + dice2;
		const userAnswer = parseInt(diceGame.value.answer);

		diceGame.value.attempts++;

		if (userAnswer === expectedAnswer) {
			diceGame.value.error = '';
			diceGame.value.showSolution = true;
			diceGame.value.isCorrect = true;
		} else {
			diceGame.value.error = 'Неправильна відповідь. Спробуйте ще раз';
			if (diceGame.value.attempts >= 3) {
				diceGame.value.showSolution = true;
				diceGame.value.isCorrect = false;
			}
		}
	}

	function checkTextAnalysisAnswer() {
		const text = "Це речення має п'ять слів.";
		const expectedAnswer = '5';
		const userAnswer = textAnalysis.value.answer;

		textAnalysis.value.attempts++;

		if (userAnswer === expectedAnswer) {
			textAnalysis.value.error = '';
			textAnalysis.value.showSolution = true;
			textAnalysis.value.isCorrect = true;
		} else {
			textAnalysis.value.error = 'Неправильна відповідь. Спробуйте ще раз';
			if (textAnalysis.value.attempts >= 3) {
				textAnalysis.value.showSolution = true;
				textAnalysis.value.isCorrect = false;
			}
		}
	}

	function checkNotepadAnswer() {
		notepad.value.attempts++;
		notepad.value.showSolution = true;
		notepad.value.isCorrect = true;
		notepad.value.error = '';
	}

	function checkTimerAnswer() {
		timer.value.attempts++;
		timer.value.showSolution = true;
		timer.value.isCorrect = true;
		timer.value.error = '';
	}

	function checkColorGeneratorAnswer() {
		const userAnswer = colorGenerator.value.answer.toLowerCase().trim();
		const isValidHex = /^#[0-9a-f]{6}$/i.test(userAnswer);

		colorGenerator.value.attempts++;

		if (isValidHex) {
			colorGenerator.value.error = '';
			colorGenerator.value.showSolution = true;
			colorGenerator.value.isCorrect = true;
		} else {
			colorGenerator.value.error = 'Неправильний формат кольору. Спробуйте ще раз';
			if (colorGenerator.value.attempts >= 3) {
				colorGenerator.value.showSolution = true;
				colorGenerator.value.isCorrect = false;
			}
		}
	}

	function checkTodoListAnswer() {
		todoList.value.attempts++;
		todoList.value.showSolution = true;
		todoList.value.isCorrect = true;
		todoList.value.error = '';
	}

	function checkDrawingAnswer() {
		drawing.value.attempts++;
		drawing.value.showSolution = true;
		drawing.value.isCorrect = true;
		drawing.value.error = '';
	}

	function checkMusicPlayerAnswer() {
		musicPlayer.value.attempts++;
		musicPlayer.value.showSolution = true;
		musicPlayer.value.isCorrect = true;
		musicPlayer.value.error = '';
	}

	function checkBmiCalculatorAnswer() {
		const height = 1.75; // meters
		const weight = 70; // kg
		const expectedBmi = weight / (height * height);
		const userAnswer = parseFloat(bmiCalculator.value.answer);

		bmiCalculator.value.attempts++;

		if (Math.abs(userAnswer - expectedBmi) <= 0.1) {
			bmiCalculator.value.error = '';
			bmiCalculator.value.showSolution = true;
			bmiCalculator.value.isCorrect = true;
		} else {
			bmiCalculator.value.error = 'Неправильна відповідь. Спробуйте ще раз';
			if (bmiCalculator.value.attempts >= 3) {
				bmiCalculator.value.showSolution = true;
				bmiCalculator.value.isCorrect = false;
			}
		}
	}

	function checkCurrencyConverterGuiAnswer() {
		const amount = 100; // EUR
		const rate = 1.1; // EUR to USD
		const expectedAnswer = amount * rate;
		const userAnswer = parseFloat(currencyConverterGui.value.answer);

		currencyConverterGui.value.attempts++;

		if (Math.abs(userAnswer - expectedAnswer) <= 0.01) {
			currencyConverterGui.value.error = '';
			currencyConverterGui.value.showSolution = true;
			currencyConverterGui.value.isCorrect = true;
		} else {
			currencyConverterGui.value.error = 'Неправильна відповідь. Спробуйте ще раз';
			if (currencyConverterGui.value.attempts >= 3) {
				currencyConverterGui.value.showSolution = true;
				currencyConverterGui.value.isCorrect = false;
			}
		}
	}

	return {
		// State
		birthday,
		converter,
		flowerbed,
		squirrels,
		scales,
		cube,
		pizzeria,
		cafe,
		discount,
		season,
		calculator,
		temperature,
		library,
		renovation,
		grade,
		trafficLight,
		ageCategory,
		triangle,
		planet,
		tickets,
		calendar,
		delivery,
		geometry,
		unitConverter,
		password,
		numberCheck,
		timeCalc,
		textFormat,
		statistics,
		bankAccount,
		diceGame,
		textAnalysis,
		notepad,
		timer,
		colorGenerator,
		todoList,
		drawing,
		musicPlayer,
		bmiCalculator,
		currencyConverterGui,
		// Actions
		checkBirthdayAnswer,
		checkConverterAnswers,
		checkFlowerbedAnswers,
		checkSquirrelsAnswers,
		checkScalesAnswer,
		checkCubeAnswers,
		checkPizzeriaAnswer,
		checkCafeAnswer,
		checkDiscountAnswer,
		checkSeasonAnswer,
		checkCalculatorAnswer,
		checkTemperatureAnswer,
		checkLibraryAnswer,
		checkRenovationAnswers,
		checkGradeAnswer,
		checkTrafficLightAnswer,
		checkAgeCategoryAnswer,
		checkTriangleAnswer,
		checkPlanetAnswer,
		checkTicketsAnswer,
		checkCalendarAnswer,
		checkDeliveryAnswer,
		checkGeometryAnswer,
		checkUnitConverterAnswer,
		checkPasswordAnswer,
		checkNumberCheckAnswer,
		checkTimeCalcAnswer,
		checkTextFormatAnswer,
		checkStatisticsAnswer,
		checkBankAccountAnswer,
		checkDiceGameAnswer,
		checkTextAnalysisAnswer,
		checkNotepadAnswer,
		checkTimerAnswer,
		checkColorGeneratorAnswer,
		checkTodoListAnswer,
		checkDrawingAnswer,
		checkMusicPlayerAnswer,
		checkBmiCalculatorAnswer,
		checkCurrencyConverterGuiAnswer,
	};
});
