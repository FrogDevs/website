# Frogdevs - Website

[![Languages](https://img.shields.io/github/languages/count/FrogDevs/website)](https://github.com/FrogDevs/website)
[![TopLanguage](https://img.shields.io/github/languages/top/FrogDevs/website)](https://github.com/FrogDevs/website)
[![Files](https://img.shields.io/github/directory-file-count/FrogDevs/website)](https://github.com/FrogDevs/website)
[![RepoSize](https://img.shields.io/github/repo-size/FrogDevs/website)](https://github.com/FrogDevs/website)
[![LinesCode](https://img.shields.io/tokei/lines/github/FrogDevs/website)](https://github.com/FrogDevs/website)
[![MIT License](https://img.shields.io/github/license/FrogDevs/website)](https://choosealicense.com/licenses/mit/)

[**>>> Read also in English**](en_readme.md)

Official website of the Frogdevs TCC team. Landing page in SPA (Single Page Application) format with important information, such as work done for the company Equilíbrio Natural (Natural Balance) and team members.

## Screenshot
![image](https://user-images.githubusercontent.com/66970818/215226101-1a0b98a4-e564-4493-841b-b47af9345fb0.png)

## Apêndice

* [Assignments](#assignments)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Lessons Learned](#lssons-learned)
* [Optimizations](#optimizations)
* [Demo](#demo)
* [Related](#related)
* [Licença](#license)

## Atribuições:

 - [Figma - Web Desing](https://www.figma.com/community/file/1201319533908803616)
 - Fonts:
   - [Poppins](https://fonts.google.com/specimen/Poppins)
   - [PT Serif](https://fonts.google.com/specimen/PT+Serif)
  
 - [Icons: Remixicon](https://github.com/Remix-Design/remixicon)
 - [useDark](https://vueuse.org/core/usedark/#usedark)

## Features

- 🎨 Light and dark themes
- 🌎 Internationalization
- ✨ Interactive cards

## Tech Stack

**Front-end:** [Vite](https://vitejs.dev), [Vue](https://vuejs.org), [UnoCSS](https://github.com/unocss/unocss), [VueUse](https://vueuse.org/) and [Vue I18n](https://vue-i18n.intlify.dev/)

## Lessons Learned

**What challenges were faced and how were they overcome?**

It was a big challenge to project the web design, being a process that involved a lot of creativity and inspirations, such as: [Turbo](https://turbo.build/) and the [Steam Deck] website (https://www.steamdeck.com/). A unique identity was sought to represent the team with strong, eye-catching colors that would work well in both a light and dark theme. In addition, we sought a modern aesthetic using: Gradients, vectors and animations.

The logic for closing the modals was done manually. First we get the area and the coordinates of the modal. Then, we observe the user's click. If this click is made outside the area of the modal, it is closed.

Adding internationalization to a website is a challenge that requires dedication and attention to detail. This involves adapting the content of the website to different languages and cultures in order to serve a global audience.

## Optimizations

**What optimizations have been made in the code?**

The **Pnpm** package manager was chosen for the project because it offers *cold and hot caching*. Pnpm is 3x faster and more efficient than Npm and faster than Yarn. Dealing with numerous libraries and modules was an easier and safer task with this tool.

**Vite** is a tool with the utility to take care of the application bundle. It provides better optimization techniques, resulting in higher application performance both in development and production form for the end user.

The site was built using the *Mobile First* concept. This concept refers to creating any design that prioritizes the experience on mobile devices, while making adaptations for higher resolutions. This allows the site to be completely responsive and adaptable to other screen resolutions, allowing for greater customer inclusion.

## Demo

We use Netlify for the online implementation of the site

- [Deploy](https://frogdevs.netlify.app/)

## Run locally

***Note: You must have the Pnpm package manager. [See how to install.](https://pnpm.io/installation)*

Clone the project

```bash
  git clone https://github.com/FrogDevs/website.git
```

Go to the project directory

```bash
  cd website
```

Install the dependencies

``bash
  pnpm i
```

Start the server

```bash
  pnpm dev
```
## Related

See other related projects

- [Equilíbrio Natural - Stock Control](https://github.com/FrogDevs/equilibrionatural-controle_estoque)
- [Equilíbrio Natural - Website](https://github.com/FrogDevs/Equilibrio-Natural-Website)

## Responsible Members

- Web Design and Front-end: [@viniciuscosta](https://github.com/Jolonte)

## Licença

- [MIT](LICENSE)<br><br>

<p align="right">“You have to be burning with an idea, or a problem, or a wrong that you want to right. If you’re not passionate enough from the start, you’ll never stick it out.”</p>
<p align="right">Steve Jobs</p>
