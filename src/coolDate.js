export class CoolDate extends Date{
  constructor(){
    super();
  }

  getDate(){
    // let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return this.toString();
  }
}
