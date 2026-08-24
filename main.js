// Alkitab Presenter Studio Pro - Complete Live Presentation & Broadcast Engine

// 66 Books of the Indonesian Bible (TB - Terjemahan Baru)
const BIBLE_BOOKS = [
  { id: 1, name: "Kejadian", abbr: "Kej", chapter: 50, testament: "OT" },
  { id: 2, name: "Keluaran", abbr: "Kel", chapter: 40, testament: "OT" },
  { id: 3, name: "Imamat", abbr: "Ima", chapter: 27, testament: "OT" },
  { id: 4, name: "Bilangan", abbr: "Bil", chapter: 36, testament: "OT" },
  { id: 5, name: "Ulangan", abbr: "Ula", chapter: 34, testament: "OT" },
  { id: 6, name: "Yosua", abbr: "Yos", chapter: 24, testament: "OT" },
  { id: 7, name: "Hakim-hakim", abbr: "Hak", chapter: 21, testament: "OT" },
  { id: 8, name: "Rut", abbr: "Rut", chapter: 4, testament: "OT" },
  { id: 9, name: "1 Samuel", abbr: "1Sam", chapter: 31, testament: "OT" },
  { id: 10, name: "2 Samuel", abbr: "2Sam", chapter: 24, testament: "OT" },
  { id: 11, name: "1 Raja-raja", abbr: "1Raj", chapter: 22, testament: "OT" },
  { id: 12, name: "2 Raja-raja", abbr: "2Raj", chapter: 25, testament: "OT" },
  { id: 13, name: "1 Tawarikh", abbr: "1Taw", chapter: 29, testament: "OT" },
  { id: 14, name: "2 Tawarikh", abbr: "2Taw", chapter: 36, testament: "OT" },
  { id: 15, name: "Ezra", abbr: "Ezr", chapter: 10, testament: "OT" },
  { id: 16, name: "Nehemia", abbr: "Neh", chapter: 13, testament: "OT" },
  { id: 17, name: "Ester", abbr: "Est", chapter: 10, testament: "OT" },
  { id: 18, name: "Ayub", abbr: "Ayb", chapter: 42, testament: "OT" },
  { id: 19, name: "Mazmur", abbr: "Maz", chapter: 150, testament: "OT" },
  { id: 20, name: "Amsal", abbr: "Ams", chapter: 31, testament: "OT" },
  { id: 21, name: "Pengkhotbah", abbr: "Pkh", chapter: 12, testament: "OT" },
  { id: 22, name: "Kidung Agung", abbr: "Kid", chapter: 8, testament: "OT" },
  { id: 23, name: "Yesaya", abbr: "Yes", chapter: 66, testament: "OT" },
  { id: 24, name: "Yeremia", abbr: "Yer", chapter: 52, testament: "OT" },
  { id: 25, name: "Ratapan", abbr: "Rat", chapter: 5, testament: "OT" },
  { id: 26, name: "Yehezkiel", abbr: "Yeh", chapter: 48, testament: "OT" },
  { id: 27, name: "Daniel", abbr: "Dan", chapter: 12, testament: "OT" },
  { id: 28, name: "Hosea", abbr: "Hos", chapter: 14, testament: "OT" },
  { id: 29, name: "Yoel", abbr: "Yoe", chapter: 3, testament: "OT" },
  { id: 30, name: "Amos", abbr: "Amo", chapter: 9, testament: "OT" },
  { id: 31, name: "Obaja", abbr: "Oba", chapter: 1, testament: "OT" },
  { id: 32, name: "Yunus", abbr: "Yun", chapter: 4, testament: "OT" },
  { id: 33, name: "Mikha", abbr: "Mik", chapter: 7, testament: "OT" },
  { id: 34, name: "Nahum", abbr: "Nah", chapter: 3, testament: "OT" },
  { id: 35, name: "Habakuk", abbr: "Hab", chapter: 3, testament: "OT" },
  { id: 36, name: "Zefanya", abbr: "Zef", chapter: 3, testament: "OT" },
  { id: 37, name: "Hagai", abbr: "Hag", chapter: 2, testament: "OT" },
  { id: 38, name: "Zakharia", abbr: "Zak", chapter: 14, testament: "OT" },
  { id: 39, name: "Maleakhi", abbr: "Mal", chapter: 4, testament: "OT" },
  { id: 40, name: "Matius", abbr: "Mat", chapter: 28, testament: "NT" },
  { id: 41, name: "Markus", abbr: "Mar", chapter: 16, testament: "NT" },
  { id: 42, name: "Lukas", abbr: "Luk", chapter: 24, testament: "NT" },
  { id: 43, name: "Yohanes", abbr: "Yoh", chapter: 21, testament: "NT" },
  { id: 44, name: "Kisah Para Rasul", abbr: "Kis", chapter: 28, testament: "NT" },
  { id: 45, name: "Roma", abbr: "Rom", chapter: 16, testament: "NT" },
  { id: 46, name: "1 Korintus", abbr: "1Kor", chapter: 16, testament: "NT" },
  { id: 47, name: "2 Korintus", abbr: "2Kor", chapter: 13, testament: "NT" },
  { id: 48, name: "Galatia", abbr: "Gal", chapter: 6, testament: "NT" },
  { id: 49, name: "Efesus", abbr: "Efe", chapter: 6, testament: "NT" },
  { id: 50, name: "Filipi", abbr: "Flp", chapter: 4, testament: "NT" },
  { id: 51, name: "Kolose", abbr: "Kol", chapter: 4, testament: "NT" },
  { id: 52, name: "1 Tesalonika", abbr: "1Tes", chapter: 5, testament: "NT" },
  { id: 53, name: "2 Tesalonika", abbr: "2Tes", chapter: 3, testament: "NT" },
  { id: 54, name: "1 Timotius", abbr: "1Tim", chapter: 6, testament: "NT" },
  { id: 55, name: "2 Timotius", abbr: "2Tim", chapter: 4, testament: "NT" },
  { id: 56, name: "Titus", abbr: "Tit", chapter: 3, testament: "NT" },
  { id: 57, name: "Filemon", abbr: "Flm", chapter: 1, testament: "NT" },
  { id: 58, name: "Ibrani", abbr: "Ibr", chapter: 13, testament: "NT" },
  { id: 59, name: "Yakobus", abbr: "Yak", chapter: 5, testament: "NT" },
  { id: 60, name: "1 Petrus", abbr: "1Pet", chapter: 5, testament: "NT" },
  { id: 61, name: "2 Petrus", abbr: "2Pet", chapter: 3, testament: "NT" },
  { id: 62, name: "1 Yohanes", abbr: "1Yoh", chapter: 5, testament: "NT" },
  { id: 63, name: "2 Yohanes", abbr: "2Yoh", chapter: 1, testament: "NT" },
  { id: 64, name: "3 Yohanes", abbr: "3Yoh", chapter: 1, testament: "NT" },
  { id: 65, name: "Yudas", abbr: "Yud", chapter: 1, testament: "NT" },
  { id: 66, name: "Wahyu", abbr: "Wah", chapter: 22, testament: "NT" }
];

