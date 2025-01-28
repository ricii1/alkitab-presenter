import { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import path from "path";

const dbPath = path.join(process.cwd(), 'public', 'indo_tb.sqlite');
console.log(dbPath);
const db = new sqlite3.Database(dbPath);

interface ResponseData {
    book: number,
    chapter: number,
    id: number,
    text: string,
    verse: number
};

const booksToNumbers = {
    "Kejadian": 1,
    "Keluaran": 2,
    "Imamat": 3,
    "Bilangan": 4,
    "Ulangan": 5,
    "Yosua": 6,
    "Hakim-Hakim": 7,
    "Rut": 8,
    "1 Samuel": 9,
    "2 Samuel": 10,
    "1 Raja-Raja": 11,
    "2 Raja-Raja": 12,
    "1 Tawarikh": 13,
    "2 Tawarikh": 14,
    "Ezra": 15,
    "Nehemia": 16,
    "Ester": 17,
    "Ayub": 18,
    "Mazmur": 19,
    "Amsal": 20,
    "Pengkhotbah": 21,
    "Kidung Agung": 22,
    "Yesaya": 23,
    "Yeremia": 24,
    "Ratapan": 25,
    "Yehezkiel": 26,
    "Daniel": 27,
    "Hosea": 28,
    "Yoel": 29,
    "Amos": 30,
    "Obaja": 31,
    "Yunus": 32,
    "Mikha": 33,
    "Nahum": 34,
    "Habakuk": 35,
    "Zefanya": 36,
    "Hagai": 37,
    "Zakharia": 38,
    "Maleakhi": 39,
    "Matius": 40,
    "Markus": 41,
    "Lukas": 42,
    "Yohanes": 43,
    "Kisah Para Rasul": 44,
    "Roma": 45,
    "1 Korintus": 46,
    "2 Korintus": 47,
    "Galatia": 48,
    "Efesus": 49,
    "Filipi": 50,
    "Kolose": 51,
    "1 Tesalonika": 52,
    "2 Tesalonika": 53,
    "1 Timotius": 54,
    "2 Timotius": 55,
    "Titus": 56,
    "Filemon": 57,
    "Ibrani": 58,
    "Yakobus": 59,
    "1 Petrus": 60,
    "2 Petrus": 61,
    "1 Yohanes": 62,
    "2 Yohanes": 63,
    "3 Yohanes": 64,
    "Yudas": 65,
    "Wahyu": 66
};
  
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    } else {
        const { book, chapter, verseStart, verseEnd } = req.query;
        if (!book || !chapter || !verseStart || !verseEnd) {
            res.status(400).json({ error: 'Invalid request' });
            return;
        }
        if (verseEnd && verseEnd < verseStart) {
            res.status(400).json({ error: 'Invalid request' });
            return;
        }
        const numberOfBook: number = booksToNumbers[book as keyof typeof booksToNumbers];
        if(!numberOfBook) {
            res.status(400).json({ error: 'Invalid request' });
            return;
        }
        const query = 'SELECT * FROM verses WHERE book = ? AND chapter = ? AND verse >= ? AND verse <= ?';
        db.all(query, [numberOfBook, chapter, verseStart, verseEnd], (err, rows: ResponseData[]) => {
            if (err) {
                console.error('Database query error:', err);
                res.status(500).json({ error: 'Database query failed' });
            } else {
                const responseText = rows.map(row => row.text).join('\n');
                console.log(responseText);
                res.status(200).json(responseText);
            }
        });
    }
  
  }