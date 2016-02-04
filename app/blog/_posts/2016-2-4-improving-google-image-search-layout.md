---
layout: post
title:  "Improving Google's Image Search Layout"
date:   2016-02-04 23.10.00
category: "SASS"
---
In this post, I revisit an initial exploration into recreating Google's infamous image search expanding grid layout.

You may have read an article I had written for Sitepoint that was published in 2015, titled [Recreating the Google Images Search Layout with CSS](http://www.sitepoint.com/recreating-google-images-search-layout-css/). You can also see the technique in action on [JewelleryMaker](https://www.jewellerymaker.com/en-gb/auction/#dvDayShowProducts) in the Today's Products section.

Based on feedback in the comments section of my Sitepoint article, a nice idea cropped up about using a combination of hash links and the `:target` pseudo-class as an alternative to having JavaScript toggle the expansion and collapse of the larger image. Please see my below updated Codepen which does exactly that.

<div class="wrapper">
<p data-height="800" data-theme-id="22018" data-slug-hash="EaoMYN" data-default-tab="result" data-user="danjayrose" class='codepen'>See the Pen <a href='http://codepen.io/danjayrose/pen/EaoMYN/'>Google Image Search Layout with CSS</a> by Daniel Rose (<a href='http://codepen.io/danjayrose'>@danjayrose</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
</div>

The only JavaScript I have used, aside from HTML population, is a slight usability improvement to enable keyboard navigation. Neat!
