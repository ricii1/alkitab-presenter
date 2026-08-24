import fs from 'fs';
import path from 'path';

const BIBLE_BOOKS = [
  { name: "Kejadian", abbr: "Kej", chapter: 50 },
  { name: "Keluaran", abbr: "Kel", chapter: 40 },
  { name: "Imamat", abbr: "Ima", chapter: 27 },
  { name: "Bilangan", abbr: "Bil", chapter: 36 },
  { name: "Ulangan", abbr: "Ula", chapter: 34 },
  { name: "Yosua", abbr: "Yos", chapter: 24 },
  { name: "Hakim-hakim", abbr: "Hak", chapter: 21 },
  { name: "Rut", abbr: "Rut", chapter: 4 },
  { name: "1 Samuel", abbr: "1Sam", chapter: 31 },
  { name: "2 Samuel", abbr: "2Sam", chapter: 24 },
  { name: "1 Raja-raja", abbr: "1Raj", chapter: 22 },
  { name: "2 Raja-raja", abbr: "2Raj", chapter: 25 },
  { name: "1 Tawarikh", abbr: "1Taw", chapter: 29 },
  { name: "2 Tawarikh", abbr: "2Taw", chapter: 36 },
  { name: "Ezra", abbr: "Ezr", chapter: 10 },
  { name: "Nehemia", abbr: "Neh", chapter: 13 },
  { name: "Ester", abbr: "Est", chapter: 10 },
  { name: "Ayub", abbr: "Ayb", chapter: 42 },
  { name: "Mazmur", abbr: "Maz", chapter: 150 },
  { name: "Amsal", abbr: "Ams", chapter: 31 },
  { name: "Pengkhotbah", abbr: "Pkh", chapter: 12 },
  { name: "Kidung Agung", abbr: "Kid", chapter: 8 },
  { name: "Yesaya", abbr: "Yes", chapter: 66 },
  { name: "Yeremia", abbr: "Yer", chapter: 52 },
  { name: "Ratapan", abbr: "Rat", chapter: 5 },
  { name: "Yehezkiel", abbr: "Yeh", chapter: 48 },
  { name: "Daniel", abbr: "Dan", chapter: 12 },
  { name: "Hosea", abbr: "Hos", chapter: 14 },
  { name: "Yoel", abbr: "Yoe", chapter: 3 },
  { name: "Amos", abbr: "Amo", chapter: 9 },
  { name: "Obaja", abbr: "Oba", chapter: 1 },
  { name: "Yunus", abbr: "Yun", chapter: 4 },
  { name: "Mikha", abbr: "Mik", chapter: 7 },
  { name: "Nahum", abbr: "Nah", chapter: 3 },
  { name: "Habakuk", abbr: "Hab", chapter: 3 },
  { name: "Zefanya", abbr: "Zef", chapter: 3 },
  { name: "Hagai", abbr: "Hag", chapter: 2 },
  { name: "Zakharia", abbr: "Zak", chapter: 14 },
  { name: "Maleakhi", abbr: "Mal", chapter: 4 },
  { name: "Matius", abbr: "Mat", chapter: 28 },
  { name: "Markus", abbr: "Mar", chapter: 16 },
  { name: "Lukas", abbr: "Luk", chapter: 24 },
  { name: "Yohanes", abbr: "Yoh", chapter: 21 },
  { name: "Kisah Para Rasul", abbr: "Kis", chapter: 28 },
  { name: "Roma", abbr: "Rom", chapter: 16 },
  { name: "1 Korintus", abbr: "1Kor", chapter: 16 },
  { name: "2 Korintus", abbr: "2Kor", chapter: 13 },
  { name: "Galatia", abbr: "Gal", chapter: 6 },
  { name: "Efesus", abbr: "Efe", chapter: 6 },
  { name: "Filipi", abbr: "Flp", chapter: 4 },
  { name: "Kolose", abbr: "Kol", chapter: 4 },
  { name: "1 Tesalonika", abbr: "1Tes", chapter: 5 },
  { name: "2 Tesalonika", abbr: "2Tes", chapter: 3 },
  { name: "1 Timotius", abbr: "1Tim", chapter: 6 },
  { name: "2 Timotius", abbr: "2Tim", chapter: 4 },
  { name: "Titus", abbr: "Tit", chapter: 3 },
  { name: "Filemon", abbr: "Flm", chapter: 1 },
  { name: "Ibrani", abbr: "Ibr", chapter: 13 },
  { name: "Yakobus", abbr: "Yak", chapter: 5 },
  { name: "1 Petrus", abbr: "1Pet", chapter: 5 },
  { name: "2 Petrus", abbr: "2Pet", chapter: 3 },
  { name: "1 Yohanes", abbr: "1Yoh", chapter: 5 },
  { name: "2 Yohanes", abbr: "2Yoh", chapter: 1 },
  { name: "3 Yohanes", abbr: "3Yoh", chapter: 1 },
  { name: "Yudas", abbr: "Yud", chapter: 1 },
  { name: "Wahyu", abbr: "Wah", chapter: 22 }
];

const OUTPUT_DIR = './public';
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'alkitab_db.json');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

let db = {};
if (fs.existsSync(OUTPUT_FILE)) {
  try {
    db = JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf8'));
    console.log(`Loaded existing DB with ${Object.keys(db).length} chapters.`);
  } catch (e) {
    db = {};
  }
}

async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return await res.json();
    } catch (e) {
      if (i === retries - 1) throw e;
      await new Promise(r => setTimeout(r, 500));
    }
  }
}

async function fetchChapter(book, chap) {
  const key = `${book.name}_${chap}`;
  if (db[key] && db[key].length > 0) {
    return true; // Already downloaded
  }

  // Primary: Beeble API
  try {
    const data = await fetchWithRetry(`https://beeble.vercel.app/api/v1/passage/${book.abbr}/${chap}?ver=tb`);
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
        db[key] = verses;
        return true;
      }
    }
  } catch (e) {}

  // Fallback: api-alkitab
  try {
    const data = await fetchWithRetry(`https://api-alkitab.vercel.app/api/passage?passage=${encodeURIComponent(book.name)}&num=${chap}`);
    if (data?.bible?.book?.chapter?.verses) {
      db[key] = data.bible.book.chapter.verses;
      return true;
    }
  } catch (e) {}

  return false;
}

async function main() {
  console.log("Starting Alkitab Downloader...");
  let totalDownloaded = 0;
  let totalTasks = 0;

  for (const book of BIBLE_BOOKS) {
    totalTasks += book.chapter;
  }

  console.log(`Total chapters to fetch: ${totalTasks}`);

  for (const book of BIBLE_BOOKS) {
    console.log(`Downloading ${book.name} (${book.chapter} chapters)...`);
    for (let c = 1; c <= book.chapter; c++) {
      const success = await fetchChapter(book, c);
      if (success) {
        totalDownloaded++;
      } else {
        console.error(`Failed to download ${book.name} ${c}`);
      }

      // Periodically save to disk every 20 chapters
      if (totalDownloaded % 20 === 0) {
        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(db));
      }
    }
    // Save after each book
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(db));
    console.log(`Saved ${book.name}. Total progress: ${Object.keys(db).length}/${totalTasks}`);
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(db));
  console.log(`🎉 Downloading complete! Total chapters saved: ${Object.keys(db).length}`);
}

main();
