import type { NextPage } from 'next'
import sendSms from '../hooks/sendMessage'


// const data = [
//   {
//     name: "김민혜",
//     phoneNumber: "01090356115",
//     class: [{
//       name: "균형",
//       count: 2
//     }, {
//       name: "뉴로플로우",
//       count: 1
//     }, {
//       name: "뉴트리",
//       count: 1
//     }, {
//       name: "순환",
//       count: 2
//     }, {
//       name: "정렬",
//       count: 1
//     }, {
//       name: "회복",
//       count: 1
//     }
//     ]
//   },
//   {
//     name: "김수미",
//     phoneNumber: "01092245832",
//     class: [{
//       name: "균형",
//       count: 1
//     }, {
//       name: "순환",
//       count: 1
//     }, {
//       name: "정렬",
//       count: 6
//     }
//     ]
//   },
//   {
//     name: "김지연",
//     phoneNumber: "01067547636",
//     class: [{
//       name: "뉴로플로우",
//       count: 5
//     }, {
//       name: "순환",
//       count: 1
//     }, {
//       name: "정렬",
//       count: 4
//     }, {
//       name: "회복",
//       count: 2
//     }
//     ]
//   },
//   {
//     name: "민주영",
//     phoneNumber: "01045322434",
//     class: [{
//       name: "순환",
//       count: 4
//     }, {
//       name: "정렬",
//       count: 3
//     }, {
//       name: "회복",
//       count: 5
//     }
//     ]
//   },
//   {
//     name: "손다애",
//     phoneNumber: "01077744660",
//     class: [{
//       name: "균형",
//       count: 1
//     }, {
//       name: "순환",
//       count: 4
//     }, {
//       name: "회복",
//       count: 3
//     }
//     ]
//   },
//   {
//     name: "송성숙",
//     phoneNumber: "01042652244",
//     class: [{
//       name: "균형",
//       count: 3
//     }, {
//       name: "회복",
//       count: 5
//     }
//     ]
//   },
//   {
//     name: "유은주",
//     phoneNumber: "01038970754",
//     class: [{
//       name: "균형",
//       count: 1
//     }, {
//       name: "정렬",
//       count: 5
//     }, {
//       name: "회복",
//       count: 2
//     }
//     ]
//   },
//   {
//     name: "이슬기",
//     phoneNumber: "01044834783",
//     class: [{
//       name: "뉴트리",
//       count: 3
//     }, {
//       name: "순환",
//       count: 1
//     }, {
//       name: "정렬",
//       count: 3
//     }, {
//       name: "회복",
//       count: 2
//     }
//     ]
//   },
//   {
//     name: "이윤영",
//     phoneNumber: "01089984641",
//     class: [{
//       name: "균형",
//       count: 2
//     }, {
//       name: "뉴로플로우",
//       count: 1
//     }, {
//       name: "순환",
//       count: 4
//     }, {
//       name: "정렬",
//       count: 7
//     }, {
//       name: "회복",
//       count: 3
//     }
//     ]
//   },
//   {
//     name: "이효경",
//     phoneNumber: "01093760614",
//     class: [{
//       name: "순환",
//       count: 4
//     }, {
//       name: "정렬",
//       count: 2
//     }, {
//       name: "회복",
//       count: 2
//     }
//     ]
//   },
//   {
//     name: "임경아",
//     phoneNumber: "01029362924",
//     class: [{
//       name: "순환",
//       count: 1
//     }, {
//       name: "정렬",
//       count: 6
//     }, {
//       name: "회복",
//       count: 1
//     }
//     ]
//   },
//   {
//     name: "조혜경",
//     phoneNumber: "01086443272",
//     class: [{
//       name: "뉴로플로우",
//       count: 2
//     }, {
//       name: "순환",
//       count: 1
//     }, {
//       name: "정렬",
//       count: 2
//     }, {
//       name: "회복",
//       count: 3
//     }
//     ]
//   },{
//     name: "이가은",
//     phoneNumber: "01042051236",
//     class: [{
//       name: "뉴로플로우",
//       count: 2
//     }, {
//       name: "순환",
//       count: 1
//     }, {
//       name: "정렬",
//       count: 2
//     }, {
//       name: "회복",
//       count: 3
//     }
//     ]
//   }
// ];

