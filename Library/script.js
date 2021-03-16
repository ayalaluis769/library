class Book {
    static numberOfCatergories = 6;

    constructor(catergory,condition) {
        this.catergory = catergory;
        this.condition = condition;
    }
}

const option = new Book('Fiction','Paperback');
console.log(option);

class Author {
    constructor(firstName,lastName,gender,style) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.style = style;
    }
}

const author = new Author('Brenda','Jackson','Female',`Children's author`);
console.log(author);

class LibraryBranch {
    constructor(title,site) {
        this.title = title;
        this.site = site;
    }
}

const branch = new LibraryBranch(`Children's Section`,'Third Floor on your left side');
console.log(branch);

class Genre {
    static numberOfGenres = 24;

    constructor(type,year) {
        this.type = type;
        this.year = year;
    }
}

const genre = new Genre('Fantasy','Published 2002');

class PublishingCompany {
    static numberOfBranches = 100;

    constructor(city,state,zipcode,manager) {
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.manager = manager;
    }
}

const publisher = new PublishingCompany('New York','New York','10001','Jeremy Stein');
console.log(publisher);