// 请求头-内容类型
export const ContentType = {
  JSON: 'application/json;charset=UTF-8',
  FORM: 'application/x-www-form-urlencoded;charset=UTF-8',
  UPLOAD: 'multipart/form-data'
}

// 令牌键值
export const TokenKey = {
  TOKEN: 'token',
  ACCESS: 'access'
}

// 本地存储类型
export const StorageType = {
  COOKIE: 'cookie',
  SESSION: 'sessionStorage',
  LOCAL: 'localStorage'
}

// 请求成功状态码
export const SuccessCode = {
  ZERO: 0,
  TWO_HUNDRED: 200
}

// 请求 mapping
export const RequestMapping = {
  SLIPPER: '/slipper',
  API: '/api'
}

// 双向绑定名
export const ModelBinding = {
  MODEL_VALUE: 'update:modelValue',
  MODEL_EVENT: 'update:modelEvent'
}

export const actionsMap = {

}

export const RoleStatus = [{label: '正常', value: 0}, {label: '禁用', value: 1}]


export const ActionMap = {
  1:'add',
  2:'view',
  3:'edit',
  4:'del',
  5:'print',
  6:'export',
  7:'import',
}

// 库房状态
export const storeStatus = {
  0:'停用',
  1:'启用'
}


export const IconList = [{"label":"AddLocation","value":"AddLocation"},{"label":"Aim","value":"Aim"},{"label":"AlarmClock","value":"AlarmClock"},{"label":"Apple","value":"Apple"},{"label":"ArrowDown","value":"ArrowDown"},{"label":"ArrowDownBold","value":"ArrowDownBold"},{"label":"ArrowLeft","value":"ArrowLeft"},{"label":"ArrowLeftBold","value":"ArrowLeftBold"},{"label":"ArrowRight","value":"ArrowRight"},{"label":"ArrowRightBold","value":"ArrowRightBold"},{"label":"ArrowUp","value":"ArrowUp"},{"label":"ArrowUpBold","value":"ArrowUpBold"},{"label":"Avatar","value":"Avatar"},{"label":"Back","value":"Back"},{"label":"Baseball","value":"Baseball"},{"label":"Basketball","value":"Basketball"},{"label":"Bell","value":"Bell"},{"label":"BellFilled","value":"BellFilled"},{"label":"Bicycle","value":"Bicycle"},{"label":"Bottom","value":"Bottom"},{"label":"BottomLeft","value":"BottomLeft"},{"label":"BottomRight","value":"BottomRight"},{"label":"Bowl","value":"Bowl"},{"label":"Box","value":"Box"},{"label":"Briefcase","value":"Briefcase"},{"label":"Brush","value":"Brush"},{"label":"BrushFilled","value":"BrushFilled"},{"label":"Burger","value":"Burger"},{"label":"Calendar","value":"Calendar"},{"label":"Camera","value":"Camera"},{"label":"CameraFilled","value":"CameraFilled"},{"label":"CaretBottom","value":"CaretBottom"},{"label":"CaretLeft","value":"CaretLeft"},{"label":"CaretRight","value":"CaretRight"},{"label":"CaretTop","value":"CaretTop"},{"label":"Cellphone","value":"Cellphone"},{"label":"ChatDotRound","value":"ChatDotRound"},{"label":"ChatDotSquare","value":"ChatDotSquare"},{"label":"ChatLineRound","value":"ChatLineRound"},{"label":"ChatLineSquare","value":"ChatLineSquare"},{"label":"ChatRound","value":"ChatRound"},{"label":"ChatSquare","value":"ChatSquare"},{"label":"Check","value":"Check"},{"label":"Checked","value":"Checked"},{"label":"Cherry","value":"Cherry"},{"label":"Chicken","value":"Chicken"},{"label":"CircleCheck","value":"CircleCheck"},{"label":"CircleCheckFilled","value":"CircleCheckFilled"},{"label":"CircleClose","value":"CircleClose"},{"label":"CircleCloseFilled","value":"CircleCloseFilled"},{"label":"CirclePlus","value":"CirclePlus"},{"label":"CirclePlusFilled","value":"CirclePlusFilled"},{"label":"Clock","value":"Clock"},{"label":"Close","value":"Close"},{"label":"CloseBold","value":"CloseBold"},{"label":"Cloudy","value":"Cloudy"},{"label":"Coffee","value":"Coffee"},{"label":"CoffeeCup","value":"CoffeeCup"},{"label":"Coin","value":"Coin"},{"label":"ColdDrink","value":"ColdDrink"},{"label":"Collection","value":"Collection"},{"label":"CollectionTag","value":"CollectionTag"},{"label":"Comment","value":"Comment"},{"label":"Compass","value":"Compass"},{"label":"Connection","value":"Connection"},{"label":"Coordinate","value":"Coordinate"},{"label":"CopyDocument","value":"CopyDocument"},{"label":"Cpu","value":"Cpu"},{"label":"CreditCard","value":"CreditCard"},{"label":"Crop","value":"Crop"},{"label":"DArrowLeft","value":"DArrowLeft"},{"label":"DArrowRight","value":"DArrowRight"},{"label":"DCaret","value":"DCaret"},{"label":"DataAnalysis","value":"DataAnalysis"},{"label":"DataBoard","value":"DataBoard"},{"label":"DataLine","value":"DataLine"},{"label":"Delete","value":"Delete"},{"label":"DeleteFilled","value":"DeleteFilled"},{"label":"DeleteLocation","value":"DeleteLocation"},{"label":"Dessert","value":"Dessert"},{"label":"Discount","value":"Discount"},{"label":"Dish","value":"Dish"},{"label":"DishDot","value":"DishDot"},{"label":"Document","value":"Document"},{"label":"DocumentAdd","value":"DocumentAdd"},{"label":"DocumentChecked","value":"DocumentChecked"},{"label":"DocumentCopy","value":"DocumentCopy"},{"label":"DocumentDelete","value":"DocumentDelete"},{"label":"DocumentRemove","value":"DocumentRemove"},{"label":"Download","value":"Download"},{"label":"Drizzling","value":"Drizzling"},{"label":"Edit","value":"Edit"},{"label":"EditPen","value":"EditPen"},{"label":"Eleme","value":"Eleme"},{"label":"ElemeFilled","value":"ElemeFilled"},{"label":"ElementPlus","value":"ElementPlus"},{"label":"Expand","value":"Expand"},{"label":"Failed","value":"Failed"},{"label":"Female","value":"Female"},{"label":"Files","value":"Files"},{"label":"Film","value":"Film"},{"label":"Filter","value":"Filter"},{"label":"Finished","value":"Finished"},{"label":"FirstAidKit","value":"FirstAidKit"},{"label":"Flag","value":"Flag"},{"label":"Fold","value":"Fold"},{"label":"Folder","value":"Folder"},{"label":"FolderAdd","value":"FolderAdd"},{"label":"FolderChecked","value":"FolderChecked"},{"label":"FolderDelete","value":"FolderDelete"},{"label":"FolderOpened","value":"FolderOpened"},{"label":"FolderRemove","value":"FolderRemove"},{"label":"Food","value":"Food"},{"label":"Football","value":"Football"},{"label":"ForkSpoon","value":"ForkSpoon"},{"label":"Fries","value":"Fries"},{"label":"FullScreen","value":"FullScreen"},{"label":"Goblet","value":"Goblet"},{"label":"GobletFull","value":"GobletFull"},{"label":"GobletSquare","value":"GobletSquare"},{"label":"GobletSquareFull","value":"GobletSquareFull"},{"label":"Goods","value":"Goods"},{"label":"GoodsFilled","value":"GoodsFilled"},{"label":"Grape","value":"Grape"},{"label":"Grid","value":"Grid"},{"label":"Guide","value":"Guide"},{"label":"Headset","value":"Headset"},{"label":"Help","value":"Help"},{"label":"HelpFilled","value":"HelpFilled"},{"label":"Hide","value":"Hide"},{"label":"Histogram","value":"Histogram"},{"label":"HomeFilled","value":"HomeFilled"},{"label":"HotWater","value":"HotWater"},{"label":"House","value":"House"},{"label":"IceCream","value":"IceCream"},{"label":"IceCreamRound","value":"IceCreamRound"},{"label":"IceCreamSquare","value":"IceCreamSquare"},{"label":"IceDrink","value":"IceDrink"},{"label":"IceTea","value":"IceTea"},{"label":"InfoFilled","value":"InfoFilled"},{"label":"Iphone","value":"Iphone"},{"label":"Key","value":"Key"},{"label":"KnifeFork","value":"KnifeFork"},{"label":"Lightning","value":"Lightning"},{"label":"Link","value":"Link"},{"label":"List","value":"List"},{"label":"Loading","value":"Loading"},{"label":"Location","value":"Location"},{"label":"LocationFilled","value":"LocationFilled"},{"label":"LocationInformation","value":"LocationInformation"},{"label":"Lock","value":"Lock"},{"label":"Lollipop","value":"Lollipop"},{"label":"MagicStick","value":"MagicStick"},{"label":"Magnet","value":"Magnet"},{"label":"Male","value":"Male"},{"label":"Management","value":"Management"},{"label":"MapLocation","value":"MapLocation"},{"label":"Medal","value":"Medal"},{"label":"Menu","value":"Menu"},{"label":"Message","value":"Message"},{"label":"MessageBox","value":"MessageBox"},{"label":"Mic","value":"Mic"},{"label":"Microphone","value":"Microphone"},{"label":"MilkTea","value":"MilkTea"},{"label":"Minus","value":"Minus"},{"label":"Money","value":"Money"},{"label":"Monitor","value":"Monitor"},{"label":"Moon","value":"Moon"},{"label":"MoonNight","value":"MoonNight"},{"label":"More","value":"More"},{"label":"MoreFilled","value":"MoreFilled"},{"label":"MostlyCloudy","value":"MostlyCloudy"},{"label":"Mouse","value":"Mouse"},{"label":"Mug","value":"Mug"},{"label":"Mute","value":"Mute"},{"label":"MuteNotification","value":"MuteNotification"},{"label":"NoSmoking","value":"NoSmoking"},{"label":"Notebook","value":"Notebook"},{"label":"Notification","value":"Notification"},{"label":"Odometer","value":"Odometer"},{"label":"OfficeBuilding","value":"OfficeBuilding"},{"label":"Open","value":"Open"},{"label":"Operation","value":"Operation"},{"label":"Opportunity","value":"Opportunity"},{"label":"Orange","value":"Orange"},{"label":"Paperclip","value":"Paperclip"},{"label":"PartlyCloudy","value":"PartlyCloudy"},{"label":"Pear","value":"Pear"},{"label":"Phone","value":"Phone"},{"label":"PhoneFilled","value":"PhoneFilled"},{"label":"Picture","value":"Picture"},{"label":"PictureFilled","value":"PictureFilled"},{"label":"PictureRounded","value":"PictureRounded"},{"label":"PieChart","value":"PieChart"},{"label":"Place","value":"Place"},{"label":"Platform","value":"Platform"},{"label":"Plus","value":"Plus"},{"label":"Pointer","value":"Pointer"},{"label":"Position","value":"Position"},{"label":"Postcard","value":"Postcard"},{"label":"Pouring","value":"Pouring"},{"label":"Present","value":"Present"},{"label":"PriceTag","value":"PriceTag"},{"label":"Printer","value":"Printer"},{"label":"Promotion","value":"Promotion"},{"label":"QuestionFilled","value":"QuestionFilled"},{"label":"Rank","value":"Rank"},{"label":"Reading","value":"Reading"},{"label":"ReadingLamp","value":"ReadingLamp"},{"label":"Refresh","value":"Refresh"},{"label":"RefreshLeft","value":"RefreshLeft"},{"label":"RefreshRight","value":"RefreshRight"},{"label":"Refrigerator","value":"Refrigerator"},{"label":"Remove","value":"Remove"},{"label":"RemoveFilled","value":"RemoveFilled"},{"label":"Right","value":"Right"},{"label":"ScaleToOriginal","value":"ScaleToOriginal"},{"label":"School","value":"School"},{"label":"Scissor","value":"Scissor"},{"label":"Search","value":"Search"},{"label":"Select","value":"Select"},{"label":"Sell","value":"Sell"},{"label":"SemiSelect","value":"SemiSelect"},{"label":"Service","value":"Service"},{"label":"SetUp","value":"SetUp"},{"label":"Setting","value":"Setting"},{"label":"Share","value":"Share"},{"label":"Ship","value":"Ship"},{"label":"Shop","value":"Shop"},{"label":"ShoppingBag","value":"ShoppingBag"},{"label":"ShoppingCart","value":"ShoppingCart"},{"label":"ShoppingCartFull","value":"ShoppingCartFull"},{"label":"Smoking","value":"Smoking"},{"label":"Soccer","value":"Soccer"},{"label":"SoldOut","value":"SoldOut"},{"label":"Sort","value":"Sort"},{"label":"SortDown","value":"SortDown"},{"label":"SortUp","value":"SortUp"},{"label":"Stamp","value":"Stamp"},{"label":"Star","value":"Star"},{"label":"StarFilled","value":"StarFilled"},{"label":"Stopwatch","value":"Stopwatch"},{"label":"SuccessFilled","value":"SuccessFilled"},{"label":"Sugar","value":"Sugar"},{"label":"Suitcase","value":"Suitcase"},{"label":"Sunny","value":"Sunny"},{"label":"Sunrise","value":"Sunrise"},{"label":"Sunset","value":"Sunset"},{"label":"Switch","value":"Switch"},{"label":"SwitchButton","value":"SwitchButton"},{"label":"TakeawayBox","value":"TakeawayBox"},{"label":"Ticket","value":"Ticket"},{"label":"Tickets","value":"Tickets"},{"label":"Timer","value":"Timer"},{"label":"ToiletPaper","value":"ToiletPaper"},{"label":"Tools","value":"Tools"},{"label":"Top","value":"Top"},{"label":"TopLeft","value":"TopLeft"},{"label":"TopRight","value":"TopRight"},{"label":"TrendCharts","value":"TrendCharts"},{"label":"Trophy","value":"Trophy"},{"label":"TurnOff","value":"TurnOff"},{"label":"Umbrella","value":"Umbrella"},{"label":"Unlock","value":"Unlock"},{"label":"Upload","value":"Upload"},{"label":"UploadFilled","value":"UploadFilled"},{"label":"User","value":"User"},{"label":"UserFilled","value":"UserFilled"},{"label":"Van","value":"Van"},{"label":"VideoCamera","value":"VideoCamera"},{"label":"VideoCameraFilled","value":"VideoCameraFilled"},{"label":"VideoPause","value":"VideoPause"},{"label":"VideoPlay","value":"VideoPlay"},{"label":"View","value":"View"},{"label":"Wallet","value":"Wallet"},{"label":"WalletFilled","value":"WalletFilled"},{"label":"Warning","value":"Warning"},{"label":"WarningFilled","value":"WarningFilled"},{"label":"Watch","value":"Watch"},{"label":"Watermelon","value":"Watermelon"},{"label":"WindPower","value":"WindPower"},{"label":"ZoomIn","value":"ZoomIn"},{"label":"ZoomOut","value":"ZoomOut"}]