/**
 * Google Apps Script for Enroll Form Submission
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com
 * 2. Create a new project
 * 3. Replace the default code with this script
 * 4. Update the SPREADSHEET_ID with your Google Sheet ID
 * 5. Deploy as a web app:
 *    - Click "Deploy" > "New deployment"
 *    - Choose "Web app" as the type
 *    - Set "Execute as" to "Me"
 *    - Set "Who has access" to "Anyone"
 *    - Click "Deploy"
 * 6. Copy the Web App URL
 * 7. Add it to your .env.local file as: GOOGLE_SCRIPT_URL=your_web_app_url
 */

function doPost(e) {
  try {
    // Get the active spreadsheet (or use a specific spreadsheet ID)
    const SPREADSHEET_ID = '1HZ5kIr9bs4wZDdZCdSxg8S6rePt79LF2YYBHrS6Xj1k'; // Replace with your Google Sheet ID
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
    
    // Get form data
    const name = e.parameter.name || '';
    const email = e.parameter.email || '';
    const phone = e.parameter.phone || '';
    const jobRole = e.parameter.jobRole || '';
    const comments = e.parameter.comments || '';
    const timestamp = e.parameter.timestamp || new Date().toISOString();
    
    // Add headers if this is the first row
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Job Role', 'Comments']);
    }
    
    // Append the data
    sheet.appendRow([timestamp, name, email, phone, jobRole, comments]);
    
    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({ success: true, message: 'Data saved successfully' })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * OPTIONAL: Test function to verify the script works
 */
function testDoPost() {
  const mockEvent = {
    parameter: {
      name: 'Test User',
      email: 'test@example.com',
      phone: '1234567890',
      jobRole: 'Developer',
      comments: 'Test comment',
      timestamp: new Date().toISOString()
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}
