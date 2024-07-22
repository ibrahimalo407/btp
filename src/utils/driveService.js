// src/utils/driveService.js

import { google } from 'googleapis';

const drive = google.drive('v3');

const auth = new google.auth.GoogleAuth({
  keyFile: 'path/to/your-service-account-file.json',
  scopes: ['https://www.googleapis.com/auth/drive'],
});

export const uploadFile = async (filePath, mimeType) => {
  const authClient = await auth.getClient();
  google.options({ auth: authClient });

  const fileMetadata = {
    name: 'photo.jpg',
  };
  const media = {
    mimeType,
    body: fs.createReadStream(filePath),
  };

  const response = await drive.files.create({
    resource: fileMetadata,
    media,
    fields: 'id',
  });

  return response.data.id;
};
