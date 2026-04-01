// === LEARN & SONGS MODULE ===

// ── BEGINNER LESSONS ──
const LESSONS = [
  {
    id: 'hold', title: '🎸 How to Hold a Guitar', type: 'info',
    steps: [
      { text: 'Sit comfortably with the guitar body resting on your right thigh (if right-handed).', img: '🪑' },
      { text: 'The neck should angle slightly upward, not parallel to the floor.', img: '📐' },
      { text: 'Your left hand wraps around the neck — thumb behind, fingers curled over the fretboard.', img: '🤚' },
      { text: 'Your right hand hovers over the sound hole for strumming.', img: '✋' },
      { text: 'Keep your shoulders relaxed — tension is your enemy!', img: '😌' }
    ]
  },
  {
    id: 'read', title: '📖 How to Read Chord Diagrams', type: 'info',
    steps: [
      { text: 'Vertical lines = strings (thickest E on left, thinnest e on right).', img: '📊' },
      { text: 'Horizontal lines = frets. Top thick line = nut of the guitar.', img: '➖' },
      { text: 'Dots show where to place your fingers. Numbers inside = which finger.', img: '⚫' },
      { text: '✕ above a string = don\'t play that string. ○ = play it open (no finger).', img: '❌' },
      { text: 'Practice placing fingers one at a time — speed comes later!', img: '🐢' }
    ]
  },
  {
    id: 'em', title: '🟢 Your First Chord: Em', type: 'chord', chord: 'Em',
    steps: [
      { text: 'Em is the EASIEST chord — only 2 fingers needed!', img: '✌️' },
      { text: 'Place your 2nd finger (middle) on the A string, 2nd fret.', img: '2️⃣' },
      { text: 'Place your 3rd finger (ring) on the D string, 2nd fret.', img: '3️⃣' },
      { text: 'Strum ALL 6 strings — they all ring open or fretted!', img: '🎵' },
      { text: 'Practice strumming slowly and evenly. Every string should ring clear.', img: '👂' }
    ]
  },
  {
    id: 'am', title: '🟡 Learn Chord: Am', type: 'chord', chord: 'Am',
    steps: [
      { text: 'Am uses 3 fingers and is a beautiful, sad-sounding chord.', img: '😢' },
      { text: 'Place 1st finger (index) on B string, 1st fret.', img: '1️⃣' },
      { text: 'Place 2nd finger (middle) on D string, 2nd fret.', img: '2️⃣' },
      { text: 'Place 3rd finger (ring) on G string, 2nd fret.', img: '3️⃣' },
      { text: 'Strum from A string downward (skip the low E). Listen for clarity!', img: '⬇️' }
    ]
  },
  {
    id: 'c', title: '🟠 Learn Chord: C', type: 'chord', chord: 'C',
    steps: [
      { text: 'C Major is one of the most used chords in music!', img: '⭐' },
      { text: '1st finger on B string, 1st fret.', img: '1️⃣' },
      { text: '2nd finger on D string, 2nd fret.', img: '2️⃣' },
      { text: '3rd finger on A string, 3rd fret.', img: '3️⃣' },
      { text: 'Strum from A string down. The low E is muted.', img: '⬇️' }
    ]
  },
  {
    id: 'g', title: '🔴 Learn Chord: G', type: 'chord', chord: 'G',
    steps: [
      { text: 'G Major has a big, full, happy sound. Strum all 6 strings!', img: '🌟' },
      { text: '2nd finger (middle) on A string, 2nd fret.', img: '2️⃣' },
      { text: '1st finger (index) on A string... wait — on the LOW E string, 3rd fret!', img: '1️⃣' },
      { text: '3rd finger (ring) or pinky on HIGH E string, 3rd fret.', img: '3️⃣' },
      { text: 'Strum all 6 strings! This chord rings beautifully.', img: '🎸' }
    ]
  },
  {
    id: 'd', title: '🟣 Learn Chord: D', type: 'chord', chord: 'D',
    steps: [
      { text: 'D Major is bright and cheerful — used in thousands of songs!', img: '☀️' },
      { text: '1st finger on G string, 2nd fret.', img: '1️⃣' },
      { text: '3rd finger on B string, 3rd fret.', img: '3️⃣' },
      { text: '2nd finger on high E string, 2nd fret.', img: '2️⃣' },
      { text: 'Only strum the bottom 4 strings (D, G, B, e). Skip A and low E!', img: '⬇️' }
    ]
  },
  {
    id: 'strum', title: '🥁 Strumming Patterns', type: 'strum',
    steps: [
      { text: 'Pattern 1 (Easiest): ⬇ ⬇ ⬇ ⬇ — All downstrums, one per beat.', img: '1️⃣', pattern: 'D D D D' },
      { text: 'Pattern 2: ⬇ ⬇ ⬆ ⬇ — Add one upstrum for groove.', img: '2️⃣', pattern: 'D D U D' },
      { text: 'Pattern 3 (Pop): ⬇ ⬇ ⬆ ⬆ ⬇ ⬆ — The most popular pattern!', img: '3️⃣', pattern: 'D D U U D U' },
      { text: 'Pattern 4 (Campfire): ⬇ ⬆ ⬇ ⬆ ⬇ ⬆ ⬇ ⬆', img: '4️⃣', pattern: 'D U D U D U D U' },
      { text: 'TIP: Start slow with the metronome. Speed up only when comfortable!', img: '💡' }
    ]
  },
  {
    id: 'switch', title: '🔄 Switching Between Chords', type: 'practice',
    chordSequence: ['Em', 'Am', 'Em', 'Am'],
    steps: [
      { text: 'The key to playing songs is switching chords smoothly.', img: '🔑' },
      { text: 'Start with Em → Am. They share a similar finger shape!', img: '🤝' },
      { text: 'Practice: Play Em (4 strums) then switch to Am (4 strums). Repeat!', img: '🔁' },
      { text: 'Don\'t rush! Pause between chords at first. Speed comes with muscle memory.', img: '🧠' },
      { text: 'Try the practice tool below — it highlights which chord to play!', img: '⬇️' }
    ]
  }
];

