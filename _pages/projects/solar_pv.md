---
title: "AICV Lab - Research"
layout: gridlay
excerpt: "AICV Lab -- Research"
sitemap: false
permalink: /projects/solar_pv/
---

## Optimizing Solar Panel Efficiency: AI-Powered Obstruction Detection and Voltage Loss Estimation

<div style="width:100%; align-items:center;justify-content:center; display:flex">
 ![]({{ site.url }}{{ site.baseurl }}/images/respic/SolarPV.gif){: style="width:100%;  margin: 6px 0px 6px 0; border-radius:0%; box-shadow: 0px 0px 0px"}
</div>
<div style="text-align: justify">
This project aims to equip and artificial intelligence model with the proficiency to detect fluctuations in solar panel output resulting resulting from various obstructions. Employing a comparative approach, the study uses real-time data from two solar panels, designating one as a control while the other is subjected to obstructive conditions. Capturing footage through both a stationary ground-based camera and an aerial drone, the project aims to comprehensively assess the impact of obstructions such as avian feces, dirt, leaves, branches, and snow. Through meticulous analysis of this data, the AI model undergoes iterative training to recognize distinct patterns associated with these obstructions and accurately estimate the resultant voltage losses. This pioneering research promises to revolutionize renewable energy technology by enabling proactive measures to optimize solar panel efficiency and ensure robust energy production. 
</div>

### Project Members 

{% assign member_names = "Adrian Luis,Esteban Duran Marti" | split: "," %}

{% for member in site.data.team_members %}
{% if member_names contains member.name %}
<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
  <h4><a href="{{ site.url }}{{ site.baseurl }}/team/{{ member.url }}" class="off">{{ member.name }}</a></h4>
  <i>{{ member.info }}</i>
</div>
{% endif %}
{% endfor %}