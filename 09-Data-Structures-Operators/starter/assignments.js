'use strict';

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

/*
1.1﻿
Destructure the books array into two variables called firstBook and secondBook.
*/
const [firstBook, secondBook] = books;
console.log(firstBook, secondBook);

/*
1.2﻿
Destructure the books array into a variable called thirdBook. 
You must skip the first two books.
*/
const [, , thirdBook] = books;
console.log(thirdBook);

/*
1.3﻿
Below is the nested ratings array that contains two other arrays. 
Destructure the nested ratings arrays into two variables called rating and ratingsCount.
In the result of your destructuring, the ratings variable should store a number 4.19,
 and the ratingsCount variable should store a number 144584.
*/
const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];
const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);

/*
1.4﻿
Below is the ratingStars array. 
Destructure it into three variables called fiveStarRatings, oneStarRatings and threeStarRatings. 
Assign the threeStarRatings variable with a default value of 0.
*/
const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

/*
Destructuring Objects﻿
2.1﻿
Destructure the first book object from the books array into variables called title, author and ISBN.
*/
const { title, author, ISBN } = books[0];
console.log(title, author, ISBN);

/*
2.2﻿
Each book object has the keywords property. 
Destructure the first book object from the books array into a variable called tags. 
The tags variable should be assigned with the value of the keywords property.
*/
const { keywords: tags } = books[0];
console.log(tags);

/*
2.3﻿
The seventh book from the books array is missing the programmingLanguage property. 
Destructure the seventh book object (books[6]) into variables called language and programmingLanguage. 
Assign the programmingLanguage variable with a default value of 'unknown'.
*/
const { language, programmingLanguage = 'unknown' } = books[6];
console.log(language, programmingLanguage);

/*
2.4﻿
Below are two variables called bookTitle and bookAuthor. 
Reassign them with the values of the title and author properties of the first book object 
from the books array.
*/
let bookTitle = 'unknown';
let bookAuthor = 'unknown';
({ title: bookTitle, author: bookAuthor } = books[0]);
console.log(bookTitle, bookAuthor);

/*
2.5﻿
Each book object has a deeply nested rating property as illustrated below:
{
  title: 'Algorithms',
  ...
  thirdParty: {
    goodreads: {
      rating: 4.41,              // <-- HERE
      ratingsCount: 1733,
      reviewsCount: 63,
      fiveStarRatingCount: 976,
      oneStarRatingCount: 13
    }
  }
},
Destructure the first book object from the books array into a variable called bookRating. 
In the result of your destructuring, the bookRating variable should be assigned 
with the value of the book[0].thirdParty.goodreads.rating property.
*/
const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];
console.log(bookRating);

/*
2.6﻿
Write a function called printBookInfo that has three parameters called title, author and year. 
This function should work for a single object passed as an argument, 
and it should log to the console information about the book in this format: 
"${title} by ${author}, ${year}".
If year is undefined (was not passed), it should be assigned with a default value of 'year unknown'.
*/
const printBookInfo = function ({ title, author, year = 'year unknown' }) {
  console.log(`${title} by ${author}, ${year}`);
};
printBookInfo({
  title: 'Algorithms',
  author: 'Robert Sedgewick',
  year: '2011',
});
printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });

/*
The Spread Operator﻿
3.1﻿

Each book object has the author property, 
which stores an array of strings (author names) if there are multiple authors, 
or a single string (author name) if there is just one author.

Declare an array called bookAuthors, 
and fill it with authors of the first two books from the books array. 
The bookAuthors array should have just one level (no nested arrays).
*/
const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);

/*
3.2﻿
Write a function called spellWord that accepts a single string as an argument. 
This function should log to the console each letter of the argument separated by a space.
*/
const spellWord = function (word) {
  console.log(...word);
};
spellWord('JavaScript');

