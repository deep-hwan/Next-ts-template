## Design Systems

### UI_Weidgets (위젯)

##### 파일경로 : src > \_ui

즉시 사용할 수 있는 디자인 UI 위젯입니다.
디자인 위젯은 앞으로 계속해서 추가 및 업데이트 될 예정입니다.

**모든 위젯의 스타일은 src > \_ui > \_themes**경로를 통해 관리하고 있습니다.

**navigation**

-   Appbar : 헤더의 앱바
-   Drawer : 메뉴 드로어
-   DrawerAccordion : 아코디언 메뉴 드로어
-   BottomNavigator : 바텀네비게이션 바/버튼 기능

**display**

-   BlurLayer : 배경 블러 레이어 (팝업 시 사용)
-   Divider : 경계 선을 처리해야할 때 사용합니다
-   Spacing : 여백을 설정할 수 있습니다

**feedback**

-   ToastSnackBar : JengaProvider를 통해 addToast를 사용할 수 있습니다

**flex > view**

-   V : flex 기반의 view 위젯 컴포넌트

    자체 패키지 UI :
    https://github.com/deep-hwan/react-layout-flexbox

    -   Section : 섹션 레이아웃
    -   Row : 가로 정렬 레이아웃 위젯
    -   Column : 세로 정렬 레이아웃 위젯
    -   Form : form 위젯
    -   ScrollDragHorizontal : 가로 터치 스크롤을 통해 영역 외의 레이아웃을 처리할 수 있습니다
    -   Itmes : ul/ol 레이아웃
    -   Item : li 레이아웃

**flex > position**

-   P : flex 기반의 position 위젯 컴포넌트

    -   Absolute
    -   Fixed
    -   Sticky
    -   BottomFixed : 바텀 아래 고정 영역의 Fixed 레이아웃
    -   BottomFixedAnimate : 바텀 애니메이션 Fixed 레이아웃

**image**

-   Image : NEXT.JS 이미지 최적화 간편 셋팅 위젯
-   Avatar : 사용자 아바타 이미지

**input**

-   Input : input(label) + input(field) 각 기능

    -   TextField(텍스트 필드)
    -   PhoneNumberField(연락처 필드 ex_010-1234-5678)
    -   NumbericField(통화화폐 단위 필드 ex_10,000)
    -   TextArea(에디터 필드)
    -   SearchField(검색 필드)
    -   Select : select(label) 기능
    -   Option : 옵션 기능

**switch**

-   Checkbox : 체크박스
-   Switch : 스위치

**reader**

-   AvatarUploader : 아바타 이미지 업로더 기능
-   ImageUploader : 이미지 업로더 기능

**loading**

-   LoaddingSpinner : 로딩스피너
-   LoadingLayer : 로딩 레이어
-   Skeleton : 스켈레톤 로딩

**tab**

자체 패키지 UI :
https://github.com/deep-hwan/react-touchableopacity

-   Button : 타이틀 버튼 위젯
-   TouchableOpacity : react-native 에서 제공되는 prassable 기능의 탭

**typography**

자체 패키지 UI :
https://github.com/deep-hwan/react-typogrphy-txt

-   Txt : h1/h2/h3/h4/h5/h6/b/strong/p 텍스트
-   TxtTab : span 텍스트

**Modal**

-   Modal : 기본 모달 팝업
-   Dialog : Dialog 타입의 모달 팝업
-   BottomSheet : BottomSheet 타입의 IOS 모달
-   CalenderModal : 달력 사용 가능 형태의 모달 위젯

**Calender**

-   Calender : yyyy / yyyy-mm / yyyy-mm-dd 포맷을 제공하는 달력 UI 위젯
