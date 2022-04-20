const webp = require("webp-converter");
const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "in");

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log(err);
  }

  try {
    files.forEach((file) => {
      if (!file.includes(".jpg")) return;
      let [fileName, exe] = file.split(".");
      webp.cwebp(`./in/${file}`, `./out/${fileName}.webp`);
    });
    console.log("converted successfully");
  } catch (err) {
    console.log(err);
  }
});
