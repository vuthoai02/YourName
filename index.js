//----------------Change background when scrolling-------------------
const nav = document.getElementById("navigation");
const sideBar = document.querySelectorAll("#navigation>ul")[0]

const w = window.innerWidth;

if(w < 756){
  sideBar.className = "hidden";
  const openNav = document.createElement("div");
  openNav.innerHTML = "="
  openNav.id = "openNav";
  openNav.addEventListener("click", () => openSideBar(openNav));
  document.body.appendChild(openNav);
}

function openSideBar(openNav){
  if(sideBar.id){
    sideBar.className = "hidden";
    sideBar.removeAttribute("id");
    openNav.innerHTML = "="
  } else{
    sideBar.removeAttribute("className");
    sideBar.id = "sideBar";
    openNav.innerHTML = "X"
  }
}

window.onscroll = function () { 
  "use strict";
  if (window.scrollY >= 200 ) {
      nav.style.backgroundColor = "black"
  } else{
    nav.style.backgroundColor = "transparent"
  }
};

//-------------Number counter header-------------------
function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
  let currentNumber = startNumber
  const interval = window.setInterval(updateNumber, 17)
  function updateNumber() {
    if (currentNumber >= finalNumber) {
      clearInterval(interval)
    } else {
      let inc = Math.ceil(finalNumber / (duration / 17))
      if (currentNumber + inc > finalNumber) {
        currentNumber = finalNumber
        clearInterval(interval)
      } else {
        currentNumber += inc
      }
      callback(currentNumber)
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  animateNumber(380000000, 3000, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('turnover').innerText = formattedNumber
  })
})

// ------------Story--------------

const text = document.getElementById("text");
const Box = document.getElementById("Box");

var intinalActive = "link";

const timelineList = [
  { key: 'link', title: 'Linking Dreams', content: "In 2013, Mitsuha Miyamizu is a high school girl living in the rural town of Itomori, Japan. Bored of the town, she wishes to be a Tokyo boy in her next life. One day, she inexplicably begins to switch bodies intermittently with Taki Tachibana, a high school boy in Tokyo. Thus, when they wake up as each other on some mornings, they must live through the other's respective activities and social interactions for the day. They learn they can communicate with each other by leaving messages on paper, phones, and sometimes on each other's skin. Mitsuha (in Taki's body) sets Taki up on a date with coworker Miki Okudera, while Taki (in Mitsuha's body) causes Mitsuha to become popular at school. One day, Taki (in Mitsuha's body) accompanies Mitsuha's grandmother Hitoha and younger sister Yotsuha to leave the ritual alcohol kuchikamizake, made by the sisters, as an offering at the Shinto shrine located on a mountaintop outside the town. It is believed to represent the body of the village guardian god ruling over human connections and time. Taki reads a note from Mitsuha about the comet Tiamat, expected to pass nearest to Earth on the day of the autumn festival. The next day, Taki wakes up in his body and goes on a date with Miki, who tells him she enjoyed the date but also that she can tell he is preoccupied with thoughts of someone else. Taki attempts to call Mitsuha on the phone but cannot reach her as the body-switching ends." },
  { key: 'journey', title: 'Journey of search', content: "Taki, Miki, and their friend Tsukasa travel to Gifu by train on a trip to Hida in search of Mitsuha. However, Taki does not know the name of Itomori, relying on his sketches of the surrounding landscape from memory. A restaurant owner in Takayama is from Itomori and recognizes the town in the sketch. He takes Taki and his friends to the ruins of Itomori, which has been destroyed and where 500 residents were killed when Tiamat unexpectedly fragmented as it passed by Earth three years earlier. Taki observes Mitsuha's messages disappear from his phone, and his memories of her begin to gradually fade, realizing the two were also separated by time, as he is in 2016. Taki finds Mitsuha's name in the record of fatalities. While Miki and Tsukasa return to Tokyo, Taki journeys to the shrine, hoping to reconnect with Mitsuha and warn her about Tiamat. There, Taki drinks Mitsuha's kuchikamizake and then lapses into a vision, where he glimpses Mitsuha's past. He also recalls that he encountered Mitsuha on a train when she came to Tokyo the day before the event to find him, though Taki did not recognize her as the body-switching was yet to occur in his timeframe. Before leaving the train in embarrassment, Mitsuha had handed him her hair ribbon, which he has since worn on his wrist as a good-luck charm."},
  { key: 'convert', title: 'Convert', content: "Taki wakes up in Mitsuha's body at her house on the morning of the festival. Hitoha deduces what has happened and tells him the body-switching ability has been passed down in her family as caretakers of the shrine. Taki convinces Tessie and Sayaka, two of Mitsuha's friends, to get the townspeople to evacuate Itomori by disabling the electrical substation and broadcasting a false emergency alert. Taki heads to the shrine, realizing that Mitsuha must be in his body there, while Mitsuha wakes up in Taki's body. At sunset, the two sense each other's presence on the mountaintop but are separated due to contrasting timeframes and cannot see each other. When twilight falls,they return to their own bodies and see each other in person. After Taki returns Mitsuha's ribbon, they attempt to write their names on each other's palms so that they will remember each other. However, before Mitsuha can write hers, twilight passes, and they revert to their respective timeframes. When the evacuation plan fails, Mitsuha has to convince her father, Toshiki, the mayor of Itomori, to evacuate everyone. Before doing so, Mitsuha notices her memories of Taki are fading away and discovers he wrote 'I love you' on her hand instead of his own name. After Tiamat crashes, Taki returns to his own timeframe and remembers nothing."},
  { key: 'again', title: 'See again', content: "Five years later, Taki, having graduated from university, is searching for a job. He senses he has lost something vital that he cannot identify, and feels inexplicable interest in the events surrounding Tiamat, now eight years in the past: Itomori was destroyed, but all of its people survived as they had evacuated just in time. Mitsuha has since moved to Tokyo. Sometime later, Taki and Mitsuha glimpse each other when their respective trains pass each other and are instantly drawn to seek one another, disembarking and racing to find the other, finally meeting at the stairs of Suga Shrine [ja]. Taki calls out to Mitsuha, saying that he feels he knows her, and she responds likewise. Having finally found what each had long searched for, they shed tears of happiness and simultaneously ask each other for their name." },
]

