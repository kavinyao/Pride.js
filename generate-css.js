// this file generates CSS file for pride
// Credits: http://krazydad.com/tutorials/makecolors.php
function byteToHex(n) {
  var nybHexString = "0123456790abcdef";
  return nybHexString.substr((n >> 4) & 0x0F, 1) + nybHexString.substr(n & 0x0F, 1);
}

function rgbToHex(r, g, b) {
  return '#' + byteToHex(r) + byteToHex(g) + byteToHex(b);
}

var FREQUENCY = 0.3;
var BASE = 6;
var NUM_COLORS = 21;
var i, red, green, blue;
for (i = BASE; i < BASE+NUM_COLORS; ++i) {
  red = Math.sin(FREQUENCY*i) * 127 + 128;
  green = Math.sin(FREQUENCY*i + 2*Math.PI/3) * 127 + 128;
  blue = Math.sin(FREQUENCY*i + 4*Math.PI/3) * 127 + 128;
  console.log('.pride-text .pride-color-' + (i-BASE) + ' {');
  console.log('  color: ' + rgbToHex(red, green, blue) + ';');
  console.log('}');
}

