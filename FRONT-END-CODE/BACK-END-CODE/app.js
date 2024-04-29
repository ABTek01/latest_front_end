
//building a media device library utilizing js classes & oop.
class Media{
  constructor(title){
    this._title = title
    this._isCheckedOut = false
    this._ratings = []
  }

  //getter methods
  get title(){
    return this._title
  }

  get isCheckedOut(){
    return this._isCheckedOut
  }

  get ratings(){
    return this._ratings
  }

//sestter
  set isCheckedOut(status){
    return this._isCheckedOut
  }

  //method that negates checkout property.
  toggleCheckOutStatus(){
    this._isCheckedOut = !this._isCheckedOut
  }

  //method that return the average value of the ratings array.
  getAverageRating(){
        //utilize reduce method.
        const initVal = 0
        const ratingsArraySum = this._ratings.reduce((acc, currentVal) => {
            
            return acc + currentVal
        }, initVal)
        console.log(ratingsArraySum / this._ratings.length)
    }

    //method that appends an element to the end of an array.
    addRating(rating){
        this._ratings.push(rating)
    }


}

//book subclass inherits props from superclass.
class Book extends Media{
    constructor(author, title, pages){

        //super passed in title props from parent class.
        super(title)

        this._title = title
        this._author = author
        this._pages = pages
    }

    get author(){
        return this._author
    }


    get pages(){
        return this._pages
    }

}

//movie subclass inherites props from Media superclass.
class Movie extends Media{
    constructor(director, title, runTime){
        //properties inheritted from the superclass.
        super(title)
        this._director = director
        this._title = title
        this._runTime = runTime
    }

    //getter methods for all unique properties in Movie class.
    get director(){
        return this._director
    }

    
    get runTime(){
        return this._runTime
    }

}

const historyOfEverything = new Book(
    'Bill Bryson', 
    'A Short History of Nearly Everything', 
    544
)

console.log(historyOfEverything)

//changes the value of isCheckedOut value 
historyOfEverything.toggleCheckOutStatus()

//isCheckedOut value converted.
console.log(historyOfEverything.isCheckedOut)

//calling addRatings method to append ratings to the list property.
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log()

historyOfEverything.getAverageRating()

//creating a new movie object titlee speed.
const speed = new Movie('Jan de Bont', 'Speed', 166)
console.log(speed)

//






