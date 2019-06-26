export class CoolDate extends Date{
  constructor(){
    super();
  }

  getWeekday(num){
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return days[num];
  }
}
