# inkdrop-highlight-text

A plugin for [Inkdrop](https://www.inkdrop.info/) that implements the Markdown text highlighting extension. It parses text enclosed by `==` and renders it as marked text.

## Motivation
Having used Evernote in the past I really missed the ability to highlight text in Inkdrop. In contrast to **strong** and *emphasis*, marking text in that manner also conveys a different meaning as the [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark) nicely point out:

> Don’t confuse `<mark>` with the `<strong>` element; `<mark>` is used to denote content which has a degree of *relevance*, while `<strong>` indicates spans of text of *importance*.

As people often copy text from the web into their notes and like to annotate it, you can make the case that Github Flavored Markdown is lacking in its syntax to adequately support this use case with respect to note taking.

## Install

```sh
ipm install highlight-text
```

## Usage
Here is an example showcasing text highlighting in conjuction with blockquotes:

```markdown
> ==To be, or not to be==, that is the question
```

![usage example](https://raw.githubusercontent.com/notapianokey/inkdrop-highlight-text/master/assets/usage-example.png)

You can add a keymapping (keyboard shortcut) that allows you to highlight selected text. Please note that it is *not active* by default. You have to enable it by adding a keymapping to your `keymap.cson` like so:

```yaml
'body':
  'ctrl-h': 'highlight-text:toggle'
```

## Compatibility

Keep in mind that text highlighting is not part of the official [CommonMark](https://spec.commonmark.org/) or [Github Flavored Markdown](https://github.github.com/gfm/) specification. Therefore using the `==` syntax to highlight text might be ignored by other Markdown readers and as a result carry over to the rendered text.

Fortunately many Markdown-enabled applications support text highlighting as an experimental feature, see [here](https://github.com/jonschlinkert/remarkable/tree/dev#syntax-extensions), [here](http://support.typora.io/Markdown-Reference/), [here](https://help.ghost.org/article/4-markdown-guide) and also [here](https://talk.commonmark.org/t/highlighting-text-with-the-mark-element/840). Despite lacking formal specification the syntax can be considered stable at this point and is unlikely to change.

## Theming support

Theme developers can use the CSS selector `.mde-preview mark` for styling.

## Acknowledgments

* This plugin relies on [remark-mark](https://www.npmjs.com/package/remark-mark) by moyuyc
* Special thanks to the developers of [zmarkdown](https://github.com/zestedesavoir/zmarkdown) for general help on remark plugin development and [@craftzdog](https://github.com/craftzdog) for promoting the idea
