/* ============================================
   FAITH GAMES CENTER - SITE CONFIGURATION
   100% ADMIN CUSTOMIZABLE
   ============================================ */
const SITE_CONFIG = {
  brand: { name: "Faith Games Center", tagline: "21st Century Christian Gaming" },
  developer: {
    name: "Faith Games Developer",
    email: "faithgames@example.com",
    phone: "+1234567890",
    whatsapp: "1234567890",
    facebook: "https://facebook.com/faithgames",
    photo: "https://via.placeholder.com/150",
    mission: "Building the Kingdom of God through innovative Christian gaming experiences."
  },
  bankDetails: { bankName: "Union Bank", accountName: "DVG", accountNumber: "1000510055" },
  splash: { duration: 3000 },

  quizQuestions: [
    { question:"In which epistle does Paul discuss justification by faith using Abraham as the prototype?", options:["Galatians","Romans","Ephesians","Philippians"], correctIndex:1, verse:"Romans 4:3", verseText:"Abraham believed God, and it was credited to him as righteousness." },
    { question:"The Septuagint was translated during which period?", options:["Persian","Hellenistic","Roman","Byzantine"], correctIndex:1, verse:"Colossians 4:16", verseText:"The Septuagint bridged Hebrew scripture to the Greek-speaking world." },
    { question:"Which prophet used a taunt song against Babylon's king with 'morning star' imagery?", options:["Ezekiel","Daniel","Isaiah","Jeremiah"], correctIndex:2, verse:"Isaiah 14:12", verseText:"How you have fallen from heaven, morning star, son of the dawn!" },
    { question:"'Hypostatic union' refers to which doctrine?", options:["The Trinity","Christ's two natures","Incarnation","Omniscience"], correctIndex:1, verse:"Colossians 2:9", verseText:"In Christ all the fullness of the Deity lives in bodily form." },
    { question:"The 'abomination of desolation' primarily signifies?", options:["Temple destruction","Sacrilegious desecration","Antichrist","Roman occupation"], correctIndex:1, verse:"Daniel 9:27", verseText:"He will set up an abomination that causes desolation." },
    { question:"Which Documentary Hypothesis source uses 'Elohim' for God?", options:["Yahwist","Elohist","Deuteronomist","Priestly"], correctIndex:1, verse:"Genesis 1:1", verseText:"In the beginning God (Elohim) created the heavens and the earth." },
    { question:"'Shekinah' describes which concept?", options:["Angelic hierarchy","Divine presence","Prophetic inspiration","Messianic hope"], correctIndex:1, verse:"Exodus 40:34", verseText:"The glory of the LORD filled the tabernacle." },
    { question:"Which council ratified the NT canon?", options:["Nicaea 325","Carthage 397","Ephesus 431","Chalcedon 451"], correctIndex:1, verse:"2 Timothy 3:16", verseText:"All Scripture is God-breathed and useful for teaching." },
    { question:"The 'Suffering Servant' in Isaiah uses which Hebrew term?", options:["Mashiach","Eved","Ben Adam","Nagid"], correctIndex:1, verse:"Isaiah 53:11", verseText:"By his knowledge my righteous servant will justify many." },
    { question:"Paul's 'mystery' in Ephesians refers to?", options:["Christ's divinity","Gentile inclusion","Resurrection","Second coming"], correctIndex:1, verse:"Ephesians 3:6", verseText:"Gentiles are heirs together with Israel through the gospel." }
  ],

  prayerScenarios: [
    { situation:"You face a decision testing your integrity at work. What do you pray for?", options:["Wisdom to choose rightly","Success regardless of methods","Avoid the situation","Others decide for you"], correctIndex:0, feedback:"James 1:5 - If you lack wisdom, ask God who gives generously." },
    { situation:"A friend is suffering deeply. How should you pray?", options:["Immediate healing only","Comfort, strength, God's presence","They learn quickly","Handle it alone"], correctIndex:1, feedback:"2 Corinthians 1:3-4 - God comforts us so we can comfort others." },
    { situation:"You struggle with unforgiveness. What's the right prayer?", options:["Revenge","God to change your heart to forgive","Forget without forgiving","Wait for apology"], correctIndex:1, feedback:"Matthew 6:14 - Forgive others as your Father forgives you." },
    { situation:"You're anxious about finances. How should you pray?", options:["Only for wealth","Trust in God's provision","Win the lottery","Others provide"], correctIndex:1, feedback:"Philippians 4:6-7 - Present your requests to God with thanksgiving." },
    { situation:"You see injustice in your community. What should you pray for?", options:["Someone else fixes it","Justice, courage, guidance","It goes away","Only your protection"], correctIndex:1, feedback:"Micah 6:8 - Act justly, love mercy, walk humbly." },
    { situation:"You're tempted to compromise faith for acceptance. What do you pray?", options:["Popularity at any cost","Strength to stand firm","Blend in unnoticed","Easier temptation"], correctIndex:1, feedback:"1 Corinthians 10:13 - God will not let you be tempted beyond what you can bear." },
    { situation:"A family member is far from God. How should you pray?", options:["Force belief","Holy Spirit draws them","Give up","Only if they ask"], correctIndex:1, feedback:"John 6:44 - No one comes unless the Father draws them." },
    { situation:"You face persecution for your faith. What's the biblical response?", options:["Revenge","Boldness and blessing persecutors","Hide your faith","Fight in anger"], correctIndex:1, feedback:"Matthew 5:44 - Pray for those who persecute you." },
    { situation:"You feel inadequate to share the Gospel. What do you pray?", options:["Someone more qualified","Holy Spirit's boldness","Avoid the chance","They convert alone"], correctIndex:1, feedback:"Acts 4:29 - Enable your servants to speak with great boldness." },
    { situation:"You feel spiritually dry. What should you pray?", options:["Instant good feelings","Renewed passion and intimacy","Take a break","External signs only"], correctIndex:1, feedback:"Psalm 42:1-2 - As the deer pants for water, so my soul pants for God." }
  ],

  bibleHeroes: [
    { name:"David", icon:"fa-crown", power:"Courage", question:"What was David's occupation before king?", options:["Farmer","Shepherd","Soldier","Priest"], correctIndex:1 },
    { name:"Moses", icon:"fa-scroll", power:"Leadership", question:"Where did God first speak to Moses?", options:["Burning bush","Mountain top","River Nile","Palace"], correctIndex:0 },
    { name:"Esther", icon:"fa-crown", power:"Bravery", question:"What was Esther's Hebrew name?", options:["Ruth","Hadassah","Naomi","Deborah"], correctIndex:1 },
    { name:"Daniel", icon:"fa-fire", power:"Faithfulness", question:"How many times did Daniel pray daily?", options:["Once","Twice","Three times","Five times"], correctIndex:2 }
  ],

  memoryVerses: [
    { text:"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.", reference:"John 3:16" },
    { text:"Trust in the LORD with all your heart and lean not on your own understanding.", reference:"Proverbs 3:5-6" },
    { text:"I can do all this through him who gives me strength.", reference:"Philippians 4:13" },
    { text:"The LORD is my shepherd, I lack nothing.", reference:"Psalm 23:1" },
    { text:"For I know the plans I have for you, plans to prosper you and give you hope.", reference:"Jeremiah 29:11" },
    { text:"If we confess our sins, he is faithful and just to forgive us.", reference:"1 John 1:9" },
    { text:"Do not be anxious about anything, but present your requests to God.", reference:"Philippians 4:6" },
    { text:"In all things God works for the good of those who love him.", reference:"Romans 8:28" },
    { text:"The fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control.", reference:"Galatians 5:22-23" },
    { text:"Jesus Christ is the same yesterday and today and forever.", reference:"Hebrews 13:8" },
    { text:"Be strong and courageous. Do not be afraid, for the LORD your God is with you.", reference:"Joshua 1:9" },
    { text:"Come to me, all you who are weary, and I will give you rest.", reference:"Matthew 11:28" },
    { text:"Seek first his kingdom and his righteousness.", reference:"Matthew 6:33" },
    { text:"The LORD is my light and my salvation—whom shall I fear?", reference:"Psalm 27:1" },
    { text:"If anyone is in Christ, the new creation has come.", reference:"2 Corinthians 5:17" },
    { text:"Cast all your anxiety on him because he cares for you.", reference:"1 Peter 5:7" },
    { text:"The wages of sin is death, but the gift of God is eternal life.", reference:"Romans 6:23" },
    { text:"Those who hope in the LORD will renew their strength.", reference:"Isaiah 40:31" },
    { text:"Faith, hope, love remain. But the greatest is love.", reference:"1 Corinthians 13:13" },
    { text:"Let your light shine before others.", reference:"Matthew 5:16" }
  ],

  triviaQuestions: [
    { category:"Old Testament", question:"Who built the ark?", options:["Moses","Noah","Abraham","David"], correctIndex:1 },
    { category:"New Testament", question:"How many disciples did Jesus have?", options:["10","11","12","13"], correctIndex:2 },
    { category:"Old Testament", question:"Who was swallowed by a great fish?", options:["Jonah","Job","Joshua","Joel"], correctIndex:0 },
    { category:"New Testament", question:"Who baptized Jesus?", options:["Peter","Paul","John the Baptist","Andrew"], correctIndex:2 },
    { category:"Old Testament", question:"How many days did it rain during the flood?", options:["30","40","50","60"], correctIndex:1 },
    { category:"New Testament", question:"On which day did Jesus rise?", options:["First","Second","Third","Fourth"], correctIndex:2 },
    { category:"Old Testament", question:"Who was the strongest man in the Bible?", options:["Goliath","Samson","David","Solomon"], correctIndex:1 },
    { category:"New Testament", question:"Who denied Jesus three times?", options:["Judas","Peter","Thomas","John"], correctIndex:1 },
    { category:"Old Testament", question:"How many plagues struck Egypt?", options:["7","10","12","15"], correctIndex:1 },
    { category:"New Testament", question:"Which tax collector did Jesus call?", options:["Matthew","Mark","Luke","John"], correctIndex:0 },
    { category:"Old Testament", question:"Who interpreted dreams in Egypt?", options:["Jacob","Joseph","Moses","Aaron"], correctIndex:1 },
    { category:"New Testament", question:"How many loaves fed the 5000?", options:["3","5","7","10"], correctIndex:1 },
    { category:"Old Testament", question:"Who led Israel into the Promised Land?", options:["Moses","Aaron","Joshua","Caleb"], correctIndex:2 },
    { category:"New Testament", question:"Who wrote the most NT books?", options:["Peter","John","Paul","James"], correctIndex:2 },
    { category:"Old Testament", question:"What did Jacob see in his dream?", options:["Angels","A ladder to heaven","God's throne","Burning bush"], correctIndex:1 }
  ],

  parables: [
    { name:"Good Samaritan", meaning:"Love your neighbor", fullMeaning:"Our 'neighbor' is anyone in need, regardless of background. We must show compassion to all." },
    { name:"Prodigal Son", meaning:"God's forgiveness", fullMeaning:"God's love and readiness to forgive us when we repent, no matter how far we've strayed." },
    { name:"Lost Sheep", meaning:"God seeks the lost", fullMeaning:"God rejoices when one sinner repents and actively seeks the lost." },
    { name:"Sower", meaning:"Receive God's Word", fullMeaning:"Different responses to God's Word — we must be good soil that bears fruit." },
    { name:"Mustard Seed", meaning:"Kingdom growth", fullMeaning:"The Kingdom starts small but grows magnificently. Small faith can produce great results." },
    { name:"Pearl of Great Price", meaning:"Kingdom's value", fullMeaning:"The Kingdom is worth giving up everything to obtain. Jesus is the ultimate treasure." }
  ],

  commandments: [
    { number:1, text:"You shall have no other gods before Me", verse:"Exodus 20:3" },
    { number:2, text:"You shall not make idols", verse:"Exodus 20:4" },
    { number:3, text:"You shall not take the LORD's name in vain", verse:"Exodus 20:7" },
    { number:4, text:"Remember the Sabbath and keep it holy", verse:"Exodus 20:8" },
    { number:5, text:"Honor your father and mother", verse:"Exodus 20:12" },
    { number:6, text:"You shall not murder", verse:"Exodus 20:13" },
    { number:7, text:"You shall not commit adultery", verse:"Exodus 20:14" },
    { number:8, text:"You shall not steal", verse:"Exodus 20:15" },
    { number:9, text:"You shall not bear false witness", verse:"Exodus 20:16" },
    { number:10, text:"You shall not covet", verse:"Exodus 20:17" }
  ],

  prophets: [
    { name:"Elijah", period:"9th Century BC", description:"Confronted King Ahab and called down fire from heaven at Mount Carmel." },
    { name:"Elisha", period:"9th Century BC", description:"Received a double portion of Elijah's spirit and performed many miracles." },
    { name:"Isaiah", period:"8th Century BC", description:"Prophesied about the Messiah: 'Here am I. Send me!'" },
    { name:"Jeremiah", period:"7th Century BC", description:"Known as the weeping prophet who warned Judah of judgment." },
    { name:"Ezekiel", period:"6th Century BC", description:"Saw visions of dry bones and God's glory during exile." },
    { name:"Daniel", period:"6th Century BC", description:"Prayed three times daily and survived the lions' den." },
    { name:"Hosea", period:"8th Century BC", description:"His marriage illustrated God's faithful love for unfaithful Israel." },
    { name:"Joel", period:"9th-5th Century BC", description:"Prophesied the Spirit would be poured out on all people." },
    { name:"Amos", period:"8th Century BC", description:"A shepherd who called for justice and righteousness." },
    { name:"Jonah", period:"8th Century BC", description:"Sent to Nineveh and swallowed by a great fish." },
    { name:"Micah", period:"8th Century BC", description:"Declared: act justly, love mercy, walk humbly." },
    { name:"Nahum", period:"7th Century BC", description:"Announced the fall of Nineveh." },
    { name:"Habakkuk", period:"7th Century BC", description:"'The righteous will live by faith.'" },
    { name:"Zephaniah", period:"7th Century BC", description:"Warned of the Day of the Lord and promised restoration." },
    { name:"Haggai", period:"6th Century BC", description:"Encouraged rebuilding the temple after exile." }
  ],

  fruits: [
    { name:"Love", icon:"fa-heart", verse:"1 Cor 13:4-7", description:"Love is patient and kind, never envious or boastful." },
    { name:"Joy", icon:"fa-sun", verse:"Psalm 16:11", description:"Fullness of joy found in God's presence." },
    { name:"Peace", icon:"fa-dove", verse:"John 14:27", description:"Peace that surpasses understanding." },
    { name:"Patience", icon:"fa-hourglass", verse:"Rom 12:12", description:"Patient in affliction, faithful in prayer." },
    { name:"Kindness", icon:"fa-hand-holding-heart", verse:"Eph 4:32", description:"Be kind to one another, forgiving as Christ forgave you." },
    { name:"Goodness", icon:"fa-star", verse:"Ps 23:6", description:"Surely goodness follows those who trust the Lord." },
    { name:"Faithfulness", icon:"fa-shield-alt", verse:"Lam 3:23", description:"Great is His faithfulness, new every morning." },
    { name:"Gentleness", icon:"fa-feather", verse:"Phil 4:5", description:"Let your gentleness be evident to all." },
    { name:"Self-Control", icon:"fa-anchor", verse:"Gal 5:23", description:"The Spirit produces self-control against which there is no law." }
  ]
};

