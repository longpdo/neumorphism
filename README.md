# Neumorphism <!-- omit in toc -->

> Neumorphism designed Jekyll theme for personal websites, portfolios and resumes.

[![Open Issues](https://badgen.net/github/open-issues/longpdo/neumorphism)](https://github.com/longpdo/neumorphism/issues)
[![License](https://badgen.net/github/license/longpdo/neumorphism)](LICENSE)

[View Demo](https://longpdo.github.io/neumorphism/) · [Report Bug](https://github.com/longpdo/neumorphism/issues) · [Request Feature](https://github.com/longpdo/neumorphism/issues)

<!-- TABLE OF CONTENTS -->
## Table of Contents <!-- omit in toc -->

* [About The Project](#about-the-project)
  * [Built With](#built-with)
  * [Features](#features)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
  * [Personalize and Customize](#personalize-and-customize)
* [Contributing](#contributing)
* [License](#license)
* [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

[![Project Screenshot][product-screenshot]](https://longpdo.github.io/neumorphism/)

This is a personal website built with `Jekyll` and hosted on `Github Pages`, which is based on the new `Neumorphism` design trend. This can be used by developers, who want to showcase their resume and portfolio. If you want to use this for your own website, fork this repository and then refer to [personalize and customize](#personalize-and-customize).

### Built With

* [Jekyll](https://jekyllrb.com/)

### Features

* Gulp dev workflow with [BrowserSync](https://browsersync.io/), [Autoprefixer](https://autoprefixer.github.io/) and `JS` & `SCSS` minifying.
* Animated preloader animation
* Animated landing page background with [particles.js](https://vincentgarreau.com/particles.js/)
* Typing Carousel on the landing page
* [Animations On Scroll](https://michalsnik.github.io/aos/)
* Filterable *Skills* word cloud
* [Github's API](https://developer.github.com/v3/) automatically populating the *Open Source Projects* section
* [Font Awesome](https://fontawesome.com/)
* [Normalize.css](https://necolas.github.io/normalize.css/)
* [Google Analytics](https://analytics.google.com/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* [NodeJS](https://nodejs.org/en/)

```sh
brew install node
```

If you need to switch between Node versions regurlarly, I would recommend to install Node via [Node Version Manager](https://github.com/nvm-sh/nvm/blob/master/README.md#manual-install).

* [Jekyll](https://jekyllrb.com/)

```sh
gem install bundler jekyll
```

For more information, refer to [this](https://jekyllrb.com/docs/installation/).

* [Yarn](https://yarnpkg.com/)

```sh
npm install -g yarn
```

### Installation

1: Clone the repository

```sh
git clone https://github.com/longpdo/neumorphism.git
```

2: Change directory into neumorphism

```sh
cd neumorphism
```

3: Install dependencies

```sh
yarn
```

<!-- USAGE EXAMPLES -->

## Usage

* Run and develop locally with live server at `http://localhost:4000`

```sh
gulp
```

* Build production to minify `JS` and `SCSS` assets before pushing to upstream

```sh
gulp build
```

* After committing and pushing, see the `Settings` page of your repository to see where your site is published at via `Github Pages`.

### Personalize and Customize

1: Edit `_config.yml` to personalize your site. For documentation, refer to [docs/config.md](https://github.com/longpdo/neumorphism/blob/master/docs/config.md).

1.1: If you want to automatically have your Github repositories pulled for the *Open Source Projects* section, then you also need to authenticate yourself for the Github Metadata plugin to work.

You need to generate a new personal access token on GitHub:

* Go to the [Github Token site](https://github.com/settings/tokens/new)
* Select the scope `public_repository`, and add a description.
* Confirm and save the settings. Copy the token you see on the page.
* Create a `.env` file inside your repository and add your generated `JEKYLL_GITHUB_TOKEN`:

```text
JEKYLL_GITHUB_TOKEN=0YOUR0GENERATED0TOKEN0
```

2: Edit files inside `_data` to add information to the portfolio. For documentation, refer to [docs/data.md](https://github.com/longpdo/neumorphism/blob/master/docs/data.md).

3: Edit `assets/particles.json` to customize the landing page backgorund animation. For more information, refer to [this](https://github.com/VincentGarreau/particles.js/#options).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

* Based Preloader on [Codrin Pavel's](https://codepen.io/zerospree/pen/aCjAz) version
* Typing Carousel by [Gregory Schier](https://codepen.io/gschier/pen/jkivt)
* Social Button Animation by [Stéphane Lyver](https://codepen.io/wouwi/pen/Lwrmi)
* Adapted [Damian Jankowski's](https://codepen.io/dolaron/pen/rNadmOE) color palette for the neumorphism design
* Based Timeline on [Krishna Babu's](https://codepen.io/krishnab/pen/OPwqbW) version

<!-- MARKDOWN LINKS & IMAGES -->

[product-screenshot]: docs/screenshot.gif
