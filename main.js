// 결과확인 클래스
var Resultcheck ={
    correct_count:function(user_choice, numberAll){
        var correct = 0;
        for (i=0; i<6; i++){
            for (j=0; j<6; j++){
                if (user_choice[i]===numberAll[j]){
                    correct+=1
                    break
                }
            }
        }
        $(".correct_count").text(correct);
        return correct;
    },
    rank_table : function(correct){
        if (correct==6) {
            return 1
        } else if (correct==5) {
            return 3
        } else if (correct==4) {
            return 4
        } else if (correct==3) {
            return 5
        } else {
            return false
        }
    }
}

//누적 당첨 기록 클래스
var hap = {
    1: 0,
    3: 0,
    4: 0,
    5: 0,
    '꽝':0,
}

// valid check
function valid_check(user_choice){
    // 6개의 숫자를 입력확인
    if (user_choice.length!==6){
        $('.status_msg').text("다시 입력해 주세요")
        return true
    }
    //중복 숫자체크.
    var doublecheck = [...new Set(user_choice)]
    if (doublecheck.length !==user_choice.length) {
        $('.status_msg').text("중복 숫자가 있습니다")
        return true
    }
    // 숫자 범위 체크
    for (i=0;i<6;i++){
    if(user_choice[i]<=0 || user_choice[i]>=45){
        $('.status_msg').text("숫자 범위를 확인하세요")
        return true
    } 
    // 숫자 이외의 값 체크
    }
}

// 클릭 시 추첨 구현
$('.extract-btn').on('click',function(){
    var user_choice=$(".user_choice").val().split(" ")
    // 입력값 숫자로 변경
    for(i=0;i<user_choice.length;i++){
        user_choice[i]=parseInt(user_choice[i])
    }
    // valid check
    if (valid_check(user_choice)) {
        return
    }
    numberAll=[]
    $('.status_msg').text("")
    // 추첨
    while (numberAll.length<6){
        //추첨 시 중복숫자 방지
        temp=Math.ceil(Math.random()*45);
        if (numberAll.includes(temp)) {
            continue
        } else {
            numberAll.push(temp);
            }
        } 
    numberAll.sort((a, b) => a - b);
    $(".a").text(numberAll[0]);
    $(".b").text(numberAll[1]);
    $(".c").text(numberAll[2]);
    $(".d").text(numberAll[3]);
    $(".e").text(numberAll[4]);
    $(".f").text(numberAll[5]);
    

    //결과확인 : 맞은갯수표시
    correct=Resultcheck.correct_count(user_choice,numberAll)
    //등수표시
    rank_result=Resultcheck.rank_table(correct)

    if (rank_result===false){
        $(".rank").text("꽝");
        hap["꽝"]+=1;
    } else {
        $(".rank").text(`${rank_result}등`);
        hap[rank_result]+=1;
        
    }
    win_game=hap[1]+hap[3]+hap[4]+hap[5]
    all_game=win_game+hap["꽝"]
    $(".percent").text(win_game/all_game*100)
    }
)





