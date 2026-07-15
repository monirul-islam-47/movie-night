"use strict";

const RELEASES = "https://github.com/monirul-islam-47/movie-night/releases/latest";
const API = "https://api.github.com/repos/monirul-islam-47/movie-night/releases/latest";

function matchAsset(assets, pattern) {
  return assets.find((asset) => pattern.test(asset.name));
}

function wireDownload(id, metaId, asset, label) {
  if (!asset) return;
  const link = document.getElementById(id);
  link.href = asset.browser_download_url;
  link.textContent = label;
  if (metaId) {
    const mib = (asset.size / 1024 / 1024).toFixed(1);
    document.getElementById(metaId).textContent = `${asset.name} · ${mib} MiB`;
  }
}

fetch(API, { headers: { Accept: "application/vnd.github+json" } })
  .then((response) => {
    if (!response.ok) throw new Error(`release lookup returned ${response.status}`);
    return response.json();
  })
  .then((release) => {
    const assets = Array.isArray(release.assets) ? release.assets : [];
    wireDownload("windows-download", "windows-meta",
      matchAsset(assets, /^MovieNight-[\d.]+-windows-x64-setup\.exe$/),
      "Download for Windows");
    wireDownload("linux-download", "linux-meta",
      matchAsset(assets, /^MovieNight-[\d.]+-linux-x86_64\.AppImage$/),
      "Download AppImage");
    wireDownload("linux-deb-download", null,
      matchAsset(assets, /^MovieNight-[\d.]+-linux-amd64\.deb$/),
      "Download integrated .deb");
    wireDownload("checksums-download", null,
      matchAsset(assets, /^MovieNight-[\d.]+-SHA256SUMS\.txt$/),
      "Download checksums");
    const status = document.getElementById("release-status");
    status.textContent = `Latest release: ${release.name || release.tag_name} · unsigned`;
  })
  .catch(() => {
    const status = document.getElementById("release-status");
    status.innerHTML = `Could not check the latest release automatically. <a href="${RELEASES}">Open GitHub Releases</a>.`;
  });
