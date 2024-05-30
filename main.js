
function lottoshow(){
    numberAll=[]
    for (var i=0; i<6; i++){
        while (true){
            temp=Math.ceil(Math.random()*45);
            if (numberAll.includes(temp)) {
                continue
            } else {
                numberAll.push(temp);
                break
            }
        }
           
        console.log(numberAll)
    }
    $(".a").text(numberAll[0]);
    $(".b").text(numberAll[1]);
    $(".c").text(numberAll[2]);
    $(".d").text(numberAll[3]);
    $(".e").text(numberAll[4]);
    $(".f").text(numberAll[5]);
    // 여기 코드가 영 마음에 안 든다. 수정필요.
    // 오름 차순 정렬 시키고싶음.
}
lottoshow()



