# Seunghyun Shin — Personal Homepage (Redesigned)

기존 BootstrapMade 기반 다중 페이지 사이트(index / about / resume / publications / awards / contact)를
**단일 페이지(single-page)** 학자 홈페이지 스타일로 재구성했습니다.

## 무엇이 바뀌었나

| 항목 | 이전 | 이후 |
|---|---|---|
| 페이지 구조 | 페이지 6개로 분리 | **`index.html` 단일 페이지** + 앵커 섹션 |
| CSS 프레임워크 | Bootstrap 5 + 다수의 vendor 라이브러리 | 순수 CSS (1 파일) |
| JS 의존성 | aos / glightbox / swiper / isotope / typed.js / waypoints 등 | 순수 JS (1 파일, ~120 lines) |
| 폰트 | Poppins / Raleway / Roboto | **Fraunces** (제목용 세리프) + **Inter** (본문) |
| 컬러 | 다크 히어로 + Bootstrap 디폴트 | warm paper (#f7f4ed) · ink (#1a1a1a) · terracotta accent (#b85c38) |
| 네비게이션 | 페이지 링크 | 동일 페이지 내 앵커 + 스크롤시 active 표시 + 모바일 토글 |
| 출판물 필터 | Isotope 라이브러리 | 순수 JS data-attribute 필터 |

## 보존된 콘텐츠

- ✅ Hero (이름 / 소속 / 타이핑 효과 / 소셜 링크)
- ✅ About 본문 + 메타 정보 (Institution, Position, Office, Email, CV)
- ✅ Research Interests 3개 (Creative AI / Generative Models / Computational Photography) + GIF 썸네일
- ✅ Publications 전체 (arXiv 2026, ICLR 2026 × 2, ICCV 2025, ECCV 2024, CVPR 2024, AAAI 2023)
- ✅ Patents 6개
- ✅ Research Experience 5개 (Huawei Noah's Ark / UCSD / Visual AI / Wireless / Computer Vision)
- ✅ Education (Ph.D. / B.S.)
- ✅ Skills (Python, PyTorch, TensorFlow, C/C++, Java, Photoshop)
- ✅ Contact (Email, Office, Social Profiles, Google Maps)

`awards.html`은 원본이 BootstrapMade 더미 데이터(Lorem ipsum)였기 때문에 새 사이트에서는 제외했습니다.
실제 수상 내역을 알려주시면 섹션을 추가하겠습니다.

## 파일 구조

```
Website/
├── index.html              ← 새 단일 페이지 (모든 콘텐츠)
├── assets/
│   ├── css/main.css        ← 새 스타일시트 (BS 의존성 없음)
│   ├── js/script.js        ← 새 인터랙션 스크립트
│   └── img/                ← 기존 이미지 그대로 사용 (profile.jpg, *.gif, *.png 등)
└── CNAME                   ← 그대로 유지
```

## 적용 방법

1. 새 `index.html`, `assets/css/main.css`, `assets/js/script.js` 세 파일을 저장소에 덮어쓰기/추가
2. 기존 `about.html`, `resume.html`, `publications.html`, `awards.html`, `contact.html`,
   `portfolio-details.html`, `service-details.html`, `starter-page.html` 삭제 (선택사항 — 외부 링크가 없다면 안 지워도 무방)
3. 기존 `assets/img/` 이미지들은 그대로 사용됩니다 (파일명 동일)
4. 기존 `assets/vendor/`, `forms/` 디렉토리는 더 이상 필요 없습니다 (선택적 삭제)

## 디자인 의도

학자 홈페이지에 자주 보이는 두 극단 (1) Bootstrap 템플릿 그대로의 화려함과 (2) 백색 / Times 한 줄짜리 텍스트
사이에서, **차분한 paper톤 + 정돈된 타이포그래피 + 절제된 색상 강조**를 택했습니다.
참고하신 `vvsjeon.github.io`의 학자다운 차분함과 `jungyu0413.github.io`의 모던한 섹션 구조를 결합한 방향입니다.
