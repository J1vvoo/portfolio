import about from '../assets/img/about.jpg'
import port01 from '../assets/img/port01.jpg'
import port02 from '../assets/img/port02.jpg'
import port03 from '../assets/img/port03.jpg'
import port04 from '../assets/img/port04.jpg'
//import port05 from '../assets/img/port05.jpg'
//import port06 from '../assets/img/port06.jpg'
//import port07 from '../assets/img/port07.jpg'
//import port08 from '../assets/img/port08.jpg'
//import port09 from '../assets/img/port09.jpg'
//import port10 from '../assets/img/port10.jpg'

export const headerNav = [
  {
    title: 'home',
    url: '#intro',
  },
  {
    title: 'about',
    url: '#skill',
  },
  {
    title: 'project',
    url: '#site',
  },
  {
    title: 'team',
    url: '#port',
  },
  {
    title: 'contact',
    url: '#contact',
  },
]

export const introText = {
  title: 'my portfolio',
  desc: ['things', 'that contain', 'my efforts'],
  img: about,
}

export const skillText = [
  {
    title: 'University',
    desc: ['중부대학교 2학년 재학중'],
  },
  {
    title: 'Club',
    desc: ['정보보안 동아리 SCP 소속'],
  },
]

export const siteText = [
  {
    text: ['Embedded Analysis'],
    title: 'IP Home Cam 취약점 분석',
    code: 'https://drive.google.com/file/d/1wlxSsZjiIJt-KRx2J8MajBfP2AKIBQvW/view?usp=drive_link',
    view: 'https://blog.naver.com/j1vvoo/223194711695',
    info: [
      'INCOGNITO 2023 summer',
      '2023/07/01  ~  2023/09/10',
      'IP Cam 취약점 분석',
    ],
  },
  {
    text: ['Network Project'],
    title: '와이파이를 이용한 네트워크 프로그래밍',
    code: 'https://github.com/J1vvoo/Network_progrmming',
    view: 'https://blog.naver.com/j1vvoo/223227779121',
    info: ['SCP', '2023/09/26 ~ ing', 'Network'],
  },
  {
    text: ['Python Cookie Stealer'],
    title: '파이썬을 이용한 XSS 공격',
    code: 'https://github.com/TheWation/PythonCookieStealer',
    view: 'https://padlet.com/skawldn0401/my_score-a-eaqk5j2mdfn94002',
    info: ['Python Project', '2023/09/27 ~ ing', 'xss cookie steal'],
  },
]

export const portText = [
  {
    num: '팀프로젝트 소개',
    title: '웹 취약점 테스트 홈페이지 개발',
    desc: '웹의 편리함과 쉬운 접근성으로 인해 이용자들은 계속 증가하고 있으며, 이에 따라 웹 페이지 해킹 사례 또한 계속해서 증가하고 있습니다. 이러한 이유로 웹보안에 많은 신경을 써야하는 것은 피할 수 없습니다. 따라서 저희 팀은 이에 대비하기 위해 대중적으로 잘 알려진 웹 취약점을 테스트 해보고, 어떻게 시큐어 코딩을 해야 해킹을 막을 수 있는지에 대해 알리기 위해 웹 취약점을 테스트 할 수 있는 페이지를 개발하는 프로젝트 주제를 선정하게 되었습니다.',
    img: port01,
  },
  {
    num: '팀원 소개',
    title: '팀장 : 김원태',
    desc: '김원태, 김수현, 임성빈, 남지우, 전유경',
    img: port02,
  },
  {
    num: '취약점 선정',
    title: '+ 사용할 Tool',
    desc: '보다 잘 알려져있는 XSS, CSRF, SSRF, SQL Injection, NoSQL Injection 총 5개의 취약점으로 선정을 했으며 BackEnd는 AWS와 Docker 그리고 MongoDB, FrontEnd는 Next.js, 소스 코드 관리는 Github를 사용할 예정입니다.',
    img: port03,
  },
  {
    num: '마음가짐',
    title: '프로젝트에 임하는 자세',
    desc: '교수님의 강의를 기반으로 "웹 서버 보안 프로그래밍" 교과목에 부합하는 프로젝트를 수행하며 성장하고자 하는 마음가짐으로 임하겠습니다.',
    img: port04,
  },
]

export const contactText = [
  {
    title: 'phone : 010-5163-9687',
  },
  {
    link: 'mailto:skawldn0401@naver.com',
    title: 'mail : skawldn0401@naver.com',
  },
]

export const footerText = [
  {
    title: 'github',
    desc: '깃허브 방문하기.',
    link: 'https://github.com/J1vvoo/Webserver',
  },
  {
    title: 'blog',
    desc: '블로그 방문하기.',
    link: 'https://blog.naver.com/j1vvoo',
  },
]
