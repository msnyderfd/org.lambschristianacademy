# Lambs Christian Academy

Installation instructions:
  - Download and extract the zip
  - Install npm in the top level directory
  - Install the optional npm components: del, gulp, gulp-sass, and gulp-file-include in the npm folder

File change instructions:
  - Make ALL changes in the src folder
  - Any changes to content should be made in the corresponding src/content/ file and NOT the src/ file
  - Once all changes are made, double click or run compile.bat and wait for it to complete
  - Log in to the Amazon S3 portal and open up the bucket called lambschristianacademy.org
  - Click and drag all of the contents INSIDE the dist folder (not the actual dist folder itself) and drag it to the upload area on S3
  - Click upload and it should overwrite all previous content
  - Clear the cache on your browser or open an incognito window and view your changes