/* ============================================
   GAME STATE
   ============================================ */
let state = {
  isDark: false,
  currentScreen: 'home',
  scores: {},
  timers: {},
  quiz: { index: 0, score: 0 },
  memory: { index: 0 },
  runner: { pos: 50, active: false, spawnLoop: null, timeLoop: null, elapsed: 0 },
  prayer: { index: 0 },
  heroes: { selected: null, battleIndex: 0 },
  worship: { count: 0, target: 20 },
  salvation: { completed: 0 },
  trivia: { index: 0, timer: 30, lives: 3, timerInterval: null },
  puzzle: { selectedPiece: null, matches: 0 },
  commandments: { unlocked: 0 },
  prophets: { completed: 0 },
  garden: { watered: 0 }
};

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */
function $(id) { return document.getElementById(id); }
function $$(sel) { return document.querySelectorAll(sel); }

function showToast(msg, type = 'info') {
  const toast = $('toast');
  toast.textContent = msg;
  toast.className = 'toast show ' + type;
  setTimeout(() => toast.classList.remove('show'), 2500);
}

function createConfetti(count = 80) {
  const colors = ['#FFD700','#FF6B6B','#4ECDC4','#1877f2','#98D8C8'];
  const icons = ['fa-cross','fa-star','fa-dove','fa-heart'];
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const c = document.createElement('div');
      c.className = 'confetti';
      const icon = document.createElement('i');
      icon.className = `fas ${icons[Math.floor(Math.random()*icons.length)]} confetti-icon`;
      icon.style.color = colors[Math.floor(Math.random()*colors.length)];
      c.appendChild(icon);
      c.style.left = Math.random()*100 + '%';
      c.style.top = '-30px';
      c.style.animationDuration = (2 + Math.random()*3) + 's';
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 6000);
    }, i * 20);
  }
}