// Offline Local Database
let localAlkitabDB = {};

// In-Memory Cache
const passageCache = new Map();

// Multi-Window Broadcast Channel
const BROADCAST_CHANNEL_NAME = 'alkitab_presenter_pro_channel';
let broadcastChannel = null;

// Application State
let appState = {
  book: "Kejadian",
  chapter: 1,
  verseStart: 1,
  verseEnd: 1,
  verses: [],
  title: "Kejadian 1",
  displayMode: "full", // 'full' | 'lower-third'
  theme: "black", // 'black' | 'obs-transparent' | 'chroma-green' | 'dark-blue' | 'charcoal' | 'sepia' | 'light'
  isBlackout: false,
  isClear: false,
  styles: {
    fontSize: 28,
    fontFamily: "'Inter', sans-serif",
    textAlign: "left",
    isBold: false,
    hasShadow: true,
    isUppercase: false,
    lineHeight: 1.5,
    letterSpacing: 0,
    verseColor: "#ffffff",
    titleColor: "#ffd700"
  }
};

// Guided Modal Wizard State
let modalWizardState = {
  step: 1, // 1: Book, 2: Chapter, 3: Verse Start, 4: Verse End
  bookName: "Kejadian",
  chapter: 1,
  verseStart: 1,
  verseEnd: 1,
  testamentFilter: "all" // 'all' | 'OT' | 'NT'
};

// DOM Elements
const bookSelect = document.getElementById("bookSelect");
const chapterSelect = document.getElementById("chapterSelect");
const verseStartSelect = document.getElementById("verseStartSelect");
const verseEndSelect = document.getElementById("verseEndSelect");

const chapDecBtn = document.getElementById("chapDecBtn");
const chapIncBtn = document.getElementById("chapIncBtn");
const verseStartDecBtn = document.getElementById("verseStartDecBtn");
const verseStartIncBtn = document.getElementById("verseStartIncBtn");
const verseEndDecBtn = document.getElementById("verseEndDecBtn");
const verseEndIncBtn = document.getElementById("verseEndIncBtn");

const searchBtn = document.getElementById("searchBtn");
const quickPickerBtn = document.getElementById("quickPickerBtn");
const openChapterModalBtn = document.getElementById("openChapterModalBtn");

// Studio Top Bar & Modes
const modeFullSlideBtn = document.getElementById("modeFullSlideBtn");
const modeLowerThirdBtn = document.getElementById("modeLowerThirdBtn");
const openPopoutControllerBtn = document.getElementById("openPopoutControllerBtn");
const openPopoutOutputBtn = document.getElementById("openPopoutOutputBtn");
const togglePanelBtn = document.getElementById("togglePanelBtn");
const togglePanelIcon = document.getElementById("togglePanelIcon");
const fullscreenBtn = document.getElementById("fullscreenBtn");

// Broadcast Controls
const prevVerseBtn = document.getElementById("prevVerseBtn");
const nextVerseBtn = document.getElementById("nextVerseBtn");
const sidePrevBtn = document.getElementById("sidePrevBtn");
const sideNextBtn = document.getElementById("sideNextBtn");
const blackoutBtn = document.getElementById("blackoutBtn");
const clearTextBtn = document.getElementById("clearTextBtn");
const bgThemeSelect = document.getElementById("bgThemeSelect");
const copyBtn = document.getElementById("copyBtn");
const resetStylesBtn = document.getElementById("resetStylesBtn");

// Typography Controls
const fontFamilySelect = document.getElementById("fontFamilySelect");
const fontSizeSlider = document.getElementById("fontSizeSlider");
const fontSizeInput = document.getElementById("fontSizeInput");
const fontSizeDisplayVal = document.getElementById("fontSizeDisplayVal");
const alignButtons = document.querySelectorAll(".btn-align");
const boldCheck = document.getElementById("boldCheck");
const textShadowCheck = document.getElementById("textShadowCheck");
const uppercaseCheck = document.getElementById("uppercaseCheck");
const lineHeightInput = document.getElementById("lineHeightInput");
const letterSpacingInput = document.getElementById("letterSpacingInput");
const verseColorInput = document.getElementById("verseColorInput");
const titleColorInput = document.getElementById("titleColorInput");

// Floating HUD
const floatingHudDock = document.getElementById("floatingHudDock");
const hudDragHandle = document.getElementById("hudDragHandle");
const hudPrevBtn = document.getElementById("hudPrevBtn");
const hudQuickPickBtn = document.getElementById("hudQuickPickBtn");
const hudNextBtn = document.getElementById("hudNextBtn");
const hudBlackoutBtn = document.getElementById("hudBlackoutBtn");
const hudClearBtn = document.getElementById("hudClearBtn");
const hudModeBtn = document.getElementById("hudModeBtn");
const hudPopoutBtn = document.getElementById("hudPopoutBtn");
const hudExpandBtn = document.getElementById("hudExpandBtn");

// Modals, Overlays & Displays
const controlsPanel = document.getElementById("controlsPanel");
const showControlsFab = document.getElementById("showControlsFab");
const displayArea = document.getElementById("displayArea");
const statusMessage = document.getElementById("statusMessage");
const blackoutOverlay = document.getElementById("blackoutOverlay");

// Guided Modal Elements
const guidedModal = document.getElementById("guidedModal");
const modalStepBadge = document.getElementById("modalStepBadge");
const modalStepTitle = document.getElementById("modalStepTitle");
const modalCurrentSelection = document.getElementById("modalCurrentSelection");
const closeModalBtn = document.getElementById("closeModalBtn");
const stepTabBook = document.getElementById("stepTabBook");
const stepTabChapter = document.getElementById("stepTabChapter");
const stepTabVerseStart = document.getElementById("stepTabVerseStart");
const stepTabVerseEnd = document.getElementById("stepTabVerseEnd");
const testamentFilterBar = document.getElementById("testamentFilterBar");
const filterAllBooks = document.getElementById("filterAllBooks");
const filterOTBooks = document.getElementById("filterOTBooks");
const filterNTBooks = document.getElementById("filterNTBooks");
const modalInstructionText = document.getElementById("modalInstructionText");
const modalBackBtn = document.getElementById("modalBackBtn");
const singleVerseShortcutContainer = document.getElementById("singleVerseShortcutContainer");
const singleVerseBtn = document.getElementById("singleVerseBtn");
const modalNumbersGrid = document.getElementById("modalNumbersGrid");

