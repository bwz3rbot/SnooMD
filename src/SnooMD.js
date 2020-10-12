/*
Reddit Markdown:
https://www.reddit.com/wiki/markdown
*/
class Markdown {
    constructor() {
        this.italic = "_"
        this.bold = "__"
        this.bold_italic = "___"
        this.strikethrough = "~~"
        this.spoilers = ">!"
        this.codeblock = "\`"
    }
    apply = function (str, md) {
        return md + str + md.split("").reverse().join("");
    }
    superscript = function (str) {
        return `^(${str})`;
    }
    link = function (url,t) {
        let u;
        url.includes('"') ?
            u = url.replace(/\"/g, '\\"') : u = url;
        return !t ?
            `[${url}](${u})` :
            `[${t}](${u})`;
    }
    h1 = function (str) {
        return `#${str}`;
    }
    h2 = function (str) {
        return `##${str}`;
    }
    h3 = function (str) {
        return `###${str}`;
    }
    ul = function (str) {
        return `- ${str}`
    }
    ol = function (str, n) {
        return `  ${n}. ${str}`
    }
    blockquote = function (str) {
        return `> ${str}`
    }
    fence = function (str) {
        return `\`\`\`\n${str}\n\`\`\``
    }
    table = function (headers, rows) {
        return new Table(headers, rows).build()
    }

}


/*
To Build a table, requires:
Array of header names (Strings)
An array of row objects with keys related to the headers.
It will automatically set the alignment to the first columns to center, with the final column being left aligned.
*/
class Table {
    constructor(headers, rows) {
        this.headers = headers
        this.rows = rows
        this.a = {
            left: ":-",
            right: "-:",
            center: ":-:"
        }
    }

    build = function () {
        // Headers
        let h = "|";
        this.headers.forEach(header => {
            h += `${header}|`
        });
        // Seperators/Alignment
        let s = "|"
        for (let i = 0; i < this.headers.length - 1; i++) {
            s += `${this.a.center}|`;
        }
        s += `${this.a.left}|`;
        // Rows
        let r = "|";
        this.rows.forEach((row, index) => {
            let values = Object.values(row)
            for (const value of values) {
                r += `${value}|`
            }
            index < this.rows.length - 1 ? r += `\n|` : r += `\n`;
        })
        return `${h}\n${s}\n${r}`;
    }
}
module.exports = {
    Markdown
}