---
title: "AICV Lab - Publications"
layout: gridlay
excerpt: "AICV Lab -- Publications."
sitemap: false
permalink: /publications/
---


# Publications

---

## Conference Papers

{% assign number_printed = 0 %}
{% for publi in site.data.publist %}

{% if publi.type == 1 %}

<div class="row">

<div class="col-sm-12 clearfix">
 <div class="row">
  <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ publi.image }}" class="img-responsive" width="25%" style="float: left" />
  <p><a class="pub1" href="{{ publi.link.url }}">{{ publi.title }}</a></p>
  <a class="pub2"> {{ publi.link.display }} </a>
 </div>
</div>

{% endif %}
{% endfor %}

<p> &nbsp; </p>

## Journal Papers

{% assign number_printed = 0 %}
{% for publi in site.data.publist %}

{% if publi.type == 2 %}

<div class="row">

<div class="col-sm-12 clearfix">
 <div class="row">
  <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ publi.image }}" class="img-responsive" width="25%" style="float: left" />
  <p><a class="pub1" href="{{ publi.link.url }}">{{ publi.title }}</a></p>
  <a class="pub2"> {{ publi.link.display }} </a>
 </div>
</div>

{% endif %}
{% endfor %}

<p> &nbsp; </p>

---

<div>
## Full List

For a full list, please go to <a class="regtext" href="https://scholar.google.com/citations?user=8ck0k_UAAAAJ&hl=en&authuser=1">Google Scholar</a>.
<br><br><br>

</div>

