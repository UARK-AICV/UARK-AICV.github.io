---
title: "AICV Lab - Research"
layout: textlay
excerpt: "AICV Lab -- Research"
sitemap: false
permalink: /research/


---

# Robotics

---

## Perception

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/respic/openfusion.png" class="img-responsive" width="90%" style="float: left"/>
</div>

<div class="col-sm-6 clearfix">

#### Queryable Scene Reconstruction
- "Open-Fusion: Real-time Open-Vocabulary 3D Mapping and Queryable Scene Representation" (ICRA 2024)

#### Deformable Human 3D Reconstruction
- "DNA: Deformable Neural Articulations Network for Template-Free Dynamic 3D Human Reconstruction From Monocular RGB-D Video" (CVPRW 2023)
<br>
<br>
<br>
</div>

## Locomotion

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/respic/go1_isaac_gym.gif" class="img-responsive" width="90%" style="float: left"/>
</div>

#### Robust Gait Learning
<div style="text-align: justify">
While quadrupeds can open the operational domains of robots thanks to their dynamic locomotion capabilities, conventional controllers for legged locomotion constraint their applications to relatively simple environments that can be taken over by wheeled robots.
Here we use reinforcement learning to train a quadruped to walk on various terrains. In the simulation, a quadruped robot (Unitree Go1) learns to walk across challenging terrain, including uneven surfaces, slopes, stairs, and obstacles, while following linear- and angular- velocity commands.
</div>
<br>


# Computer Vision

---

## Image Understanding

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/respic/amodal_seg.png" class="img-responsive" width="90%" style="float: left"/>
</div>

<div class="col-sm-6 clearfix">

#### [Amodal Image Segmentation]({{ site.url }}{{ site.baseurl }}/projects/amodal)
- "AISFormer: Amodal Instance Segmentation with Transformer" (BMVC 2022)

<br>
<br>
<br>
<br>
</div>

## Video Understanding

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/respic/vltint_vpc_demo1.gif" class="img-responsive" width="90%" style="left"/>
</div>

<div class="col-sm-6 clearfix">

#### Video Anomaly Detection
- "CLIP-TSA: CLIP-Assisted Temporal Self-Attention for Weakly-Supervised Video Anomaly Detection" (ICIP 2023)

#### [Video Paragraph Captioning]({{ site.url }}{{ site.baseurl }}/projects/vpc)
- "VLTinT: Visual-Linguistic Transformer-in-Transformer for Coherent Video Paragraph Captioning" (AAAI 2023)
- "Vlcap: Vision-language with contrastive learning for coherent video paragraph captioning" (ICIP 2022)

#### [Temporal Action Proposal Generation]({{ site.url }}{{ site.baseurl }}/projects/tapg)
- "Aoe-net: Entities interactions modeling with adaptive attention mechanism for temporal action proposals generation" (IJCV)
- "AEI: Actors-Environment Interaction with Adaptive Attention for Temporal Action Proposals Generation" (BMVC 2021)

</div>


## Aplications

---

### Agriculture

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/respic/chick_sexing.png" class="img-responsive" width="90%" style="float: left"/>
</div>

<div class="col-sm-6 clearfix">

##### [Chick Sexing on Face Part]({{ site.url }}{{ site.baseurl }}/projects/chick/)


##### AI Processing Plant
- "Chicken Processing Plant With Automated Computer Vision"
- "Artificial Intelligence And Vision-Based Broiler Body Weight Measurement System And Process"
<br>
<br>
<br>
<br>
<br>
<br>
</div>


### Remote Sensing 

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/respic/aerialformer.png" class="img-responsive" width="90%" style="float: left"/>
</div>

<div class="col-sm-6 clearfix">

#### Aerial Image Segmentation
- "AerialFormer: Multi-resolution Transformer for Aerial Image Segmentation"

#### [Solar PV Profiling]({{ site.url }}{{ site.baseurl }}/projects/solar_pv)
- "SolarFormer: Multi-scale Transformer for Solar PV Profiling"
<br>
<br>
<br>
<br>
<br>
<br>
</div>



# Medical Analysis

---
## Trustworthy 

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/kashu_spie22.jpg" class="img-responsive" width="90%" style="float: left"/>
</div>

<div class="col-sm-6 clearfix">

#### Volumetric Segmentation

- "SAM3D: Segment Anything Model in Volumetric Medical Images"
- "DAM-AL: Dilated Attention Mechanism with Attention Loss for 3D Infant Brain Image Segmentation"
- "Point-unet: A context-aware point-based neural network for volumetric segmentation"
- "Invertible residual network with regularization for effective volumetric segmentation" (SPIE 2021)

#### Capsule Networks
- "3DConvCaps: 3DUnet with Convolutional Capsule Encoder for Medical Image Segmentation"
- "CapsNet for Medical Image Segmentation"
- "SS-3DCapsNet: Self-supervised 3D Capsule Networks for Medical Segmentation on Less Labeled Data" (ISBI 2022)
- "3d-ucaps: 3d capsules unet for volumetric image segmentation"

</div>

## Robustness

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/respic/interpretable_ai.gif" class="img-responsive" width="90%" style="float: left"/>
</div>

<div class="col-sm-6 clearfix">

#### [CXR Diagnoses]({{ site.url }}{{ site.baseurl }}/projects/interpretable)
- "I-AI: A Controllable & Interpretable AI System for Decoding Radiologists' Intense Focus for Accurate CXR Diagnoses" (WACV 2024)

<br>
<br>
<br>
<br>
<br>
<br>
</div>
<!-- 
## Scalability -->



<!-- ![]({{ site.url }}{{ site.baseurl }}/images/respic/mri_img2img.png){: style="width: 300px; float: left;margin-right: 30px; border: 10px"}

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
</div> -->
