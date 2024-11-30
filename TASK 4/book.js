const books = [
    { title: "To Kill a Mockingbird", genre: "Fiction", author: "Harper Lee", rating: 4.8 },
    { title: "1984", genre: "Science", author: "George Orwell", rating: 4.7 },
    { title: "The Great Gatsby", genre: "Fiction", author: "F. Scott Fitzgerald", rating: 4.4 },
    { title: "The Hobbit", genre: "Fantasy", author: "J.R.R. Tolkien", rating: 4.9 },
    { title: "A Brief History of Time", genre: "Science", author: "Stephen Hawking", rating: 4.6 },
    { title: "Sapiens: A Brief History of Humankind", genre: "History", author: "Yuval Noah Harari", rating: 4.7 },
    { title: "Becoming", genre: "Biography", author: "Michelle Obama", rating: 4.8 },
    { title: "The Diary of a Young Girl", genre: "Biography", author: "Anne Frank", rating: 4.7 },
    { title: "The Catcher in the Rye", genre: "Fiction", author: "J.D. Salinger", rating: 4.3 },
    { title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy", author: "J.K. Rowling", rating: 4.9 },
    { title: "Pride and Prejudice", genre: "Fiction", author: "Jane Austen", rating: 4.7 },
    { title: "Dune", genre: "Science", author: "Frank Herbert", rating: 4.8 },
    { title: "The Lord of the Rings", genre: "Fantasy", author: "J.R.R. Tolkien", rating: 4.9 },
    { title: "The Art of War", genre: "History", author: "Sun Tzu", rating: 4.6 },
    { title: "Steve Jobs", genre: "Biography", author: "Walter Isaacson", rating: 4.8 },
    { title: "The Alchemist", genre: "Fiction", author: "Paulo Coelho", rating: 4.7 },
    { title: "The Martian", genre: "Science", author: "Andy Weir", rating: 4.8 },
    { title: "Goodnight Moon", genre: "Fiction", author: "Margaret Wise Brown", rating: 4.5 },
    { title: "Percy Jackson & The Olympians: The Lightning Thief", genre: "Fantasy", author: "Rick Riordan", rating: 4.8 },
    { title: "The Book Thief", genre: "Fiction", author: "Markus Zusak", rating: 4.9 },
    { title: "The Wright Brothers", genre: "Biography", author: "David McCullough", rating: 4.7 },
    { title: "Hidden Figures", genre: "Biography", author: "Margot Lee Shetterly", rating: 4.8 },
    { title: "Guns, Germs, and Steel", genre: "History", author: "Jared Diamond", rating: 4.6 },
    { title: "Cosmos", genre: "Science", author: "Carl Sagan", rating: 4.8 },
    { title: "Anne of Green Gables", genre: "Fiction", author: "L.M. Montgomery", rating: 4.6 },
    { title: "Circe", genre: "Fantasy", author: "Madeline Miller", rating: 4.7 },
    { title: "Educated", genre: "Biography", author: "Tara Westover", rating: 4.9 },
    { title: "Team of Rivals", genre: "History", author: "Doris Kearns Goodwin", rating: 4.8 },
    { title: "The Immortal Life of Henrietta Lacks", genre: "Biography", author: "Rebecca Skloot", rating: 4.7 }
];


function getRecommendations() {
    const selectedGenres = Array.from(document.querySelectorAll('input[name="genre"]:checked')).map(
        checkbox => checkbox.value
    );
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = ""; 

    if (selectedGenres.length === 0) {
        alert("Please select at least one genre!");
        return;
    }

   
    const recommendations = books.filter(book => selectedGenres.includes(book.genre));

  
    if (recommendations.length > 0) {
        recommendations.forEach(book => {
            const bookDiv = document.createElement("div");
            bookDiv.className = "book";
            bookDiv.innerHTML = `
                <h3>${book.title}</h3>
                <p><b>Genre:</b> ${book.genre}</p>
                <p><b>Author:</b> ${book.author}</p>
                <p><b>Rating:</b> ${book.rating}</p>
            `;
            bookList.appendChild(bookDiv);
        });
    } else {
        bookList.innerHTML = `<p>No books found for the selected genres.</p>`;
    }
}
