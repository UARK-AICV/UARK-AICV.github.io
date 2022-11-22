---
title: "AICV Lab - Research"
layout: textlay
excerpt: "AICV Lab -- Research"
sitemap: false
permalink: /research/
---

# Computer Vision

---


# Robotics

---


# Medical Imaging

---

![]({{ site.url }}{{ site.baseurl }}/images/respic/mri_img2img.png){: style="width: 300px; float: left;margin-right: 30px; border: 10px"}

## Unpaired Multi-Contrast MRI Image-to-Image Translation
<div style="text-align: justify">
We introduce a novel approach to unpaired image-to-image translation based on the invertible architecture. The invertible property of the flow-based architecture assures a cycle-consistency of image-to-image translation without additional loss functions. We utilize the temporal information between consecutive slices to provide more constraints to the optimization for transforming one domain to another in unpaired volumetric medical images. To capture temporal structures in the medical images, we explore the displacement between the consecutive slices using a deformation field. In our approach, the deformation field is used as a guidance to keep the translated slides realistic and consistent across the translation.
</div>
---- 


![]({{ site.url }}{{ site.baseurl }}/images/respic/portable_radiographs.png){: style="width: 300px; float: left;margin-right: 30px; border: 10px"}

## Enhance Portable Radiographs
<div style="text-align: justify">
This work aims to assist physicians to improve their speed and diagnostic accuracy when using portable chest radiographs, which are in especially high demand in the setting of the ongoing COVID-19 pandemic. Advancing the recent artificial intelligence (A.I) development, we introduce new deep learning frameworks to align and enhance the quality of portable chest radiographs appearance to be consistent with higher quality conventional chest radiographs. These enhanced portable chest radiographs can then help the doctors to provide faster and more accurate diagnosis and treatment strategy.

This work has been undertaken in collaboration with the Department of Radiology in University of Arkansas for Medical Sciences (UAMS) to enhance portable/mobile COVID-19 chest radiographs, to improve the speed and accuracy of portable chest radiograph images and aid in urgent COVID-19 diagnosis and treatment.
</div>
---- 


![]({{ site.url }}{{ site.baseurl }}/images/respic/active_contour_attention.png){: style="width: 300px; float: left;margin-right: 30px; border: 10px"}

## Narrow Band Active Contour Attention Model
<div style="text-align: justify">
Deep learning-based approaches have achieved impressive performance in semantic segmentation but they are limited to pixel-wise settings with imbalanced-class data problems and weak boundary object segmentation.  In this work, we tackle those limitations by developing Narrow Band Active Contour (NB-AC) attention model which treats the object contour as a hyperplane and all data inside a narrow band as support information that influences the position and orientation of the hyperplane. Our proposed NB-AC attention model incorporates the contour length with the region energy involving a fixed-width band around the curve or surface. The proposed network loss contains two fitting terms: (i) high level features (i.e. region) fitting term from the first branch; (ii) lower level features (i.e. contour) fitting term from the second branch including the (ii_1) length of object contour and (ii_2) regional energy functional formed by the homogeneity criterion of both inner band and outer band neighboring the evolving curve or surface. The proposed NB-AC loss is able to incorporate into both 2D and 3D deep network architectures.  Our 3D network which is built upon the proposed NB-AC loss and 3DUnet framework archives the state-of-the-art results on multiple volumetric datasets.
</div>