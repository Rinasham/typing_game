let state = true;
// スコア関連
let correct = +$('#correct_count').val();
let incorrect = +$('#incorrect_count').val();
// let correctText = document.getElementById('correct_count');
let correctText = $('#correct_count');
let incorrectText = $('#incorrect_count');

// タイマー関連
let TIME = 10;
function startTimer(){
    const timer = document.getElementById('timer');
    const countdown = setInterval(function() {
        timer.textContent = --TIME + '秒';
        if(TIME <= 0) {
            clearInterval(countdown);
            finish();
        }
        }, 1000);
}



//スタート
$('#start_button').click(function(){
    $('.game_area').css('display','block');
    $('.start').css('display','none');
    startTimer();
    createQuestion();
});



// 問題文関連
let text = document.getElementById('text');
const questionList = [
    'runserver',
    'encount',
    'unknown',
    'manage.py',
    'python',
    'JavaScript',
    'MySQL',
    '127.0.0.1',
    'localhost',
    'django',
    'chipster',
    'WineBottle',
    'index',
    'form',
    'login',
    'signup',
    'account',
    'admin',
    'delte',
    'update',
    'registration',
    'wisgi',
    'docker',
    'setting',
    'urls',
    'config',
    '__init__',
    'views.py',
    'gitignore',
    'I am eating mango now',
    'kinda wanna hit the hay',
    'do not know what I am typing',
];

//問題を一文字ずつに分解して要素にするための配列を用意
let splitWord = [];
// createQuestion();



// 次の問題へ行く時の関数(keyDown関数内で使用)
function createQuestion(){
    //乱数で問題をランダムに取ってくる
    let rnd = Math.floor(Math.random() * questionList.length);
    //前の問題で表示されたpタグ内の文字を初期化
    text.textContent = '';
    correctText.text('正解数：' + correct) ;
    incorrectText.text('不正解数：' + incorrect);
    //　問題を一文字ずつ分解
    // spanタグを生成してその中に一文字ずつ入れる
    // pタグ内に文字の入ったspanタグを一つずつ追加(.appendChild)
    splitWord = questionList[rnd].split('').map(function(character){
        let span = document.createElement('span');
        span.textContent = character;
        text.appendChild(span);
        return span;
    });
}


// キーが押された時にsplitWord配列の中身と一文字ずつ比較
document.addEventListener('keydown',keyDown);
function keyDown(e) {
    if(!state) return;
    // Shiftキーが押されたら何もしないまま次へ
    if(e.keyCode === 16) {
        ;
    }else{
        if(e.key === splitWord[0].textContent){
            splitWord[0].className = 'after-input';
            //　正解数＋１
            correct = correct + 1;
            correctText.text('正解数：' + correct);
            console.log('correct'+correct);
            // 正解したら次の文字へ行く
            splitWord.shift();
            if(!splitWord.length) createQuestion();
        }else{
        incorrect = incorrect + 1;
        incorrectText.text('不正解数：' + incorrect);
        console.log('incorrect'+incorrect);
        }
    }
}