---
title: 'The ABCs of Typescript'
date: '2021-09-03'
---

If you know JavaScript, you owe it to yourself to take a stab at learning TypeScript. Not only will it make you a better developer, it will save you hours of time debugging. It’s not just me—[TypeScript is the second most desired-to-learn languages of 2021](https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-programming-scripting-and-markup-languages). This article aims to provide a super brief overview of everything you need to get started with the wild world of TypeScript, and why it should be added to your dev toolkit. 

TypeScript **(TS)** is a superset language of JavaScript **(JS)**. TS isn't a language in itself, but an add-on to JS, that enhances JS' usefulness and capabilities. TS does so by adding 'strong types' to JS.

JS is a dynamically-typed language, meaning we can play fast and loose with variable declarations, and variables can be reassigned to other variables all willy-nilly like. Which is great for flexibility, but comes with the caveat of being hard to manage. Further, type errors may make it to runtime with JS, while TS will catch them for you before you even compile your code. This saves you a TON of time in the long-run.

TS' primary draw is its ability to help us avoid errors during the development process. Some TS code doesn't even get compiled into JS at all! This isn't wasted code, as writing TS inherently makes your code less error-prone through the power of the dreaded red underline.

Most importantly, TypeScript *is* JavaScript. Any valid JavaScript code will be valid in TypeScript. This makes the barrier to entry low for learning TypeScript, assuming you’ve already got the fundamentals of JavaScript down.

## **Yeah, But What's The Point?**

TS' popularity also stems from how it enhances the developer experience, as it allows code editors to be more efficient through Intelligent Code Completion, which provides auto-complete popups for functions, objects, and query hints for syntax errors. Basically, TS works like a word-processor, informing you of common mistakes as you make them, and auto-completing words based on context. This, in turn, is going to save you a bunch of time and (Google searches!) when writing code. Also, it's completely open source!

## How to **Setup TypeScript**

1. Install typescript `npm install -g typescript`
2. Create a tsconfig.json file and insert the following:

```
{
  "compilerOptions": {
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist"
  },
  "exclude": [
    "node_modules"
  ]
}

```

Alternatively, use tsc --init to generate a tsconfig file 

3. Create a src directory, and within it, create an index.ts file 

4. Write some code. 

5. Compile that bad boy into JS using the `tsc` command from the root directory.

Congratulations! You've written your first TypeScript code!

Alternatively, using VSCode, you can add `// @ts-check` to the top of any JS file to enable TypeScript checking for that file.

It's important to note that any TS code you write will be compiled into JS, as browsers cannot understand TS directly.