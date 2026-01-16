function extractVideoId(url) {
  const regExp = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^&]+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

function loadVideo() {
  const link = document.getElementById("ytLink").value;
  const videoId = extractVideoId(link);

  if (!videoId) {
    alert("Please enter a valid YouTube link");
    return;
  }

  const container = document.getElementById("videos");
  container.innerHTML = "";

  for (let i = 0; i < 15; i++) {
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    container.appendChild(iframe);
  }
}