// ── SONGS DATABASE ──
const SONGS = [
  {
    id: 'paaro', title: 'Paaro', artist: 'Aditya Rikhari',
    difficulty: 'Easy', capo: 0,
    bpm: 78, strumPattern: 'D D U U D U',
    chords: ['Am', 'Em', 'G', 'D'],
    sections: [
      { name: 'Intro', chords: ['Am', '—', 'Em', '—', 'G', '—', 'D', '—'] },
      { name: 'Verse 1', lyrics: 'Udne do paaro ko\nKhule aasman mein', chords: ['Am', 'Em', 'G', 'D'] },
      { name: 'Verse 2', lyrics: 'Rehne do baaton ko\nDil ki zuban mein', chords: ['Am', 'Em', 'G', 'D'] },
      { name: 'Chorus', lyrics: 'Paaro ho tum\nUdna tumhe aata hai', chords: ['G', 'D', 'Am', 'Em'] },
      { name: 'Verse 3', lyrics: 'Bikhra sa hai manzar\nPhir bhi hai haseen', chords: ['Am', 'Em', 'G', 'D'] },
      { name: 'Outro', chords: ['Am', '—', 'Em', '—'] }
    ]
  },
  {
    id: 'teri_mitti', title: 'Teri Mitti', artist: 'B Praak',
    difficulty: 'Easy', capo: 0, bpm: 72, strumPattern: 'D D U U D U',
    chords: ['Em', 'C', 'G', 'D'],
    sections: [
      { name: 'Intro', chords: ['Em', '—', 'C', '—'] },
      { name: 'Verse', lyrics: 'Teri mitti mein mil jaavan\nGunj uthe meri faryaad', chords: ['Em', 'C', 'G', 'D'] },
      { name: 'Chorus', lyrics: 'Teri mitti, teri mitti\nMein mil jaavan', chords: ['Em', 'C', 'G', 'D'] }
    ]
  },
  {
    id: 'tum_hi_ho', title: 'Tum Hi Ho', artist: 'Arijit Singh',
    difficulty: 'Easy', capo: 0, bpm: 68, strumPattern: 'D D U U D U',
    chords: ['Em', 'C', 'G', 'D'],
    sections: [
      { name: 'Intro', chords: ['Em', '—', 'C', '—', 'G', '—', 'D', '—'] },
      { name: 'Verse', lyrics: 'Hum tere bin ab reh nahi sakte\nTere bina kya wajood mera', chords: ['Em', 'C', 'G', 'D'] },
      { name: 'Chorus', lyrics: 'Tum hi ho... ab tum hi ho\nZindagi ab tum hi ho', chords: ['Em', 'C', 'G', 'D'] }
    ]
  },
  {
    id: 'let_her_go', title: 'Let Her Go', artist: 'Passenger',
    difficulty: 'Easy', capo: 'Fret 7', bpm: 75, strumPattern: 'D U D U D U',
    chords: ['Em', 'C', 'D', 'G'],
    sections: [
      { name: 'Verse', lyrics: 'Well you only need the light when it\'s burning low\nOnly miss the sun when it starts to snow', chords: ['Em', 'C', 'D', 'Em'] },
      { name: 'Chorus', lyrics: 'Cause you let her go...', chords: ['G', 'D', 'Em', 'C'] }
    ]
  },
  {
    id: 'perfect', title: 'Perfect', artist: 'Ed Sheeran',
    difficulty: 'Easy', capo: 'Fret 1', bpm: 63, strumPattern: 'D D U U D U',
    chords: ['G', 'Em', 'C', 'D'],
    sections: [
      { name: 'Verse', lyrics: 'I found a love, for me\nDarling just dive right in', chords: ['G', 'Em', 'C', 'D'] },
      { name: 'Chorus', lyrics: 'Baby, I\'m dancing in the dark\nWith you between my arms', chords: ['G', 'Em', 'C', 'D'] }
    ]
  },
  {
    id: 'khairiyat', title: 'Khairiyat', artist: 'Arijit Singh',
    difficulty: 'Easy', capo: 0, bpm: 80, strumPattern: 'D D U U D U',
    chords: ['Am', 'F', 'C', 'G'],
    sections: [
      { name: 'Verse', lyrics: 'Khairiyat pucho, kabhi toh kaifiyat pucho\nTumse ho duri toh kya duniya mein', chords: ['Am', 'F', 'C', 'G'] },
      { name: 'Chorus', lyrics: 'Khairiyat pucho...\nKabhi toh kaifiyat pucho', chords: ['Am', 'F', 'C', 'G'] }
    ]
  },
  {
    id: 'roke_na', title: 'Roke Na Ruke Naina', artist: 'Arijit Singh',
    difficulty: 'Easy', capo: 0, bpm: 70, strumPattern: 'D D U U D U',
    chords: ['Em', 'Am', 'D', 'G'],
    sections: [
      { name: 'Verse', lyrics: 'Roke na ruke naina\nToh aane de aane de', chords: ['Em', 'Am', 'D', 'G'] },
      { name: 'Chorus', lyrics: 'Roke na ruke naina...', chords: ['Em', 'Am', 'D', 'G'] }
    ]
  },
  {
    id: 'channa_mereya', title: 'Channa Mereya', artist: 'Arijit Singh',
    difficulty: 'Easy', capo: 0, bpm: 82, strumPattern: 'D D U U D U',
    chords: ['Am', 'Em', 'G', 'D'],
    sections: [
      { name: 'Verse', lyrics: 'Achha chalta hoon duaon mein yaad rakhna\nMere zikr ka zubaan pe swaad rakhna', chords: ['Am', 'Em', 'G', 'D'] },
      { name: 'Chorus', lyrics: 'Channa mereya mereya\nChanna mereya mereya', chords: ['Am', 'Em', 'G', 'D'] }
    ]
  }
];

