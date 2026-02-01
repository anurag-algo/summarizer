document.getElementById("summarize").addEventListener("click", () => {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Loading...";

  const summaryType = document.getElementById("summary-type").value;

  chrome.storage.sync.get(["geminiApiKey"], ({ geminiApiKey }) => {
    if (!geminiApiKey) {
      resultDiv.innerText = "Set your API key in Settings.";
      return;
    }

    chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
      chrome.tabs.sendMessage(tab.id, { type: "GET_ARTICLE_TEXT" }, (res) => {
        if (chrome.runtime.lastError || !res?.text) {
          resultDiv.innerText =
            "Could not extract article text from this page.";
          return;
        }

        chrome.runtime.sendMessage(
          {
            type: "GENERATE_SUMMARY",
            text: res.text,
            summaryType,
            apiKey: geminiApiKey,
          },
          (response) => {
            if (response?.error) {
              resultDiv.innerText = response.error;
            } else {
              resultDiv.innerText = response.text;
            }
          },
        );
      });
    });
  });
});

document.getElementById("copy-btn").addEventListener("click", () => {
  const text = document.getElementById("result").innerText;
  if (!text.trim()) return;

  navigator.clipboard.writeText(text).then(() => {
    const toast = document.getElementById("toast");
    toast.style.opacity = "1";

    setTimeout(() => {
      toast.style.opacity = "0";
    }, 2000);
  });
});

document.getElementById("settings-btn").addEventListener("click", () => {
  chrome.runtime.openOptionsPage();
});