/*
Rest Pattern and Parameters﻿
4.1﻿
Destructure the keywords property (array) of the first book from the books array into variables
called mainKeyword and rest. 
The first keyword should be assigned to mainKeyword, 
and the rest of the keywords should be assigned to the rest variable (it should be an array).
*/
const [mainKeyword, ...rest] = books[0].keywords;
console.log(mainKeyword, rest);

/*
4.2﻿
Destructure the second book from the books array into a variable called bookPublisher. 
The bookPublisher variable should be assigned with the value of the publisher property of the book object. 
Assign the rest of the properties to the restOfTheBook variable.
*/
const { publisher: bookPublisher, ...restOfTheBook } = books[1];
console.log(bookPublisher, restOfTheBook);

/*
4.3﻿
Write a function called printBookAuthorsCount that has two parameters called title and authors. 
The authors parameter should accept any number of arguments. 
This function should log to the console a string formatted like that: 
"The book "${title}" has ${authors.length} authors".
*/
const printBookAuthorsCount = function (title, ...authors) {
  let str = `The book "${title}" has ${authors.length} authors`;
  console.log(str);
};

printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

/*
Short Circuiting (&& and ||)﻿
5.1﻿

Some of the book objects have the programmingLanguage property, 
which specifies what programming language is used in the book, for example

{
  title: 'Algorithms',
  author: ['Robert Sedgewick', 'Kevin Wayne'],
  ...
  programmingLanguage: 'Java',     // <-- HERE
}

Write a function called hasExamplesInJava that takes a book object from the books array as an argument. 
This function should return true if the book uses Java, or a string 'no data available' 
if it uses other language or no programming language at all.

Use short-circuiting.
*/

const hasExamplesInJava = function (book) {
  return book.programmingLanguage === 'Java' || 'no data available';
};

console.log(hasExamplesInJava(books[0]));
console.log(hasExamplesInJava(books[1]));

/*
5.2﻿
Some of the book objects have the onlineContent property, 
which is either true or false. Loop over the books array, 
and for the books that provide online content, 
log to the console a string in this format: "${title}" provides online content. 
Use short-circuiting.
*/
for (let i = 0; i < books.length; i++) {
  books[i].onlineContent &&
    console.log(`"${books[i].title}" provides online content.`);
}

/*
The Nullish Coalescing Operator (??)﻿
6.1﻿
There are objects in the books array that don't have the onlineContent property at all. 
Loop over the books array, and log a string to the console in this format: 
"${title}" provides no data about its online content.
*/
for (let i = 0; i < books.length; i++) {
  books[i].onlineContent ??
    console.log(
      `"${books[i].title}" provides no data about its online content`
    );
}

/*
Logical Assignments Operators﻿
7.1﻿
Some of the book objects from the books array are missing the edition property. 
Loop over the books array, and assign this property with a number 1 (if it doesn't already exist). 
Use logical assignment operators.
*/
for (let i = 0; i < books.length; i++) {
  books[i].edition ||= 1;
}
// console.log(books);

/*
7.2﻿

Some of the book objects from the books array have the highlighted property, 
which by default is set to true. 
Iterate over the books array, and if the thirdParty.goodreads.rating property is less than 4.2,
reassign it with false.

Use the &&= operator (tip: you may also need the ! operator)
*/
for (let i = 0; i < books.length; i++) {
  books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
}
console.log(books);

/*
Looping Arrays: The for-of Loop﻿
8.1﻿
Use the for-of loop to loop over the books array and sum the pages of all books. 
Use the pageSum variable below, and the pages property of the book objects.
*/
let pageSum = 0;

for (const book of books) pageSum += book.pages;

console.log(pageSum);

/*
8.2﻿

Below is the allAuthors variable which stores an empty array. 
Use the for-of loop to fill allAuthors with the authors of each book from the books array.

Remember that each book object has the author property, 
which can be a string (if there is only a single author) or an array (if there are multiple authors). 
You may need to use the typeof operator. 
You can also use multiple loops if needed. 
The allAuthors array should have just one level (no nested arrays).
*/
const allAuthors = [];
for (const book of books) {
  typeof book.author === 'string'
    ? allAuthors.push(book.author)
    : allAuthors.push(...book.author);
}
console.log(allAuthors);