// ==========================================================================
// Initialization
// ==========================================================================
async function initApp() {
  handleUrlModeParameters();
  setupBroadcastChannel();
  await loadLocalDatabase();
  populateBookSelect();
  setupEventListeners();
  setupDraggableHud();
  loadSavedState();
  applyStylesToDOM();

  // If already has cached state or default
  if (!appState.book) {
    appState.book = "Kejadian";
  }
  bookSelect.value = appState.book;
  updateChapterOptions(appState.book, appState.chapter || 1);
  updateVerseOptions(appState.book, appState.chapter || 1, appState.verseStart || 1, appState.verseEnd || 1);
  
  // Render initial display
  handleSearch(false);
}

// Check URL Params for special window modes: ?mode=output or ?mode=controller or ?mode=lowerthird
function handleUrlModeParameters() {
  const params = new URLSearchParams(window.location.search);
  const mode = params.get("mode");

  if (mode === "output") {
    document.body.classList.add("mode-output-window");
    document.title = "Alkitab Presenter - Clean Output Window";
  } else if (mode === "controller") {
    document.body.classList.add("mode-controller-window");
    document.title = "Alkitab Presenter - Operator Controller";
  }

  if (mode === "lowerthird" || mode === "obs") {
    appState.displayMode = "lower-third";
  }
}

// Multi-window Realtime Synchronization via BroadcastChannel
function setupBroadcastChannel() {
  if ("BroadcastChannel" in window) {
    broadcastChannel = new BroadcastChannel(BROADCAST_CHANNEL_NAME);
    broadcastChannel.onmessage = (event) => {
      if (event.data && event.data.type === "STATE_SYNC") {
        applyIncomingState(event.data.payload);
      }
    };
  }

  // Fallback / Storage Listener
  window.addEventListener("storage", (e) => {
    if (e.key === "alkitab_presenter_sync_data" && e.newValue) {
      try {
        const payload = JSON.parse(e.newValue);
        applyIncomingState(payload);
      } catch (err) {}
    }
  });
}

function broadcastStateUpdate() {
  const payload = {
    book: appState.book,
    chapter: appState.chapter,
    verseStart: appState.verseStart,
    verseEnd: appState.verseEnd,
    verses: appState.verses,
    title: appState.title,
    displayMode: appState.displayMode,
    theme: appState.theme,
    isBlackout: appState.isBlackout,
    isClear: appState.isClear,
    styles: { ...appState.styles }
  };

  if (broadcastChannel) {
    broadcastChannel.postMessage({ type: "STATE_SYNC", payload });
  }

  try {
    localStorage.setItem("alkitab_presenter_sync_data", JSON.stringify(payload));
  } catch (e) {}
}

function applyIncomingState(payload) {
  if (!payload) return;

  appState.book = payload.book || appState.book;
  appState.chapter = payload.chapter || appState.chapter;
  appState.verseStart = payload.verseStart || appState.verseStart;
  appState.verseEnd = payload.verseEnd || appState.verseEnd;
  appState.verses = payload.verses || appState.verses;
  appState.title = payload.title || appState.title;
  appState.displayMode = payload.displayMode || appState.displayMode;
  appState.theme = payload.theme || appState.theme;
  appState.isBlackout = !!payload.isBlackout;
  appState.isClear = !!payload.isClear;
  if (payload.styles) {
    appState.styles = { ...appState.styles, ...payload.styles };
  }

  // Update UI Selectors
  if (bookSelect) bookSelect.value = appState.book;
  if (chapterSelect) updateChapterOptions(appState.book, appState.chapter);
  if (verseStartSelect) updateVerseOptions(appState.book, appState.chapter, appState.verseStart, appState.verseEnd);

  // Sync Form Controls
  syncControlsWithState();
  applyStylesToDOM();
  renderCurrentPassage();
}

// Load Offline Database
async function loadLocalDatabase() {
  if (window.LOCAL_ALKITAB_DB && Object.keys(window.LOCAL_ALKITAB_DB).length > 0) {
    localAlkitabDB = window.LOCAL_ALKITAB_DB;
    console.log(`✅ Loaded embedded window.LOCAL_ALKITAB_DB (${Object.keys(localAlkitabDB).length} chapters ready).`);
    return;
  }

  const paths = ['./alkitab_db.json', './public/alkitab_db.json', '/alkitab_db.json'];
  for (const path of paths) {
    try {
      const res = await fetch(path);
      if (res.ok) {
        localAlkitabDB = await res.json();
        const count = Object.keys(localAlkitabDB).length;
        if (count > 0) {
          console.log(`✅ Loaded offline database from ${path} (${count} chapters).`);
          break;
        }
      }
    } catch (e) {}
  }
}

// Populate Dropdown with 66 Books
function populateBookSelect() {
  bookSelect.innerHTML = '<option value="">-- Pilih Kitab --</option>';

  const otGroup = document.createElement("optgroup");
  otGroup.label = "Perjanjian Lama (39 Kitab)";
  const ntGroup = document.createElement("optgroup");
  ntGroup.label = "Perjanjian Baru (27 Kitab)";

  BIBLE_BOOKS.forEach(book => {
    const option = document.createElement("option");
    option.value = book.name;
    option.textContent = `${book.id}. ${book.name}`;
    if (book.testament === "OT") {
      otGroup.appendChild(option);
    } else {
      ntGroup.appendChild(option);
    }
  });

  bookSelect.appendChild(otGroup);
  bookSelect.appendChild(ntGroup);
}

// Populate Chapter Options
function updateChapterOptions(bookName, selectedChapter = 1) {
  const bookObj = BIBLE_BOOKS.find(b => b.name === bookName) || BIBLE_BOOKS[0];
  chapterSelect.innerHTML = "";

  for (let c = 1; c <= bookObj.chapter; c++) {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = `${c}`;
    if (c === selectedChapter) opt.selected = true;
    chapterSelect.appendChild(opt);
  }
}

// Populate Verse Start & End Options
function updateVerseOptions(bookName, chapter, selectedStart = 1, selectedEnd = 1) {
  const verseCount = getVerseCountFor(bookName, chapter);
  
  verseStartSelect.innerHTML = "";
  for (let v = 1; v <= verseCount; v++) {
    const opt = document.createElement("option");
    opt.value = v;
    opt.textContent = `${v}`;
    if (v === selectedStart) opt.selected = true;
    verseStartSelect.appendChild(opt);
  }

  updateVerseEndOptions(verseCount, selectedStart, selectedEnd);
}

function updateVerseEndOptions(verseCount, startVal, selectedEnd) {
  verseEndSelect.innerHTML = "";
  for (let v = startVal; v <= verseCount; v++) {
    const opt = document.createElement("option");
    opt.value = v;
    opt.textContent = `${v}`;
    if (v === selectedEnd) opt.selected = true;
    verseEndSelect.appendChild(opt);
  }
  if (!verseEndSelect.value) {
    verseEndSelect.value = startVal;
  }
}

function getVerseCountFor(bookName, chapter) {
  const key = `${bookName}_${chapter}`;
  if (localAlkitabDB[key] && Array.isArray(localAlkitabDB[key])) {
    return localAlkitabDB[key].length;
  }
  return 30;
}

