function day(){
let day=prompt("Please enter the Num of the day :");
let day1=Number (day)
switch (day1) {

    case 0:
      alert("It's Sunday!");
      document.write("It's Sunday");
      break;
    case 1:
      alert("It's Monday");
      console.log("It's Monday!");
      document.write("It's Monday!");
      break;
    case 2:
      alert("It's Tuesday");
      console.log("It's Tuesday!");
      document.write("It's Tuesday!");
      break;
    case 3:
      alert("It's Wednesday");
      console.log("It's Wensday!");
      document.write(" It's Wensday!");
      break;
    case 4:
      alert("It's Thursday");
      console.log("It's Thursday!");
      document.write(" It's Tuseday!");
      break;
    case 5:
      alert("It's Friday");
      console.log("It's Friday!");
      document.write(" It's Friday!");
      break;
      default: 
      alert("It's Saturday");
      console.log("It's Satruday!");
      document.write(" It's Saturday!");
      break;

  }

}