/*
8.3﻿
Use the for-of loop together with Array's entries() method
to log each author from allAuthors to the console together with its index. 
Make the index start from 1, instead of 0.
*/
for (const [index, author] of allAuthors.entries())
  console.log(`${index + 1}: ${author}`);

/*
Enhanced Object Literals﻿
9.1﻿

Below is the bookData array that contains other arrays. 
Each inner array consists of the property name (first element), and the value (second element). 
For example, in ['title', 'Computer Networking: A Top-Down Approach'], 
'title' is the property name, 
and 'Computer Networking: A Top-Down Approach' is meant to be the value assigned to that property name.

Using computed properties, fill the newBook object with the properties and values from the bookData array. 
The first one is done already.
*/
const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

// Do the rest
const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};

console.log(newBook);

/*
9.2﻿
Below is the pages variable. Add it as a property of the newBook2 object. Use the shorter way.
*/
const pages = 880;

const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages,
};

console.log(newBook2);

/*
Optional Chaining (?.)﻿
10.1﻿
Write a function called getFirstKeyword that takes the book object as an argument. 
This function should return the first keyword from the book's keywords property (array)
or undefined (if the keywords property doesn't exist). 
It shouldn't throw an error. Use optional chaining for that.
*/
const getFirstKeyword = function (book) {
  return book.keywords?.[0];
};

console.log(getFirstKeyword(books[0]));

/*
Looping Objects: Object Keys, Values and Entries﻿
11.1﻿

Below is the entries variable that stores an empty array. 
Use the for-of loop together with the Object.keys() method
to loop over the thirdParty.goodreads property (array)
of the first book object from the books array. 
For each key, push a new array that contains that key to the entries array.

In the end, the entries array should be filled with arrays containing keys:
[['rating'], ['ratingsCount'], ['reviewsCount'], ['fiveStartRatingCount'], ['oneStartRatingCount']]
*/
const entries = [];

for (const key of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push([key]);
}

console.log(entries);

/*
11.2﻿
tip
The Object.values() method returns an array, which means you can call the Array's entries() method on it,
for example, Object.values(books[0].thirdParty.goodreads).entries(). 
The Array's entries() method returns [index, value] arrays for each element in the array.

Use the for-of loop together with the Object.values() method and Array's entries() method
to loop over thirdParty.goodreads property of the first book from the books array.

Push each value to the appropriate inner array in the entries array (use index from entries()).
*/
for (const [index, value] of Object.values(
  books[0].thirdParty.goodreads
).entries()) {
  entries[index].push(value);
}

/*
11.3﻿
Use the Object.entries() method on the thirdParty.goodreads property
of the first book from the books array. 
Assign the returned value to the variable called entries2.
*/
const entries2 = Object.entries(books[0].thirdParty.goodreads);

/*
11.4﻿
Log the entries and entries2 variables to the console, and compare them. They should look the same.
*/
console.log(entries);
console.log(entries2);

/*
Sets﻿
12.1﻿

Below is the allKeywords variable, which stores an empty array.
Loop over the books array, and fill the allKeywords array 
with the keywords coming from the keywords property of each book object. 
The allKeywords array should have just one level (no nested arrays).

Use whatever loop and methods you want. 
You can also use the spread syntax. 
In the end, the allKeywords array should look more or less like this: 
['computer science', 'programming', 'algorithms', 'data structures', ...].
*/
const allKeywords = [];
for (const book of books) allKeywords.push(...book.keywords);

console.log(allKeywords);

/*
12.2﻿
The allKeyword array contains duplicates. 
Remove them by creating a Set out of that array. 
Assign the newly created set to the uniqueKeywords variable.
*/
const uniqueKeywords = new Set(allKeywords);
console.log(uniqueKeywords);

