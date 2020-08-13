# Neumorphism <!-- omit in toc -->

> Neumorphism designed Jekyll theme for personal websites, portfolios and resumes.

* Featured on [JAMstack Themes](https://jamstackthemes.dev/theme/jekyll-neumorphism/)
* Featured on [Jekyll Themes](https://jekyll-themes.com/neumorphism/)
* Featured on [jekyllthemes](http://jekyllthemes.org/themes/neumorphism/)

[![Open Issues](https://badgen.net/github/open-issues/longpdo/neumorphism)](https://github.com/longpdo/neumorphism/issues)
[![License](https://badgen.net/github/license/longpdo/neumorphism)](LICENSE)
<a href="https://jekyll-themes.com">
    <img src="https://img.shields.io/badge/featured%20on-JT-red.svg" height="20" alt="Jekyll Themes Shield" >
</a>

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
    * [_config.yml](#_configyml)
    * [Github Metadata Plugin](#github-metadata-plugin)
    * [_data/*.yml](#_datayml)
    * [Particles.js](#particlesjs)
* [Contributing](#contributing)
* [License](#license)
* [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

[![Project Screenshot][product-screenshot]](https://longpdo.github.io/neumorphism/)

This is a personal website built with `Jekyll` and hosted on `Github Pages`, which is based on the new `Neumorphism` design trend and was developed with a mobile-first approach. This can be used by developers, who want to showcase their resume and portfolio. If you want to use this for your own website, fork this repository and then refer to [personalize and customize](#personalize-and-customize).

### Built With

* [Jekyll](https://jekyllrb.com/)

### Features

* Mobile-First Responsive Design
* Animated preloader animation
* Landing Page with animated background with [particles.js](https://vincentgarreau.com/particles.js/), a Typing Carousel and animated social icons
* Dark Neumorphism Design on main content
* [Animations On Scroll](https://michalsnik.github.io/aos/)
* Filterable *Skills* word cloud
* [Github's API](https://developer.github.com/v3/) automatically populating the *Open Source Projects* section
* Gulp dev workflow with [BrowserSync](https://browsersync.io/), [Autoprefixer](https://autoprefixer.github.io/) and `JS` & `SCSS` minifying.
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

> Recommended way: If you want to contribute to this theme or open issues due to problems implementing this on your own, I would recommend forking the repository directly. This makes it easier for me to solve open issues and questions or check pull requests.

1.1: Fork the repository (using the `Fork` button at the top) and then clone the repository

```sh
# Replace {YOUR_USERNAME} with your actual username
git clone https://github.com/{YOUR_USERNAME}/neumorphism.git
```

or

1.2: Create your own repository (using the green `Use this template` button at the top) and then clone the repository

```sh
# Replace {YOUR_USERNAME}, {YOUR_REPOSITORY} with the actual values
git clone https://github.com/{YOUR_USERNAME}/{YOUR_REPOSITORY}.git
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

* Run and develop locally with live server at `http://localhost:4000`, this will also build production-ready `JS` and `SCSS` assets with every change

```sh
gulp
```

* After committing and pushing, see the `Settings` page of your repository to see where your site is published at via `Github Pages`.

### Personalize and Customize

#### _config.yml

Edit `_config.yml` to personalize your site. For documentation, refer to [docs/config.md](https://github.com/longpdo/neumorphism/blob/master/docs/config.md).

#### Github Metadata Plugin

If you want to automatically have your Github repositories pulled for the *Open Source Projects* section, then you also need to authenticate yourself for the Github Metadata plugin to work.

You need to generate a new personal access token on GitHub:

* Go to the [Github Token site](https://github.com/settings/tokens/new)
* Select the scope `public_repository`, and add a description.
* Confirm and save the settings. Copy the token you see on the page.
* Create a `.env` file inside your repository and add your generated `JEKYLL_GITHUB_TOKEN`:

```text
JEKYLL_GITHUB_TOKEN=0YOUR0GENERATED0TOKEN0
```

To complete the configuration for the Github Metadata plugin, you also need to change the value of `repository` inside `_config.yml`. After this, you should the Github Metadata plugin should work properly.

For optimal results, you should make sure, that every Github project, you want included on this portfolio, has added following informations on Github:

* Description
* Homepage link, if there is a live version of it
* Topics

Example:
![Github Repository Information Example][github-repo-info]

#### _data/*.yml

Edit files inside `_data` to add information to the portfolio. For documentation, refer to [docs/data.md](https://github.com/longpdo/neumorphism/blob/master/docs/data.md).

#### Particles.js

Edit `assets/particles.json` to customize the landing page backgorund animation. For more information, refer to [this](https://github.com/VincentGarreau/particles.js/#options).

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

* [Font Awesome](https://fontawesome.com/)
* [Normalize.css](https://necolas.github.io/normalize.css/)
* Based Preloader on [Codrin Pavel's](https://codepen.io/zerospree/pen/aCjAz) version
* Typing Carousel by [Gregory Schier](https://codepen.io/gschier/pen/jkivt)
* Social Button Animation by [Stéphane Lyver](https://codepen.io/wouwi/pen/Lwrmi)
* Adapted [Damian Jankowski's](https://codepen.io/dolaron/pen/rNadmOE) color palette for the neumorphism design
* Based Timeline on [Krishna Babu's](https://codepen.io/krishnab/pen/OPwqbW) version

<!-- MARKDOWN LINKS & IMAGES -->

[product-screenshot]: https://raw.githubusercontent.com/longpdo/neumorphism/master/docs/screenshot.gif
[github-repo-info]: https://raw.githubusercontent.com/longpdo/neumorphism/master/docs/github-repo-info.png
