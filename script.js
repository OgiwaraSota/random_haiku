var kanaList1 = [
    "あ", "い", "う", "え", "お",
    "か", "き", "く", "け", "こ",
    "さ", "し", "す", "せ", "そ",
    "た", "ち", "つ", "て", "と",
    "な", "に", "ぬ", "ね", "の",
    "は", "ひ", "ふ", "へ", "ほ",
    "ま", "み", "む", "め", "も",
    "や", "ゆ", "よ",
    "ら", "り", "る", "れ", "ろ",
    "わ", "を", "ん",
    "が", "ぎ", "ぐ", "げ", "ご",
    "ざ", "じ", "ず", "ぜ", "ぞ",
    "だ", "で", "ど",
    "ば", "び", "ぶ", "べ", "ぼ",
    "ぱ", "ぴ", "ぷ", "ぺ", "ぽ",
];

var kanaList2 = [
    "うぃ", "うぇ",
    "きゃ", "きゅ", "きょ", 
    "しゃ", "しゅ", "しぇ", "しょ",
    "ちゃ", "ちゅ", "ちぇ", "ちょ",
    "てゃ", "てぃ", "てゅ", "てょ",
    "にゃ", "にゅ", "にぇ", "にょ",
    "ひゃ", "ひゅ", "ひぇ", "ひょ",
    "みゃ", "みゅ", "みぇ", "みょ",
    "りゃ", "りゅ", "りぇ", "りょ",
    "ぎゃ", "ぎゅ", "ぎぇ", "ぎょ",
    "じゃ", "じゅ", "じぇ", "じょ",
    "でゃ", "でぃ", "でゅ", "でょ",
    "びゃ", "びゅ", "ひぇ", "びょ",
    "ぴゃ", "ぴゅ", "ぴぇ", "ぴょ",
]

// タイマーIDを格納する変数を宣言
let timer1, timer2, timer3;

//ランダム仮名リストを生成する
function getRandomKana(){
    let kanaProb = 0.7; //確率を設定

    let randomNum = Math.random();

    if(randomNum < kanaProb){
        let index = Math.floor(Math.random() * kanaList1.length);
        return kanaList1[index];
    }else{
        let index = Math.floor(Math.random() * kanaList2.length);
        return kanaList2[index];
    }
}

//一定の間隔で文章を徐々に表示する
function displayRow(row, count, delay){
    let index = 0;
    let letterList = [];

    const intervalId = setInterval(() => {
        if(index < count){
            letterList.push(getRandomKana());
            row.textContent = letterList.join("");
            index++;
        }else{
            clearInterval(intervalId);
        }
    }, delay);
    return intervalId; // タイマーIDを返す
}

const firstRow = document.querySelector("#first_row");
const secondRow = document.querySelector("#second_row");
const thirdRow = document.querySelector("#third_row");

function displayHaiku(letterDelay, rowDelay){
    timer1 = displayRow(firstRow, 5, letterDelay);

    timer2 = setTimeout(() => {
        timer2 = displayRow(secondRow, 7, letterDelay);
    }, rowDelay);

    timer3 = setTimeout(() => {
        timer3 = displayRow(thirdRow, 5, letterDelay);
    }, rowDelay * 2);
}

const generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", () => {
    // 既存のタイマーをクリア
    clearInterval(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);

    firstRow.textContent = "";
    secondRow.textContent = "";
    thirdRow.textContent = "";

    displayHaiku(300, 2500); //間隔を設定
});