/*
12.3﻿
Add two more keywords to the uniqueKeywords set, for example, 'coding' and 'science'.
*/
uniqueKeywords.add('coding');
uniqueKeywords.add('science');

console.log(uniqueKeywords);

/*
12.4﻿
Delete 'business' from the uniqueKeywords set.
*/
uniqueKeywords.delete('business');
console.log(uniqueKeywords);

/*
12.5﻿
Create an array out of the uniqueKeywords set, and assign it to the uniqueKeywordsArr variable.
*/
const uniqueKeywordsArr = [...uniqueKeywords];
console.log(uniqueKeywordsArr);

/*
12.6﻿
Delete all items from the uniqueKeywords set.
*/
uniqueKeywords.clear();
console.log(uniqueKeywords);

/*
Maps: Fundamentals﻿
13.1﻿
Create a new book, but this time, as a Map. 
Assign it to the bookMap variable. 
Use this array as initial data:
*/
const bookMap = new Map([
  ['title', 'Clean Code'],
  ['author', 'Robert C. Martin'],
]);
console.log(bookMap);

/*
13.2﻿
Set a new key in bookMap called pages, and assign it with a number 464.
*/
bookMap.set('pages', 464);
console.log(bookMap);

/*
13.3﻿
Get the title and author values from bookMap, 
and log to the console a string formatted like that: "${title} by ${author}".
*/
console.log(`"${bookMap.get('title')}" by ${bookMap.get('author')}`);

/* 
13.4﻿
Get the size of bookMap, and log it to the console.
*/
console.log(bookMap.size);

/*
13.5﻿
Check if bookMap has the author key. and if so,
log "The author of the book is known" to the console.
*/
bookMap.has('author') && console.log(`The author of the book is known`);

/*
Maps: Iteration﻿
14.1﻿
Convert the first book object from the books array into a Map, and assign it to a firstBookMap variable.
*/
const firstBookMap = new Map(Object.entries(books[0]));
console.log(firstBookMap);

/*
14.2﻿
Use the for-of loop to iterate over firstBookMap, and log to the console keys that have numbers as values.
*/
for (const [key, value] of firstBookMap) {
  if (typeof value === 'number') console.log(key);
}

/*
Working with Strings - Part 1﻿
15.1﻿
Take the ISBN property of the first book from the books array, 
and log to the console characters at index 6, 4, 9 and 8. 
Use bracket notation to access individual characters.
*/
console.log(books[0].ISBN[6]);
console.log(books[0].ISBN[4]);
console.log(books[0].ISBN[9]);
console.log(books[0].ISBN[8]);

/*
15.2﻿
Below is the quote variable that stores a string. 
Find the index of the word 'chess', and log it to the console.
*/
const quote =
  'A computer once beat me at chess, but it was no match for me at kick boxing';
console.log(quote.indexOf('chess'));

/*
15.3﻿
Extract the word "boxing" from the same quote string, and log it to the console.
*/
console.log(quote.slice(quote.lastIndexOf(' ') + 1));

/*
15.4﻿
Some authors are noted as "(Contributor)", for example "Julie Sussman (Contributor)". 
Create a function called isContributor that takes an author's name as an argument, 
and returns either true (if he's a contributor) of false (if he's not a contributor). 
The string "(Contributor)" is always the last part of the author's name string.
*/
const isContributor = function (author) {
  return author.indexOf('(Contributor)') !== -1; // true if contributor was found
};

console.log(isContributor('Julie Sussman (Contributor)'));
console.log(isContributor('Robert Sedgewick'));

