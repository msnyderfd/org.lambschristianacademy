@ECHO OFF
CALL gulp
CALL sass _src/stylesheets/header.scss _dist/stylesheets/header.css
PAUSE