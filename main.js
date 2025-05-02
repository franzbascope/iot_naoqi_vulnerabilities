const fs = require('fs');
const path = require('path');

// Define file paths
const inputFilePath = path.join(__dirname, 'report_json.json');
const outputFilePath = path.join(__dirname, 'report_json_combined.json');

// Load the JSON file
fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  try {
    // Parse the JSON data
    const jsonData = JSON.parse(data);

    // Remove duplicates based on issue_text
    const uniqueResults = [];
    const seenIssueTexts = new Set();

    jsonData.results.forEach((result) => {
      if (!seenIssueTexts.has(result.issue_text)) {
        uniqueResults.push(result);
        seenIssueTexts.add(result.issue_text);
      }
    });

    // Create the new JSON object
    const outputData = { results: uniqueResults };

    // Write the output to a new file
    fs.writeFile(outputFilePath, JSON.stringify(outputData, null, 2), (writeErr) => {
      if (writeErr) {
        console.error('Error writing the file:', writeErr);
        return;
      }
      console.log('Duplicates removed and output saved to:', outputFilePath);
    });
  } catch (parseErr) {
    console.error('Error parsing the JSON data:', parseErr);
  }
});