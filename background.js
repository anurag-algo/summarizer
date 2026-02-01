chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get(["geminiApiKey"], (result) => {
    if (!result.geminiApiKey) {
      chrome.runtime.openOptionsPage();
    }
  });
});

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.type === "GENERATE_SUMMARY") {
    generateSummary(req)
      .then((text) => sendResponse({ text }))
      .catch((err) => sendResponse({ error: err.message }));
    return true;
  }
});

async function generateSummary({ text, summaryType, apiKey }) {
  const truncated = text.slice(0, 12000);

  let prompt;
  switch (summaryType) {
    case "brief":
      prompt = `Summarize briefly in 2-3 sentences:\n\n${truncated}`;
      break;
    case "detailed":
      prompt = `Provide a detailed summary:\n\n${truncated}`;
      break;
    case "bullets":
      prompt = `Summarize in 5-7 bullet points:\n\n${truncated}`;
      break;
    default:
      prompt = `Summarize:\n\n${truncated}`;
  }

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}
`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.2 },
      }),
    },
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error?.message || "Gemini API error");
  }

  return (
    data.candidates?.[0]?.content?.parts?.[0]?.text || "No summary generated."
  );
}
