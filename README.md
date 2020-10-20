# SnooMD

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)

## About <a name = "about"></a>

SnooMD is a markdown editor for Reddit Bots.

## Getting Started <a name = "getting_started"></a>

Simply require the package, and use the functions to enhance your text posts.


### Installing

Download the single file SnooMD.js and put it in your project.\
Require the package and create a new Markdown object.

```javascript
const {
    Markdown
} = require('SnooMD');
const md = new Markdown();

```


## Usage <a name = "usage"></a>

How to format your markdown strings:

```javascript
const MarkdownString =
`Hello There! ${md.apply("Bolded Text!", md.bold)}\n
This will be ${md.superscript("SUPERSCRIPTED!")}\n
Here is a fancy codeblock:\n
${md.apply('console.log(markdown)',md.codeblock)}\n
Here is a named link: ${md.link("https://www.google.com","search")}\n
Here is some fenced text: \n${md.fence("Fenced text here for ya")}`
```
Logging this string will result in this:
~~~javascript
Hello There! __Bolded Text!__ 

This will be ^(SUPERSCRIPTED!)

Here is a fancy codeblock:    

`console.log(markdown)`       

Here is a named link: [search](https://www.google.com)

Here is some fenced text:
```javascript
Fenced text here for ya
```
~~~

You can easily create tables by using the table function:

```javascript
// Tables
const row1 = {
    rating: "5",
    type: "Trade",
    comments: "https://www.reddit.com/r/s/g6j7nix?utm_source=share&utm_medium=web2x&context=3"
}
const row2 = {
    rating: "2",
    type: "Giveaway",
    comments: `https://www.reddit.com/r/s/g6j7nix?utm_source=share&utm_medium=web2x&context=3`
}
const row3 = {
    rating: "1",
    type: "Sale",
    comments: "https://www.reddit.com/r/s/g6j7nix?utm_source=share&utm_medium=web2x&context=3"
}
const t = md.table(["Rating", "Type", "Comments"], [row1,row2,row3])
```
This will result in text formatted as such:
```javascript
|Rating|Type|Comments|
|:-:|:-:|:-|
|5|Trade|https://www.reddit.com/r/s/g6j7nix?utm_source=share&utm_medium=web2x&context=3|
|2|Giveaway|https://www.reddit.com/r/s/g6j7nix?utm_source=share&utm_medium=web2x&context=3|
|1|Sale|https://www.reddit.com/r/s/g6j7nix?utm_source=share&utm_medium=web2x&context=3|
```

See more information about reddit markdown formatting here:
https://www.reddit.com/wiki/markdown#wiki_blockquotes
