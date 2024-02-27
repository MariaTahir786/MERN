const book = {
    title: 'The Great Gatsby',
    author: {
        firstName: 'F. Scott',
        lastName: 'Fitzgerald',
        nationality: 'American'
    },
    publication: {
        year: 1925,
        publisher: {
            name: 'Charles Scribner\'s Sons',
            location: 'New York'
        }
    },
    genres: ['Novel', 'Fiction', 'Literature'],
    awards: [{
        name: 'Pulitzer Prize',
        year: null
    }]
};
// Task 3: Extract the first genre.
const [firstGen] = book.genres
console.log(firstGen)

// Task 1: Extract the book title, author's full name, and publication year.


// Bonus: Extract the name of the first award if it exists.......................this is home work
const {
    title: T,
    author: {
        firstName,
        lastName
    },
    publication: {
        year
    }
} = book;
console.log(T)
console.log(firstName, lastName)
console.log(year)
//Task 2: Extract the publisher's name and location.
const {
    publication: {
        publisher: {
            name: NPub,
            location: Loc
        }
    }
} = book
console.log(NPub)
console.log(Loc)