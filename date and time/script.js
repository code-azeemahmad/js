let myDate = new Date();

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23); // months start from 0 in js
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("2023-01-14"); // yy-mm-dd, month start from 1
console.log(myCreatedDate2.toDateString());

let myCreatedDate3 = new Date("01-15-2025"); // mm-dd-yy
console.log(myCreatedDate3.toDateString());

// timestamps in date (in polls and quizzes)

let myTimeStamp = Date.now();
console.log(myTimeStamp); // milliseconds from 1st Jan, 1970
console.log(myCreatedDate.getTime()); // time from 1st jan, 1970 in milliseconds till the date to compare

console.log(Math.floor(Date.now() / 1000)); // time in seconds

let newDate = new Date();
console.log(newDate.getDay()); // Sun(0) -> Sat(6)
console.log(newDate.getMonth()); // Jan(0) -> Dec(11)


let date = new Date();
console.log(
  date.toLocaleString("en-PK", {
    timeZone: "Asia/Karachi",
    dateStyle: "full",
    timeStyle: "short",
  })
);