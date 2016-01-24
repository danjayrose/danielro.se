---
layout: post
title:  "Multi Brand SASS Architecture"
date:   2016-01-24 21:14:20
category: "TGGC"
categories: "SASS"
---
I work for a company that has an umbrella of e-commerce brands, all of which have a checkout which runs via the same asp.net application. Here I explain how I scoped out the project and developed a SASS structure to remain DRY whilst providing the end user with a performant codebase.

The Brand Director wanted to keep consistency across these four brands and the wireframes were very similar. However, there were differences in fonts, colours, sizes, spacing and, on occasion, content. The differences meant that I had to branch out a grouping of CSS files (one per brand) from a centralised area in order to avoid redundant code, and resources in opposing brands.

SASS is a great tool for scenarios like this and combined with Grunt I was able to create a build process which utlised a centralised codebase for the common styles and a separate area for the brand specifics. Here's the folder structure:

{% highlight ruby linenos %}
/global/sass/
/gemporia/sass/
/jewellery-maker/sass/
/gem-collector/sass/
/nowseen/sass/
{% endhighlight %}

The global folder contains all of the common styles the brands share and the remaining folders contain the brand specific SASS files. Note that I wanted to keep all code related to each brand within it's own folder alongside all other brand assets.

The grunt configuration within the compass task is as follows:

{% highlight ruby linenos %}
compass: {
    gemporia: {
        options: {
            importPath: 'global/sass/',
            config: 'gemporia/config.rb'
        }
    },
    jewelleryMaker: {
        options: {
            importPath: 'global/sass/',
            config: 'jewellery-maker/config.rb'
        }
    },
    ...
}
{% endhighlight %}

As you can see, each brand has an importPath which is a Compass option that makes all files within the `global/sass` folder findable by SASS's `@import` directive. This allows the ability to pull a bunch of SASS into the existing context. The config property enables the import of configuration set in the brands' config.rb files. An excerpt of Gemporia's config is below.

{% highlight ruby linenos %}
...
css_dir = 'gemporia/css'
sass_dir = 'gemporia/sass'
images_dir = 'gemporia/img'
fonts_dir = 'gemporia/fonts'
...
{% endhighlight %}

Adapted from [Hugo Giraudel’s 7-1 Pattern](http://sass-guidelin.es/#the-7-1-pattern) (which is great btw) here's a snippet from `gemporia/sass/main.scss` which will ultimately pull in all SASS files from the relative folders plus the `global/sass` folder. It will compile into `gemporia/css/main.css` based on the configuration. In the comments on the right you can see the actual location of the partials relative to the root.

{% highlight ruby linenos %}
@import 'utils/theme';          // @import 'gemporia/sass/utils/_theme.scss';
@import 'utils/refine';         // @import 'gemporia/sass/utils/_refine.scss';
@import 'utils/variables';      // @import 'global/sass/utils/_variables.scss';  
@import 'utils/..';

@import 'base/fonts';           // @import 'gemporia/sass/base/_fonts.scss';
@import 'base/normalize';       // @import 'global/sass/base/_normalize.scss';  
@import 'base/..';

@import 'layout/grid';          // @import 'global/sass/layout/_grid.scss';
@import 'layout/..';

@import 'pages/login';          // @import 'global/sass/pages/_login.scss';
@import 'pages/..';

@import 'components/buttons';   // @import 'global/sass/components/_buttons.scss';
@import 'components/..';

@import 'vendors/..';
{% endhighlight %}

You may have noticed that `utils/theme`, `utils/refine` and `base/fonts` are all imported from Gemporia's SASS folder. This is how I was able to import the brand specific styles and variables.

The *theme* partial contains all variables that are referenced in the `global/sass` folder and the *fonts* partial imports the appropriate brand font files. *Refine*, however, acts a bit differently in that it contains a mixin, also called refine, which specifies all of the more general style differences between the brands.

For example, whilst 3 of the brands have square buttons, Jewellery Maker has rounded edged buttons. The refine mixin allows the import of border-radius to Jewellery Maker's CSS file without affecting the other brands. A snippet from `components/buttons` show's how this is achieved:

{% highlight ruby linenos %}

.btn {
  background: $color-main;
  @include refine(btn);
  ...
}

{% endhighlight %}

Then, within `jewellery-maker/sass/utils/refine`:

{% highlight ruby linenos %}

@mixin refine($el) {
  @if $el == btn {
    border-radius: .25rem;
  }
  ...
}

{% endhighlight %}

The output, if compiled as extended CSS, will be:

{% highlight ruby linenos %}

.btn {
  background: #d3005d;
  border-radius: .25rem;
  ...
}

{% endhighlight %}

The other brands will not see the `border-radius` property as this was omitted from their *refine* partials.
