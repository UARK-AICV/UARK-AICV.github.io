---
title: "AICV Lab - Research"
layout: textlay
excerpt: "AICV Lab -- Research"
sitemap: false
permalink: /research/
---

{% assign categories = "Robotics,Computer Vision,Medical Analysis" |split: ','  %}
{% assign data = site.data.publist %}


{% for category in categories  %}
{% if category == categories[0]%}
{% assign subCategories = "Perception,Locomotion" | split: ',' %}


<div>
{% include collapsible_panel.html subCat=subCategories categories=category resData=data  %}
</div>

{% endif %}

{% if category == categories[1]%}
{% assign subCategories = "Image Understanding,Video Understanding, Biometrics,Action Understanding,Generative Model,Applications" | split: ',' %}
{% assign appSubCategories = "Agriculture,Remote Sensing,3D Reconstruction" | split: ',' %}

<div>
{% include collapsible_panel.html subCat=subCategories categories=category resData=data appSubCat=appSubCategories%}
</div>

{% endif %}

{% if category == categories[2]%}
{% assign subCategories = "Trustworthiness,Robustness,Scalability,Less Label,Other,Review" | split: ',' %}



<div>
{% include collapsible_panel.html subCat=subCategories categories=category resData=data  %}
</div>

{% endif %}

{% endfor %}



