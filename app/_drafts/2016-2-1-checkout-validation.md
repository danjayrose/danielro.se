---
layout: post
title:  "Custom HTML5 Validation"
date:   2016-02-01 21.10.00
category: "TGGC"
categories: "HTML5 CSS JavaScript"
---
I can't be alone in thinking that the native HTML5 validation feedback is pretty ugly; I'm almost certain that my designer colleagues would have had a melt down if I had left them in! Annoyingly, browsers don't provide the means of styling the bubbles which could have been a nice time saver. Hopefully this will be addressed at some point in the future and until that time comes, please read on...

Still here? Oh well - the good news is that you are able to disable the native user feedback and build your own in both success and error situations using a combination of HTML5, JavaScript and CSS. Done correctly, you are able to create a really intuitive and snappy performing visual feedback tool to enhance the user experience, which I feel is demonstrated across [TGGC's checkout](https://secure.gemporia.com) and in the below Codepen.

<div class="wrapper">
<p data-height="480" data-theme-id="22018" data-slug-hash="JGpGpg" data-default-tab="result" data-user="danjayrose" data-preview="true" class='codepen'>See the Pen <a href='http://codepen.io/danjayrose/pen/JGpGpg/'>JGpGpg</a> by Daniel Rose (<a href='http://codepen.io/danjayrose'>@danjayrose</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
</div>

More good news is that it isn't really that painful to implement and [browser support is pretty good too](http://caniuse.com/#search=validation).

{% highlight ruby linenos %}

{% endhighlight %}
