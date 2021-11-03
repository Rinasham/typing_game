let result = $('#result');
const time = TIME;
function finish() {
    state = false;
    result.text('正解:' + correct + '  不正解:' + incorrect);
    //ミスも含めたトータル入力キー数
    let total = correct + incorrect;
    //正確率
    let rate = Math.floor(correct/(correct + incorrect) * 100);
    $('#rate').text('正答率 = ' + rate + '%');
    //kpm(1分に何文字打てるか)
    let kpm = total / time * 60;
    $('#kpm').text('kpm = ' + kpm);
    let totalScore = kpm * (rate/100) ^ 3;
    $('#total_score').text('e-rate = ' + totalScore);
    // ajax_send();
}