// ==========================================================================
// Styling & Typography Application
// ==========================================================================
function updateCSSVar(property, value) {
  document.documentElement.style.setProperty(property, value);
}

function applyStylesToDOM() {
  const { styles, theme, displayMode, isBlackout } = appState;

  // CSS Variables
  updateCSSVar('--verse-font-size', `${styles.fontSize}px`);
  updateCSSVar('--verse-font-family', styles.fontFamily);
  updateCSSVar('--verse-text-align', styles.textAlign);
  updateCSSVar('--verse-font-weight', styles.isBold ? '700' : '500');
  updateCSSVar('--verse-line-height', styles.lineHeight);
  updateCSSVar('--verse-letter-spacing', `${styles.letterSpacing}px`);
  updateCSSVar('--verse-color', styles.verseColor);
  updateCSSVar('--verse-title-color', styles.titleColor);
  updateCSSVar('--verse-text-transform', styles.isUppercase ? 'uppercase' : 'none');
  updateCSSVar('--verse-text-shadow', styles.hasShadow ? '0 2px 4px rgba(0,0,0,0.9), 0 4px 14px rgba(0,0,0,0.8)' : 'none');

  // Theme Class on Body
  document.body.className = '';
  if (window.location.search.includes('mode=output')) {
    document.body.classList.add('mode-output-window');
  }
  if (window.location.search.includes('mode=controller')) {
    document.body.classList.add('mode-controller-window');
  }
  document.body.classList.add(`theme-${theme}`);

  // Display Mode (Full vs Lower-Third)
  if (displayMode === "lower-third") {
    displayArea.classList.remove("mode-full");
    displayArea.classList.add("mode-lower-third");
  } else {
    displayArea.classList.remove("mode-lower-third");
    displayArea.classList.add("mode-full");
  }

  // Blackout Overlay State
  if (isBlackout) {
    blackoutOverlay.classList.remove("hidden");
    if (blackoutBtn) blackoutBtn.classList.add("active-state");
  } else {
    blackoutOverlay.classList.add("hidden");
    if (blackoutBtn) blackoutBtn.classList.remove("active-state");
  }

  // Clear State
  if (clearTextBtn) {
    if (appState.isClear) {
      clearTextBtn.classList.add("active-state");
    } else {
      clearTextBtn.classList.remove("active-state");
    }
  }
}

function syncControlsWithState() {
  const { styles, theme, displayMode } = appState;

  if (fontSizeSlider) fontSizeSlider.value = styles.fontSize;
  if (fontSizeInput) fontSizeInput.value = styles.fontSize;
  if (fontSizeDisplayVal) fontSizeDisplayVal.textContent = `${styles.fontSize}px`;
  if (fontFamilySelect) fontFamilySelect.value = styles.fontFamily;
  if (boldCheck) boldCheck.checked = styles.isBold;
  if (textShadowCheck) textShadowCheck.checked = styles.hasShadow;
  if (uppercaseCheck) uppercaseCheck.checked = styles.isUppercase;
  if (lineHeightInput) lineHeightInput.value = styles.lineHeight;
  if (letterSpacingInput) letterSpacingInput.value = styles.letterSpacing;
  if (verseColorInput) verseColorInput.value = styles.verseColor;
  if (titleColorInput) titleColorInput.value = styles.titleColor;
  if (bgThemeSelect) bgThemeSelect.value = theme;

  // Mode buttons
  if (modeFullSlideBtn && modeLowerThirdBtn) {
    modeFullSlideBtn.classList.toggle("active", displayMode === "full");
    modeLowerThirdBtn.classList.toggle("active", displayMode === "lower-third");
  }

  // Alignment buttons
  alignButtons.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.align === styles.textAlign);
  });
}

function loadSavedState() {
  try {
    const saved = localStorage.getItem("alkitab_presenter_saved_config");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.styles) appState.styles = { ...appState.styles, ...parsed.styles };
      if (parsed.theme) appState.theme = parsed.theme;
      if (parsed.displayMode) appState.displayMode = parsed.displayMode;
    }
  } catch (e) {}
  syncControlsWithState();
}

function saveStateToStorage() {
  try {
    localStorage.setItem("alkitab_presenter_saved_config", JSON.stringify({
      styles: appState.styles,
      theme: appState.theme,
      displayMode: appState.displayMode
    }));
  } catch (e) {}
}

