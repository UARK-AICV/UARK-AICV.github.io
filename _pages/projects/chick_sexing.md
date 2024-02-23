---
title: "AICV Lab - Research"
layout: gridlay
excerpt: "AICV Lab -- Research"
sitemap: false
permalink: /projects/chick/
---

## Chick Sexing on Face Part

![]({{ site.url }}{{ site.baseurl }}/images/respic/chick_sexing.png){: style="width: 80%;  margin: 6px 0px 6px 0; border-radius:0%; box-shadow: 0px 0px 0px"}

We introduce a novel approach to chick gender classification at an early age, an essential yet labor-intensive task. By integrating Machine Learning (ML) and Computer Vision (CV) technologies we developed a semi-automated model capable of accurately detect and identify chick gender through facial feature analysis. This innovative method promises to revolutionize chick sexing by offering a rapid, non-invasive solution, significantly reducing the reliance on manual labor and specialized skills. This advancement not only accelerates the sexing process but also enhances accuracy, facilitating improved resource management and operational efficiency within the poultry sector. This sets a new standard for gender determination practices in the industry.


### Project Members 

{% assign member_names = "Marta Veganzones" | split: "," %}

{% for member in site.data.team_members %}
{% if member_names contains member.name %}
<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
  <h4><a href="{{ site.url }}{{ site.baseurl }}/team/{{ member.url }}" class="off">{{ member.name }}</a></h4>
  <i>{{ member.info }}</i>
</div>
{% endif %}
{% endfor %}