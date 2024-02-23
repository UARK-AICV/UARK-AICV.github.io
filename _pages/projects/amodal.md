---
title: "AICV Lab - Research"
layout: gridlay
excerpt: "AICV Lab -- Research"
sitemap: false
permalink: /projects/amodal/
---

## Amodal Prediction

![]({{ site.url }}{{ site.baseurl }}/images/respic/amodal_seg.png){: style="width: 100%;  margin: 6px 0px 6px 0; border-radius:0%; box-shadow: 0px 0px 0px"}

Amodal perception involves perceive an object as a whole, including both its visible and occluded parts. Amodal Instance Segmentation (AIS) is one of the common task of amodal perception, which aims to segment the region of both visible and possible occluded parts of an object instance. While Mask R-CNN-based AIS approaches have shown promising results, they are unable to model high-level features coherence due to the limited receptive field. The most recent transformer-based models show impressive performance on vision tasks, even better than Convolution Neural Networks (CNN). 

One of our approach to this problem is AISFormer, an AIS framework, with a Transformer-based mask head. AISFormer explicitly models the complex coherence between occluder, visible, amodal, and invisible masks within an object's regions of interest by treating them as learnable queries. Specifically, AISFormer contains four modules: (i) feature encoding: extract ROI and learn both short-range and long-range visual features. (ii) mask transformer decoding: generate the occluder, visible, and amodal mask query embeddings by a transformer decoder (iii) invisible mask embedding:  model the coherence between the amodal and visible masks, and (iv) mask predicting: estimate output masks including occluder, visible, amodal and invisible. We conduct extensive experiments and ablation studies on three challenging benchmarks i.e. KINS, D2SA, and COCOA-cls to evaluate the effectiveness of AISFormer.

### Project Members 

{% assign member_names = "Minh Tran,Winston Bounsavy" | split: "," %}

{% for member in site.data.team_members %}
{% if member_names contains member.name %}
<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
  <h4><a href="{{ site.url }}{{ site.baseurl }}/team/{{ member.url }}" class="off">{{ member.name }}</a></h4>
  <i>{{ member.info }}</i>
</div>
{% endif %}
{% endfor %}