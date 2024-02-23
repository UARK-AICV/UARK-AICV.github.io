---
title: "AICV Lab - Research"
layout: gridlay
excerpt: "AICV Lab -- Research"
sitemap: false
permalink: /projects/vpc/
---

## Video Paragraph Captioning


![]({{ site.url }}{{ site.baseurl }}/images/respic/vltint_vpc_demo1.gif){: style="width: 100%;  margin: 6px 0px 6px 0; border-radius:0%; box-shadow: 0px 0px 0px"}

<div style="text-align: justify">
Video paragraph captioning aims to generate a multi-sentence description of an untrimmed video with several temporal event locations in coherent storytelling. 
Following the human perception process, where the scene is effectively understood by decomposing it into visual (e.g. human, animal) and non-visual components (e.g. action, relations) under the mutual influence of vision and language, we first propose a visual-linguistic (VL) feature. In the proposed VL feature, the scene is modeled by three modalities including (i) a global visual environment; (ii) local visual main agents; (iii) linguistic scene elements. We then introduce an autoregressive Transformer-in-Transformer (TinT) to simultaneously capture the semantic coherence of intra- and inter-event contents within a video. Finally, we present a new VL contrastive loss function to guarantee learnt embedding features are matched with the captions semantics. Comprehensive experiments and extensive ablation studies on ActivityNet Captions and YouCookII datasets show that the proposed Visual-Linguistic Transformer-in-Transform (VLTinT) outperforms prior state-of-the-art methods on accuracy and diversity. 
</div>

### Project Members 

{% assign member_names = "Kashu Yamazaki,Khoa Vo,Sang Truong" | split: "," %}

{% for member in site.data.team_members %}
{% if member_names contains member.name %}
<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
  <h4><a href="{{ site.url }}{{ site.baseurl }}/team/{{ member.url }}" class="off">{{ member.name }}</a></h4>
  <i>{{ member.info }}</i>
</div>
{% endif %}
{% endfor %}