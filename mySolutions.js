/*Books
----------------------*/
//1. Find books with fewer than 500 but more than 200 pages

// [
//   {
//     genres: [ 'FICTION' ],
//     _id: 656879f958876052bceaa785,
//     title: 'Me Before You',
//     author: 'Jojo Moyes',
//     pages: 450,
//     rating: 5,
//     __v: 0
//   },
//   {
//     genres: [ 'Fiction' ],
//     _id: 656879f958876052bceaa783,
//     title: 'The Catcher in the Rye',
//     author: 'J.D. Salinger',
//     pages: 228,
//     rating: 4.5,
//     __v: 0
//   },
//   {
//     genres: [ 'Fiction' ],
//     _id: 656879f958876052bceaa76f,
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//     pages: 208,
//     rating: 5,
//     __v: 0
//   },
//   {
//     genres: [ 'Fiction' ],
//     _id: 656879f958876052bceaa781,
//     title: 'The Dark Tower I',
//     author: 'Stephen King',
//     pages: 304,
//     rating: 5,
//     __v: 0
//   }
// ]

//2. Find books whose rating is less than 5, and sort by the author's name

// [
//   {
//     _id: 656879f958876052bceaa783,
//     genres: [ 'Fiction' ],
//     title: 'The Catcher in the Rye',
//     author: 'J.D. Salinger',
//     pages: 228,
//     rating: 4.5,
//     __v: 0
//   },
//   {
//     _id: 656879f958876052bceaa76b,
//     genres: [ 'Young Adult Fiction' ],
//     title: 'The Little Prince',
//     author: null,
//     pages: 100,
//     rating: 4,
//     __v: 0
//   }
// ]

//3. Find all the Fiction books, skip the first 2, and display only 3 of them
// [
//   {
//     _id: 656879f958876052bceaa772,
//     genres: [ 'Fiction' ],
//     title: 'Of Mice and Men',
//     author: 'John Steinbeck',
//     pages: 113,
//     rating: 5,
//     __v: 0
//   },
//   {
//     _id: 656879f958876052bceaa775,
//     genres: [ 'Fiction' ],
//     title: 'The Color of Magic',
//     author: 'Terry Pratchett',
//     pages: 0,
//     rating: 5,
//     __v: 0
//   },
//   {
//     _id: 656879f958876052bceaa77c,
//     genres: [ 'Fiction' ],
//     title: 'The Name of the Wind',
//     author: 'Patrick Rothfuss',
//     pages: 738,
//     rating: 5,
//     __v: 0
//   }
// ]