function showAutoVersePopup(ref, text, duration = 3000) {
  $('verseAutoRef').textContent = ref;
  $('verseAutoText').textContent = text;
  const popup = $('verseAutoPopup');
  popup.classList.add('active');
  setTimeout(() => popup.classList.remove('active'), duration);
}

function showGameOver(score, message) {
  $('gameOverScoreDisplay').textContent = score;
  $('gameOverMessage').textContent = message || "May God bless your journey!";
  $('gameOverModal').classList.add('active');
  createConfetti(100);
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ============================================
   SPLASH SCREEN
   ============================================ */
function initSplash() {
  $('splashPhoto').src = SITE_CONFIG.developer.photo;
  $('splashName').textContent = SITE_CONFIG.brand.name;
  $('splashMissionText').textContent = SITE_CONFIG.developer.mission;

  let countdown = Math.floor(SITE_CONFIG.splash.duration / 1000);
  $('splashCountdown').textContent = countdown;
  const countdownInterval = setInterval(() => {
    countdown--;
    if (countdown >= 0) $('splashCountdown').textContent = countdown;
    if (countdown <= 0) clearInterval(countdownInterval);
  }, 1000);

  setTimeout(() => {
    $('splashScreen').classList.add('hidden');
    createConfetti(60);
  }, SITE_CONFIG.splash.duration + 500);
}

/* ============================================
   NAVIGATION
   ============================================ */
function switchScreen(screenId) {
  $$('.game-container').forEach(g => g.classList.remove('active'));
  $$('.screen').forEach(s => s.classList.remove('active'));
  stopAllGameLoops();

  if (screenId === 'home') $('homeScreen').classList.add('active');
  else $(screenId).classList.add('active');

  state.currentScreen = screenId;
}

function stopAllGameLoops() {
  if (state.runner.spawnLoop) { clearTimeout(state.runner.spawnLoop); state.runner.spawnLoop = null; }
  if (state.runner.timeLoop) { clearInterval(state.runner.timeLoop); state.runner.timeLoop = null; }
  if (state.trivia.timerInterval) { clearInterval(state.trivia.timerInterval); state.trivia.timerInterval = null; }
  state.runner.active = false;
}

$('menuToggle').addEventListener('click', () => {
  $('sidebar').classList.add('open');
  $('sidebarOverlay').classList.add('active');
});
$('closeSidebar').addEventListener('click', closeSidebar);
$('closeSidebarBottomBtn').addEventListener('click', closeSidebar);
$('sidebarOverlay').addEventListener('click', closeSidebar);
function closeSidebar() {
  $('sidebar').classList.remove('open');
  $('sidebarOverlay').classList.remove('active');
}

$('openMenuBtn').addEventListener('click', () => {
  $('sidebar').classList.add('open');
  $('sidebarOverlay').classList.add('active');
});

$$('.game-btn[data-game]').forEach(btn => {
  btn.addEventListener('click', () => {
    const gameId = btn.getAttribute('data-game');
    closeSidebar();
    launchGame(gameId);
  });
});

$$('.game-back-btn').forEach(btn => {
  btn.addEventListener('click', () => switchScreen('home'));
});

$$('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    $$('.nav-item').forEach(n => n.classList.remove('active'));
    item.classList.add('active');
    const nav = item.getAttribute('data-nav');
    switchScreen(nav === 'home' ? 'home' : nav + 'Screen');
  });
});

