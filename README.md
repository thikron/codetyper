codetyper
=========

Codetyper is a plugin for revealjs to give the illusion of live code typing as a presentation feature.

This is a very early alpha version and is more a hack than a good implementation. But it does the job and works so far.

Just include the css file and the js file and call codetyper after initializing revealjs.

The code will be typed with a delay of 50ms when hitting enter.

A section that should be presented as a codetyper section has the following look:

```html
<section class="codetyper" data-codetypername="hello">
		<div class="codetyper-code" data-codetyperlevel="0">
function bla() {
	console.log("Hello");
		</div>
		<div class="codetyper-code" data-codetyperlevel="1">
	console.log("Welt");
		</div>
		<div class="codetyper-code" data-codetyperlevel="2">
	console.log("Welt");
}
		</div>
		<pre><code class="codetyper-output" data-trim contenteditable></code></pre>
</section>
```

When there is just one codetyper-code class present in a section that should be written the data-codetyperlevel can be omitted.
