//navigation
import { AppBar } from './navigation/AppBar'
import { AppDrawer } from './navigation/AppDrawer'
import { DrawerAccordion } from './navigation/DrawerAccordion'
import { BottomNavigator } from './navigation/BottomNavigator'

//display
import { BlurLayer } from './display/BlurLayer'
import { Divider } from './display/Divider'
import { Spacing } from './display/Spacing'

//flex
import { P } from './flex/P'
import { V } from './flex/V'

//tab
import Button from './tab/Button'
import TouchableOpacity from './tab/TouchableOpacity'

//input
import { Input } from './Input/Input'
import { Select } from './Input/Select'
import { Option } from './Input/Option'

//images
import { Avatar } from './image/Avatar'
import Image from './image/Image'

//reader
import { AvatarUploader } from './reader/AvatarUploader'
import { ImageUploader } from './reader/ImageUploader'

//switch
import { Checkbox } from './switch/Checkbox'
import { Switch } from './switch/Switch'

//typography
import { Txt, TxtSpan } from 'react-typogrphy-txt'

//loading
import { LoadingSpinner } from './loading/LoadingSpinner'
import { LoadingLayer } from './loading/LoadingLayer'
import { Skeleton } from './loading/Skeleton'

//modal
import { Dialog } from './modal/Dialog'
import { Modal } from './modal/Modal'
import { BottomSheet } from './modal/BottomSheet'
import { CalenderModal } from './modal/CalenderModal'

//calneder
import { Calendar } from './calender/Calender'

//
import FlatList from 'react-flatlist-ui'
import { useJenga } from './JengaProvider'

console.error = () => {}

export {
    AppBar,
    AppDrawer,
    DrawerAccordion,
    BottomNavigator,
    Spacing,
    Divider,
    BlurLayer,
    V,
    P,
    Button,
    Txt,
    TxtSpan,
    Input,
    Select,
    Option,
    AvatarUploader,
    ImageUploader,
    Checkbox,
    Switch,
    LoadingSpinner,
    LoadingLayer,
    Skeleton,
    Dialog,
    Modal,
    BottomSheet,
    CalenderModal,
    TouchableOpacity,
    useJenga,
    Calendar,
    FlatList,
    Avatar,
    Image,
}
