# solidity 개인 공부 리포트 (ridickle7)

### 1. 진행 내용  
- [이더리움 솔리디티 실습 튜토리얼](https://programmers.co.kr/learn/courses/36) 실습

### 2. 다룬 내용
#### 1과. 솔리디티 둘러보기
##### 솔리디티란
- 스마트 계약을 정의하는 언어
- js 문법과 유사
- java 문법과 유사 
- 정적 타입 언어 (자료형 명시 필요)

##### DApp이란?
- 스마트 계약(Smart Contract) 을 구현한 블록체인 기반 탈중앙화 어플리케이션

##### 스마트 계약이란?
- 중개자없이 P2P로 쉽고 편리하게 계약을 체결하고 수정할 수 있는 기술  
- 블록체인 플랫폼 상에서 계약 (어쩌면 코인보다도 핵심 기술)  
  ex> 집세를 내지 않으면 집으로 들어가는 권한이 자동으로 사라짐 (자동화)  
> 예를 들어, 스마트계약(Smart Contracts)을 자판기로 생각해보자.   
> 우리가 자판기에 돈을 넣고 과자나 음료수를 뽑아 먹듯이 스마트계약(Smart Contracts)도 마찬가지다.  
> 보통, 우리는 계약을 맺을 때 변호사나 공증인을 찾아가 돈을 주고 다양한 절차를 거쳐 계약 서류를 받을 때까지 기다려야 한다.  
> 하지만 내가 스마트계약(Smart Contracts)를 이용한다고 가정해보자.  
> 비트코인을 자판기-이를테면 원장(Ledger)-에 넣기만 하면, 내 애스크로(escrow), 운전면허증 또는 내 계정의 어떤 서류든지 받아 볼 수 있다.   
> 게다가 스마트계약(Smart Contracts)은 계약자와 피계약자 전원의 동의(혹은 합의)를 얻어 구체적인 규칙 혹은 처벌규정 등을 정하게 된다는 면에서 전통적 계약과 유사하다.  
> 하지만 스마트계약(Smart Contracts)은 이러한 절차가 자동적으로 이뤄질 뿐만 아니라 자동적으로 규제들을 이해관계자들에게 강제할 수 있다.  
  
맛보기 코드
<pre><code>pragma solidity ^0.4.18;

contract Greeting {
    string message = "samdasu Solidity";
    string name = "name";
    // 이곳에 string 타입의 상태 변수, name을 선언해 보세요.

    function getMessage() public view returns(string) {
        return message;
    }

    // 위에 함수를 참고하여 이곳에 name를 반환하는 getName 함수를 작성해보세요.
    function getName() public view returns(string) {
        return name;
    }
}</code></pre>

#### 2과. 자료형 알아보기
##### 주요 자료형
- **uint** = unsigned Int  
  ex) uint year = 2013;
- **int** = 정수형  
  ex) int year = 2013;
- **bool** = 논리 자료형  
  ex) bool isHappy = true;
- **string** = 문자열  
  ex) string name = “Java”;
- **bytes** = 바이트  
  ex) byte byte = 1;
- **address** = 이더리움 주소값  
  ex) address addr = 0x72ba7d8e73fe8eb666ea66babc8116a41bfb10e2;
- **부동소수점**은, 수를 정확히 다룰 수 없는 수는 이더를 다룰 수 없기 때문에 지원하지 않음

##### 레퍼런스 자료형
- **배열** = 자료형이 같은 데이터를 묶은 자료구조    ex) int[] year = [2018, 2019, 2020]
- **구조체** : 다양한 자료형의 데이터를 묶은 자료구조    ex) 
   
##### 함수 선언 방식
<pre><code>function “함수이름””()” “접근제어자” (returns(“반환자료형”)) {
	// 함수 내용
	(return 변수;)
}

function getHappy() public returns(bool isHappy) {
	return isHappy;
}
</code></pre>

맛보기 코드
<pre><code>pragma solidity ^0.4.18;

contract Variables {
    // 값을 바꾸고 [실행]을 눌러 출력을 확인해보세요!
    string public name = "James";
    uint128 public birthday = 20180328;
    address public addr = 0x72ba7d8e73fe8eb666ea66babc8116a41bfb10e2;
    uint[] setOfYear = [2018, 2019, 2020];

    // [제출]을 위한 상태 변수 선언 입니다.
    uint year = setOfYear[0];
    bool isHappy = true;

    // 이 곳에 주석을 지우고 getYear() 함수를 완성해보세요.
    function getYear() public view returns (/* 자료형 */) {
        return /* 상태 변수명 */
    }

    // 이 곳에 getHappy() 함수를 작성해보세요.
    // function getHappy() public ....
}</code></pre>
 


![image](https://onoffmix.com/images/event/130182/s)  