$('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  state.isDark = !state.isDark;
  $('themeToggle').querySelector('i').className = state.isDark ? 'fas fa-sun' : 'fas fa-moon';
  localStorage.setItem('theme', state.isDark ? 'dark' : 'light');
});

function loadSettings() {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    state.isDark = true;
    $('themeToggle').querySelector('i').className = 'fas fa-sun';
  }
}

/* ============================================
   GAME LAUNCHER
   ============================================ */
function launchGame(gameId) {
  switchScreen(gameId);
  switch(gameId) {
    case 'faithRunner': startFaithRunner(); break;
    case 'prayerQuest': startPrayerQuest(); break;
    case 'bibleHeroes': startBibleHeroes(); break;
    case 'worshipWarriors': startWorshipWarriors(); break;
    case 'salvationJourney': startSalvationJourney(); break;
    case 'scriptureMemory': startScriptureMemory(); break;
    case 'bibleTrivia': startBibleTrivia(); break;
    case 'parablesPuzzle': startParablesPuzzle(); break;
    case 'commandmentsQuest': startCommandmentsQuest(); break;
    case 'prophetsTimeline': startProphetsTimeline(); break;
    case 'fruitGarden': startFruitGarden(); break;
  }
}

/* ============================================
   GAME 1: FAITH RUNNER (90+ seconds)
   ============================================ */
