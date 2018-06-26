# 지난 8주차 실습 리포트 (ridickle7)

### 1. 진행 내용  
- [node.js 기반 이더리움 개발 실습](https://programmers.co.kr/learn/courses/36) 공부

### 2. 상세
- #### 0. 준비
  - MetaMask  
    > - chrome extension 프로그램  
    > - 이더리움 보관 / 이더리움을 기반으로 개발된 여러 ICO 코인 구매/저장을 도와주는 프로그램  
    
  - Infura  
    > - 이더리움 네트워크 인프라 제공
    > - 설치 운영의 부담이 없음
    
  - Faucet  
    > - 코인을 무료로 얻을 수 있는 사이트
    
  - Node.js  
    > - javascript 기반 서버 플랫폼  
    
  - twitter  
    > - SNS
    > - 아래 문장을 입력하여 Rinkeby 테스트용 네트워크에서 한도내의 ether을 지원받을 수 있음
    >   <pre><code> Requesting faucet funds into 0x***YOUR_ADDRESS***************** on the #Rinkeby #Ethereum test network.</code></pre>

- #### 1. 과정
  - 1. **크롬 웹스토어**에서 MetaMask 다운로드  
      ![image]()
  - 2. MetaMask 회원가입 (가입 후 **seed 값** 을 기억할 것!)
      ![image]()
  - 3. Infura 회원가입 (가입 후 **네트워크 링크** 를 기억할 것)
      ![image]()
  - 4. twitter 가입 후 아래 문장으로 tweet
      <pre><code> Requesting faucet funds into 0x***YOUR_ADDRESS(METAMASK)***************** on the #Rinkeby #Ethereum test network.</code></pre>
  - 5. **tweet 메시지 링크** Faucet 창에 입력
  - 6. 행복하게 이더를 받고 마무리~

- #### 2. 기초 세팅
  - 1. **크롬 웹스토어**에서 MetaMask 다운로드  
      ![image]()
  - 2. MetaMask 회원가입 (가입 후 **seed 값** 을 기억할 것!)
      ![image]()
  - 3. Infura 회원가입 (가입 후 **네트워크 링크** 를 기억할 것)
      ![image]()
  - 4. twitter 가입 후 아래 문장으로 tweet
      <pre><code> Requesting faucet funds into 0x***YOUR_ADDRESS(METAMASK)***************** on the #Rinkeby #Ethereum test network.</code></pre>
  - 5. **tweet 메시지 링크** Faucet 창에 입력
  - 6. 행복하게 이더를 받고 기초 세팅 마무리

- #### 3. solidity 설정
  - 1. **solidity IDE** 접속  
      ![image]()
  - 2. **Voting.sol** 을 생성하여 아래 코드 작성
    <pre><code>pragma solidity ^0.4.18;
    
    contract Voting {
    
		// 후보자의 이름과 득표수를 저장
		mapping (bytes32 => uint8) public votesReceived;
		
		// 후보자의 이름을 저장하는 배열
		bytes32[] public candidateList;
		
		// 스마트 컨트랙트 생성 후 블록체인 반영 시 호출되는 생성자 정의
		function Voting(bytes32[] candidateNames) public {
			candidateList = candidateNames;
		}
		
		// 해당 후보자의 득표 수를 리턴
		function totalVotesFor(bytes32 candidate) view public returns (uint8) {
			require(validCandidate(candidate));
			return votesReceived[candidate];
		}
		
		// 해당 후보자에게 투표
		function voteForCandidate(bytes32 candidate) public {
			require(validCandidate(candidate));
			votesReceived[candidate] += 1;
		}
		
		// 해당 후보자가 리스트에 있는지 확인 (없으면 false)
		function validCandidate(bytes32 candidate) view public returns (bool) {
			for(uint i=0; i < candidateList.length; i++) {
				if(candidateList[i] == candidate) {
					return true;
				}
			}
			return false;
		}
	}</code></pre>
      ![image]()
  - 3. Compile에서 Start to compile 클릭 후 -> candidates 에 아래 데이터 입력 -> transact 클릭
    <pre><code>(["0x4d69630000000000000000000000000000000000000000000000000000000001", "0x4d69630000000000000000000000000000000000000000000000000000000002", "0x4d69630000000000000000000000000000000000000000000000000000000003", "0x4d69630000000000000000000000000000000000000000000000000000000004”])</code></pre>
      ![image]()
  - 4. 해당 컨트렉트 함수에 적절한 데이터를 입력하여 후보자에 투표, 리스트 확인, 후보자 판별 등이 가능함

- #### 4. node.js 개발
  - 1. **express** 프로젝트 생성
    <pre><code>npm install -g express-generator  // express 프로젝트 생성기 설치
    express myapp 		          // express 프로젝트 myapp 생성</pre></code>
  - 2. 각종 라이브러리 인스톨
    <pre><code>npm install			             // 기본 필요 라이브러리 설치
    npm install truffle-hdwallet-provider --save // truffle-hdwallet-provider (개인 지갑 연동 시키기 위한 라이브러리) 설치
    npm install web3 --save			     // web3 (이더리움 호환 javascript API) 설치</pre></code>
  - 3. index.js 코드 작성 (이미 만들어진 파일 수정)
     <pre><code>var express = require('express');
     var router = express.Router();
     
     var HDWalletProvider = require('truffle-hdwallet-provider');
     var Web3 = require('web3');
     
     // Voting.sol 의 전체 경로 정보
     var abi = JSON.parse('Compiles -> Details -> ABI 복사 하여 1줄로 입력');
     
     var provider = new HDWalletProvider(
     'metamask seed value',
     'infura network link (Rinkeby)');
     
     /* GET home page. */
     router.get('/', function (req, res, next) {
     	res.render('index', {
     		title: 'Express'
     	});
     });
     
     router.get('/voteIn', function(req, res, next) {
     	var web3 = new Web3(provider);
     	var clientContractInstance = new web3.eth.Contract(abi, "통신할 address 32byte 주소");
     	
     	var valida = async() => {
     		
     		//"Voting.sol" 의 validCandidate 함수 실행 (parameter : "0x4d........0003")
     		console.log(clientContractInstance.methods.validCandidate("0x4d69630000000000000000000000000000000000000000000000000000000003")
     			// eth.accounts[0] 값을 가져옴
     			.call({from: web3.eth.accounts[0]})
     			.then(function(receipt){
     				console.log(receipt);
     			})
     		);
     	}
     	
     	valida();
     });
     
     router.get('/vote', function (req, res, next) {
     	var web3 = new Web3(provider);
     	
     	//"Voting.sol" 내에서 진행된 투표수 확인
     	var deploy = async() => {
     		var accounts = await web3.eth.getAccounts();
     		console.log(accounts)
     	};
     	
     	deploy();	
     });
     
     module.exports = router;</code></pre>
   
  
  - 4. "주소/voteIn" / "주소/vote" 를 통해 remix IDE에 작성된 Solidity 기반 스마트 컨트랙트 활용 가능

### 3. 참고
- 헌진 강연 및 레퍼런스 ([링크](https://github.com/KimHunJin/Blockchain/wiki/make-dapp-using-truffle-and-rinkeby))
