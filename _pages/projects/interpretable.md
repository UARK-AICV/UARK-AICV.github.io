---
title: "AICV Lab - Research"
layout: gridlay
excerpt: "AICV Lab -- Research"
sitemap: false
permalink: /projects/interpretable/
---

## Interpretable AI in medical analysis

![]({{ site.url }}{{ site.baseurl }}/images/respic/interpretable_ai.gif){: style="width: 100%;  margin: 6px 0px 6px 0; border-radius:0%; box-shadow: 0px 0px 0px"}

<div style="text-align: justify">
Using Deep Learning in computer-aided diagnosis system has been of great interest due to its impressive performance in general domain and medical domain. However, a notable challenge is the lack of explainability of many advanced models, which poses risks in critical applications such as diagnosing or reporting findings in CXR.
We are developing methods that mirror the decision-making process of a radiologist.
By emulating the eye gaze patterns of radiologists, the framework initially determines the focal areas and assesses the significance of each pixel within those regions. As a result, the model generates an attention heatmap representing radiologists' attention, which is then used to extract attended visual information to diagnose or report the findings.
Furthermore, by displaying the eye gaze heatmap which guides to the diagnostic conclusion, the underlying rationale behind the model's decision is revealed, thereby making it interpretable.
This project aims to construct interpretable properties through applying the eye gaze information as much as possible to give the radiologist more control over the Deep Learning system. This creates safer and more reliable computer-aided diagnosis systems.
</div>


### Project Members 

{% assign member_names = "Trong Thang Pham" | split: "," %}

{% for member in site.data.team_members %}
{% if member_names contains member.name %}
<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
  <h4><a href="{{ site.url }}{{ site.baseurl }}/team/{{ member.url }}" class="off">{{ member.name }}</a></h4>
  <i>{{ member.info }}</i>
</div>
{% endif %}
{% endfor %}