function startFaithRunner() {
  const canvas = $('faithRunnerCanvas');
  canvas.querySelectorAll('.runner-obstacle, .runner-blessing').forEach(e => e.remove());
  state.scores.faithRunner = 0;
  $('faithRunnerScore').textContent = 0;
  state.runner.pos = 50;
  state.runner.active = true;
  state.runner.elapsed = 0;
  $('runnerPlayer').style.left = '50%';

  function spawn() {
    if (!state.runner.active) return;
    if (Math.random() > 0.5) {
      const obs = document.createElement('div');
      obs.className = 'runner-obstacle';
      obs.innerHTML = '<i class="fas fa-skull-crossbones"></i>';
      obs.style.left = (Math.random()*80+10) + '%';
      obs.style.animationDuration = (2 + Math.random()) + 's';
      canvas.appendChild(obs);
      checkRunnerCollision(obs, -5);
      setTimeout(() => obs.remove(), 3200);
    }
    if (Math.random() > 0.3) {
      const bles = document.createElement('div');
      bles.className = 'runner-blessing';
      bles.innerHTML = '<i class="fas fa-star"></i>';
      bles.style.left = (Math.random()*80+10) + '%';
      bles.style.animationDuration = (2.2 + Math.random()) + 's';
      canvas.appendChild(bles);
      checkRunnerCollision(bles, 10);
      setTimeout(() => bles.remove(), 3400);
    }
    state.runner.spawnLoop = setTimeout(spawn, 700 + Math.random()*400);
  }

  function checkRunnerCollision(el, points) {
    const check = setInterval(() => {
      if (!el.parentElement || !state.runner.active) { clearInterval(check); return; }
      const elRect = el.getBoundingClientRect();
      const playerRect = $('runnerPlayer').getBoundingClientRect();
      if (!(elRect.right < playerRect.left || elRect.left > playerRect.right || elRect.bottom < playerRect.top || elRect.top > playerRect.bottom)) {
        state.scores.faithRunner = Math.max(0, state.scores.faithRunner + points);
        $('faithRunnerScore').textContent = state.scores.faithRunner;
        el.remove();
        clearInterval(check);
      }
    }, 50);
  }

  spawn();

  state.runner.timeLoop = setInterval(() => {
    state.runner.elapsed++;
    if (state.runner.elapsed >= 90) {
      state.runner.active = false;
      clearInterval(state.runner.timeLoop);
      showGameOver(state.scores.faithRunner, "You've run the race of faith! Well done!");
    }
  }, 1000);

  // Touch/swipe controls
  canvas.onclick = (e) => {
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const isLeft = clickX < rect.width / 2;
    state.runner.pos = isLeft ? Math.max(10, state.runner.pos - 15) : Math.min(90, state.runner.pos + 15);
    $('runnerPlayer').style.left = state.runner.pos + '%';
  };
}

/* ============================================
   GAME 2: PRAYER QUEST
   ============================================ */
function startPrayerQuest() {
  state.prayer.index = 0;
  state.scores.prayerQuest = 0;
  $('prayerQuestScore').textContent = 0;
  showPrayerScenario();
}

function showPrayerScenario() {
  const scenarios = SITE_CONFIG.prayerScenarios;
  if (state.prayer.index >= scenarios.length) {
    showGameOver(state.scores.prayerQuest, "Your prayer life has grown stronger!");
    return;
  }
  const s = scenarios[state.prayer.index];
  $('prayerText').textContent = s.situation;
  $('prayerFeedback').classList.remove('visible');
  const optsDiv = $('prayerOptions');
  optsDiv.innerHTML = '';
  s.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'prayer-btn';
    btn.textContent = opt;
    btn.onclick = () => {
      optsDiv.querySelectorAll('.prayer-btn').forEach(b => b.disabled = true);
      if (i === s.correctIndex) {
        btn.classList.add('correct');
        state.scores.prayerQuest += 20;
        $('prayerQuestScore').textContent = state.scores.prayerQuest;
        createConfetti(40);
      } else {
        btn.classList.add('wrong');
        optsDiv.children[s.correctIndex].classList.add('correct');
      }
      $('prayerFeedback').textContent = s.feedback;
      $('prayerFeedback').classList.add('visible');
      setTimeout(() => {
        state.prayer.index++;
        showPrayerScenario();
      }, 3000);
    };
    optsDiv.appendChild(btn);
  });
}

/* ============================================
   GAME 3: BIBLE HEROES ARENA
   ============================================ */
function startBibleHeroes() {
  state.heroes.selected = null;
  state.heroes.battleIndex = 0;
  state.scores.bibleHeroes = 0;
  $('bibleHeroesScore').textContent = 0;
  $('battleArea').classList.remove('active');

  const sel = $('heroSelection');
  sel.innerHTML = '';
  SITE_CONFIG.bibleHeroes.forEach((hero) => {
    const card = document.createElement('div');
    card.className = 'hero-card';
    card.innerHTML = `<div class="hero-icon"><i class="fas ${hero.icon}"></i></div><div class="hero-name">${hero.name}</div><div class="hero-power">${hero.power}</div>`;
    card.onclick = () => {
      sel.querySelectorAll('.hero-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      state.heroes.selected = hero;
      startBattle();
    };
    sel.appendChild(card);
  });
}

function startBattle() {
  $('battleArea').classList.add('active');
  showBattleQuestion();
}

function showBattleQuestion() {
  const heroes = SITE_CONFIG.bibleHeroes;
  if (state.heroes.battleIndex >= heroes.length) {
    showGameOver(state.scores.bibleHeroes, "Victory! You've conquered as a Bible Hero!");
    return;
  }
  const h = heroes[state.heroes.battleIndex];
  $('battleQuestion').textContent = h.question;
  const optsDiv = $('battleOptions');
  optsDiv.innerHTML = '';
  h.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'battle-btn';
    btn.textContent = opt;
    btn.onclick = () => {
      if (i === h.correctIndex) {
        state.scores.bibleHeroes += 25;
        $('bibleHeroesScore').textContent = state.scores.bibleHeroes;
        createConfetti(40);
        showToast('Correct! Victory!', 'success');
      } else {
        showToast('Not quite - keep fighting!', 'error');
      }
      state.heroes.battleIndex++;
      setTimeout(showBattleQuestion, 1200);
    };
    optsDiv.appendChild(btn);
  });
}

/* ============================================
   GAME 4: WORSHIP WARRIORS
   ============================================ */