// ==========================================================================
// Event Listeners Setup
// ==========================================================================
function setupEventListeners() {
  // Scripture Selection Dropdowns
  bookSelect.addEventListener("change", (e) => {
    const bookName = e.target.value;
    if (bookName) {
      appState.book = bookName;
      updateChapterOptions(bookName, 1);
      updateVerseOptions(bookName, 1, 1, 1);
      handleSearch();
    }
  });

  chapterSelect.addEventListener("change", (e) => {
    const chap = parseInt(e.target.value) || 1;
    appState.chapter = chap;
    updateVerseOptions(bookSelect.value, chap, 1, 1);
    handleSearch();
  });

  verseStartSelect.addEventListener("change", (e) => {
    const start = parseInt(e.target.value) || 1;
    const verseCount = getVerseCountFor(bookSelect.value, parseInt(chapterSelect.value) || 1);
    let end = parseInt(verseEndSelect.value) || start;
    if (end < start) end = start;

    updateVerseEndOptions(verseCount, start, end);
    handleSearch();
  });

  verseEndSelect.addEventListener("change", () => {
    handleSearch();
  });

  // Chapter & Verse Steppers
  chapDecBtn.addEventListener("click", () => stepChapter(-1));
  chapIncBtn.addEventListener("click", () => stepChapter(1));
  verseStartDecBtn.addEventListener("click", () => stepVerseStart(-1));
  verseStartIncBtn.addEventListener("click", () => stepVerseStart(1));
  verseEndDecBtn.addEventListener("click", () => stepVerseEnd(-1));
  verseEndIncBtn.addEventListener("click", () => stepVerseEnd(1));

  // Search & Modal Launchers
  searchBtn.addEventListener("click", () => handleSearch());
  quickPickerBtn.addEventListener("click", () => openGuidedModal(1));
  openChapterModalBtn.addEventListener("click", () => openGuidedModal(2));

  // Display Mode Pills
  modeFullSlideBtn.addEventListener("click", () => setDisplayMode("full"));
  modeLowerThirdBtn.addEventListener("click", () => setDisplayMode("lower-third"));

  // Popout Launchers
  openPopoutControllerBtn.addEventListener("click", openPopoutController);
  openPopoutOutputBtn.addEventListener("click", openPopoutOutput);

  // Presenter Navigation Buttons
  prevVerseBtn.addEventListener("click", () => navigateVerse(-1));
  nextVerseBtn.addEventListener("click", () => navigateVerse(1));
  sidePrevBtn.addEventListener("click", () => navigateVerse(-1));
  sideNextBtn.addEventListener("click", () => navigateVerse(1));

  // Blackout & Clear Screen Toggles
  blackoutBtn.addEventListener("click", toggleBlackout);
  clearTextBtn.addEventListener("click", toggleClear);

  // Theme Preset
  bgThemeSelect.addEventListener("change", (e) => {
    appState.theme = e.target.value;
    applyStylesToDOM();
    saveStateToStorage();
    broadcastStateUpdate();
    showToast(`Tema diubah ke ${e.target.options[e.target.selectedIndex].text}`);
  });

  // Copy & Reset
  copyBtn.addEventListener("click", copyVerseToClipboard);
  resetStylesBtn.addEventListener("click", resetStylesToDefault);

  // Typography Format Controls
  fontSizeSlider.addEventListener("input", (e) => {
    const val = parseInt(e.target.value);
    fontSizeInput.value = val;
    fontSizeDisplayVal.textContent = `${val}px`;
    appState.styles.fontSize = val;
    applyStylesToDOM();
    saveStateToStorage();
    broadcastStateUpdate();
  });

  fontSizeInput.addEventListener("input", (e) => {
    const val = parseInt(e.target.value) || 28;
    fontSizeSlider.value = val;
    fontSizeDisplayVal.textContent = `${val}px`;
    appState.styles.fontSize = val;
    applyStylesToDOM();
    saveStateToStorage();
    broadcastStateUpdate();
  });

  fontFamilySelect.addEventListener("change", (e) => {
    appState.styles.fontFamily = e.target.value;
    applyStylesToDOM();
    saveStateToStorage();
    broadcastStateUpdate();
  });

  alignButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      alignButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      appState.styles.textAlign = btn.dataset.align;
      applyStylesToDOM();
      saveStateToStorage();
      broadcastStateUpdate();
    });
  });

  boldCheck.addEventListener("change", (e) => {
    appState.styles.isBold = e.target.checked;
    applyStylesToDOM();
    saveStateToStorage();
    broadcastStateUpdate();
  });

  textShadowCheck.addEventListener("change", (e) => {
    appState.styles.hasShadow = e.target.checked;
    applyStylesToDOM();
    saveStateToStorage();
    broadcastStateUpdate();
  });

  uppercaseCheck.addEventListener("change", (e) => {
    appState.styles.isUppercase = e.target.checked;
    applyStylesToDOM();
    saveStateToStorage();
    broadcastStateUpdate();
  });

  lineHeightInput.addEventListener("input", (e) => {
    appState.styles.lineHeight = parseFloat(e.target.value) || 1.5;
    applyStylesToDOM();
    saveStateToStorage();
    broadcastStateUpdate();
  });

  letterSpacingInput.addEventListener("input", (e) => {
    appState.styles.letterSpacing = parseFloat(e.target.value) || 0;
    applyStylesToDOM();
    saveStateToStorage();
    broadcastStateUpdate();
  });

  verseColorInput.addEventListener("input", (e) => {
    appState.styles.verseColor = e.target.value;
    applyStylesToDOM();
    saveStateToStorage();
    broadcastStateUpdate();
  });

  titleColorInput.addEventListener("input", (e) => {
    appState.styles.titleColor = e.target.value;
    applyStylesToDOM();
    saveStateToStorage();
    broadcastStateUpdate();
  });

  // Floating HUD Actions
  hudPrevBtn.addEventListener("click", () => navigateVerse(-1));
  hudNextBtn.addEventListener("click", () => navigateVerse(1));
  hudQuickPickBtn.addEventListener("click", () => openGuidedModal(1));
  hudBlackoutBtn.addEventListener("click", toggleBlackout);
  hudClearBtn.addEventListener("click", toggleClear);
  hudModeBtn.addEventListener("click", () => {
    setDisplayMode(appState.displayMode === "full" ? "lower-third" : "full");
  });
  hudPopoutBtn.addEventListener("click", openPopoutController);
  hudExpandBtn.addEventListener("click", toggleControlsPanel);

  // Panel Toggle & Fullscreen
  togglePanelBtn.addEventListener("click", toggleControlsPanel);
  showControlsFab.addEventListener("click", toggleControlsPanel);
  fullscreenBtn.addEventListener("click", toggleFullscreen);

  // Modal Navigation & Shortcuts
  closeModalBtn.addEventListener("click", closeGuidedModal);
  guidedModal.addEventListener("click", (e) => {
    if (e.target === guidedModal) closeGuidedModal();
  });

  stepTabBook.addEventListener("click", () => openGuidedModal(1));
  stepTabChapter.addEventListener("click", () => openGuidedModal(2));
  stepTabVerseStart.addEventListener("click", () => openGuidedModal(3));
  stepTabVerseEnd.addEventListener("click", () => openGuidedModal(4));

  filterAllBooks.addEventListener("click", () => setTestamentFilter("all"));
  filterOTBooks.addEventListener("click", () => setTestamentFilter("OT"));
  filterNTBooks.addEventListener("click", () => setTestamentFilter("NT"));

  modalBackBtn.addEventListener("click", handleModalBack);
  singleVerseBtn.addEventListener("click", handleSingleVerseSelect);

  // Global Keyboard Shortcuts
  document.addEventListener("keydown", handleGlobalShortcuts);
}

// Global Keyboard Shortcuts: Arrows, Space, B, C, L, F, Esc
function handleGlobalShortcuts(e) {
  if (e.key === "Escape") {
    closeGuidedModal();
    return;
  }

  // Do not intercept typing inside form inputs
  if (e.target.tagName === "INPUT" || e.target.tagName === "SELECT" || e.target.tagName === "TEXTAREA") {
    if (e.key === "Enter") {
      handleSearch();
    }
    return;
  }

  const key = e.key.toLowerCase();

  if (e.key === "ArrowLeft" || e.key === "PageUp") {
    e.preventDefault();
    navigateVerse(-1);
  } else if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
    e.preventDefault();
    navigateVerse(1);
  } else if (key === "b") {
    e.preventDefault();
    toggleBlackout();
  } else if (key === "c") {
    e.preventDefault();
    toggleClear();
  } else if (key === "l") {
    e.preventDefault();
    setDisplayMode(appState.displayMode === "full" ? "lower-third" : "full");
  } else if (key === "f") {
    e.preventDefault();
    toggleFullscreen();
  } else if (key === "h") {
    e.preventDefault();
    toggleControlsPanel();
  } else if (key === "o") {
    e.preventDefault();
    openPopoutController();
  }
}

// ==========================================================================
// Stepper Logic for Chapter & Verses
// ==========================================================================
function stepChapter(delta) {
  const current = parseInt(chapterSelect.value) || 1;
  const bookObj = BIBLE_BOOKS.find(b => b.name === bookSelect.value) || BIBLE_BOOKS[0];
  const next = Math.max(1, Math.min(bookObj.chapter, current + delta));
  if (next !== current) {
    chapterSelect.value = next;
    appState.chapter = next;
    updateVerseOptions(bookSelect.value, next, 1, 1);
    handleSearch();
  }
}

