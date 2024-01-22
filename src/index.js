const userAgent = window.navigator.userAgent,
  platform = window.navigator.platform,
  iosPlatforms = ["iPhone", "iPad", "iPod"];

const sawayoUrl = "https://work2.sawayo.de/";
const infoniqaUrl = "https://work.peopleplus.infoniqa.com/";


const searchParams = new URLSearchParams(queryString);

let url = sawayoUrl;
if(searchParams.get("tenant") === "infoniqa") {
  url = infoniqaUrl;
}

if (iosPlatforms.indexOf(platform) !== -1) {
  url = "https://apps.apple.com/de/app/sawayo-2-0/id1593372578";
} else if (/Android/.test(userAgent)) {
  url = "https://play.google.com/store/apps/details?id=de.sawayo.work";
}

window.location = url;