function startWorshipWarriors() {
  state.worship.count = 0;
  state.scores.worshipWarriors = 0;
  $('worshipWarriorsScore').textContent = 0;
  $('worshipProgress').textContent = `Notes Played: 0/${state.worship.target}`;
  const verses = SITE_CONFIG.memoryVerses;
  const v = verses[Math.floor(Math.random()*verses.length)];
  $('worshipVerseText').textContent = v.text;
  $('worshipVerseRef').textContent = v.reference;

  $$('.worship-note').forEach(btn => {
    btn.onclick = () => {
      state.worship.count++;
      state.scores.worshipWarriors += 15;
      $('worshipWarriorsScore').textContent = state.scores.worshipWarriors;
      $('worshipProgress').textContent = `Notes Played: ${state.worship.count}/${state.worship.target}`;
      btn.style.transform = 'scale(0.9)';
      setTimeout(() => btn.style.transform = 'scale(1)', 150);
      if (state.worship.count % 5 === 0) {
        const verses2 = SITE_CONFIG.memoryVerses;
        const nv = verses2[Math.floor(Math.random()*verses2.length)];
        $('worshipVerseText').textContent = nv.text;
        $('worshipVerseRef').textContent = nv.reference;
      }
      if (state.worship.count >= state.worship.target) {
        showGameOver(state.scores.worshipWarriors, "Your worship has reached the heavens!");
      }
    };
  });
}

/* ============================================
   GAME 5: SALVATION JOURNEY
   ============================================ */
function startSalvationJourney() {
  state.salvation.completed = 0;
  const steps = [
    { title:"Acknowledge Sin", content:"Romans 3:23 - For all have sinned and fall short of the glory of God." },
    { title:"Believe in Christ", content:"John 3:16 - For God so loved the world that he gave his only Son." },
    { title:"Confess Your Faith", content:"Romans 10:9 - If you declare with your mouth Jesus is Lord, you will be saved." },
    { title:"Repent", content:"Acts 3:19 - Repent, then, and turn to God, so that your sins may be wiped out." },
    { title:"Receive Grace", content:"Ephesians 2:8 - For it is by grace you have been saved, through faith." },
    { title:"Be Baptized", content:"Acts 2:38 - Repent and be baptized in the name of Jesus Christ." },
    { title:"Walk in Faith", content:"2 Corinthians 5:7 - For we live by faith, not by sight." },
    { title:"Grow in the Word", content:"2 Timothy 2:15 - Study to show yourself approved, a worker who handles the word of truth." },
    { title:"Fellowship with Believers", content:"Hebrews 10:25 - Not giving up meeting together, as some are in the habit of doing." },
    { title:"Share the Good News", content:"Matthew 28:19 - Go and make disciples of all nations." }
  ];
  $('salvationJourneyScore').textContent = `0/${steps.length}`;
  const path = $('journeyPath');
  path.innerHTML = '';
  steps.forEach((step, i) => {
    const div = document.createElement('div');
    div.className = 'journey-step';
    div.innerHTML = `<div class="journey-step-number">${i+1}</div><div class="journey-step-title">${step.title}</div><div class="journey-step-content">${step.content}</div><button class="journey-step-action">Mark Complete</button>`;
    div.querySelector('.journey-step-action').onclick = () => {
      if (!div.classList.contains('completed')) {
        div.classList.add('completed');
        state.salvation.completed++;
        $('salvationJourneyScore').textContent = `${state.salvation.completed}/${steps.length}`;
        createConfetti(30);
        if (state.salvation.completed >= steps.length) {
          setTimeout(() => showGameOver(state.salvation.completed * 30, "You've completed the Salvation Journey!"), 500);
        }
      }
    };
    path.appendChild(div);
  });
}

/* ============================================
   GAME 6: SCRIPTURE MEMORY
   ============================================ */
function startScriptureMemory() {
  state.memory.index = 0;
  state.scores.scriptureMemory = 0;
  $('scriptureMemoryScore').textContent = 0;
  showMemoryCard();

  $('memoryCard').onclick = () => {
    $('memoryCard').classList.toggle('flipped');
    if ($('memoryCard').classList.contains('flipped')) {
      state.scores.scriptureMemory += 10;
      $('scriptureMemoryScore').textContent = state.scores.scriptureMemory;
    }
  };
  $('memoryNextBtn').onclick = () => {
    state.memory.index = (state.memory.index + 1) % SITE_CONFIG.memoryVerses.length;
    $('memoryCard').classList.remove('flipped');
    showMemoryCard();
  };
  $('memoryPrevBtn').onclick = () => {
    state.memory.index = (state.memory.index - 1 + SITE_CONFIG.memoryVerses.length) % SITE_CONFIG.memoryVerses.length;
    $('memoryCard').classList.remove('flipped');
    showMemoryCard();
  };
}

function showMemoryCard() {
  const v = SITE_CONFIG.memoryVerses[state.memory.index];
  $('memoryVerseText').textContent = v.text;
  $('memoryVerseRef').textContent = v.reference;
  $('memoryProgress').textContent = `Verse ${state.memory.index + 1} of ${SITE_CONFIG.memoryVerses.length}`;
}

/* ============================================
   GAME 7: BIBLE TRIVIA CHALLENGE
   ============================================ */
function startBibleTrivia() {
  state.trivia.index = 0;
  state.trivia.lives = 3;
  state.scores.bibleTrivia = 0;
  $('bibleTriviaScore').textContent = 0;
  $('triviaLives').textContent = 3;
  showTriviaQuestion();
}

