// 1
let favoriteMovies = ["The Matrix", "Inception", "The Dark Knight", "Interstellar", "The Shawshank Redemption"];
console.log(favoriteMovies[1]);
console.log();

// 2
let movies = new Array(5);
movies[0] = "The Matrix";
movies[1] = "Inception";
movies[2] = "The Dark Knight";
movies[3] = "Interstellar";
movies[4] = "The Shawshank Redemption";
console.log(movies[0]);
console.log();

// 3
movies.splice(2, 0, "Movie 6");
console.log("The length of the array is: " + movies.length);
console.log();

// 4
let movies = ['The Shawshank Redemption', 'The Godfather', 'The Dark Knight', 'The Godfather: Part II', 'Pulp Fiction'];

delete movies[0];
console.log(movies);
console.log();

// 5
let movies = ["The Shawshank Redemption", "The Godfather", "The Godfather: Part II", "The Dark Knight", "12 Angry Men", "Schindler's List", "The Lord of the Rings: The Return of the King"];

for (let index in movies) {
    console.log(movies[index]);
}
console.log();

// 6
const movies = ['The Shawshank Redemption', 'The Godfather', 'The Dark Knight', 'The Godfather: Part II', 'The Lord of the Rings: The Return of the King', 'Pulp Fiction', 'The Good, the Bad and the Ugly'];

for (const movie of movies) {
    console.log(movie);
}
console.log();

// 7
movies.sort();

for (let movie of movies) {
    console.log(movie);
}
console.log();

// 8
let movies = ["The Matrix", "The Dark Knight", "Inception", "Interstellar", "Dunkirk", "Whiplash", "The Prestige"];

console.log("Movies I like:");
console.log();
for (const movie of movies) {
    console.log(movie);
}
console.log();

let leastFavMovies = ["The Room", "Birdemic", "Plan 9 from Outer Space"];

console.log("\nMovies I regret watching:");
console.log();
for (const movie of leastFavMovies) {
    console.log(movie);
}
console.log();
console.log();

// 9
let movies = ['The Shawshank Redemption', 'The Godfather', 'The Godfather: Part II', 'The Dark Knight', '12 Angry Men'];

let leastFavMovies = ['Cats', 'The Emoji Movie', 'The Room'];

console.log("Movies I like:");
movies.forEach(function(movie) {
    console.log(movie);
});

console.log("\nMovies I regret watching:");
leastFavMovies.forEach(function(movie) {
    console.log(movie);
});

movies = movies.concat(leastFavMovies);

console.log("\nAll movies:");
movies.sort().reverse().forEach(function(movie) {
    console.log(movie);
});
console.log();

// 10
console.log("\nLast movie in the array:")
console.log(movies[movies.length - 1]);

// 11
console.log("\nFirst movie in the array:");
console.log(movies[0]);

// 12
let movies = ["The Shawshank Redemption", "The Godfather", "The Godfather: Part II", "The Dark Knight", "12 Angry Men", "Schindler's List", "The Lord of the Rings: The Return of the King"];
let leastFavMovies = ["The Dark Knight", "12 Angry Men"];

let leastFavIndices = [];
for (let movie of leastFavMovies) {
    let index = movies.indexOf(movie);
    if (index > -1) {
        leastFavIndices.push(index);
    }
}

console.log(`Least favorite movie indices: ${leastFavIndices}`);

// 13 
let movies = [
    ["The Shawshank Redemption", 1],
    ["The Godfather", 2],
    ["The Godfather: Part II", 3],
    ["The Dark Knight", 4],
    ["12 Angry Men", 5]
];

let movieNames = movies.filter(function(movie) {
    return typeof movie[0] === 'string';
});

console.log("My favorite movies: ");
for (let movie of movieNames) {
    console.log(movie[0]);
}

// 14
let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

let showEmployee = function(employeeArray) {
    console.log("Employees:");
    for (let employee of employeeArray) {
        console.log(employee);
    }
};

showEmployee(employees);


// 15
function filterValues(arr) {
    return arr.filter(val => val !== false && val !== null && val !== 0 && val !== "");
}

console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

// 16
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getRandomItem(numbers));


// 17
function getLargestNumber(numbers) {
    let max = -Infinity;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

let numbers = [1, 5, 2, 8, 3];
let largest = getLargestNumber(numbers);
console.log(largest);