from requests import get
from bs4 import BeautifulSoup
def extract_lotto_num():
    url ="https://dhlottery.co.kr/gameResult.do?method=byWin"
    response = get(url)
    #예외처리.
    if response.status_code != 200:
        print("You can't aproach")
        return None
    else:
        results = []
        #HTML가져오고 파싱해서 SOUP객체 만들기
        soup = BeautifulSoup(response.text, "html.parser")
        win_div = soup.find('div', class_='win_result')
        win_num=win_div.find_all('span')
        for num in win_num:
            results.append(num.text)
        results=results[:-1]
        return results