function showTriviaQuestion() {
  const questions = SITE_CONFIG.triviaQuestions;
  if (state.trivia.index >= questions.length || state.trivia.lives <= 0) {
    if (state.trivia.timerInterval) clearInterval(state.trivia.timerInterval);
    showGameOver(state.scores.bibleTrivia, state.trivia.lives <= 0 ? "Game over - try again!" : "You've completed the trivia challenge!");
    return;
  }
  const q = questions[state.trivia.index];
  $('triviaCategory').textContent = q.category;
  $('triviaQuestion').textContent = q.question;
  const optsDiv = $('triviaOptions');
  optsDiv.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'trivia-option';
    btn.textContent = opt;
    btn.onclick = () => {
      if (state.trivia.timerInterval) clearInterval(state.trivia.timerInterval);
      optsDiv.querySelectorAll('.trivia-option').forEach(b => b.style.pointerEvents='none');
      if (i === q.correctIndex) {
        btn.classList.add('correct');
        state.scores.bibleTrivia += 20;
        $('bibleTriviaScore').textContent = state.scores.bibleTrivia;
        createConfetti(30);
      } else {
        btn.classList.add('wrong');
        optsDiv.children[q.correctIndex].classList.add('correct');
        state.trivia.lives--;
        $('triviaLives').textContent = state.trivia.lives;
      }
      state.trivia.index++;
      setTimeout(showTriviaQuestion, 1200);
    };
    optsDiv.appendChild(btn);
  });

  state.trivia.timer = 30;
  $('triviaTimer').textContent = state.trivia.timer;
  if (state.trivia.timerInterval) clearInterval(state.trivia.timerInterval);
  state.trivia.timerInterval = setInterval(() => {
    state.trivia.timer--;
    $('triviaTimer').textContent = state.trivia.timer;
    if (state.trivia.timer <= 0) {
      clearInterval(state.trivia.timerInterval);
      state.trivia.lives--;
      $('triviaLives').textContent = state.trivia.lives;
      state.trivia.index++;
      showTriviaQuestion();
    }
  }, 1000);
}

/* ============================================
   GAME 8: PARABLES PUZZLE
   ============================================ */
function startParablesPuzzle() {
  state.puzzle.selectedPiece = null;
  state.puzzle.matches = 0;
  state.scores.parablesPuzzle = 0;
  $('parablesPuzzleScore').textContent = 0;
  $('puzzleMeaning').classList.remove('visible');

  const pieces = shuffle(SITE_CONFIG.parables);
  const div = $('puzzlePieces');
  div.innerHTML = '';
  pieces.forEach(p => {
    const el = document.createElement('div');
    el.className = 'puzzle-piece';
    el.textContent = p.name;
    el.dataset.name = p.name;
    el.onclick = () => selectParable(el, p);
    div.appendChild(el);
  });
}

function selectParable(el, parable) {
  if (el.classList.contains('matched')) return;
  $('puzzleMeaning').textContent = parable.fullMeaning;
  $('puzzleMeaning').classList.add('visible');
  el.classList.add('matched');
  state.puzzle.matches++;
  state.scores.parablesPuzzle += 25;
  $('parablesPuzzleScore').textContent = state.scores.parablesPuzzle;
  createConfetti(30);
  if (state.puzzle.matches >= SITE_CONFIG.parables.length) {
    setTimeout(() => showGameOver(state.scores.parablesPuzzle, "You understand the parables of Jesus!"), 2000);
  }
}

/* ============================================
   GAME 9: COMMANDMENTS QUEST
   ============================================ */
function startCommandmentsQuest() {
  state.commandments.unlocked = 0;
  $('commandmentsScore').textContent = `0/${SITE_CONFIG.commandments.length}`;
  const list = $('commandmentsList');
  list.innerHTML = '';
  SITE_CONFIG.commandments.forEach(c => {
    const div = document.createElement('div');
    div.className = 'commandment-card';
    div.innerHTML = `<div class="commandment-number">${c.number}</div><div class="commandment-text">${c.text}</div><div class="commandment-verse">${c.verse}</div><button class="commandment-btn">Learn & Reflect</button>`;
    div.querySelector('.commandment-btn').onclick = () => {
      if (!div.classList.contains('unlocked')) {
        div.classList.add('unlocked');
        state.commandments.unlocked++;
        $('commandmentsScore').textContent = `${state.commandments.unlocked}/${SITE_CONFIG.commandments.length}`;
        createConfetti(20);
        if (state.commandments.unlocked >= SITE_CONFIG.commandments.length) {
          setTimeout(() => showGameOver(state.commandments.unlocked * 30, "You've mastered the Ten Commandments!"), 500);
        }
      }
    };
    list.appendChild(div);
  });
}

/* ============================================
   GAME 10: PROPHETS TIMELINE
   ============================================ */
function startProphetsTimeline() {
  state.prophets.completed = 0;
  $('prophetsScore').textContent = `0/${SITE_CONFIG.prophets.length}`;
  const container = $('timelineEvents');
  container.innerHTML = '';
  SITE_CONFIG.prophets.forEach(p => {
    const div = document.createElement('div');
    div.className = 'timeline-event';
    div.innerHTML = `<div class="timeline-dot"></div><div class="timeline-card"><div class="timeline-prophet">${p.name} (${p.period})</div><div class="timeline-description">${p.description}</div><button class="timeline-btn">Mark Studied</button></div>`;
    div.querySelector('.timeline-btn').onclick = () => {
      if (!div.classList.contains('completed')) {
        div.classList.add('completed');
        state.prophets.completed++;
        $('prophetsScore').textContent = `${state.prophets.completed}/${SITE_CONFIG.prophets.length}`;
        createConfetti(20);
        if (state.prophets.completed >= SITE_CONFIG.prophets.length) {
          setTimeout(() => showGameOver(state.prophets.completed * 20, "You've studied all the Prophets!"), 500);
        }
      }
    };
    container.appendChild(div);
  });
}

/* ============================================
   GAME 11: FRUIT OF THE SPIRIT GARDEN
   ============================================ */
