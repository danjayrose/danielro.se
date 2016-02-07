---
layout: post
title:  "Improving Google's Image Search Layout"
date:   2016-02-04 23.10.00
category: "SASS"
---
In this post, I revisit an initial exploration into recreating Google's infamous image search expanding grid layout. This was an article published in 2015 for Sitepoint and titled [Recreating the Google Images Search Layout with CSS](http://www.sitepoint.com/recreating-google-images-search-layout-css/).

Based on feedback in the comments section of my Sitepoint article, a nice idea cropped up about using a combination of hash links and the `:target` pseudo-class as an alternative to having JavaScript toggle the expansion and collapse of the larger image. This comes with an additional advantage that means you can link directly to an image and when the page loads it will scroll to the id of the image and automatically expand it.

Please see my below updated Codepen which uses this new technique. The only JavaScript I have used, aside from HTML population, is a slight usability improvement to enable keyboard arrows navigation.

<div class="codepen wrapper">
<p data-height="600" data-theme-id="22018" data-slug-hash="EaoMYN" data-default-tab="result" data-user="danjayrose" class='codepen'>See the Pen <a href='http://codepen.io/danjayrose/pen/EaoMYN/'>Google Image Search Layout with CSS</a> by Daniel Rose (<a href='http://codepen.io/danjayrose'>@danjayrose</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
</div>

You can also see the technique in action on [JewelleryMaker](https://www.jewellerymaker.com/en-gb/auction/#dvDayShowProducts) in the Today's Products section. As the page content is heavily JavaScript dependent, it helps with performance to limit the use of JavaScript for layout purposes. This is where the `:target` and hash links technique really comes into it's own.
