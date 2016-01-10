---
layout: post
title:  "Site Architecture"
date:   2015-11-16 21:10:20
---
For my first post, it seems prudent to explain how this website came to be. Read on for a brief explanation on how [{{ site.title }}]({{ site.url }}) was built and released without any other cost than purchasing the domain.

Performance was at the forefront of my thoughts when considering how to build [{{ site.title }}]({{ site.url }}) and using a static site generator was an easy decision. I opted to use Jekyll due to it’s ease of integration with Github Pages which in itself offers free hosting and version control as a bonus. Be aware that your code must remain open source. As an advocate of the open source community I can only see this as a positive and I would encourage you to flick through [this website's source code](https://github.com/danjayrose/danielro.se).

As you may already be aware, you can configure your Github Pages hosted site to route via a custom domain which is [explained in the docs](https://help.github.com/articles/about-custom-domains-for-github-pages-sites/). Cloudflare’s free service was selected to provide the means in which to configure DNS records with Github and it ships with the added bonus of CDN and flexible SSL encryption, which assist in faster page load times and SEO.

During development Grunt was used in conjunction with Jekyll to optimize, concatenate and compile all of the sites assets. It was also utilised to provide a local environment for visual feedback during development and testing. To push a release live, a simple grunt command will build the entire site and deploy it to Github Pages in a matter of seconds.

Overall, I'm pleased with the workflow in building out the structure of [{{ site.title }}]({{ site.url }}). Going forward I have a stable base upon which to build as the site naturally grows.
