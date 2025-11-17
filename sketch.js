let hourInput, minInput, secInput;
let addButton;
let alarms = [];
let alarmSound;
let stopButton;

function preload() {
  // 알람 소리 파일
  alarmSound = loadSound("alarm.mp3");
}

function setup() {
  createCanvas(500, 300);
  textSize(18);

  hourInput = createInput();
  hourInput.size(40);
  hourInput.position(20, 50);

  minInput = createInput();
  minInput.size(40);
  minInput.position(70, 50);

  secInput = createInput();
  secInput.size(40);
  secInput.position(120, 50);

  addButton = createButton("Add Alarm");
  addButton.position(180, 50);
  addButton.mousePressed(addAlarm);

  stopButton = createButton("Stop Alarm");
  stopButton.position(280, 50);
  stopButton.mousePressed(stopAlarm);
}

function draw() {
  background(230);

  // 현재 시간 표시
  let now = new Date();
  let h = nf(now.getHours(), 2);
  let m = nf(now.getMinutes(), 2);
  let s = nf(now.getSeconds(), 2);

  text(`Current Time: ${h}:${m}:${s}`, 20, 120);

  // 등록된 알람 리스트 출력
  text("Alarms:", 20, 160);
  for (let i = 0; i < alarms.length; i++) {
    text(
      `${i + 1}. ${alarms[i].h}:${alarms[i].m}:${alarms[i].s}`,
      20,
      190 + i * 25
    );

    // 알람 체크
    if (alarms[i].h === h && alarms[i].m === m && alarms[i].s === s) {
      if (!alarmSound.isPlaying()) {
        alarmSound.play();
      }
    }
  }
}

function addAlarm() {
  let h = nf(int(hourInput.value()), 2);
  let m = nf(int(minInput.value()), 2);
  let s = nf(int(secInput.value()), 2);

  alarms.push({ h, m, s });
  console.log("알람 추가:", h, m, s);
}

function stopAlarm() {
  if (alarmSound.isPlaying()) {
    alarmSound.stop();
  }
}
