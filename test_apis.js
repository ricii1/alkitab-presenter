async function testAPIs() {
  const testCases = [
    { name: "Kejadian", abbr: "Kej", chap: 1 },
    { name: "Ulangan", abbr: "Ula", chap: 2 },
    { name: "Yohanes", abbr: "Yoh", chap: 3 },
    { name: "Mazmur", abbr: "Maz", chap: 23 }
  ];

  for (const tc of testCases) {
    console.log(`--- Testing ${tc.name} ${tc.chap} ---`);
    
    // API 1: api-alkitab
    try {
      const res1 = await fetch(`https://api-alkitab.vercel.app/api/passage?passage=${tc.name}&num=${tc.chap}`);
      const data1 = await res1.json();
      const count1 = data1?.bible?.book?.chapter?.verses?.length || 0;
      console.log(`API 1 (api-alkitab): Success! Returned ${count1} verses.`);
    } catch (e) {
      console.error(`API 1 Failed:`, e.message);
    }

    // API 2: Beeble
    try {
      const res2 = await fetch(`https://beeble.vercel.app/api/v1/passage/${tc.abbr}/${tc.chap}?ver=tb`);
      const data2 = await res2.json();
      const count2 = data2?.data?.verses?.length || 0;
      console.log(`API 2 (Beeble): Success! Returned ${count2} items.`);
    } catch (e) {
      console.error(`API 2 Failed:`, e.message);
    }
  }
}

testAPIs();
