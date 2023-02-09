let count = 1; //사용자 시도횟수
let answer = 0; //사용자 입력 숫자
let min = 0;
let max = 99;
const nansoo = Math.floor(Math.random() * 100);
console.log(nansoo);

alert("난수가 생성되었습니다.");

if (nansoo > 0 && nansoo < 100) {
  alert("난수는 1~99까지의 숫자입니다.");
}

while (answer != nansoo) {
  let input = prompt(
    "맞춰봐요~",
    min + "에서" + max + "까지의 숫자를 넣으세요"
  );
  answer = parseInt(input);
  if (answer !== null) {
    if (answer > max || answer < min) {
      alert("값의 범위를 벗어났어요.");
    } else if (answer < nansoo) {
      alert("UP  " + count + "회 입력했어요");
      min = answer + 1;
    } else if (answer > nansoo) {
      alert("DOWN  " + count + "회 입력했어요");
      max = answer - 1;
    } else if (answer == nansoo) {
      alert("정답입니다! " + count + "회 만에 맞췄어요.");
      var con = confirm("다시 게임을 하시겠습니까?");
      if (con == false) {
        break;
      }
    } else alert("숫자를 입력하세요");
  } else alert("입력 취소"), --count;
  count++;
}
document.write("정답 " + nansoo);