/*
Working with Strings - Part 2﻿
16.1﻿

Write a function called normalizeAuthorName that takes an author's name (string) as an argument, 
and returns the same string, but the first name and last name are capitalized, 
and the "(Contributor)" part is removed (if exists).

You can be sure that the author's name always consists of two words separated by a space, 
and possibly ends with "(Contributor)". The string may also contain trailing spaces.
*/
const normalizeAuthorName = function (author) {
  const trimmedAuthor = author.trim().toLowerCase();
  const firstName = trimmedAuthor.slice(0, trimmedAuthor.indexOf(' '));
  const lastName = trimmedAuthor.slice(
    trimmedAuthor.indexOf(' ') + 1,
    trimmedAuthor.indexOf('(contributor)')
  );
  return `${firstName[0].toUpperCase() + firstName.slice(1)} ${
    lastName[0].toUpperCase() + lastName.slice(1)
  }`;
};

console.log(normalizeAuthorName('  JuliE sussMan (Contributor)'));

/*
16.2﻿
Take the title of the second book (books[1]) from the books array, 
and replace the word "Programs" with "Software". 
Assign the new string to the newBookTitle variable.
*/
const nreBookTitle = books[1].title.replace('Programs', 'Software');

/* 
16.3﻿

Write a function called logBookTheme that takes book's title (string), and logs to the console:

"This book is about computers" if the title starts with the word "computer",

"This book is about algorithms and data structures" if the title includes both
 the "algorithms" and "structures" words,

and, "This book is about some systems, but definitely not about operating systems"
 if the title ends with the word "system" or "systems", but doesn't include the word "operating".
*/

const logBookTheme = function (bookTitle) {
  bookTitle = bookTitle.toLowerCase();
  let theme = '';
  if (bookTitle.startsWith('computer')) {
    theme = 'This book is about computers';
  } else if (
    bookTitle.includes('algorithms') &&
    bookTitle.includes('structures')
  ) {
    theme = 'This book is about algorithms and data structures';
  } else if (
    (bookTitle.endsWith('system') || bookTitle.endsWith('systems')) &&
    !bookTitle.includes('operating')
  ) {
    theme =
      'This book is about some systems, but definitely not about operating systems';
  }
  return theme;
};

for (const { title } of books) console.log(title, logBookTheme(title));

/*
Working with Strings - Part 3﻿
17.1﻿

Below is the bookCategories variable that stores a string of categories. 
Each category is separated with a semicolon, 
for example, in a string "science;computing", 
'science' and 'computing' are separate categories.

Write a function called logBookCategories that takes a string of categories 
separated with semicolons, and logs each category to the console (as separate strings).
*/
const bookCategories =
  'science;computing;computer science;algorithms;business;operating systems;networking;electronics';
const logBookCategories = function (categories) {
  const categoriesArray = categories.split(';');
  for (const cat of categoriesArray) {
    console.log(cat);
  }
};

logBookCategories(bookCategories);

/*
17.2﻿

Now, the opposite. Each book from the books array has the keywords property.

Write a function called getKeywordsAsString that takes the books array as an argument, 
collects keywords from each book, removes duplicates, and then joins them to create a single string 
where keywords are separated by a semicolon.
*/
const getKeywordsAsString = function (books) {
  let keywordsArray = [];

  for (const { keywords } of books) keywordsArray.push(...keywords);

  keywordsArray = [...new Set(keywordsArray)]; // remove duplicates

  return keywordsArray.join(';');
};

console.log(getKeywordsAsString(books));

/*
17.3﻿

Below is the bookChapters array that contains inner arrays. 
Each inner array consists of a chapter's title, and the number of a page, for example, 
in ['The Basics', 14], 'The Basics' is the chapter's title, and 14 is the number of a page.

Write a function called logBookChapters that takes an array of arrays (like bookChapters) as an argument, 
and logs each chapter's name to the console together with the page number. 
The page number should be separated from the chapter's name with underscores 
(take a look at the example below).

Use the padEnd method.
*/
const logBookChapters = function (bookChapters) {
  for (const [title, page] of bookChapters) {
    console.log(title.padEnd(20, '_') + ' ' + page);
  }
};

const bookChapters = [
  ['The Basics', 14],
  ['Sorting', 254],
  ['Searching', 372],
  ['Graphs', 526],
  ['Strings', 706],
];
logBookChapters(bookChapters);
