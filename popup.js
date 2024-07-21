document.getElementById('setSpeedButton').addEventListener('click', async () => {
  const speed = parseFloat(document.getElementById('speedInput').value);

  // Get the active tab
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // Inject the script into the active tab
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: setPlaybackSpeed,
    args: [speed]
  });
});

function setPlaybackSpeed(speed) {
  const videos = document.querySelectorAll('video');
  videos.forEach(video => video.playbackRate = speed);
  console.log(`Playback speed set to ${speed}`);
}