function startFruitGarden() {
  state.garden.watered = 0;
  $('fruitGardenScore').textContent = `0/${SITE_CONFIG.fruits.length}`;
  const grid = $('gardenGrid');
  grid.innerHTML = '';
  SITE_CONFIG.fruits.forEach(f => {
    const el = document.createElement('div');
    el.className = 'fruit-seed';
    el.innerHTML = `<div class="fruit-icon"><i class="fas ${f.icon}"></i></div><div class="fruit-name">${f.name}</div>`;
    el.onclick = () => {
      $('gardenInfoText').textContent = `${f.name} (${f.verse}): ${f.description}`;
    };
    grid.appendChild(el);
  });

  $('gardenWaterBtn').onclick = () => {
    const seeds = grid.querySelectorAll('.fruit-seed:not(.bloomed)');
    if (seeds.length === 0) return;
    seeds.forEach((seed, i) => {
      setTimeout(() => {
        seed.classList.add('bloomed');
        state.garden.watered++;
        $('fruitGardenScore').textContent = `${state.garden.watered}/${SITE_CONFIG.fruits.length}`;
        if (state.garden.watered >= SITE_CONFIG.fruits.length) {
          setTimeout(() => showGameOver(state.garden.watered * 25, "Your garden is full of the Spirit's fruit!"), 800);
        }
      }, i * 200);
    });
    createConfetti(50);
  };
}

/* ============================================
   ADVANCED QUIZ MODAL - AUTO-ADVANCE
   ============================================ */
$('advancedQuizBtn').addEventListener('click', () => {
  closeSidebar();
  state.quiz.index = 0;
  state.quiz.score = 0;
  $('quizModal').classList.add('active');
  showQuizQuestion();
});

$('quizCloseBtn').addEventListener('click', () => {
  $('quizModal').classList.remove('active');
});

function showQuizQuestion() {
  const questions = SITE_CONFIG.quizQuestions;
  if (state.quiz.index >= questions.length) {
    $('quizModal').classList.remove('active');
    showGameOver(state.quiz.score, "You've completed the University Bible Quiz!");
    return;
  }
  const q = questions[state.quiz.index];
  $('quizQuestionNumber').textContent = `Question ${state.quiz.index + 1} of ${questions.length}`;
  $('quizQuestionText').textContent = q.question;
  $('quizProgressFill').style.width = ((state.quiz.index) / questions.length * 100) + '%';

  const optsDiv = $('quizOptionsContainer');
  optsDiv.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.textContent = opt;
    btn.onclick = () => {
      optsDiv.querySelectorAll('.quiz-option').forEach(b => b.disabled = true);
      if (i === q.correctIndex) {
        btn.classList.add('correct');
        state.quiz.score += 50;
        createConfetti(40);
      } else {
        btn.classList.add('wrong');
        optsDiv.children[q.correctIndex].classList.add('correct');
      }
      showAutoVersePopup(q.verse, q.verseText, 3000);
      state.quiz.index++;
      setTimeout(showQuizQuestion, 3200);
    };
    optsDiv.appendChild(btn);
  });
}

/* ============================================
   GAME OVER MODAL ACTIONS
   ============================================ */
$('playAgainBtn').addEventListener('click', () => {
  $('gameOverModal').classList.remove('active');
  const activeGame = document.querySelector('.game-container.active');
  if (activeGame) launchGame(activeGame.id);
});

$('backToHomeBtn').addEventListener('click', () => {
  $('gameOverModal').classList.remove('active');
  $$('.nav-item').forEach(n => n.classList.remove('active'));
  $('bottomNav').querySelector('[data-nav="home"]').classList.add('active');
  switchScreen('home');
});

/* ============================================
   ABOUT / MISSION / SUPPORT - SOCIAL BUTTONS
   ============================================ */
function wireContactButtons() {
  const d = SITE_CONFIG.developer;
  ['aboutEmailBtn','missionEmailBtn','supportEmailBtn'].forEach(id => {
    if ($(id)) $(id).onclick = () => window.location.href = `mailto:${d.email}`;
  });
  ['aboutWhatsAppBtn','missionWhatsAppBtn','supportWhatsAppBtn'].forEach(id => {
    if ($(id)) $(id).onclick = () => window.open(`https://wa.me/${d.whatsapp}`, '_blank');
  });
  if ($('aboutPhoneBtn')) $('aboutPhoneBtn').onclick = () => window.location.href = `tel:${d.phone}`;
  if ($('aboutFacebookBtn')) $('aboutFacebookBtn').onclick = () => window.open(d.facebook, '_blank');
}

/* ============================================
   SUPPORT SCREEN - BANK DETAILS
   ============================================ */
function wireBankDetails() {
  $('bankNameVal').textContent = SITE_CONFIG.bankDetails.bankName;
  $('bankAcctNameVal').textContent = SITE_CONFIG.bankDetails.accountName;
  $('bankAcctNumVal').textContent = SITE_CONFIG.bankDetails.accountNumber;

  $('revealBankBtn').addEventListener('click', () => {
    const info = $('bankInfo');
    info.classList.toggle('visible');
    $('revealBankBtn').textContent = info.classList.contains('visible') ? 'Hide Details' : 'Tap to Reveal';
  });

  $$('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-copy');
      navigator.clipboard.writeText(text).then(() => {
        btn.classList.add('copied');
        showToast('Copied to clipboard!', 'success');
        setTimeout(() => btn.classList.remove('copied'), 1500);
      });
    });
  });
}

/* ============================================
   PWA INSTALLATION
   ============================================ */
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  $('installAppBtn').style.display = 'flex';
});

$('installAppBtn').addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  if (outcome === 'accepted') $('installAppBtn').style.display = 'none';
  deferredPrompt = null;
});

/* ============================================
   SERVICE WORKER REGISTRATION
   ============================================ */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(err => console.log('SW registration failed:', err));
  });
}

/* ============================================
   INITIALIZATION
   ============================================ */
window.addEventListener('DOMContentLoaded', () => {
  loadSettings();
  initSplash();
  wireContactButtons();
  wireBankDetails();
});

document.addEventListener('contextmenu', e => e.preventDefault());
document.body.style.overscrollBehavior = 'none';
