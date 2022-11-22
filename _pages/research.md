---
title: "AICV Lab - Research"
layout: textlay
excerpt: "AICV Lab -- Research"
sitemap: false
permalink: /research/
---

# Research Highlights

---

![]({{ site.url }}{{ site.baseurl }}/images/respic/genediscovery.png){: style="width: 300px; float: left;margin-right: 30px; border: 10px"}

## Unpaired Multi-Contrast MRI Image-to-Image Translation
<div style="text-align: justify">
We introduce a novel approach to unpaired image-to-image translation based on the invertible architecture. The invertible property of the flow-based architecture assures a cycle-consistency of image-to-image translation without additional loss functions. We utilize the temporal information between consecutive slices to provide more constraints to the optimization for transforming one domain to another in unpaired volumetric medical images. To capture temporal structures in the medical images, we explore the displacement between the consecutive slices using a deformation field. In our approach, the deformation field is used as a guidance to keep the translated slides realistic and consistent across the translation.
</div>
---- 


![]({{ site.url }}{{ site.baseurl }}/images/respic/scn2aMut.png){: style="width: 300px; float: left;margin-right: 30px; border: 10px"}

## Enhance Portable Radiographs
<div style="text-align: justify">
This work aims to assist physicians to improve their speed and diagnostic accuracy when using portable chest radiographs, which are in especially high demand in the setting of the ongoing COVID-19 pandemic. Advancing the recent artificial intelligence (A.I) development, we introduce new deep learning frameworks to align and enhance the quality of portable chest radiographs appearance to be consistent with higher quality conventional chest radiographs. These enhanced portable chest radiographs can then help the doctors to provide faster and more accurate diagnosis and treatment strategy.

This work has been undertaken in collaboration with the Department of Radiology in University of Arkansas for Medical Sciences (UAMS) to enhance portable/mobile COVID-19 chest radiographs, to improve the speed and accuracy of portable chest radiograph images and aid in urgent COVID-19 diagnosis and treatment.
</div>

![]({{ site.url }}{{ site.baseurl }}/images/respic/asdcnv.png){: style="width: 300px; float: left;margin-right: 30px; border: 10px"}

## A Multi-task Contextual Network for Brain Tumor Detection & Segmentation
<div style="text-align: justify">
We investigate that segmenting brain tumor is facing to the imbalanced data problem where the number of pixels belonging to background class (non tumor pixel) is much larger than the number of pixels belonging to foreground class (tumor pixel). To address this problem, we propose a multi-task network which is formed as a cascaded structure and designed to share their feature maps. Our model consists of two targets, namely, effectively differentiating brain tumor regions and estimating brain tumor masks. The first task is performed by our proposed contextual detection network which aims at reducing redundant background pixels and focusing on the region around brain tumor. Instead of processing every pixel, our contextual detection network only processes contextual regions around ground-truth instances and this strategy helps to produce meaningful regions proposals. The second task is built upon a 3D atrous residual network and under  an encode-decode network in order to effectively segment both large and small object (brain tumor). Our 3D atrous residual network is designed with a skip connection to enables the gradient from the deep layers to be directly propagated to shallow layers thus features of different depth are preserved and used for refining each other.  In order to incorporate larger contextual information in volume MRI data, our network is designed with 3D atrous convolution with various kernel sizes which enlarges the field of view of filters
</div>

---


