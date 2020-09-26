# About Me

This repository stores the source code for my personal website, boostrapped with
[Create React App](https://github.com/facebook/create-react-app), and written in
TypeScript with the [Ant Design](https://ant.design) framework. It is deployed to
[GitHub Pages](https://pages.github.com/) using the `gh-pages` command line tool. If you
have any suggestions or issues viewing the website, or any recommendations on how it can
be improved, please do not hesitate to open an issue or contact me at my personal email,
[jeremy.j.swerdlow@gmail.com](mailto:jeremyjswerdlow@gmail.com). Thank you!

## Code Organization

This code is broken down into the different elements it contains. Within the `src`
directory, you will find the `common`, `modals`, `sections` directories, as well as
files for specific elements of the single page application (SPA). In this section you
will find brief summaries of how each element within the directories and in its
specific file interact with one another.

### `common`

The `common` directory contains stylistic pieces and constant elements that are used in
multiple places of the overall application.

#### `constants`

The `constants` directory defines the colors, and content that are used across different
sections of the application. While other parts of this project organize how the viewer
interacts with the information available, most of the actual content itself is contained
within this directory.

#### `textBodies`

The `textBodies` directory defines styled elements which are seen throughout the
different sections of the application, including how paragraphs, section headers, and
descriptions should be formatted so that the viewer has a consistent experience
regardless of where they look.

### `sections`

The `sectons` directory defines the meat of the application. For each of the linked
sections from the navigation bar at the top of the menu, there is a corresponding file
or directory for the content it includes.

### `App.tsx`

The `App.tsx` file is the main entry point of the application. It includes the layout of
different sections, as well as the other static elements.

### `ContactSidebar.tsx`

The `ContactSidebar.tsx` file sets up the set of links to my other profiles or ways to
contact me as can be seen in the bottom left corner of the SPA regardless of which
section is currently being viewed.

### `NotFoundPage.tsx`

Whenever someone routes to a page other than the default one for the application, this
file handles displaying a `404` page with a link to redirect back to the application
itself.

### `SiteMenu.tsx`

If someone wants to view a specific section in the application, they can click the links
from the top of the application. This file handles how that information is displayed and
handling the linking from those sections to the navigation bar.

## Code Deployment

As mentioned in the summary, this project is currently deployed to GitHub Pages. Thanks
to the hard work of the supporting crew of the NPM package `gh-pages`, this deployment
is done easily. For more information on this package, please view the package's page
[here](https://www.npmjs.com/package/gh-pages).

In the `package.json`'s `scripts` section, you will see two commands beyond those that
are added in the bootstrapping of this project: `predeploy` and `deploy`. To actually
deploy this application to GitHub Pages, the command `npm run deploy` can be used.

## Thanks

Thank you for stopping by and checking out my code! I hope it can act either as a
testament to my levels with frontend development, or as inspiration for you to build
your own personal website. Regardless of what the topic is, please feel free to contact
me at [jeremy.j.swerdlow@gmail.com](mailto:jeremyjswerdlow@gmail.com)