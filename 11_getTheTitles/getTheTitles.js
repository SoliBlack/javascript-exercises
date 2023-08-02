const getTheTitles = function() {
    let titles = [];
    const books = [
        {
            title: 'Book',
            author: 'Name'
        },
        {
            title: 'Book2',
            author: 'Name2'
        }
    ]
    
    for(let i = 0; i < books.length; i++){
        titles.push(books[i].title);
    }
    return titles;

};

// Do not edit below this line
module.exports = getTheTitles;
