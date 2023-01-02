let userAgent = window.navigator.userAgent,
  platform = window.navigator.platform,
  iosPlatforms = ["iPhone", "iPad", "iPod"],
  url = "https://work2.sawayo.de/";

if (iosPlatforms.indexOf(platform) !== -1) {
  url = "https://apps.apple.com/de/app/sawayo-2-0/id1593372578";
} else if (/Android/.test(userAgent)) {
  url = "https://play.google.com/store/apps/details?id=de.sawayo.work";
}

window.location = url;
