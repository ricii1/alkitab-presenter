import { useState } from "react";

export default function Home() {
  const [book, setBook] = useState("");
  const [chapter, setChapter] = useState(1);
  const [verseStart, setVerseStart] = useState(1);
  const [verseEnd, setVerseEnd] = useState(1);
  const [data, setData] = useState("");
  const [error, setError] = useState(null);
  const [fontSize, setFontSize] = useState(16);
  const [textAlign, setTextAlign] = useState<"left" | "center" | "right">(
    "left"
  );
  const [isBold, setIsBold] = useState(false);
  const [spacing, setSpacing] = useState(0);
  const [lineHeight, setLineHeight] = useState(1.5);

  const books = [
    "Kejadian",
    "Keluaran",
    "Imamat",
    "Bilangan",
    "Ulangan",
    "Yosua",
    "Hakim-Hakim",
    "Rut",
    "1 Samuel",
    "2 Samuel",
    "1 Raja-Raja",
    "2 Raja-Raja",
    "1 Tawarikh",
    "2 Tawarikh",
    "Ezra",
    "Nehemia",
    "Ester",
    "Ayub",
    "Mazmur",
    "Amsal",
    "Pengkhotbah",
    "Kidung Agung",
    "Yesaya",
    "Yeremia",
    "Ratapan",
    "Yehezkiel",
    "Daniel",
    "Hosea",
    "Yoel",
    "Amos",
    "Obaja",
    "Yunus",
    "Mikha",
    "Nahum",
    "Habakuk",
    "Zefanya",
    "Hagai",
    "Zakharia",
    "Maleakhi",
    "Matius",
    "Markus",
    "Lukas",
    "Yohanes",
    "Kisah Para Rasul",
    "Roma",
    "1 Korintus",
    "2 Korintus",
    "Galatia",
    "Efesus",
    "Filipi",
    "Kolose",
    "1 Tesalonika",
    "2 Tesalonika",
    "1 Timotius",
    "2 Timotius",
    "Titus",
    "Filemon",
    "Ibrani",
    "Yakobus",
    "1 Petrus",
    "2 Petrus",
    "1 Yohanes",
    "2 Yohanes",
    "3 Yohanes",
    "Yudas",
    "Wahyu",
  ];

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      console.log("Submitting", book, chapter, verseStart);
      if (!book) throw new Error("Book must be selected");
      if (!verseEnd) setVerseEnd(verseStart);
      const query = new URLSearchParams({
        book,
        chapter: chapter.toString(),
        verseStart: verseStart.toString(),
        verseEnd: verseEnd.toString(),
      }).toString();
      const res = await fetch(`/api/db?${query}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        console.log(res);
        throw new Error("Failed to send request");
      }
      const data = await res.json();
      console.log(data);
      setError(null);
      setData(data);
    } catch (error: any) {
      setError(error.message);
    }
  };
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Alkitab Presenter</h1>
      <form onSubmit={handleSubmit} className="p-4">
        <div className="flex justify-between w-1/2 mx-auto space-x-2">
          <div className="border border-black p-2">
            <label htmlFor="book">Book: </label>
            <select
              className="border border-black px-2"
              id="book"
              value={book}
              onChange={(event) => setBook(event.target.value)}
            >
              <option value="">-- Pilih Kitab --</option>
              {books.map((book) => (
                <option key={book} value={book}>
                  {book}
                </option>
              ))}
            </select>
          </div>
          <div className="border border-black p-2">
            <label htmlFor="chapter">Chapter: </label>
            <input
              type="number"
              min={1}
              id="chapter"
              value={chapter}
              className="border border-black px-2"
              onChange={(event) => setChapter(parseInt(event.target.value))}
            />
          </div>
          <div className="border border-black p-2">
            <label htmlFor="verseStart">Verse Start: </label>
            <input
              type="number"
              id="verseStart"
              min={1}
              value={verseStart}
              className="border border-black px-2"
              onChange={(event) => setVerseStart(parseInt(event.target.value))}
            />
          </div>
          <div className="border border-black p-2">
            <label htmlFor="verseEnd">Verse End: </label>
            <input
              type="number"
              id="verseEnd"
              min={1}
              value={verseEnd}
              className="border border-black px-2"
              onChange={(event) => setVerseEnd(parseInt(event.target.value))}
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 py-2 px-4 rounded-3xl my-2 font-bold w-1/4  hover:bg-green-700 hover:text-white"
          >
            Search
          </button>
        </div>
        <div className="flex justify-center mt-2 space-x-2">
          <div className="border border-black p-2">
            <label htmlFor="fontSize">Font Size: </label>
            <input
              type="number"
              min={1}
              id="fontSize"
              value={fontSize}
              className="border border-black px-2"
              onChange={(event) => setFontSize(parseInt(event.target.value))}
            />
          </div>
          <div className="border border-black p-2">
            <label htmlFor="textAlign">Text Align: </label>
            <select
              id="textAlign"
              value={textAlign}
              className="border border-black px-2"
              onChange={(event) =>
                setTextAlign(event.target.value as "left" | "center" | "right")
              }
            >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select>
          </div>
          <div className="border border-black p-2">
            <label htmlFor="bold">Bold: </label>
            <input
              type="checkbox"
              id="bold"
              checked={isBold}
              className="ml-2"
              onChange={() => setIsBold(!isBold)}
            />
          </div>
          <div className="border border-black p-2">
            <label htmlFor="spacing">Letter Spacing: </label>
            <input
              type="number"
              min={0}
              id="spacing"
              value={spacing}
              className="border border-black px-2"
              onChange={(event) => setSpacing(parseInt(event.target.value))}
            />
          </div>
          <div className="mt-4 p-4 border border-black">
            <label htmlFor="customText" className="block font-bold mb-2">
              Custom Text:
            </label>
            <textarea
              id="customText"
              className="w-full border p-2"
              rows={4}
              value={customText}
              onChange={(event) => setCustomText(event.target.value)}
              style={{
                fontSize: `${fontSize}px`,
                textAlign: textAlign,
                fontWeight: isBold ? "bold" : "normal",
                letterSpacing: `${spacing}px`,
                lineHeight: lineHeight,
                whiteSpace: "pre-wrap",
              }}
            />
          </div>
        </div>
      </form>
      <div
        className="mt-4 px-28"
        style={{
          fontSize: `${fontSize}px`,
          textAlign: textAlign,
          fontWeight: isBold ? "bold" : "normal",
          letterSpacing: `${spacing}px`,
          lineHeight: lineHeight,
          whiteSpace: "pre-wrap",
        }}
      >
        {error && <p className="text-red font-bold">Error: {error}</p>}
        {!error && data && <p>{data}</p>}
      </div>
    </div>
  );
}