function stepVerseStart(delta) {
  const current = parseInt(verseStartSelect.value) || 1;
  const maxVerse = getVerseCountFor(bookSelect.value, parseInt(chapterSelect.value) || 1);
  const next = Math.max(1, Math.min(maxVerse, current + delta));
  if (next !== current) {
    verseStartSelect.value = next;
    let end = parseInt(verseEndSelect.value) || next;
    if (end < next) end = next;
    updateVerseEndOptions(maxVerse, next, end);
    handleSearch();
  }
}

function stepVerseEnd(delta) {
  const start = parseInt(verseStartSelect.value) || 1;
  const current = parseInt(verseEndSelect.value) || start;
  const maxVerse = getVerseCountFor(bookSelect.value, parseInt(chapterSelect.value) || 1);
  const next = Math.max(start, Math.min(maxVerse, current + delta));
  if (next !== current) {
    verseEndSelect.value = next;
    handleSearch();
  }
}

// ==========================================================================
// Display Mode & Window Popout Management
// ==========================================================================
function setDisplayMode(mode) {
  appState.displayMode = mode;
  applyStylesToDOM();
  syncControlsWithState();
  saveStateToStorage();
  broadcastStateUpdate();
  showToast(`Mode tampilan: ${mode === 'lower-third' ? '📺 Lower Third (OBS)' : '🖥️ Full Slide'}`);
}

function toggleBlackout() {
  appState.isBlackout = !appState.isBlackout;
  applyStylesToDOM();
  broadcastStateUpdate();
  showToast(appState.isBlackout ? "⚫ Blackout Aktif (Layar Hitam)" : "🟢 Blackout Nonaktif");
}

function toggleClear() {
  appState.isClear = !appState.isClear;
  applyStylesToDOM();
  renderCurrentPassage();
  broadcastStateUpdate();
  showToast(appState.isClear ? "⚪ Teks Dibersihkan" : "🟢 Teks Ditampilkan");
}

function openPopoutController() {
  const win = window.open(
    `${window.location.origin}${window.location.pathname}?mode=controller`,
    "AlkitabPresenterController",
    "width=520,height=760,menubar=no,toolbar=no,location=no,status=no,resizable=yes"
  );
  if (win) {
    win.focus();
    showToast("🎛️ Jendela Pop-up Controller Terbuka!");
  } else {
    showToast("Gagal membuka pop-up. Pastikan browser mengizinkan pop-up!", true);
  }
}

function openPopoutOutput() {
  const win = window.open(
    `${window.location.origin}${window.location.pathname}?mode=output`,
    "AlkitabPresenterOutput",
    "width=1280,height=720,menubar=no,toolbar=no,location=no,status=no,resizable=yes"
  );
  if (win) {
    win.focus();
    showToast("📽️ Layar Output Bersih Terbuka!");
  } else {
    showToast("Gagal membuka layar output. Periksa pop-up blocker!", true);
  }
}

function toggleControlsPanel() {
  const isHidden = controlsPanel.classList.toggle("hidden-panel");
  if (isHidden) {
    showControlsFab.classList.remove("hidden");
    if (togglePanelIcon) togglePanelIcon.textContent = "👁️‍🗨️";
    showToast("Panel kontrol disembunyikan. Tekan 'H' atau tombol floating untuk membuka.");
  } else {
    showControlsFab.classList.add("hidden");
    if (togglePanelIcon) togglePanelIcon.textContent = "👁️";
  }
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      showToast(`Gagal Fullscreen: ${err.message}`, true);
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

function resetStylesToDefault() {
  appState.styles = {
    fontSize: 28,
    fontFamily: "'Inter', sans-serif",
    textAlign: "left",
    isBold: false,
    hasShadow: true,
    isUppercase: false,
    lineHeight: 1.5,
    letterSpacing: 0,
    verseColor: "#ffffff",
    titleColor: "#ffd700"
  };
  appState.theme = "black";
  applyStylesToDOM();
  syncControlsWithState();
  saveStateToStorage();
  broadcastStateUpdate();
  showToast("Pengaturan gaya tampilan telah direset ke default.");
}

// ==========================================================================
// Draggable Floating Mini HUD Dock
// ==========================================================================
function setupDraggableHud() {
  if (!hudDragHandle || !floatingHudDock) return;

  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  const onStart = (e) => {
    isDragging = true;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    const rect = floatingHudDock.getBoundingClientRect();
    offsetX = clientX - rect.left;
    offsetY = clientY - rect.top;
  };

  const onMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);

    let left = clientX - offsetX;
    let top = clientY - offsetY;

    // Viewport bounds
    const maxLeft = window.innerWidth - floatingHudDock.offsetWidth - 10;
    const maxTop = window.innerHeight - floatingHudDock.offsetHeight - 10;

    left = Math.max(10, Math.min(maxLeft, left));
    top = Math.max(10, Math.min(maxTop, top));

    floatingHudDock.style.left = `${left}px`;
    floatingHudDock.style.top = `${top}px`;
    floatingHudDock.style.right = "auto";
    floatingHudDock.style.bottom = "auto";
  };

  const onEnd = () => {
    isDragging = false;
  };

  hudDragHandle.addEventListener("mousedown", onStart);
  hudDragHandle.addEventListener("touchstart", onStart, { passive: true });

  window.addEventListener("mousemove", onMove);
  window.addEventListener("touchmove", onMove, { passive: true });

  window.addEventListener("mouseup", onEnd);
  window.addEventListener("touchend", onEnd);
}

// ==========================================================================
// Guided 4-Step Modal Wizard (Kitab -> Pasal -> Ayat Mulai -> Ayat Selesai)
// ==========================================================================
function openGuidedModal(step = 1) {
  modalWizardState.bookName = bookSelect.value || "Kejadian";
  modalWizardState.chapter = parseInt(chapterSelect.value) || 1;
  modalWizardState.verseStart = parseInt(verseStartSelect.value) || 1;
  modalWizardState.verseEnd = parseInt(verseEndSelect.value) || 1;
  modalWizardState.step = step;

  renderModalStep(step);
  guidedModal.classList.remove("hidden");
}

function closeGuidedModal() {
  guidedModal.classList.add("hidden");
}

function setTestamentFilter(filter) {
  modalWizardState.testamentFilter = filter;
  filterAllBooks.classList.toggle("active", filter === "all");
  filterOTBooks.classList.toggle("active", filter === "OT");
  filterNTBooks.classList.toggle("active", filter === "NT");
  renderModalStep(1);
}

