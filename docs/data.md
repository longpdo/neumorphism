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

## skills-frameworks.yml

* `name`: Name of your framework
* `weight`: Describes how good you know the framework - values from 1 up to 5

Example of a framework:

```yml
- name: Jekyll
  weight: 3
```

## skills-languages.yml

* `name`: Name of your programming language
* `weight`: Describes how good you know the language - values from 1 up to 5

Example of a language:

```yml
- name: CSS
  weight: 3
```

## skills-tools.yml

* `name`: Name of your dev tool
* `weight`: Describes how good you know the tool - values from 1 up to 5

Example of a dev tool:

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
* `timeline-side`: The side on which you want to display the entry - left or right

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
  timeline-side: right
```
