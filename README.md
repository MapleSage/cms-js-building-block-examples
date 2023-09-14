# HubSpot CMS JS Building Blocks - Examples

## Welcome!

Thank you for taking the time to explore this new direction for the HubSpot CMS! As always our goal is to solve for our customers so we welcome any and all feedback. Chat away in [\#cms-js-rendering](https://hubspotdev.slack.com/archives/C04AY1H2204) with other HubSpot developers who are pushing forward with CMS JS Building Blocks.

## What are the new JS building blocks?

JavaScript modules and partials are new building blocks you can use to write React and JavaScript instead of HubL inside the HubSpot CMS. Note this doesn’t mean you will switch entirely away from HubL immediately, rather we want to provide a pathway to begin writing React to render on both on the server and client. JS modules and partials are built from React components and can directly be referenced via HubL tags in your templates.

## Can I use JS Building Blocks with my CMS portal?

Yes! JS Building Blocks are generally available and can be used with all tiers of the CMS, including free.

## Documentation
[Link to documentation](https://github.hubspot.com/cms-js-building-block-examples/)

## Building Block Examples

In this repository is example usage of some of key features of JS Building Blocks. These examples are are best understood alongside our official [documentation](docs). You can quickly try things out without any local setup by [opening this repo in Codesandbox.io](https://codesandbox.io/p/sandbox/stoic-pateu-g20chg?file=%2Fcms-js-building-block-examples%2FREADME.md).

<img width="400" alt="Preview of examples in Codesandbox.io interface" src="https://github.com/HubSpot/cms-js-building-block-examples/assets/60455/e8ab456e-39a6-4919-b256-584cd7054cb2">

<br>

### [Hello World](hello-world)

The "Hello World" example combines CSS modules for styling, partials, modules and islands to show a more cohesive yet straightforward example of how various parts of the new Building Blocks work together.

### [Styling](styling)

In this example, we take a look a three different approaches to styling JS Building Blocks. This is not an exhaustive list and there are many ways that styles can be organized and implemented.

### [Islands](islands)

Islands are a key concept for JS Building Blocks in HubSpot. In addition to stitching server-rendered React components into the HTML generated by HubL, JS modules and partials support client-side interactivity with islands. Similar to the islands concept from [Astro](https://astro.build/), [Fresh](https://fresh.deno.dev/), and others, you can add an `<Island />` inside your JS module or partial to automatically code-split and render a component on both the server and client. In addition to allowing you to reuse JavaScript code between the server and browser, islands help you write performant websites by giving you precise control over what JavaScript is shipped to the browser and when it runs.

### [Graphql + Storybook](graphql-storybook)

GraphQL is the future for querying HubSpot data in your CMS pages. As part of JS Modules, a developer can export a GraphQL query string and the Module's root component will then be passed the query result. Additionally we show how a Module that uses GraphQL can be developed using our Storybook integration. This integration will automatically understand the field types of a module and generate controls for a Storybook story.

### [Todo MVC](todo-mvc)

It seems with every new FE technology on the web comes an implemetation of TodoMVC. We didn't want to be left out and ported a recent version that made use of React and React hooks to work as a JS Module with Islands. Additionally there is an example of our `sharedIslandReducer` which provides a redux like interface for sharing state across islands.

