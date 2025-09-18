# Abe Newmeyer - Professional Development Strategist

This is a Next.js personal brand website for Abe Newmeyer, built with Firebase Studio.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## CRITICAL: Firebase Storage Configuration

For the "Wise Up Sessions" media library to function correctly, you **MUST** update your Firebase Storage security rules to allow public read and list access. The `FirebaseError: storage/unauthorized` error that you may see is a direct result of not performing this step.

**Your app will not display any audio or video files until you complete this step.**

1.  Go to your project in the [Firebase Console](https://console.firebase.google.com/).
2.  Navigate to the **Storage** section from the left-hand menu.
3.  Click on the **Rules** tab.
4.  Delete the existing rules and replace them with the following:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Allow public read and list access to all files.
    // This is safe for this application as it only contains public media.
    match /{allPaths=**} {
      allow list, get: if true;
    }
  }
}
```
5. Click **Publish**. The changes should take effect within a few minutes.

After publishing these rules, your media files stored in the root of your Firebase Storage bucket will be displayed on the website, and the authorization error will be resolved.
