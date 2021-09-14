export const popupPos = {
  1: { x: 16 * 6, y: 16 * 60 },
  2: { x: 16 * 24.5, y: 16 * 42 },
  3: { x: 16 * 34.5, y: 16 * 38 },
  4: { x: 16 * 43, y: 16 * 37 },
  5: { x: 16 * 7, y: 16 * 24 },
  6: { x: 16 * 22, y: 16 * 20 },
  7: { x: 16 * 41, y: 16 * 28 },
  8: { x: 16 * 18, y: 16 * 12 },
};

const works = {
  1: {
    id: "work-1",
    imgUrl: '/img/artist-profile/work01_aaajiao.png',
    popupname: '사람은 싫지만 너는 사랑해',
    title: '아지아오, 사람은 싫지만 너는 사랑해, 2017',
    medium: '단채널 비디오, 컬러, 사운드, 25분 4초',
    description: `온라인에서 활동하는 미디어 아티스트, 블로거, 활동가이자 프로그래머인 아지아오는 중국 작가 쉬 웬카이Xu Wenkai의 가상 페르소나이다.
    인터넷 기반의 사고 방식에 익숙한 디지털 세대가 ‘사용자user’로서 기술을 소비하고 소셜미디어에서 삶을 영위하는 방식에 주목하는 작가는 디지털적 수단에 기반한 관계의 문제, 정체성의 탈신체화를 탐구한다.
    아시아 여성의 얼굴을 시뮬레이션한 안드로이드와 뫼비우스 띠 형태의 팝업 윈도우는 연쇄적인 문답을 반복한다. “내가 진짜처럼 보이니? 그랬으면 좋겠어… 나의 친구가 되어줄 수 있을까? 네가 거기 있을 거라 생각해”
    “사람은 싫지만 너는 사랑해.” 작품은 디스토피아적 고립과 외로움이라는 SF의 고전적 패러다임을 극대화하는데, 실제로 이 패러다임은 소셜미디어 상의 소외와 사용자 간 대인 감정에 관한 문제, 극도로 인간화되는 운영체제의 발전과 더불어 현실과 밀접히 관계한다.`,
    alt: '아지아오 작가의 영상이 프로젝터를 통해 계단의 벽면에 상영되고 있다.',
    showmore: '더보기',
    url: 'https://player.vimeo.com/video/225883582',
  },
  2: {
    id: "work-2",
    imgUrl: '/img/artist-profile/work02_Kim Hyojae.png',
    popupname: '디폴트/썰',
    title: '김효재, 디폴트, 2018-19/2021',
    title2 : '김효재, 썰, 2019',
    medium: '단채널 비디오, 컬러, 사운드, 3분 17초',
    medium2: '단채널 비디오, 컬러, 사운드, 6분 42초',
    // 김효재 작품 두 개임..
    // title: '김효재, 썰, 2019',
    // medium: '단채널 비디오, 컬러, 사운드, 6분 42초',
    description: `김효재에게 ‘디폴트’란 작업 전체를 아우르는 세계관이자, 모든 것이 데이터로 환원되는 세계에서 가상의 정체성을 선택하고 운용하는 사용자를 의미한다. 가상은 사용자의 현실에 개입하고, 현실의 정체성은 가상을 의식한 채 재구성되며, 만들어진 정체성은 다시 가상으로 투영된다. 동명의 작업 <디폴트>는 인플루언서 김나라를 통해 이러한 디폴트 개념을 시각적으로 선언한다. 현실과 가상 모두 얼마나 ‘진짜(the real)’에 닿아있는지가 중요한 오늘날, 자아 성찰은 가상과 일체화된 나의 정체성을 인정하는 것인지 모른다.`,
    // description: `유튜브 형식의 비디오 에세이 연작 중 하나인 <SSUL>은 한국의 인플루언서 김나라가 자신의 얼굴 이미지를 일본, 중국 등에 무단으로 도용당한 ‘하라주쿠 티셔츠 썰’을 담고 있다. 유튜브와 인스타그램 필터 등이 겹쳐진 스크린 위에서 증식하고 변환되는 김나라는 가상과 현실, 실제와 허구, 국가 간의 경계 사이에서 부유하는 디폴트, 우리의 자아를 대변한다.`,
    alt: '김효재 작가의 두 영상 작품이 벽면과 공중의 스크린에 각각 상영되고 있다.',
    showmore: '더보기',
    url: 'https://youtu.be/LulCmSZR6dA', // 디폴트
    url2: 'https://youtu.be/v8Xt8OXWC98', // 썰
  },
  3: {
    id: "work-3",
    imgUrl: '/img/artist-profile/work03_Sondra Perry.png',
    popupname: '잇츠 인 더 게임',
    title: '손드라 페리, 잇츠 인 더 게임 ’17 혹은 진열과 보호를 위한 미러 개그, 2017',
    medium: '단채널 비디오, 컬러, 사운드, 16분 32초',
    description: '손드라 페리는 인공지능, 영상, 설치, 퍼포먼스 등 다매체를 활용해 디지털 문화와 정체성, 기술, 그리고 권력과 구조의 교차점을 탐구해 온 작가이다. 작품은 전미대학체육협회(NCAA) 소속 농구 선수로 활동했던 작가의 쌍둥이 형제가 실제 경험한 사건에서 출발한다. NCAA가 소속 농구 선수들의 키와 몸무게, 경기 기록 등이 포함된 프로필을 당사자의 허가없이 라이센싱 계약을 통해 EA사에 넘겨주었고, 실존 선수들을 연상케 하는 캐릭터들이 비디오 게임 안에 등장해 이를 상대로 소송이 제기된 사건이었다. 작가는 뉴욕 메트로폴리탄미술관과 런던 대영박물관에 옮겨져 진열된 오브제들과 실제 선수들을 닮은 농구 게임 속 캐릭터, 오픈 소스 소프트웨어를 사용해 제작한 가상공간, 회전하고 있는 크로마키 블루 3D 조각, 작가와 쌍둥이 형제의 어린시절 사진 등 실제와 렌더링 된 것을 서로 교차시키고, 서사적인 동시에 공간적인 관계를 만들어낸다. 작가의 의도에 따라 편집된 The Stylistics의 히트곡 "You Are Everything"의 가사는 작품의 주제를 미러링하며 고조시킨다. 이를 통해 작가는 탈맥락화되고 번안된 신체와 정체성 간의 상관 관계와 디지털 신체 소유권의 자본화 등에 질문을 던진다.',
    alt: '손드라 페리 작가의 영상이 프로젝터를 통해 크로마키 블루 색의 벽 앞에 상영되고 있다.',
    showmore: '더보기',
    url: 'https://drive.google.com/file/d/1kE5hM2ZOkbJPAsSKpBuaDEDNMqSkUvXs/view',
  },
  4: {
    id: "work-4",
    imgUrl: '/img/artist-profile/work04_Lu Yang.png',
    popupname: '루도쿠쇼 도쿠시 헬로 월드',
    title: '루양, 루도쿠쇼 도쿠시 헬로 월드, 2021',
    medium: '단채널 HD 비디오, 컬러, 사운드, 3분 25초',
    // title: '루양, 도쿠쇼 도쿠시 헬로 월드 다큐멘터리 1, 2020',
    // medium: '단채널 비디오, 컬러, 사운드, 2분 40초',
    // title: '루양, 도쿠쇼 도쿠시 헬로 월드 다큐멘터리 2, 2021',
    // medium: '단채널 비디오, 컬러, 사운드, 4분 13초',
    description: `2015년 베니스 비엔날레 중국관에서 독특한 작품 세계를 선보이며 주목을 받은 루 양은 미디어, 영상, 설치, 퍼포먼스 등 장르적 구분 없이 다양한 작업을 시도하는 작가이다. 가상현실과 게임, 서브컬처, 그리고 대중 음악을 결합한 멀티미디어 프로젝트를 통해 젠더, 과학, 종교 등을 탐구하며 자신의 정체성을 결정할 수 있는 인터넷의 가능성을 탐구한다. 루 양이 최근 다양한 기술을 활용해 자신의 모습을 본 떠 탄생시킨 ‘도쿠DOKU’는 작가의 가상 아바타이자 새로운 예술 매체로 인터넷 시공간에서 물리적 제약을 뛰어넘어 활동하며, 특정 젠더에 종속되지 않은 채 존재한다. ‘도쿠’라는 이름은 불교 경전에서 ‘인생이란 홀로 태어나 홀로 죽는 것’을 의미하는 독생독사(獨生獨死) 개념으로부터 유래하였다. 함께 전시되는 두 편의 다큐멘터리 영상은 도쿠가 탄생하게 되는 기술적 과정을 보여준다.`,
    alt: '루양 작가의 작품이 방 안에서 모니터와 프로젝터를 통해 각각 상영 중이다.',
    showmore: '더보기',
    url: 'https://vimeo.com/526734582', // 루도쿠쇼 도쿠시 헬로 월드
  },
  5: {
    id: "work-5",
    imgUrl: '/img/artist-profile/work05_Kim Heeuk.png',
    popupname: '소울포미',
    title: '김희욱, 소울포미: ‘당신은 누구입니까?’, 2021',
    medium: '단채널 비디오, 컬러, 사운드, 설문, 오브제, 합판에 접착 시트, 디지털 프린트, 가변설치. 코리아나미술관 제작 지원',
    description: `김희욱은 사회 구조 안에서 발생되는 다양한 사건들 속에서 시스템과 개인의 불안한 정서가 충돌하는 순간에 주목한다. 최근 작가는 스트레스와 그로부터 파생된 불안 등의 감정으로 인해 지친 현대인에게 치유, 명상 관련 상품을 소개하는 내용의 웹 기반의 작품 <SOUL4ME>(2021)를 통해, 정서의 조절조차 상품 구매라는 쉽고 간편한 자본주의 메커니즘에 흡수되어버리는 현실을 은유적으로 드러냈다. 이번 전시에서 새롭게 선보이는 <SOUL4ME: ‘당신은 누구입니까?’>는 <SOUL4ME>를 홍보하고 소개하기 위해 마련된 행사 부스의 형식을 차용한 설치 작품으로 관람객에게 진정한 ‘나만의 정체성’을 찾기 위한 설문 서비스를 제공한다. 정신적 스트레스는 삶의 행복지수 및 자존감과 직결됨을 주지시키는 부스의 문구는 설문에 참여하는 개인에게 맞춤 해결법을 제공하며 현대인의 욕망을 충족시키는 듯 보이지만, 결국 설문의 실질적 기능은 제거된 채 상품 구매로 이어지는 일관된 해답만이 제시될 뿐이다. 작가는 일종의 ‘사이비적 극복 방법론’을 통해 현실 문제로부터 도피하려는 현대인들의 대처 방식에 질문을 던지고 외부적 요소를 통해 스스로의 정체성을 검증받고자 하는 인간 심리를 시각화한다.`,
    alt: `지하 2층 전시장으로 내려가서 마주하게 되는 김희욱 작가의 작품은 상품 홍보 부스 같은 느낌으로 설치되어 있다.
    벽에는 메세지들이 적혀 있고 모니터를 통해 비디오가 재생되고 있다. 테이블에 앉아 작가가 만든 설문에도 참여해 볼 수 있다.`,
    showmore: '더보기',
    url: 'https://www.soul4me.com', // SOUL4ME 홈페이지
  },
  6: {
    id: "work-6",
    imgUrl: '/img/artist-profile/work06_LaTurbo Avedon.png',
    popupname : '그 누구도 아닌 나',
    title: '라터보 아베돈, 그 누구도 아닌 나, 2019',
    medium: '단채널 비디오, 컬러, 사운드, 22분 3초',
    description: `작가이자 큐레이터로 활동하는 라터보 아베돈은 아바타 아티스트로서 온라인 공간에서 작품을 창작하며, 비물질적 정체성non-physical identity과 가상 저자virtual authorship의 실천을 탐구해왔다. 아베돈은 실제 인물로 나타나는 대신 네트워크를 타고 이동하며, 필요에 따라 렌더링을 통해 신체를 만든다. 그의 작품은 기술과 가상의 차원을 통해 그가 ‘굴절refraction’이라 부르는 정체성의 다양성과 다면성을 탐구하는 여정이다. <그 누구도 아닌 나>는 2019년 스위스 취리히에서 열린 ‘Actor & Avatar 컨퍼런스’에 참여한 작가의 프레젠테이션 영상이다. 여기서 아베돈은 그간 아바타 아티스트로서 활동해온 소회를 밝히며, 가상 정체성의 주체성과 권리에 대해 논한다. 아바타로 존재하는 작가가 강조하는 것은 데이터를 핵심으로 하는 ‘아바타’라는 존재 자체이다. 그는 아바타에 내재한 고유한 데이터, 즉 정체성의 가치와 원본성을 강조하며, 이를 페이스북이나 구글 등 상업 비즈니스에 쉽게 귀속시키지 않을 것을 권한다.`,
    alt: '라터보 아베돈 작가의 영상이 커다란 스크린에서 보여지는데, 작가가 온라인에서 활동하는 아바타라고 한다.',
    showmore: '더보기',
    url: 'https://vimeo.com/356543597',
  },
  7: {
    id: "work-7",
    imgUrl: '/img/artist-profile/work07_An Gayoung.png',
    popupname: 'KIN거운 생활',
    title: '안가영, KIN거운 생활: 온라인, 2020-21',
    medium: '머시니마, 단채널 FHD 비디오, 컬러, 사운드, 20분 13초',
    // title: '안가영, 예술가들을 위한 가상 세계 튜토리얼, 2021',
    // medium: '3채널 비디오, 컬러, 무음, 6분 34초, 반복',
    description: `안가영은 최근 가상 세계에서의 인간과 비인간의 공존에 관심을 두고 다매체적 작업을 선보여왔다.
    <KIN거운 생활: 온라인>은 온라인 게임 메타버스인 브이알챗VRChat 환경으로 이주한 세 예술가의 서사를 통해 가상 세계에서 발생 가능한 다면적 소외의 문제를 제기하고 공존의 가능성을 모색한다.
   이들은 게임 속 신체에 부적응한 가상의 난민 아바타가 되어 역할극을 하며, 무차별적 복제와 기술에의 적응, 폭력 등 기술 발전의 사각지대를 조명한다.
   제목의 ‘KIN’은 작가가 주목하는 새로운 ‘친족’ 개념의 연장선상에 있는데, 이들은 가상의 무대이자 안온한 공존의 공간인 킨 쉘터KIN shelter를 함께 설계하고
   ‘예술가를 위한 가상세계 튜토리얼’을 작성하며 온라인 세계에서 요구되는 삶의 방식과 공존의 조건을 고민한다.`,
    alt: `안가영 작가의 작품은 반투명한 청록색 플라스틱 박스 형태의 구조물 안에서 상영되고,
    옆 쪽의 벽에 부착된 모니터에서는 작품에 등장하는 캐릭터들의 튜토리얼이 상영되고 있다.`,
    showmore: '더보기',
    url: 'https://vimeo.com/525910963', // KIN거운 생활:온라인 트레일러
  },
  8: {
    id: "work-8",
    imgUrl: '/img/artist-profile/work08_Molly Soda.png',
    popupname: '미 앤 마이 걸스',
    title: '몰리 소다, 미 앤 마이 걸스, 2021',
    medium: '비디오 설치, 컬러, 사운드, 디지털 프린트, LED 조명, 풍선, 가변크기',
    description: `디지털 시대의 뉴 페미니스트 예술가로 불리는 몰리 소다는 영상, GIF, 웹 기반의 퍼포먼스 등 다양한 매체를 통해 정체성, 자기-연출, 대중매체와 소셜미디어 문화를 다룬다. 특히 틴에이저 문화와 소셜미디어의 어법을 전유해 온라인 안에서 자기 정체성을 연출하고 표현하는 현상을 탐구한다. 일상을 소개하는 vlog부터 메이크업 튜토리얼, 스트리밍 형식 등을 차용하는 소다의 작업은 우리 각자의 스크린을 연상시킨다. 작가는 끊임없이 확장하는 인터넷 웹 안에 자기 이미지를 위치시킨다. 춤추고 노래하는, 언뜻 가볍고 피상적으로 보이는 온라인 페르소나는 이를 관음하는 관객을 향한다. 인터넷과 사적인 공간이 교차하는 지점, 홀로 카메라 앞에 선 우리는 얼마나 타인의 시선을 전제하는지, 온라인을 부유하고 소비되는 자기 정체성은 ‘오롯한 나’인지를 묻는다.`,
    alt: '방 안은 핑크빛 조명 불빛으로 가득하고, 벽면에는 작가가 직접 촬영하거나 모은 이미지들이 컴퓨터 바탕화면의 아이콘들처럼 붙어있다. 벽마다 설치된 모니터에서는 몰리 소다 작가의 여러 영상 작품들이 재생 되는 중이다.',
    showmore: '더보기',
    url: '',
    // <쉬머리 블루 아이섀도우 튜토리얼>https://youtu.be/MNkw_60O4o8
    // <미 앤 마이 걸스> https://youtu.be/2oe30WvFA9M
    // <데스크탑 꾸미기 *릴랙싱*> https://youtu.be/x2TumO1fG2E
    // <랜선 집들이! 첫 번째 집! **드디어**> https://youtu.be/8tHXNXaIxg0
    // <스텀블 포스> https://youtu.be/MW6PEmwsQYk
  },
};

export default works;
