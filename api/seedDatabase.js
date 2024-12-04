const { exec } = require("child_process");
const path = require("path");

// Paths to SQL files
const createTablesScript = path.join(__dirname, "db-init-scripts", "01-create-tables.sql");
const insertDataScript = path.join(__dirname, "db-init-scripts", "02-insert-data.sql");

const executeSqlScript = (filePath) => {
  return new Promise((resolve, reject) => {
    exec(`psql -U postgres -d move_it -f ${filePath}`, (error, stdout, stderr) => {
      if (error) {
        reject(`Error executing ${filePath}: ${error.message}`);
      } else if (stderr) {
        reject(`stderr: ${stderr}`);
      } else {
        resolve(stdout);
      }
    });
  });
};

(async () => {
  try {
    console.log("Creating tables...");
    await executeSqlScript(createTablesScript);
    console.log("Tables created successfully!");

    console.log("Inserting data...");
    await executeSqlScript(insertDataScript);
    console.log("Data inserted successfully!");

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
