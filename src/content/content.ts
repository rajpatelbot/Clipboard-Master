const chromeVar = chrome;

async function getCopiedText() {
  try {
    // const activeTab = await chrome.tabs.query({ active: true, currentWindow: true });
    const text = await navigator.clipboard.readText();

    const response = await chrome.runtime.sendMessage({
      action: "copiedTextResponse",
      copiedText: text,
    });

    console.log("Response from popup:", response);
  } catch (error) {
    console.error("Error in getting copied text:", error);
  }
}

chrome.runtime.onMessage.addListener(async (request) => {
  if (request.message === "getCopiedText") {
    await getCopiedText();
  }
  return true; // Indicate asynchronous handling
});
