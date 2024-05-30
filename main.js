// 클릭 시 추첨 구현
$('.extract-btn').on('click',function(){
    var user_choice=$(".user_choice").val().split(" ")
    //숫자로 변경
    for(i=0;i<user_choice.length;i++){
        user_choice[i]=parseInt(user_choice[i])
    }
    // 6개의 숫자를 입력했는지 확인.
    if (user_choice.length!==6){
        $('.status_msg').text("다시 입력해 주세요")
        return
    }
    //중복 숫자체크.
    var doublecheck = [...new Set(user_choice)]
    if (doublecheck.length !==user_choice.length) {
        $('.status_msg').text("중복 숫자가 있습니다")
        return
    }
    // 숫자 범위 체크
    for (i=0;i<6;i++){
        if(user_choice[i]<=0 || user_choice[i]>=45){
            $('.status_msg').text("숫자 범위를 확인하세요")
            return
        } 
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
    $(".a").text(numberAll[0]);
    $(".b").text(numberAll[1]);
    $(".c").text(numberAll[2]);
    $(".d").text(numberAll[3]);
    $(".e").text(numberAll[4]);
    $(".f").text(numberAll[5]);
    var correct = 0
    //결과확인
    for (i=0; i<6; i++){
        for (j=0; j<6; j++){
            if (user_choice[i]===numberAll[j]){
                correct+=1
                break
            }
            $(".correct_count").text(correct);
        }
    }
    $(".rank").text(rank_table(correct));
    }
)

function rank_table(correct){
    if (correct==6) {
        return "1등"
    } else if (correct==5) {
        return "3등"
    } else if (correct==4) {
        return "4등"
    } else if (correct==3) {
        return "5등"
    } else {
        return "꽝"
    }
}



