// 클릭 시 추첨 구현
$('.extract-btn').on('click',function(){
    var user_choice=$(".user_choice").val().split(" ")
    if (user_choice.length!==6){
        console.log("다시 입력해주세요")
        return
    }
    numberAll=[]
    // 중복 방지 추첨
    while (numberAll.length<6){
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
    }    
)