// ── PROGRESS TRACKING ──
function getProgress() {
  try { return JSON.parse(localStorage.getItem('guitar_progress') || '{}'); } catch { return {}; }
}
function saveProgress(data) { localStorage.setItem('guitar_progress', JSON.stringify(data)); }
function markLessonDone(id) { const p = getProgress(); p[id] = true; saveProgress(p); }
function isLessonDone(id) { return !!getProgress()[id]; }
function getCompletedCount() { return Object.keys(getProgress()).length; }

// ── RENDER LEARN TAB ──
let currentLessonIdx = -1;
let currentStepIdx = 0;

function initLearn() {
  renderLessonsList();
}

function renderLessonsList() {
  const container = document.getElementById('learn-content');
  const completed = getCompletedCount();
  const total = LESSONS.length;
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

  let html = `
    <div class="progress-overview">
      <div class="progress-header">
        <span class="progress-title">Your Progress</span>
        <span class="progress-count">${completed}/${total} lessons</span>
      </div>
      <div class="progress-bar-wrap">
        <div class="progress-bar-fill" style="width:${pct}%"></div>
      </div>
      <div class="progress-pct">${pct}% Complete</div>
    </div>
    <div class="lessons-grid">`;

  LESSONS.forEach((lesson, i) => {
    const done = isLessonDone(lesson.id);
    const typeIcon = lesson.type === 'chord' ? '🎵' : lesson.type === 'strum' ? '🥁' : lesson.type === 'practice' ? '🔄' : '📘';
    html += `
      <div class="lesson-card ${done ? 'completed' : ''}" onclick="openLesson(${i})">
        <div class="lesson-card-icon">${typeIcon}</div>
        <div class="lesson-card-body">
          <div class="lesson-card-title">${lesson.title}</div>
          <div class="lesson-card-meta">${lesson.steps.length} steps · ${lesson.type}</div>
        </div>
        <div class="lesson-card-status">${done ? '✅' : '▶'}</div>
      </div>`;
  });

  html += '</div>';
  container.innerHTML = html;
}

