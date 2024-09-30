## Design Systems (UI_Weidgets)

**navigation**

- AppBar : Used in header
- AppDrawer : DrawerBox exposed when you click toggle in the header
- BottomNavigator : Bottom Navigation Bar/Burton Features

**display**

- BlurLayer : Background Blur Layer (used during pop-up)
- Divider : Used when you need to deal with boundaries within the layout
- Spacing : You can set the margin and space

**feedback**

- ToastSnackBar : addToast is available through JengaProvider, a global provider

**flex > view**

📁 \_utils: It manages types, styles, props, etc

- V : flexbox-based view widget components

  - Section : Section Layout
  - Row : Horizontal Alignment Layout Widget
  - Column : Vertical Alignment Layout Widget
  - Form : form layout
  - ScrollDragHorizontal : Horizontal touch drag-type layout
  - Itmes : ul/ol Items List
  - Item : list Item

**flex > position**

- P : position widget components based on flexbox

  - Absolute
  - Fixed
  - Sticky
  - BottomFixed : Fixed layout of fixed area of bottom element
  - BottomFixedAnimate : Bottom Animation Fixed Layout

**image**

- Image : NEXT.JS Image Setting Widget for Better Image Optimization
- Avatar : User Avatar Images Widget

**input**

- Input

  - TextField : Text Creation Fields
  - PhoneNumberField : Contact Creation Field ex_01-1234-5678
  - NumbericField : Currency Unit Field ex_10,000
  - TextArea : Editor Field
  - SearchField : Search Field
  - Select : Selectbox field (label self-provided)
  - Option : Option widget used by Select

**switch**

- Checkbox : Tab type checkbox
- Switch : Switch Type checkbox

**reader**

- AvatarUploader : Avatar Image Uploader Features
- ImageUploader : Image Uploader Features

**loading**

- LoaddingSpinner : Circular spinner loading type
- LoadingLayer : Animated loading of pop-up layers
- Skeleton : Rotating of skeleton UI type

**tab**

📁 \_utils: It manages types, styles, props, etc

- Button : Tab Button Widget
- TouchableOpacity : Tab of passable function provided by react-native (as : div | li | button | a)

**typography**

📁 \_utils: It manages types, styles, props, etc

- Txt : h1/h2/h3/h4/h5/h6/b/strong/p Type
- TxtTab : span Type

**Modal**

- Modal : Basic Hyungtae's Modal Pop-up
- Dialog : Dialog type modal pop-up
- BottomSheet : Bottom Modal Sheet Widget of IOS UI Type
- CalenderModal : Pop-up modals with calendar features

**Calender**

- Calender : Calendar UI widget that provides yyyyyy-mm/yyyyyyy-mm-dd format
