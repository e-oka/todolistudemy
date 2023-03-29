// import "./styles.css";

// console.log("aaaaaaa");
// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;
//*三項演算子
//ある条件？条件がtrueの時

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num. toLocaleString() : '数値を入力してください'
// //typeof その変数の型がなんなのかを示す//
// console.log(formattedNum)

// const checkSum = (num1, num2) => {
//   return num1 + num2 >100 ? `100を超えています！!` : `許容範囲内です`;
// }

// console.log(checkSum(50, 40));

//論理演算子の本当の意味を知ろう　＆& かつ ||　または
const flag1 = true;
const flag2 = false;
if (flag1 || flag2) {
  console.log("1か2はtrueになります");
}
