## Design Systems (UI_Weidgets)

**navigation**

- AppBar : 헤더에서 사용되는 앱바
- AppDrawer : 헤더에서 toggle을 클릭했을 때 노출되는 드로어 박스
- BottomNavigator : 바텀네비게이션 바/버튼 기능

**display**

- BlurLayer : 배경 블러 레이어 (팝업 시 사용)
- Divider : 레이아웃 내에 경계선을 처리해야할 때
- Spacing : 여백 및 공간을 설정하는 레이어

**feedback**

- ToastSnackBar : 전역 Provider인 JengaProvider를 통해 addToast를 사용할 수 있습니다

**flex > view**

📁 \_utils : 타입, 스타일, props 등을 관리하고 있어요

- V : flex 기반의 view 위젯 컴포넌트

  - Section : 섹션 레이아웃
  - Row : 가로 정렬 레이아웃 위젯
  - Column : 세로 정렬 레이아웃 위젯
  - Form : form 레이아웃
  - ScrollDragHorizontal : 가로 방향의 터치 드레그 형태의 레이아웃
  - Itmes : ul/ol Items List
  - Item : list Item

**flex > position**

- P : flex 기반의 position 위젯 컴포넌트

  - Absolute
  - Fixed
  - Sticky
  - BottomFixed : 바텀 요소의 고정 영역의 Fixed 레이아웃
  - BottomFixedAnimate : 바텀 애니메이션 Fixed 레이아웃

**image**

- Image : 더 나은 이미지 최적화를 제공하는 NEXT.JS 이미지 셋팅 위젯
- Avatar : 사용자 아바타 이미지 위젯

**input**

- Input : input(label) + input(field) 각 기능

  - TextField : 텍스트 작성 필드
  - PhoneNumberField : 연락처 작성 필드 ex_010-1234-5678
  - NumbericField : 통화화폐 단위 필드 ex_10,000
  - TextArea : 에디터 필드
  - SearchField : 검색 필드
  - Select : selectbox 필드 (label 기능 자체 제공)
  - Option : Select에서 사용되는 Option 위젯

**switch**

- Checkbox : 탭 타입의 체크박스
- Switch : 스위치 타입 체크박스

**reader**

- AvatarUploader : 아바타 이미지 업로더 기능
- ImageUploader : 이미지 업로더 기능

**loading**

- LoaddingSpinner : 원형 스피너 로딩 타입
- LoadingLayer : 팝업 레이어의 로딩 애니메이션
- Skeleton : 스켈레톤 로딩

**tab**

📁 \_utils : 타입, 스타일, props 등을 관리하고 있어요

- Button : 탭 버튼 위젯
- TouchableOpacity : react-native 에서 제공되는 prassable 기능의 탭 (as : div | li | button | a)

**typography**

📁 \_utils : 타입, 스타일, props 등을 관리하고 있어요

- Txt : h1/h2/h3/h4/h5/h6/b/strong/p 타입 텍스트
- TxtSpan : span 타입 텍스트

**Modal**

- Modal : 기본 형틔의 모달 팝업
- Dialog : Dialog 타입의 모달 팝업
- BottomSheet : IOS UI 타입의 바텀 모달 시트 위젯
- CalenderModal : 달력 기능을 제공하는 팝업 모달

**Calender**

- Calender : yyyy / yyyy-mm / yyyy-mm-dd 포맷을 제공하는 달력 UI 위젯