function openLesson(idx) {
  currentLessonIdx = idx;
  currentStepIdx = 0;
  renderLessonStep();
}

function renderLessonStep() {
  const lesson = LESSONS[currentLessonIdx];
  if (!lesson) return;
  const step = lesson.steps[currentStepIdx];
  const container = document.getElementById('learn-content');
  const isLast = currentStepIdx >= lesson.steps.length - 1;
  const isFirst = currentStepIdx === 0;

  let html = `
    <button class="btn learn-back-btn" onclick="renderLessonsList()">← Back to Lessons</button>
    <div class="lesson-view">
      <h3 class="lesson-title">${lesson.title}</h3>
      <div class="lesson-progress-dots">`;
  lesson.steps.forEach((_, i) => {
    html += `<span class="ldot ${i === currentStepIdx ? 'active' : ''} ${i < currentStepIdx ? 'done' : ''}"></span>`;
  });
  html += `</div>
      <div class="lesson-step-card">
        <div class="step-icon">${step.img}</div>
        <div class="step-text">${step.text}</div>`;
  if (step.pattern) {
    html += `<div class="strum-pattern-display">${step.pattern.split(' ').map(s =>
      `<span class="sp-${s === 'D' ? 'down' : 'up'}">${s === 'D' ? '⬇' : '⬆'}</span>`
    ).join('')}</div>`;
  }
  html += `</div>`;

  // Show chord on fretboard if lesson is chord type
  if (lesson.type === 'chord' && lesson.chord && typeof CHORDS !== 'undefined' && CHORDS[lesson.chord]) {
    html += `<button class="btn accent strum-practice-btn" onclick="selectChord('${lesson.chord}');strumChord()">🎵 Hear ${lesson.chord} Chord</button>`;
  }

  html += `<div class="lesson-nav-btns">`;
  if (!isFirst) html += `<button class="btn" onclick="prevLessonStep()">← Previous</button>`;
  else html += `<span></span>`;
  if (!isLast) html += `<button class="btn accent" onclick="nextLessonStep()">Next →</button>`;
  else html += `<button class="btn accent" onclick="completeLessonAction()">✅ Complete!</button>`;
  html += `</div></div>`;

  container.innerHTML = html;

  if (lesson.type === 'chord' && lesson.chord) {
    clearOverlayDots('chord-dot');
    showChordOnFretboard(lesson.chord);
  }
}

function nextLessonStep() { currentStepIdx++; renderLessonStep(); }
function prevLessonStep() { currentStepIdx--; renderLessonStep(); }

function completeLessonAction() {
  const lesson = LESSONS[currentLessonIdx];
  markLessonDone(lesson.id);
  clearOverlayDots('chord-dot');
  renderLessonsList();
  showToast(`✅ "${lesson.title}" completed!`);
}

// ── RENDER SONGS TAB ──
let currentSongIdx = -1;
let songPracticeChordIdx = 0;
let songPracticeTimer = null;

function initSongs() {
  renderSongsList();
}

function renderSongsList() {
  const container = document.getElementById('songs-content');
  let html = `<div class="songs-filter">
    <input type="text" id="song-search" class="song-search-input" placeholder="🔍 Search songs..." oninput="filterSongs()">
  </div><div class="songs-grid" id="songs-grid">`;

  SONGS.forEach((song, i) => {
    const diffClass = song.difficulty === 'Easy' ? 'diff-easy' : song.difficulty === 'Medium' ? 'diff-med' : 'diff-hard';
    html += `
      <div class="song-card" data-title="${song.title.toLowerCase()}" data-artist="${song.artist.toLowerCase()}" onclick="openSong(${i})">
        <div class="song-card-top">
          <span class="song-diff ${diffClass}">${song.difficulty}</span>
          <span class="song-bpm">${song.bpm} BPM</span>
        </div>
        <div class="song-card-title">${song.title}</div>
        <div class="song-card-artist">${song.artist}</div>
        <div class="song-card-chords">${song.chords.map(c => `<span class="song-chord-tag">${c}</span>`).join('')}</div>
        <div class="song-card-strum">Pattern: ${song.strumPattern}</div>
      </div>`;
  });
  html += '</div>';
  container.innerHTML = html;
}

