class Chronometer {
  constructor() {
this.currentTime = 0;
this.intervalId = 0;  }
  startClick(callback) {
    // ... your code goes here
    setInterval(() => this.currentTime++,1000)
  }
  getMinutes() {
    // ... your code goes here
    return  Math.floor(this.currentTime/60)
  }
  getSeconds() {
 return this.currentTime % 60  }
  twoDigitsNumber() {
const minutos =  ('0' + this.currentTime).slice(-2)
return minutos;
}
  stopClick() {
 clearInterval(this.currentTime);
 }
  resetClick() {
this.currentTime = 0;  }
  splitClick() {

  const minutes = ("0" + Math.floor(this.currentTime / 60)).slice(-2)
  const seconds = ("0" + this.currentTime % 60).slice(-2)
  return `${minutes}:${seconds}`
}

  }


