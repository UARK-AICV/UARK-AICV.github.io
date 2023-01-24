import yaml
import os

def get_data(name, info, handle, group):
    return {
        "name": name,
        "photo": f"{handle}.png",
        "info": info,
        "url": handle,
        "group": group,
    }

def get_template(name, info, handle):
    return f"""---
layout: member
title: {name}
position: {info}
handle: {handle}
email: 
twitter:
github:
scholar: 
linkedin: 
photo: {handle}.png
---

### Overview


### Education
- BS, Degree, Univ (Year)"""

STUDENT_TYPES = {
    "1": "Post Doctal Student",
    "2": "Ph.D. Student",
    "3": "Master's Student",
    "4": "Undergraduate Honor Student",
    "5": "Visiting Student",
    "6": "Alumni"
}

STUDENT_TYPES_TO_GROUP = {
    "1": 1,
    "2": 2,
    "3": 2,
    "4": 3,
    "5": 4,
    "6": 8
}

if __name__ == "__main__":
    print("please follow the instruction")
    name = input("type the student name: ")
    handle = name.replace(" ", "_").lower()
    member_type = input("""
        1: Post Doctal Student,
        2: Ph.D. Student,
        3: Master's Student,
        4: Undergraduate Honor Student,
        5: Visiting Student,
        6: Alumni
        select the student type: """
    )

    info = STUDENT_TYPES[member_type]
    group = STUDENT_TYPES_TO_GROUP[member_type]

    BASE_PATH = os.path.dirname(os.path.abspath(__file__))
    with open(os.path.join(BASE_PATH, "_data/team_members.yml"), "r") as f:
        cur_yaml = yaml.safe_load(f)
        cur_yaml.append(get_data(name, info, handle, group))

    with open(os.path.join(BASE_PATH, "_data/team_members.yml"), "w") as f:
        yaml.safe_dump(cur_yaml, f)

    with open(os.path.join(BASE_PATH, f"team/{handle}.md"), "w") as f:
        f.write(get_template(name, info, handle))