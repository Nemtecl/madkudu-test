# Antelope Species

MadKudu technical assessment that compare antelope species

## Prerequisite

- yarn >= 1.22.4
- node >= 16.13.0
- Internet connection (for the API)

## Getting started

```bash
# Install dependencies
$ yarn

# Run the project
$ yarn start
```

## Presentation

### Goal

Dataviz app that displays statistics about antelop species. Data are fetched from this [endpoint](https://work-sample-mk-fs.s3-us-west-2.amazonaws.com/species.json).

### Features

- Table with filter and sort containing antelopes data (Name, Continent, Weight, Height, Horns)
- Detail view (Name, Continent, Weight, Height, Horns, Picture and a map with the continent highlighted)
- Pie charts (horns)
- Line charts (weight or heights)
- GeoChart (Continent)
- Comparison between two species

## Technical stack

- React
- TypeScript : Make code easier to read/understand and helps to avoid a lot of bugs
- Material UI : Design System allowing the establishment of a fast and powerful technical front base
- Axios : Fetching the API. Allows you to have a global configuration
- React google chart: For displaying Geo, Pie and Scatter charts

### Architecture

```bash
.
├── .vscode                        # VSCode configuration folder.
│   ├── extensions.json            # IDE extensions recommendations.
│   └── settings.json              # IDE settings.
├── public                         # Root folder for configurations.
│   ├── favicon.ico                # Favicon.
│   ├── index.html                 # html file.
│   └── manifest.json              # Manifest.
├── node_modules                   # Node Packages.
├── src                            # Source code.
│   ├── @types                     # TypeScript interfaces, types and enums.
│   │   ├── Antelope.ts            # Type example.
│   │   └── index.ts               # Exports all elements in this folder.
│   ├── components                 # React Components.
│   │   ├── Layout                 # Example of component folder structure.
│   │   │   └── index.tsx          # TypeScript XML code.
│   │   └── index.ts               # Exports all elements in this folder.
│   ├── services                   # Services for consuming an API.
│   │   ├── users.ts               # Service example.
│   │   └── index.ts               # Exports all elements in this folder.
│   ├── utils                      # Services for consuming an API.
│   │   ├── axios.ts               # Axios configuration.
│   │   └── index.ts               # Exports all elements in this folder.
│   ├── pages                      # React Components that represents a screen.
│   │   ├── Home                   # Example of pages folder structure.
│   │   │   └── index.tsx          # TypeScript XML code.
│   │   └── index.ts               # Exports all elements in this folder.
│   └── index.tsx                  # Entry point.
├── .eslintrc                      # Lint configuration.
├── .gitignore                     # Tells git which files to ignore.
├── .prettierrc                    # Prettier configuration.
├── package.json                   # Package configuration.
├── README.md                      # This file.
└── tsconfig.json                  # TypeScript transpiler configuration.
```

## Configuration

The [.vscode](.vscode/) folder contains a default configuration for the IDE.

I enabled the following options in the [tsconfig.json](tsconfig.json) :

- baseUrl for relative import
- noUnusedLocals and noUnusedParameters for better readability

Prettier, Eslint to check syntax and enforce code style.

### Go further

- Advanced chart
- Custom design system
- Deploying (+ dockerize)
- CI/CD
- Test (Unit test, e2e...) with Jest or Cypress