function renderModalStep(step) {
  modalWizardState.step = step;
  const { bookName, chapter, verseStart, testamentFilter } = modalWizardState;
  const bookObj = BIBLE_BOOKS.find(b => b.name === bookName) || BIBLE_BOOKS[0];

  // Update Progress Tabs
  stepTabBook.className = `step-tab ${step === 1 ? 'active' : ''}`;
  stepTabChapter.className = `step-tab ${step === 2 ? 'active' : ''}`;
  stepTabVerseStart.className = `step-tab ${step === 3 ? 'active' : ''}`;
  stepTabVerseEnd.className = `step-tab ${step === 4 ? 'active' : ''}`;

  modalNumbersGrid.innerHTML = "";
  singleVerseShortcutContainer.classList.add("hidden");

  if (step === 1) {
    // Step 1: Pilih Kitab
    modalStepBadge.textContent = "Langkah 1";
    modalStepTitle.textContent = "Pilih Kitab";
    modalCurrentSelection.textContent = "66 Kitab";
    modalInstructionText.textContent = "Pilih salah satu kitab Alkitab:";
    modalBackBtn.classList.add("hidden");
    testamentFilterBar.classList.remove("hidden");

    let booksToShow = BIBLE_BOOKS;
    if (testamentFilter === "OT") booksToShow = BIBLE_BOOKS.filter(b => b.testament === "OT");
    if (testamentFilter === "NT") booksToShow = BIBLE_BOOKS.filter(b => b.testament === "NT");

    booksToShow.forEach(b => {
      const btn = document.createElement("button");
      btn.className = `book-card-btn ${b.name === bookName ? 'active' : ''}`;
      btn.textContent = `${b.id}. ${b.name}`;
      btn.addEventListener("click", () => {
        modalWizardState.bookName = b.name;
        modalWizardState.chapter = 1;
        modalWizardState.verseStart = 1;
        modalWizardState.verseEnd = 1;
        renderModalStep(2);
      });
      modalNumbersGrid.appendChild(btn);
    });
  } else if (step === 2) {
    // Step 2: Pilih Pasal
    testamentFilterBar.classList.add("hidden");
    modalStepBadge.textContent = "Langkah 2";
    modalStepTitle.textContent = "Pilih Pasal";
    modalCurrentSelection.textContent = `${bookObj.name}`;
    modalInstructionText.textContent = `Pilih nomor pasal untuk ${bookObj.name} (1 - ${bookObj.chapter}):`;
    modalBackBtn.classList.remove("hidden");

    for (let c = 1; c <= bookObj.chapter; c++) {
      const btn = document.createElement("button");
      btn.className = `number-btn ${c === chapter ? 'active' : ''}`;
      btn.textContent = c;
      btn.addEventListener("click", () => {
        modalWizardState.chapter = c;
        modalWizardState.verseStart = 1;
        modalWizardState.verseEnd = 1;
        renderModalStep(3);
      });
      modalNumbersGrid.appendChild(btn);
    }
  } else if (step === 3) {
    // Step 3: Pilih Ayat Mulai
    testamentFilterBar.classList.add("hidden");
    const totalVerses = getVerseCountFor(bookName, chapter);
    modalStepBadge.textContent = "Langkah 3";
    modalStepTitle.textContent = "Pilih Ayat Mulai";
    modalCurrentSelection.textContent = `${bookObj.name} ${chapter}`;
    modalInstructionText.textContent = `Pilih nomor ayat mulai (1 - ${totalVerses}):`;
    modalBackBtn.classList.remove("hidden");

    for (let v = 1; v <= totalVerses; v++) {
      const btn = document.createElement("button");
      btn.className = `number-btn ${v === verseStart ? 'active' : ''}`;
      btn.textContent = v;
      btn.addEventListener("click", () => {
        modalWizardState.verseStart = v;
        modalWizardState.verseEnd = v;
        renderModalStep(4);
      });
      modalNumbersGrid.appendChild(btn);
    }
  } else if (step === 4) {
    // Step 4: Pilih Ayat Selesai
    testamentFilterBar.classList.add("hidden");
    const totalVerses = getVerseCountFor(bookName, chapter);
    modalStepBadge.textContent = "Langkah 4";
    modalStepTitle.textContent = "Pilih Ayat Selesai";
    modalCurrentSelection.textContent = `${bookObj.name} ${chapter}:${verseStart}`;
    modalInstructionText.textContent = `Pilih ayat akhir atau tampilkan 1 ayat saja:`;
    modalBackBtn.classList.remove("hidden");

    singleVerseShortcutContainer.classList.remove("hidden");
    singleVerseBtn.textContent = `✓ Tampilkan Hanya Ayat ${verseStart} (1 Ayat Saja)`;

    for (let v = verseStart; v <= totalVerses; v++) {
      const btn = document.createElement("button");
      btn.className = `number-btn ${v === verseStart ? 'active' : ''}`;
      btn.textContent = v;
      btn.addEventListener("click", () => {
        modalWizardState.verseEnd = v;
        applyModalSelection();
      });
      modalNumbersGrid.appendChild(btn);
    }
  }
}

function handleModalBack() {
  if (modalWizardState.step === 4) {
    renderModalStep(3);
  } else if (modalWizardState.step === 3) {
    renderModalStep(2);
  } else if (modalWizardState.step === 2) {
    renderModalStep(1);
  }
}

function handleSingleVerseSelect() {
  modalWizardState.verseEnd = modalWizardState.verseStart;
  applyModalSelection();
}

function applyModalSelection() {
  const { bookName, chapter, verseStart, verseEnd } = modalWizardState;

  bookSelect.value = bookName;
  updateChapterOptions(bookName, chapter);
  updateVerseOptions(bookName, chapter, verseStart, verseEnd);

  chapterSelect.value = chapter;
  verseStartSelect.value = verseStart;
  verseEndSelect.value = verseEnd;

  closeGuidedModal();
  handleSearch();
}

// ==========================================================================
// Search & Passage Fetching
// ==========================================================================
async function handleSearch(notify = true) {
  const bookName = bookSelect.value || appState.book || "Kejadian";
  const chapter = parseInt(chapterSelect.value) || 1;
  const vStart = parseInt(verseStartSelect.value) || 1;
  const vEnd = parseInt(verseEndSelect.value) || vStart;

  if (!bookName) {
    showToast("Silakan pilih Kitab terlebih dahulu!", true);
    return;
  }

  if (notify) {
    showToast(`Memuat ${bookName} ${chapter}:${vStart}${vStart !== vEnd ? '-' + vEnd : ''}...`);
  }

  searchBtn.disabled = true;
  searchBtn.innerHTML = '<span class="btn-icon">⏳</span><span>Loading...</span>';

  try {
    const verses = await fetchPassageWithFallbacks(bookName, chapter);
    appState.book = bookName;
    appState.chapter = chapter;
    appState.verseStart = vStart;
    appState.verseEnd = Math.max(vStart, vEnd);
    appState.verses = verses;
    appState.title = `${bookName} ${chapter}`;

    renderCurrentPassage();
    broadcastStateUpdate();
  } catch (err) {
    console.error("Error fetching Bible passage:", err);
    showToast("Gagal mengambil data ayat.", true);
    renderErrorState(bookName, chapter);
  } finally {
    searchBtn.disabled = false;
    searchBtn.innerHTML = '<span class="btn-icon">🔍</span><span>Tampilkan</span>';
  }
}

