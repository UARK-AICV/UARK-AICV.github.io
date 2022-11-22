# AICV Lab

## Usage
### Add publications
1. modify `data/publist.yml`
1. add picture to `images/pubpic/`

Follow:
```yaml
- title: "Constructing and optimizing 3D atlases from 2D data with application to the developing mouse brain"
  image: Young2021.png
  description: 
  authors: 
  link:
    url: https://elifesciences.org/articles/61408
    display:  Young et al. eLife (2021)
  type: 1
  news2: 
```

The corresponding type is:
- `1`: Conference Papers
- `2`: Journal Papers
- `3`: Patents

### Add news
1. modify `data/news.yml`
1. add picture to `images/newspic/`

Follow:
```yaml
- date: Dec 13th 2018
  headline: "New paper! <a href='http://science.sciencemag.org/content/362/6420/eaat6576.long'> An et al. 2018 </a> published in Science, highlights the role of promoters in autism."

```

### Add team member
1. modify `data/team_members.yml`
1. add markdown file to `team/`
1. add picture to `images/teampic/`

The corresponding group is:
- `0`: PI
- `1`: PostDocal
- `2`: Graduate students
- `3`: Undergraduate students
- `4`: Visiting scholar
- `8`: Alumni

Follow:
```yaml
- name: Stephan Sanders
  photo: stephansanders.jpg
  info: Associate Professor
  url: stephansanders
  group: 0
```

### Add sponser
1. add picture to `images/logopic/`

### Open positions
- edit `_pages/recruitment.md`

## Acknowledgement
Our website is based on the open source templates designed and shared by the labs of [D. Allan Drummond](http://www.allanlab.org/aboutwebsite.html) and [Trevor Bedford](http://bedford.io/misc/about/) and modified by [Sanders Lab](https://github.com/sanderslab/sanderslab.github.io). We downloaded source codes from their repository and modified our contents based on shared templates. We greatly thank for this beaultiful codebase. 

The website is deployed using GitHub Pages and the source code is available on GitHub. Please feel free to reuse this code (making sure to cite the Bedford lab and Drummond lab as the original sources of the lab website template).
