# Documentation for _data/*.yml files

## projects.yml

* `name`: Name of your project
* `descr`: Description of your project
* `demo`: Link to your project
* `tags`: List of technologies you used in your projects

Example of a project:

```yml
- name: project X
  descr: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
  demo: https://example.com/
  tags:
    - tag: MongoDB
    - tag: Express
    - tag: AngularJS
    - tag: Node
```

## skills-[skill_type].yml

* `name`: Name of your skill
* `weight`: Describes how good you know this skill - values from 1 up to 5

Example:

```yml
- name: Git
  weight: 3
```

## timeline.yml

* `title`: Name of your timeline entry, university or work place
* `title-url`: Link to your timeline entry, university or work place
* `date`: Time span
* `subtitle`: The description under the title
* `tags`: List of tags you want to associate with the entry

Example of a timeline entry:

```yml
- title: airbnb
  title-url: https://example.com/
  date: Sep 2019 - Present
  subtitle: Fullstack Developer
  tags:
    - tag: React
    - tag: Javascript
    - tag: Ruby
    - tag: Rails
```
