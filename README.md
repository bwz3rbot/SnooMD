# SnooMD Reddit Flavour Markdown Editor

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Example](#example)

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

# Example <a name="exmaple">
    
    See what you can make with this useful tool!


# Categorized User Tables Example: <a name = "wiki.users"></a> `(UPDATE 10-17-20)`
[A](https://www.reddit.com/r/Bwz3rBot/wiki/userdirectory/a) |
 [B](https://www.reddit.com/r/Bwz3rBot/wiki/userdirectory/b) |
 [C](https://www.reddit.com/r/Bwz3rBot/wiki/userdirectory/c) |
 [D](https://www.reddit.com/r/Bwz3rBot/wiki/userdirectory/d) |
 [E](https://www.reddit.com/r/Bwz3rBot/wiki/userdirectory/e) |
 [F](https://www.reddit.com/r/Bwz3rBot/wiki/userdirectory/f) |
 [G](https://www.reddit.com/r/Bwz3rBot/wiki/userdirectory/g) |
 [H](https://www.reddit.com/r/Bwz3rBot/wiki/userdirectory/h) |
 [I](https://www.reddit.com/r/Bwz3rBot/wiki/userdirectory/i) |
 [J](https://www.reddit.com/r/Bwz3rBot/wiki/userdirectory/j) |
 [K](https://www.reddit.com/r/Bwz3rBot/wiki/userdirectory/k) |
 [L](https://www.reddit.com/r/Bwz3rBot/wiki/userdirectory/l) |
 [M](https://www.reddit.com/r/Bwz3rBot/wiki/userdirectory/m) |
 [N](https://www.reddit.com/r/Bwz3rBot/wiki/userdirectory/n) |
 [O](https://www.reddit.com/r/Bwz3rBot/wiki/userdirectory/o) |
 [P](https://www.reddit.com/r/Bwz3rBot/wiki/userdirectory/p) |
 [Q](https://www.reddit.com/r/Bwz3rBot/wiki/userdirectory/q) |
 [R](https://www.reddit.com/r/Bwz3rBot/wiki/userdirectory/r) |
 [__S__](https://www.reddit.com/r/Bwz3rBot/wiki/userdirectory/s) |
 [T](https://www.reddit.com/r/Bwz3rBot/wiki/userdirectory/t) |
 [U](https://www.reddit.com/r/Bwz3rBot/wiki/userdirectory/u) |
 [V](https://www.reddit.com/r/Bwz3rBot/wiki/userdirectory/v) |
 [W](https://www.reddit.com/r/Bwz3rBot/wiki/userdirectory/w) |
 [X](https://www.reddit.com/r/Bwz3rBot/wiki/userdirectory/x) |
 [Y](https://www.reddit.com/r/Bwz3rBot/wiki/userdirectory/y) |
 [Z](https://www.reddit.com/r/Bwz3rBot/wiki/userdirectory/z) |
 [etc](https://www.reddit.com/r/Bwz3rBot/wiki/userdirectory/etc)

-----

## SnootyScraper

★★★★☆(average score:4, total reviews:2)

|Rating|Type|Comments|Permalink|
|:-:|:-:|:-:|:-|
|4|sale|pretty good sale!|/r/Bwz3rBot/comments/jaha01/new_follow_thread/g95r9yj/|
|5|trade|What a great Trade!|/r/Bwz3rBot/comments/jaha01/new_follow_thread/g95r5wu/|


## stickRollBot

★★☆☆☆(average score:2, total reviews:2)

|Rating|Type|Comments|Permalink|
|:-:|:-:|:-:|:-|
|1|sale|horrible sale!|/r/Bwz3rBot/comments/jaha01/new_follow_thread/g95r79a/|
|4|sale|alright sale!|/r/Bwz3rBot/comments/jaha01/new_follow_thread/g95r8ln/|
