# Scrolldemo
Scrolldemo is built with pure javascript to add the absolute minimum to your websites to have fancy smooth scroll from section to section.

## [demo](https://aml2732.github.io/scrolldemo/)

## Files overview:
- files to include in other projects:
  - index.css
  - index.html
- files needed to run the [demo here](https://aml2732.github.io/scrolldemo/) and can be excluded from other projects:
  - demo.css
  - index.html

## Setup scrolldemo
  - You'll need to load in the index.js and index.css files onto your page:
```
<html>
<head><link rel="stylesheet" href="<PATH TO THIS PROJECT's INDEX.CSS>"></link></head>
<body>
<script src="<PATH TO THIS PROJECT's INDEX.JS>"></script>
</body>
</html>
```
- Additionally the code looks for the precense of `scrolldemo-container` and `scrolldemo-section`. `scrolldemo-container` must be a direct parent of many `scrolldemo-sections`.
```
<div id="scrolldemo-container">
  <div class="scrolldemo-section">section 1</div>
  <div class="scrolldemo-section">section 2</div>
  <div class="scrolldemo-section">section 3</div>
  <div class="scrolldemo-section">section 4</div>
  <div class="scrolldemo-section">section 5</div>
</div>
```
If you have any problems (like margin of inner elements causing problems for parent section elements), take a look at index.html (demo code) on how we addressed this.

## More Notes:
- If the buttons are not your style: override this css value: `.scrolldemo-button`.
- If the placement of the buttons are not your style: override this css value `.scrolldemo-button-container`