function filterSongs() {
  const q = document.getElementById('song-search').value.toLowerCase();
  document.querySelectorAll('.song-card').forEach(card => {
    const match = card.dataset.title.includes(q) || card.dataset.artist.includes(q);
    card.style.display = match ? '' : 'none';
  });
}

function openSong(idx) {
  currentSongIdx = idx;
  renderSongView();
}

function renderSongView() {
  const song = SONGS[currentSongIdx];
  const container = document.getElementById('songs-content');

  let html = `
    <button class="btn learn-back-btn" onclick="renderSongsList()">← Back to Songs</button>
    <div class="song-view">
      <div class="song-header">
        <h3 class="song-view-title">${song.title}</h3>
        <div class="song-view-artist">by ${song.artist}</div>
        <div class="song-meta-row">
          <span class="song-diff ${song.difficulty === 'Easy' ? 'diff-easy' : 'diff-med'}">${song.difficulty}</span>
          <span class="song-meta-item">🎵 ${song.bpm} BPM</span>
          ${song.capo ? `<span class="song-meta-item">Capo: ${song.capo === 0 ? 'None' : song.capo}</span>` : ''}
        </div>
      </div>

      <div class="song-chords-needed">
        <div class="song-section-title">Chords Used</div>
        <div class="song-chord-pills">
          ${song.chords.map(c => `<button class="chord-pill" onclick="selectChord('${c}');strumChord()">${c}</button>`).join('')}
        </div>
      </div>

      <div class="song-strum-section">
        <div class="song-section-title">Strumming Pattern</div>
        <div class="strum-pattern-display big">
          ${song.strumPattern.split(' ').map(s =>
            `<span class="sp-${s === 'D' ? 'down' : 'up'}">${s === 'D' ? '⬇' : '⬆'}</span>`
          ).join('')}
        </div>
        <div class="strum-pattern-text">${song.strumPattern}</div>
      </div>

      <div class="song-sections">`;

  song.sections.forEach(sec => {
    html += `<div class="song-section">
        <div class="song-section-name">${sec.name}</div>
        <div class="song-section-chords">${sec.chords.map(c =>
          c === '—' ? '<span class="sc-hold">—</span>' :
          `<span class="sc-chord" onclick="selectChord('${c}');strumChord()">${c}</span>`
        ).join('')}</div>`;
    if (sec.lyrics) html += `<div class="song-lyrics">${sec.lyrics}</div>`;
    html += `</div>`;
  });

  html += `</div>
      <div class="song-practice-section">
        <div class="song-section-title">🎯 Practice Mode</div>
        <p style="color:var(--text2);font-weight:300;margin-bottom:10px">Auto-cycles through chords at the song's tempo. Follow along!</p>
        <button class="btn accent" id="song-practice-btn" onclick="toggleSongPractice()">▶ Start Practice</button>
        <div id="song-practice-highlight" class="song-practice-highlight"></div>
      </div>
    </div>`;

  container.innerHTML = html;
}

function toggleSongPractice() {
  if (songPracticeTimer) {
    clearInterval(songPracticeTimer);
    songPracticeTimer = null;
    document.getElementById('song-practice-btn').textContent = '▶ Start Practice';
    document.getElementById('song-practice-highlight').innerHTML = '';
    clearOverlayDots('chord-dot');
    return;
  }
  const song = SONGS[currentSongIdx];
  const allChords = [];
  song.sections.forEach(s => s.chords.forEach(c => { if (c !== '—') allChords.push(c); }));
  if (!allChords.length) return;

  songPracticeChordIdx = 0;
  document.getElementById('song-practice-btn').textContent = '⏹ Stop Practice';
  const ms = (60000 / song.bpm) * 4; // 4 beats per chord

  function tick() {
    const chord = allChords[songPracticeChordIdx % allChords.length];
    document.getElementById('song-practice-highlight').innerHTML =
      `<div class="practice-now">Now: <strong>${chord}</strong></div>
       <div class="practice-next">Next: ${allChords[(songPracticeChordIdx + 1) % allChords.length]}</div>`;
    selectChord(chord);
    showChordOnFretboard(chord);
    songPracticeChordIdx++;
  }
  tick();
  songPracticeTimer = setInterval(tick, ms);
}

// ── TOAST ──
function showToast(msg) {
  let t = document.getElementById('toast-notif');
  if (!t) { t = document.createElement('div'); t.id = 'toast-notif'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}
