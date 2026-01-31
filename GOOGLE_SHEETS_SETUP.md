# Google Sheets Integration Setup

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Enrollments" or similar
4. Copy the Spreadsheet ID from the URL:
   - URL format: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
   - The `SPREADSHEET_ID` is the long string between `/d/` and `/edit`

## Step 2: Create Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Replace the default code with the content from `google-apps-script.js`
4. Update `SPREADSHEET_ID` in the script with your actual Sheet ID
5. Save the project (Ctrl+S or Cmd+S)

## Step 3: Deploy as Web App

1. Click "Deploy" > "New deployment"
2. Click the gear icon (⚙️) next to "Select type"
3. Choose "Web app"
4. Set the following:
   - **Description**: "Enroll Form Handler" (optional)
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
5. Click "Deploy"
6. Authorize the script when prompted:
   - Click "Authorize access"
   - Choose your Google account
   - Click "Advanced" > "Go to [Project Name] (unsafe)"
   - Click "Allow"
7. Copy the **Web App URL** (it will look like: `https://script.google.com/macros/s/...`)

## Step 4: Configure Environment Variable

1. Create or update `.env.local` in your project root:
   ```env
   GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```

2. Restart your Next.js development server for the changes to take effect

## Step 5: Test the Integration

1. Open your application
2. Click "Enroll Now"
3. Fill out and submit the form
4. Check your Google Sheet - the data should appear in a new row

## Troubleshooting

- **403 Forbidden**: Make sure "Who has access" is set to "Anyone"
- **Data not appearing**: Check that the Spreadsheet ID is correct
- **CORS errors**: The API route uses `no-cors` mode, which is expected for Google Apps Script

## Security Note

The Google Apps Script web app is publicly accessible. For production, consider:
- Adding rate limiting
- Implementing authentication
- Using Google Sheets API with proper OAuth instead
