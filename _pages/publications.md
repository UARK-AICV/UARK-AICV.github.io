---
title: "AICV Lab - Publications"
layout: gridlay
excerpt: "AICV Lab -- Publications."
sitemap: false
permalink: /publications/
---

# Publications

{% assign years = "2024,2023,2022,2021,2020,2019,2018,2017,2016" | split: ',' %}
{% assign containsConference = false %}
{% assign containsJournal = false %}
{% for year in years %}
{% assign containsConference = false %}
{% assign containsJournal = false %}
## {{year | string}}

{% for publi in site.data.publist %}

{% assign date = year| plus:0 %}


{% if publi.year == date  %}

{% if publi.type == 2 %}
{% assign containsJournal = true %}
{% endif %}

{% if publi.type == 1 %}
{% assign containsConference = true %}
{% endif %}

{% endif %}

{% endfor %}



{% if containsJournal %}
### Journal Papers
{% endif %}

{% for publi in site.data.publist %}
{% if publi.type == 2 and publi.year == date %}
<div class="row">

<div class="col-sm-12 clearfix">
<div class="row">
<img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ publi.image }}" class="img-responsive" width="25%" style="float: left" />
<p><a class="pub1" href="{{ publi.link.url }}">{{ publi.title }}</a></p>
<a class="pub2"> {{ publi.link.display }} </a>
</div>
</div>
</div>

{% endif %}

{% endfor %}

{% if containsJournal %}
<p> &nbsp; </p>
{% endif %}

{% if containsConference %}
### Conference Papers
{% endif %}

{% for publi in site.data.publist %}
{% if publi.type == 1 and publi.year == date %}
<div class="row">

<div class="col-sm-12 clearfix">
<div class="row">
<img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ publi.image }}" class="img-responsive" width="25%" style="float: left" />
<p><a class="pub1" href="{{ publi.link.url }}">{{ publi.title }}</a></p>
<a class="pub2"> {{ publi.link.display }} </a>
</div>
</div>
</div>

{% endif %}

{% endfor %}

{% if containsConference %}
<p> &nbsp; </p>
{% endif %}

{% endfor %}


## Patents

{% assign number_printed = 0 %}
{% for publi in site.data.publist %}

{% if publi.type == 3 %}

<div class="row">

<div class="col-sm-12 clearfix">
 <div class="row">
  <p><a class="pub1" href="{{ publi.link.url }}">{{ publi.title }}</a></p>
  <a class="pub2"> {{ publi.link.display }} </a>
 </div>
</div>
</div>

{% endif %}
{% endfor %}

<p> &nbsp; </p>

<div>
## Full List

For a full list, please go to <a class="regtext" href="https://scholar.google.com/citations?user=8ck0k_UAAAAJ&hl=en&authuser=1">Google Scholar</a>.
<br><br><br>

</div>

<p> &nbsp; </p>

---