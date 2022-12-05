---
title: "AICV Lab - Research"
layout: textlay
excerpt: "AICV Lab -- Research"
sitemap: false
permalink: /research/
---

# Computer Vision

---
![]({{ site.url }}{{ site.baseurl }}/images/respic/vltint_vpc_demo1.gif){: style="width: 300px; float: left;margin-right: 30px; border: 10px"}

## Vedeo Paragraph Captioning
<div style="text-align: justify">
Video paragraph captioning aims to generate a multi-sentence description of an untrimmed video with several temporal event locations in coherent storytelling. 
Following the human perception process, where the scene is effectively understood by decomposing it into visual (e.g. human, animal) and non-visual components (e.g. action, relations) under the mutual influence of vision and language, we first propose a visual-linguistic (VL) feature. In the proposed VL feature, the scene is modeled by three modalities including (i) a global visual environment; (ii) local visual main agents; (iii) linguistic scene elements. We then introduce an autoregressive Transformer-in-Transformer (TinT) to simultaneously capture the semantic coherence of intra- and inter-event contents within a video. Finally, we present a new VL contrastive loss function to guarantee learnt embedding features are matched with the captions semantics. Comprehensive experiments and extensive ablation studies on ActivityNet Captions and YouCookII datasets show that the proposed Visual-Linguistic Transformer-in-Transform (VLTinT) outperforms prior state-of-the-art methods on accuracy and diversity. 
</div>

---
![]({{ site.url }}{{ site.baseurl }}/images/respic/tapg.gif){: style="width: 300px; float: left;margin-right: 30px; border: 10px"}

## Temporal Action Proposal Generation
<div style="text-align: justify">
Temporal action proposal generation (TAPG) is a challenging task, which requires localizing action intervals in an untrimmed video. Intuitively, we as humans, perceive an action through the interactions between actors, relevant objects, and the surrounding environment. Despite the significant progress of TAPG, a vast majority of existing methods ignore the aforementioned principle of the human perceiving process by applying a backbone network into a given video as a black-box. In this paper, we propose to model these interactions with a multi-modal representation network, namely, Actors-Objects-Environment Interaction Network (AOE-Net). Our AOE-Net consists of two modules, i.e., perception-based multi-modal representation (PMR) and boundary-matching module (BMM). Additionally, we introduce adaptive attention mechanism (AAM) in PMR to focus only on main actors (or relevant objects) and model the relationships among them. PMR module represents each video snippet by a visual-linguistic feature, in which main actors and surrounding environment are represented by visual information, whereas relevant objects are depicted by linguistic features through an image-text model. BMM module processes the sequence of visual-linguistic features as its input and generates action proposals. Comprehensive experiments and extensive ablation studies on ActivityNet-1.3 and THUMOS-14 datasets show that our proposed AOE-Net outperforms previous state-of-the-art methods with remarkable performance and generalization for both TAPG and temporal action detection.
</div>

---
![]({{ site.url }}{{ site.baseurl }}/images/respic/hand_on_steering_wheel.png){: style="width: 300px; float: left;margin-right: 30px; border: 10px"}

## Hand On Steering Wheel Detection and Classification
<div style="text-align: justify">
This paper presents an advanced Convolutional Neural Network (ConvNet) based approach, named Multiple Scale Region-based Fully Convolutional Networks (MS-RFCN), for hand detection and classification. In order to robustly deal with the challenging factors, we proposed to span the receptive fields in the ConvNet in multiple deep feature maps. By this way, both global and local context information are able to be efficiently synchronized and simultaneously contribute to the human hand feature representation process. 

The experiments are presented on the challenging hand databases, i.e. the Vision for Intelligent Vehicles and Applications (VIVA) Challenge and Oxford Hand Detection database. Our proposed method achieves the state-of-the-art results.
</div>


# Robotics

---
![]({{ site.url }}{{ site.baseurl }}/images/respic/go1_isaac_gym.gif){: style="width: 300px; float: left;margin-right: 30px; border: 10px"}

## Robust Gait Learning via Reinforcement Learning
<div style="text-align: justify">
While quadrupeds can open the operational domains of robots thanks to their dynamic locomotion capabilities, conventional controllers for legged locomotion constraint their applications to relatively simple environments that can be taken over by wheeled robots.
Here we use reinforcement learning to train a quadruped to walk on various terrains. In the simulation, a quadruped robot (Unitree Go1) learns to walk across challenging terrain, including uneven surfaces, slopes, stairs, and obstacles, while following linear- and angular- velocity commands.
</div>

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