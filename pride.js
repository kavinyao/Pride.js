(function(window, undefined) {
  var NUM_COLORS = 21;

  function pridify() {
    // find all elements to be pridified
    var targets = document.querySelectorAll('.pride-text');
    Array.prototype.forEach.call(targets, function(elem) {
      // find all descendant TextNodes
      // Ref: http://stackoverflow.com/q/2579666/1240620
      var walker = document.createTreeWalker(elem, NodeFilter.SHOW_TEXT, null, false);
      var node, text, i, color_idx, pride_text, pride_text_node;
      while ((node = walker.nextNode())) {
        // construct colorized text (pride text)
        text = node.nodeValue;
        color_idx = 0;
        pride_text = '';
        for (i = 0; i < text.length; ++i) {
          if (text[i] === ' ') {
            pride_text = pride_text + ' ';
          } else {
            pride_text = pride_text + '<span class="pride-color-' + color_idx + '">' + text[i] + '</span>';
            color_idx = (color_idx + 1) % NUM_COLORS;
          }
        }

        // plug it in
        pride_text_node = document.createElement('span');
        pride_text_node.innerHTML = pride_text;
        node.parentNode.replaceChild(pride_text_node, node);
      }
    });
  }

  document.addEventListener("DOMContentLoaded", pridify);
})(this);
