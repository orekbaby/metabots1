const fs = require("fs-extra");

async function copyFiles() {
  try {
    await fs.copy(
      "public/static/charting_library",
      "node_modules/charting_library"
    );
    console.log("Files copied successfully.");
  } catch (err) {
    console.error("Error copying files:", err);
    process.exit(1); // Exit with a non-zero code to indicate failure
  }
}

copyFiles();