timelineList.forEach(elm => {
  const container = document.createElement("div");
  container.className = "container";
  const content = document.createElement("div");
  content.className = "content"
  const para = document.createElement("p");
  if (intinalActive == elm.key) para.classList.add("active");
  para.innerHTML = `${elm.title}`;
  para.style.cursor = "pointer"
  para.addEventListener("click", function(){
    text.innerHTML = elm.content;
    active = elm.key;
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += "active";
  })
  content.appendChild(para);
  container.appendChild(content);
  document.querySelector("#timeline").appendChild(container);
})
var timeLineNumb = 0;
if(w < 756){
  const storyBox = document.createElement("div");
  const strText = document.createElement("p");
  const prevSt = document.createElement('button');
  const nextSt = document.createElement('button');

  const handleChangeStr = (type) => {
    if(type == 'prev'){
      timeLineNumb = timeLineNumb == 0?timelineList.length -1:timeLineNumb-1;
    } else{
      timeLineNumb = (timeLineNumb == timelineList.length-1)?0:timeLineNumb+1;
    }
    strText.innerText = timelineList[timeLineNumb].title;
    text.innerText = timelineList[timeLineNumb].content;
  }

  prevSt.innerText = "<";
  strText.innerText = timelineList[timeLineNumb].title;
  nextSt.innerText = ">";
  prevSt.addEventListener("click", () => handleChangeStr('prev'));
  nextSt.addEventListener("click", () => handleChangeStr('next'));

  text.style.textAlign = "justify";
  text.style.fontSize = "20px";

  storyBox.id = "storyBox"

  storyBox.appendChild(prevSt);
  storyBox.appendChild(strText);
  storyBox.appendChild(nextSt);
  Box.appendChild(storyBox)
}

// ------------Figures-------------
const figures = document.getElementById("figures");
const figure = document.getElementById("figure");

