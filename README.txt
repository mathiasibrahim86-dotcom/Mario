BUILD THE APK WITHOUT ANDROID STUDIO (GitHub does it for you)
1. (Already done) Your sound files and creator.jpeg are in the www folder.
2. Create a free account at github.com and make a new repository (any name).
3. Upload everything from this folder to it (Add file > Upload files).
   Make sure  .github/workflows/build-apk.yml  is there. If it is missing, use
   Add file > Create new file, type  .github/workflows/build-apk.yml  as the name, and paste its contents.
4. Open the repository's  Actions  tab, wait for "Build APK" to turn green (about 5-8 minutes).
5. Click the finished run, scroll to Artifacts, download  CTA-Mario-APK, unzip it, and install app-debug.apk on your phone.
After changing www/index.html, upload it again and a new APK is built automatically.
