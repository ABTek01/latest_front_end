
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
  }

  


}