async function fetchPassageWithFallbacks(bookName, chapter) {
  const cacheKey = `${bookName}_${chapter}`;
  
  // 1. Check Memory Cache
  if (passageCache.has(cacheKey)) {
    return passageCache.get(cacheKey);
  }

  // 2. Check Embedded or Fetched Local DB
  const localSource = window.LOCAL_ALKITAB_DB || localAlkitabDB;
  if (localSource && localSource[cacheKey] && localSource[cacheKey].length > 0) {
    passageCache.set(cacheKey, localSource[cacheKey]);
    return localSource[cacheKey];
  }

  // 3. Online API Fallback
  const bookObj = BIBLE_BOOKS.find(b => b.name === bookName) || { abbr: bookName.substring(0, 3) };
  try {
    const beebleUrl = `https://beeble.vercel.app/api/v1/passage/${encodeURIComponent(bookObj.abbr)}/${chapter}?ver=tb`;
    const res = await fetch(beebleUrl);
    if (res.ok) {
      const data = await res.json();
      if (data?.data?.verses) {
        const verses = [];
        let currentTitle = null;
        data.data.verses.forEach(item => {
          if (item.type === 'title') {
            currentTitle = item.content;
          } else if (item.type === 'content') {
            verses.push({
              number: String(item.verse),
              title: currentTitle,
              text: item.content
            });
            currentTitle = null;
          }
        });
        if (verses.length > 0) {
          passageCache.set(cacheKey, verses);
          localAlkitabDB[cacheKey] = verses;
          return verses;
        }
      }
    }
  } catch (e) {}

  throw new Error(`Tidak dapat mengambil data untuk ${bookName} ${chapter}`);
}

function renderErrorState(bookName, chapter) {
  displayArea.innerHTML = `
    <div class="placeholder-content">
      <div class="bible-icon">⚠️</div>
      <h2>Gagal Memuat Data Ayat</h2>
      <p>Tidak dapat mengambil firman Tuhan untuk <strong>${bookName} ${chapter}</strong> saat ini.</p>
      <div class="quick-instructions">
        <span>Silakan periksa koneksi internet atau klik <strong>Tampilkan</strong> untuk mencoba kembali.</span>
      </div>
    </div>
  `;
}

// Render Passage to Screen
function renderCurrentPassage() {
  const { book, chapter, verseStart, verseEnd, verses, isClear } = appState;
  
  if (!verses || verses.length === 0) {
    return;
  }

  // Filter verses in range
  const filteredVerses = verses.filter(v => {
    const num = parseInt(v.number);
    return num >= verseStart && num <= verseEnd;
  });

  if (filteredVerses.length === 0) {
    displayArea.innerHTML = `
      <div class="placeholder-content">
        <h2>Ayat di luar jangkauan</h2>
        <p>Pasal ini memiliki ${verses.length} ayat.</p>
      </div>
    `;
    return;
  }

  const rangeStr = verseStart === verseEnd ? `${verseStart}` : `${verseStart}-${verseEnd}`;
  const titleText = `${book} ${chapter}:${rangeStr}`;

  if (isClear) {
    displayArea.innerHTML = `<h2 class="passage-title-header">${titleText}</h2>`;
    return;
  }

  let htmlContent = `
    <h2 class="passage-title-header">${titleText}</h2>
    <div class="passage-content">
  `;

  filteredVerses.forEach(v => {
    if (v.title && appState.displayMode !== "lower-third") {
      htmlContent += `<div class="verse-heading">${v.title}</div>`;
    }
    htmlContent += `
      <div class="verse-item" data-verse="${v.number}">
        <span class="verse-number">${v.number}</span>
        <span class="verse-text">${v.text}</span>
      </div>
    `;
  });

  htmlContent += `</div>`;
  displayArea.innerHTML = htmlContent;
}

// ==========================================================================
// Presenter Live Stepping (Prev / Next)
// ==========================================================================
function navigateVerse(step) {
  if (!appState.book || !appState.verses || appState.verses.length === 0) {
    showToast("Silakan lakukan Tampilkan terlebih dahulu!", true);
    return;
  }

  const rangeSpan = appState.verseEnd - appState.verseStart;
  let newStart = appState.verseStart + (step * (rangeSpan + 1));
  let newEnd = newStart + rangeSpan;

  if (newStart < 1) {
    if (appState.chapter > 1) {
      const prevChap = appState.chapter - 1;
      chapterSelect.value = prevChap;
      updateVerseOptions(appState.book, prevChap, 1, 1 + rangeSpan);
      handleSearch();
      return;
    } else {
      showToast("Sudah di awal kitab!", true);
      return;
    }
  }

  const maxVerseCount = appState.verses.length;
  if (maxVerseCount > 0 && newStart > maxVerseCount) {
    const bookObj = BIBLE_BOOKS.find(b => b.name === appState.book);
    if (bookObj && appState.chapter < bookObj.chapter) {
      const nextChap = appState.chapter + 1;
      chapterSelect.value = nextChap;
      updateVerseOptions(appState.book, nextChap, 1, 1 + rangeSpan);
      handleSearch();
      return;
    } else {
      showToast("Sudah di akhir pasal kitab!", true);
      return;
    }
  }

  verseStartSelect.value = newStart;
  verseEndSelect.value = Math.min(newEnd, maxVerseCount || newEnd);
  appState.verseStart = newStart;
  appState.verseEnd = parseInt(verseEndSelect.value);

  renderCurrentPassage();
  broadcastStateUpdate();
}

// Copy Verse Text to Clipboard
function copyVerseToClipboard() {
  if (!appState.verses.length) {
    showToast("Tidak ada teks ayat untuk disalin!", true);
    return;
  }

  const displayEl = document.getElementById("displayArea");
  const plainText = displayEl.innerText;

  navigator.clipboard.writeText(plainText).then(() => {
    showToast("Teks ayat berhasil disalin ke clipboard! 📋");
  }).catch(err => {
    showToast("Gagal menyalin teks: " + err, true);
  });
}

// Toast Helper
function showToast(message, isError = false) {
  if (!statusMessage) return;
  statusMessage.textContent = message;
  statusMessage.className = `status-toast ${isError ? 'error-toast' : ''}`;
  statusMessage.classList.remove("hidden");

  clearTimeout(statusMessage.timer);
  statusMessage.timer = setTimeout(() => {
    statusMessage.classList.add("hidden");
  }, 2400);
}

// Run App on Load
document.addEventListener("DOMContentLoaded", initApp);