const figureList = [
  {key: 'mitsuha', name: 'Mitsuha Miyamizu', img: './assets/image/mitsuha.png', intro: "A high school girl dissatisfied with her life in Itomori, a mountainous and rural town of Gifu Prefecture. She is a 17-year-old student in her second year at Itomori High School, but in reality is three years older than Taki. Mitsuha is usually seen with her hair tied up with a dark red braided ribbon that she made by hand herself. She and her sister are maidens of the family shrine. After her mother died, her father abandoned the shrine to pursue politics. She lives with her maternal grandmother, Hitoha, and her younger sister, Yotsuha, who is in elementary school. Mitsuha wishes to have a better life in Tokyo than having unavoidable encounters in the small town with her estranged father, the mayor, as well as her role as a shrine maiden (miko) in rituals for her mother's family shrine including making kuchikamizake, an ancient traditional way of making sake by chewing rice and spitting it back out to be fermented - all of which attracts mockery and disdain from her classmates. When switching bodies with Taki, Mitsuha forbids him from looking at or touching her body. Mitsuha later appeared in Shinkai's next film Weathering with You."},
  {key: 'taki', name: 'Taki Tachibana', img: 'assets/image/taki.jpg', intro: "A high school boy in Tokyo. He is a 17-year-old student in his third year at Tokyo Metropolitan High School. He is a talented sketch artist and has aspirations to be an architect. He is short-tempered but well-meaning and kind. He spends time with Miki Okudera, working in a part-time job as a waiter at the Italian restaurant 'Il Giardino delle Parole'.A running gag in the film is that whenever Taki wakes up and realizes he has swapped bodies with Mitsuha that day, he immediately begins to fondle 'his' breasts in amazement, only stopping once Mitsuha's sister, Yotsuha, sees her. Mitsuha teasingly calls him out for the habit when they meet in person for the first time during twilight. Taki later appeared in Shinkai's next film Weathering with You."},
  {key: 'tessie', name: 'Katsuhiko "Tessie" Teshigawara', position: '0 -250px', img: "assets/image/tessie.jpg", intro: "One of Mitsuha's classmates; as of 2013, he is 17 years old and has a crush on Mitsuha. His nickname is 'Tessie' ('Tesshi' in the dub). He is the son of the president of a local construction company, Teshigawara Construction. He is a lover of the monthly occult magazine MU (ja) and a mechanical geek. He has a 50-50 love/hate relationship with his hometown,Itomori, and from his own perspective, he initiates concrete measures to improve the town's situation,which earns him the sympathy of Taki (physically, Mitsuha).n the epilogue, he talks about his upcoming marriage to Sayaka."},
  {key: 'natori', name: 'Sayaka Natori', img: "assets/image/natori.jpg", intro: "One of Mitsuha's classmates and her best friend; as of 2013, she is 17 years old.[c] She has a calm but nervous personality and has a crush on Tessie. She is part of the school's radio broadcasting club, so she is tasked by Taki and Tessie with broadcasting the false emergency evacuation alert. Her sister, who works at the town hall, makes a brief appearance in the film."},
  {key: 'fujii', name: 'Tsukasa Fujii', img: "assets/image/fujii.jpg", intro:"A classmate and friend of Taki. He has a cool personality and, like Taki, is interested in architecture. He works part-time at the same restaurant as Taki and Takagi. He worries about Taki whenever Mitsuha inhabits his body."},
  {key: 'miki', name: 'Miki Okudera', img: "assets/image/Miki.jpg", intro: "A university student, one of Taki's friends, and his co-worker at the Italian restaurant 'Il Giardino delle Parole'. She is a beautiful and fashionable college girl who is popular with male waiters. She develops closer feelings for Taki when Mitsuha inhabits his body. She is a smoker, which Tsukasa discovers when they spend a night together while accompanying Taki on his search for Mitsuha. She is more commonly referred to as Ms. Okudera (Okudera-senpai) by her colleagues."}
];

let figureNumb = 0;

figures.style.backgroundImage = `url(${figureList[figureNumb].img})`
if(w < 756) figures.style.backgroundPositionX = "-100px"

const img = document.createElement("img");
const content = document.createElement("div");
const nameBox = document.createElement("div");
const nameFig = document.createElement("p");
const prev = document.createElement('button');
const next = document.createElement('button');
const figPara = document.createElement("p");

img.src = figureList[figureNumb].img;
img.className = "figureImg";

content.className = "contentFig";
nameBox.className = "nameBox";

nameFig.innerText = figureList[figureNumb].name;
nameFig.className = "nameFig";

const handleChangeFig = (type) => {
  if(type == 'prev'){
    figureNumb = figureNumb == 0?figureList.length -1:figureNumb-1;
  } else{
    figureNumb = (figureNumb == figureList.length-1)?0:figureNumb+1;
  }
  figures.style.backgroundImage = `url(${figureList[figureNumb].img})`;
  img.src = figureList[figureNumb].img;
  nameFig.innerText = figureList[figureNumb].name;
  figPara.innerText = figureList[figureNumb].intro;
}

prev.innerText = "<";
prev.title = "Xem nhân vật khác";
prev.addEventListener("click", () => handleChangeFig('prev'));
next.innerText = ">";
next.title = "Xem nhân vật khác";
next.addEventListener("click", () => handleChangeFig('next'));

figPara.innerText = figureList[figureNumb].intro;
figPara.className = 'figPara';

nameBox.appendChild(prev);
nameBox.appendChild(nameFig);
nameBox.appendChild(next);
content.appendChild(nameBox);
content.appendChild(figPara);
figure.appendChild(img);
figure.appendChild(content);

// ====================RESOINSIVE====================
