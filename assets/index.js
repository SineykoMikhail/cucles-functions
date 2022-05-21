//2 задание
let greeting = "Привет ";
let userName = prompt("Это второе задание:))) Как я могу к Вам обращаться?");
alert(greeting + userName);
let taskSelection = prompt("Выбери следующее задание. Нажмите: 1, 3, 4, 5");
if (taskSelection == 1) {
  alert(lessons1());
} else if (taskSelection == 3) {
  alert(lessons2());
} else if (taskSelection == 4) {
  alert(brieflyFive());
} else if (taskSelection == 5) {
  alert(lessons5());
} else {
  alert("Ничего не выбрал");
}


// 1 задание
function lessons1() {
  let js = "java script";
  let eleven = 11;
  let bolean = true;
  let stringHundred = "100";
  alert(js + eleven + bolean + stringHundred);
}

// 2 задание
function lessons2() {
  let time = prompt("В какую четверть часа попадает число?");
  if (time <= 3 || time >= 12) {
    alert("Первая четверть");
  } else if (time >= 3 || time <= 6) {
    alert("Вторая четверть");
  } else if (time >= 6 || time <= 9) {
    alert("Третья четверть");
  } else if (time >= 9 || time <= 12) {
    alert("Четвертая четверть");
  }
}

//4 задание
function brieflyFive(minNum, maxNum) {
  let num;
  for (num = 10; num <= 50; num++) {
    if (num % 5 == 0) {
      console.log(num);
    }
  }
}

//5 задание
function lessons5(lim1, lim2) {
  let num = 1;
  for (num = 1; num <= 100; num++) {
    num *= num;
  }
  alert(num);
}
debugger;