// const data = [
//   {
//     name: "구본미",
//     phoneNumber: "01047277171",
//     class: [{
//       name: "뉴트리",
//       count: 1
//     }, {
//       name: "정렬",
//       count: 2
//     }, {
//       name: "회복",
//       count: 2
//     }
//     ]
//   },
//   {
//     name: "김지우",
//     phoneNumber: "지도자과정",
//     class: [{
//       name: "순환",
//       count: 1
//     }, {
//       name: "핏",
//       count: 1
//     }
//     ]
//   },
//   {
//     name: "김태은",
//     phoneNumber: "01046973658",
//     class: [{
//       name: "균형",
//       count: 1
//     }, {
//       name: "뉴로플로우",
//       count: 1
//     }, {
//       name: "회복",
//       count: 3
//     }
//     ]
//   },
//   {
//     name: "박신혜",
//     phoneNumber: "지도자과정",
//     class: [{
//       name: "균형",
//       count: 1
//     }, {
//       name: "뉴트리",
//       count: 1
//     }, {
//       name: "순환",
//       count: 1
//     }, {
//       name: "정렬",
//       count: 1
//     }
//     ]
//   },
//   {
//     name: "봉예주",
//     phoneNumber: "01050450108",
//     class: [{
//       name: "뉴로플로우",
//       count: 2
//     }, {
//       name: "회복",
//       count: 1
//     }
//     ]
//   },
//   {
//     name: "손주미",
//     phoneNumber: "01024432080",
//     class: [{
//       name: "순환",
//       count: 2
//     }, {
//       name: "정렬",
//       count: 1
//     }, {
//       name: "회복",
//       count: 2
//     }
//     ]
//   },
//   {
//     name: "시니카 헨리",
//     phoneNumber: "01066423381",
//     class: [{
//       name: "순환",
//       count: 1
//     }, {
//       name: "회복",
//       count: 2
//     }
//     ]
//   },
//   {
//     name: "안송이",
//     phoneNumber: "01090830195",
//     class: [{
//       name: "뉴트리",
//       count: 1
//     }]
//   },
//   {
//     name: "유훈상",
//     phoneNumber: "01039298123",
//     class: [{
//       name: "순환",
//       count: 1
//     }]
//   },
//   {
//     name: "이유진",
//     phoneNumber: "01087817581",
//     class: [{
//       name: "뉴로플로우",
//       count: 2
//     }, {
//       name: "뉴트리",
//       count: 1
//     }, {
//       name: "순환",
//       count: 4
//     }
//     ]
//   },
//   {
//     name: "이주영",
//     phoneNumber: "01086005064",
//     class: [{
//       name: "균형",
//       count: 2
//     }, {
//       name: "뉴로플로우",
//       count: 4
//     }
//     ]
//   },
//   {
//     name: "이지영",
//     phoneNumber: "01041417980",
//     class: [{
//       name: "균형",
//       count: 1
//     }, {
//       name: "정렬",
//       count: 2
//     }, {
//       name: "회복",
//       count: 1
//     }
//     ]
//   },
//   {
//     name: "이현아",
//     phoneNumber: "01029282991",
//     class: [{
//       name: "정렬",
//       count: 3
//     }, {
//       name: "회복",
//       count: 2
//     }
//     ]
//   },
//   {
//     name: "정수원",
//     phoneNumber: "01098210569",
//     class: [{
//       name: "균형",
//       count: 1
//     }, {
//       name: "순환",
//       count: 1
//     }, {
//       name: "정렬",
//       count: 2
//     }, {
//       name: "회복",
//       count: 3
//     }
//     ]
//   },
//   {
//     name: "정은수",
//     phoneNumber: "01023774399",
//     class: [{
//       name: "회복",
//       count: 5
//     }]
//   },
//   {
//     name: "조은미",
//     phoneNumber: "01045308123",
//     class: [{
//       name: "뉴트리",
//       count: 1
//     }, {
//       name: "순환",
//       count: 1
//     }, {
//       name: "회복",
//       count: 5
//     }
//     ]
//   },
//   {
//     name: "조혜선",
//     phoneNumber: "01091153628",
//     class: [{
//       name: "균형",
//       count: 1
//     }, {
//       name: "정렬",
//       count: 3
//     }
//     ]
//   },
//   {
//     name: "지선희",
//     phoneNumber: "01056674486",
//     class: [{
//       name: "균형",
//       count: 2
//     }, {
//       name: "정렬",
//       count: 3
//     }
//     ]
//   },
//   {
//     name: "차지수",
//     phoneNumber: "01072319319",
//     class: [{
//       name: "균형",
//       count: 2
//     }, {
//       name: "회복",
//       count: 1
//     }
//     ]
//   },{
//     name: "이가은",
//     phoneNumber: "01042051236",
//     class: [{
//       name: "뉴로플로우",
//       count: 2
//     }, {
//       name: "순환",
//       count: 1
//     }, {
//       name: "정렬",
//       count: 2
//     }, {
//       name: "회복",
//       count: 1
//     }
//     ]
//   }
// ];


const data = [
  {
    name: "옥아람",
    phoneNumber: "01042051236",
    class: [{
      name: "뉴트리",
      count: 1
    }, {
      name: "정렬",
      count: 2
    }, {
      name: "회복",
      count: 2
    }
    ]
  }
];
const Home: NextPage = () => {

  const handleSendSms = () => {
    data.map((item) => {
      sendSms(item)
    })
  }

  return (
    <button onClick={handleSendSms}>문자 발송시작</button>
  )
}

export default Home
