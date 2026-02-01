function getArticleText() {
  // Try article first
  const article = document.querySelector("article");
  if (article && article.innerText.length > 300) {
    return article.innerText;
  }

  // Fallback: meaningful blocks
  const elements = document.querySelectorAll("p, li, pre");
  let text = "";

  elements.forEach((el) => {
    const t = el.innerText.trim();
    if (t.length > 50) {
      text += t + "\n";
    }
  });

  return text.length > 200 ? text : null;
}

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.type === "GET_ARTICLE_TEXT") {
    sendResponse({ text: getArticleText() });
  }
  return true;
});
