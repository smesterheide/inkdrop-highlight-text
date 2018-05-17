'use babel';

const mark = require('remark-mark');

module.exports = {

  activate() {
    this.subscription = inkdrop.commands.add(document.body, {
      'highlight-text:toggle': ()=> {
        const cm = inkdrop.getActiveEditor().codeMirror;
        if (cm.somethingSelected()) {
          const selection = cm.getSelection();
          if (/^==.+==$/.test(selection)) {
            cm.replaceSelection(selection.slice(2, -2), 'around');
          } else {
            cm.replaceSelection('==' + selection + '==', 'around');
          }
        } else {
          cm.replaceSelection('====', 'start');
          const {line, ch} = cm.getCursor();
          cm.setCursor({line, ch: ch + 2});
        }
      }
    });
	  
    const { MDEPreview } = inkdrop.components.classes
    if (MDEPreview) {
      return MDEPreview.remarkPlugins.push(mark)
    }	
  },

  deactivate() {	  
    this.subscription.dispose();
	
    const { MDEPreview } = inkdrop.components.classes
    if (MDEPreview) {
      MDEPreview.remarkPlugins = MDEPreview.remarkPlugins.filter(function (plugin) {
        return plugin !== mark
      })
    }
  }

};
