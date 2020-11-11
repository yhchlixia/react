require('./../../runtime.js');
require('./../../remax-vendors.js');
(my["webpackJsonp"] = my["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@remax/ali/esm/api/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@remax/ali/esm/api/index.js ***!
  \**************************************************/
/*! exports provided: getAppStub, addCardAuth, addPhoneContact, alert, canIUse, chooseAlipayContact, chooseCity, chooseContact, chooseImage, chooseLocation, choosePhoneContact, clearStorage, clearStorageSync, closeBluetoothAdapter, closeSocket, compressImage, confirm, connectBLEDevice, connectSocket, createAnimation, createCanvasContext, createIntersectionObserver, createMapContext, createSelectorQuery, createWebViewContext, datePicker, disconnectBLEDevice, downloadFile, getAuthCode, getAuthUserInfo, getBatteryInfo, getBatteryInfoSync, getBeacons, getBLEDeviceCharacteristics, getBLEDeviceServices, getBluetoothAdapterState, getBluetoothDevices, getClipboard, getConnectedBluetoothDevices, getFileInfo, getImageInfo, getLocation, getNetworkType, getPhoneNumber, getRunData, getRunScene, getSavedFileInfo, getSavedFileList, getScreenBrightness, getServerTime, getSetting, getStorage, getStorageInfo, getStorageInfoSync, getStorageSync, getSystemInfo, getSystemInfoSync, getTitleColor, getUpdateManager, hideAddToDesktopMenu, hideAllAddToDesktopMenu, hideAllFavoriteMenu, hideBackHome, hideFavoriteMenu, hideKeyboard, hideLoading, hideNavigationBarLoading, hideShareMenu, hideTabBar, hideTabBarRedDot, hideToast, loadFontFace, makePhoneCall, multiLevelSelect, navigateBack, navigateBackMiniProgram, navigateTo, navigateToMiniProgram, notifyBLECharacteristicValueChange, offAccelerometerChange, offBLECharacteristicValueChange, offBLEConnectionStateChanged, offBluetoothAdapterStateChange, offBluetoothDeviceFound, offCompassChange, offGyroscopeChange, offMemoryWarning, offNetworkStatusChange, offSocketClose, offSocketError, offSocketMessage, offSocketOpen, offUserCaptureScreen, onAccelerometerChange, onBeaconServiceChange, onBeaconUpdate, onBLECharacteristicValueChange, onBLEConnectionStateChanged, onBluetoothAdapterStateChange, onBluetoothDeviceFound, onCompassChange, onGyroscopeChange, onMemoryWarning, onNetworkStatusChange, onSocketClose, onSocketError, onSocketMessage, onSocketOpen, onUserCaptureScreen, openBluetoothAdapter, openCardDetail, openCardList, openKBVoucherDetail, openLocation, openMerchantCardList, openMerchantTicketList, openMerchantVoucherList, openSetting, openTicketDetail, openTicketList, openVoucherDetail, openVoucherList, optionsSelect, pageScrollTo, previewImage, prompt, readBLECharacteristicValue, redirectTo, reLaunch, removeSavedFile, removeStorage, removeStorageSync, removeTabBarBadge, reportAnalytics, request, rsa, saveFile, saveImage, scan, SDKVersion, sendSocketMessage, setBackgroundColor, setBackgroundTextStyle, setCanPullDown, setClipboard, setKeepScreenOn, setNavigationBar, setOptionMenu, setScreenBrightness, setStorage, setStorageSync, setTabBarBadge, setTabBarItem, setTabBarStyle, showActionSheet, showAuthGuide, showLoading, showNavigationBarLoading, showSharePanel, showTabBar, showTabBarRedDot, showToast, startBeaconDiscovery, startBluetoothDevicesDiscovery, startPullDownRefresh, startZMVerify, stopBeaconDiscovery, stopBluetoothDevicesDiscovery, stopPullDownRefresh, switchTab, textRiskIdentification, tradePay, uploadFile, vibrate, vibrateLong, vibrateShort, watchShake, writeBLECharacteristicValue, createVideoContext, getOpenUserInfo, httpRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppStub", function() { return getAppStub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCardAuth", function() { return addCardAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPhoneContact", function() { return addPhoneContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alert", function() { return alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canIUse", function() { return canIUse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseAlipayContact", function() { return chooseAlipayContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseCity", function() { return chooseCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseContact", function() { return chooseContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseImage", function() { return chooseImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseLocation", function() { return chooseLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choosePhoneContact", function() { return choosePhoneContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearStorage", function() { return clearStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearStorageSync", function() { return clearStorageSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeBluetoothAdapter", function() { return closeBluetoothAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeSocket", function() { return closeSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compressImage", function() { return compressImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirm", function() { return confirm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectBLEDevice", function() { return connectBLEDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectSocket", function() { return connectSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAnimation", function() { return createAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCanvasContext", function() { return createCanvasContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createIntersectionObserver", function() { return createIntersectionObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMapContext", function() { return createMapContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectorQuery", function() { return createSelectorQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWebViewContext", function() { return createWebViewContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "datePicker", function() { return datePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disconnectBLEDevice", function() { return disconnectBLEDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return downloadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthCode", function() { return getAuthCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthUserInfo", function() { return getAuthUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBatteryInfo", function() { return getBatteryInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBatteryInfoSync", function() { return getBatteryInfoSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBeacons", function() { return getBeacons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBLEDeviceCharacteristics", function() { return getBLEDeviceCharacteristics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBLEDeviceServices", function() { return getBLEDeviceServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBluetoothAdapterState", function() { return getBluetoothAdapterState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBluetoothDevices", function() { return getBluetoothDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClipboard", function() { return getClipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConnectedBluetoothDevices", function() { return getConnectedBluetoothDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFileInfo", function() { return getFileInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageInfo", function() { return getImageInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return getLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNetworkType", function() { return getNetworkType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPhoneNumber", function() { return getPhoneNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRunData", function() { return getRunData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRunScene", function() { return getRunScene; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSavedFileInfo", function() { return getSavedFileInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSavedFileList", function() { return getSavedFileList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScreenBrightness", function() { return getScreenBrightness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerTime", function() { return getServerTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetting", function() { return getSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStorage", function() { return getStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStorageInfo", function() { return getStorageInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStorageInfoSync", function() { return getStorageInfoSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStorageSync", function() { return getStorageSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSystemInfo", function() { return getSystemInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSystemInfoSync", function() { return getSystemInfoSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTitleColor", function() { return getTitleColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUpdateManager", function() { return getUpdateManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideAddToDesktopMenu", function() { return hideAddToDesktopMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideAllAddToDesktopMenu", function() { return hideAllAddToDesktopMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideAllFavoriteMenu", function() { return hideAllFavoriteMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideBackHome", function() { return hideBackHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideFavoriteMenu", function() { return hideFavoriteMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideKeyboard", function() { return hideKeyboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideLoading", function() { return hideLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideNavigationBarLoading", function() { return hideNavigationBarLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideShareMenu", function() { return hideShareMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideTabBar", function() { return hideTabBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideTabBarRedDot", function() { return hideTabBarRedDot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideToast", function() { return hideToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFontFace", function() { return loadFontFace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePhoneCall", function() { return makePhoneCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiLevelSelect", function() { return multiLevelSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateBack", function() { return navigateBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateBackMiniProgram", function() { return navigateBackMiniProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return navigateTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateToMiniProgram", function() { return navigateToMiniProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifyBLECharacteristicValueChange", function() { return notifyBLECharacteristicValueChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offAccelerometerChange", function() { return offAccelerometerChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offBLECharacteristicValueChange", function() { return offBLECharacteristicValueChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offBLEConnectionStateChanged", function() { return offBLEConnectionStateChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offBluetoothAdapterStateChange", function() { return offBluetoothAdapterStateChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offBluetoothDeviceFound", function() { return offBluetoothDeviceFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offCompassChange", function() { return offCompassChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offGyroscopeChange", function() { return offGyroscopeChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offMemoryWarning", function() { return offMemoryWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offNetworkStatusChange", function() { return offNetworkStatusChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offSocketClose", function() { return offSocketClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offSocketError", function() { return offSocketError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offSocketMessage", function() { return offSocketMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offSocketOpen", function() { return offSocketOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offUserCaptureScreen", function() { return offUserCaptureScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAccelerometerChange", function() { return onAccelerometerChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBeaconServiceChange", function() { return onBeaconServiceChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBeaconUpdate", function() { return onBeaconUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBLECharacteristicValueChange", function() { return onBLECharacteristicValueChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBLEConnectionStateChanged", function() { return onBLEConnectionStateChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBluetoothAdapterStateChange", function() { return onBluetoothAdapterStateChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBluetoothDeviceFound", function() { return onBluetoothDeviceFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onCompassChange", function() { return onCompassChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onGyroscopeChange", function() { return onGyroscopeChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMemoryWarning", function() { return onMemoryWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onNetworkStatusChange", function() { return onNetworkStatusChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSocketClose", function() { return onSocketClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSocketError", function() { return onSocketError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSocketMessage", function() { return onSocketMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSocketOpen", function() { return onSocketOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onUserCaptureScreen", function() { return onUserCaptureScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openBluetoothAdapter", function() { return openBluetoothAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openCardDetail", function() { return openCardDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openCardList", function() { return openCardList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openKBVoucherDetail", function() { return openKBVoucherDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openLocation", function() { return openLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openMerchantCardList", function() { return openMerchantCardList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openMerchantTicketList", function() { return openMerchantTicketList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openMerchantVoucherList", function() { return openMerchantVoucherList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openSetting", function() { return openSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openTicketDetail", function() { return openTicketDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openTicketList", function() { return openTicketList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openVoucherDetail", function() { return openVoucherDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openVoucherList", function() { return openVoucherList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsSelect", function() { return optionsSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageScrollTo", function() { return pageScrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previewImage", function() { return previewImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prompt", function() { return prompt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readBLECharacteristicValue", function() { return readBLECharacteristicValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return redirectTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reLaunch", function() { return reLaunch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeSavedFile", function() { return removeSavedFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeStorage", function() { return removeStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeStorageSync", function() { return removeStorageSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTabBarBadge", function() { return removeTabBarBadge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportAnalytics", function() { return reportAnalytics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rsa", function() { return rsa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveFile", function() { return saveFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveImage", function() { return saveImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return scan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDKVersion", function() { return SDKVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendSocketMessage", function() { return sendSocketMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBackgroundColor", function() { return setBackgroundColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBackgroundTextStyle", function() { return setBackgroundTextStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCanPullDown", function() { return setCanPullDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setClipboard", function() { return setClipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setKeepScreenOn", function() { return setKeepScreenOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNavigationBar", function() { return setNavigationBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOptionMenu", function() { return setOptionMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setScreenBrightness", function() { return setScreenBrightness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStorage", function() { return setStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStorageSync", function() { return setStorageSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTabBarBadge", function() { return setTabBarBadge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTabBarItem", function() { return setTabBarItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTabBarStyle", function() { return setTabBarStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showActionSheet", function() { return showActionSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAuthGuide", function() { return showAuthGuide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showLoading", function() { return showLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showNavigationBarLoading", function() { return showNavigationBarLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSharePanel", function() { return showSharePanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showTabBar", function() { return showTabBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showTabBarRedDot", function() { return showTabBarRedDot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showToast", function() { return showToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startBeaconDiscovery", function() { return startBeaconDiscovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startBluetoothDevicesDiscovery", function() { return startBluetoothDevicesDiscovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startPullDownRefresh", function() { return startPullDownRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startZMVerify", function() { return startZMVerify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopBeaconDiscovery", function() { return stopBeaconDiscovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopBluetoothDevicesDiscovery", function() { return stopBluetoothDevicesDiscovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopPullDownRefresh", function() { return stopPullDownRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchTab", function() { return switchTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textRiskIdentification", function() { return textRiskIdentification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tradePay", function() { return tradePay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFile", function() { return uploadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vibrate", function() { return vibrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vibrateLong", function() { return vibrateLong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vibrateShort", function() { return vibrateShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchShake", function() { return watchShake; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeBLECharacteristicValue", function() { return writeBLECharacteristicValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVideoContext", function() { return createVideoContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOpenUserInfo", function() { return getOpenUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpRequest", function() { return httpRequest; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var getAppStub = getApp;
var addCardAuth = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.addCardAuth);
var addPhoneContact = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.addPhoneContact);
var alert = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.alert);
var canIUse = my.canIUse;
var chooseAlipayContact = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.chooseAlipayContact);
var chooseCity = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.chooseCity);
var chooseContact = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.chooseContact);
var chooseImage = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.chooseImage);
var chooseLocation = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.chooseLocation);
var choosePhoneContact = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.choosePhoneContact);
var clearStorage = my.clearStorage;
var clearStorageSync = my.clearStorageSync;
var closeBluetoothAdapter = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.closeBluetoothAdapter);
var closeSocket = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.closeSocket);
var compressImage = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.compressImage);
var confirm = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.confirm);
var connectBLEDevice = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.connectBLEDevice);
var connectSocket = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.connectSocket);
var createAnimation = my.createAnimation;
var createCanvasContext = my.createCanvasContext;
var createIntersectionObserver = my.createIntersectionObserver;
var createMapContext = my.createMapContext;
var createSelectorQuery = my.createSelectorQuery;
var createWebViewContext = my.createWebViewContext;
var datePicker = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.datePicker);
var disconnectBLEDevice = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.disconnectBLEDevice);
var downloadFile = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.downloadFile);
var getAuthCode = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.getAuthCode);
var getAuthUserInfo = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.getAuthUserInfo);
var getBatteryInfo = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.getBatteryInfo);
var getBatteryInfoSync = my.getBatteryInfoSync;
var getBeacons = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.getBeacons);
var getBLEDeviceCharacteristics = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.getBLEDeviceCharacteristics);
var getBLEDeviceServices = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.getBLEDeviceServices);
var getBluetoothAdapterState = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.getBluetoothAdapterState);
var getBluetoothDevices = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.getBluetoothDevices);
var getClipboard = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.getClipboard);
var getConnectedBluetoothDevices = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.getConnectedBluetoothDevices);
var getFileInfo = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.getFileInfo);
var getImageInfo = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.getImageInfo);
var getLocation = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.getLocation);
var getNetworkType = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.getNetworkType);
var getPhoneNumber = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.getPhoneNumber);
var getRunData = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.getRunData);
var getRunScene = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.getRunScene);
var getSavedFileInfo = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.getSavedFileInfo);
var getSavedFileList = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.getSavedFileList);
var getScreenBrightness = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.getScreenBrightness);
var getServerTime = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.getServerTime);
var getSetting = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.getSetting);
var getStorage = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.getStorage);
var getStorageInfo = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.getStorageInfo);
var getStorageInfoSync = my.getStorageInfoSync;
var getStorageSync = my.getStorageSync;
var getSystemInfo = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.getSystemInfo);
var getSystemInfoSync = my.getSystemInfoSync;
var getTitleColor = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.getTitleColor);
var getUpdateManager = my.getUpdateManager;
var hideAddToDesktopMenu = my.hideAddToDesktopMenu;
var hideAllAddToDesktopMenu = my.hideAllAddToDesktopMenu;
var hideAllFavoriteMenu = my.hideAllFavoriteMenu;
var hideBackHome = my.hideBackHome;
var hideFavoriteMenu = my.hideFavoriteMenu;
var hideKeyboard = my.hideKeyboard;
var hideLoading = my.hideLoading;
var hideNavigationBarLoading = my.hideNavigationBarLoading;
var hideShareMenu = my.hideShareMenu;
var hideTabBar = my.hideTabBar;
var hideTabBarRedDot = my.hideTabBarRedDot;
var hideToast = my.hideToast;
var loadFontFace = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.loadFontFace);
var makePhoneCall = my.makePhoneCall;
var multiLevelSelect = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.multiLevelSelect);
var navigateBack = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.navigateBack);
var navigateBackMiniProgram = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.navigateBackMiniProgram);
var navigateTo = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.navigateTo);
var navigateToMiniProgram = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.navigateToMiniProgram);
var notifyBLECharacteristicValueChange = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.notifyBLECharacteristicValueChange);
var offAccelerometerChange = my.offAccelerometerChange;
var offBLECharacteristicValueChange = my.offBLECharacteristicValueChange;
var offBLEConnectionStateChanged = my.offBLEConnectionStateChanged;
var offBluetoothAdapterStateChange = my.offBluetoothAdapterStateChange;
var offBluetoothDeviceFound = my.offBluetoothDeviceFound;
var offCompassChange = my.offCompassChange;
var offGyroscopeChange = my.offGyroscopeChange;
var offMemoryWarning = my.offMemoryWarning;
var offNetworkStatusChange = my.offNetworkStatusChange;
var offSocketClose = my.offSocketClose;
var offSocketError = my.offSocketError;
var offSocketMessage = my.offSocketMessage;
var offSocketOpen = my.offSocketOpen;
var offUserCaptureScreen = my.offUserCaptureScreen;
var onAccelerometerChange = my.onAccelerometerChange;
var onBeaconServiceChange = my.onBeaconServiceChange;
var onBeaconUpdate = my.onBeaconUpdate;
var onBLECharacteristicValueChange = my.onBLECharacteristicValueChange;
var onBLEConnectionStateChanged = my.onBLEConnectionStateChanged;
var onBluetoothAdapterStateChange = my.onBluetoothAdapterStateChange;
var onBluetoothDeviceFound = my.onBluetoothDeviceFound;
var onCompassChange = my.onCompassChange;
var onGyroscopeChange = my.onGyroscopeChange;
var onMemoryWarning = my.onMemoryWarning;
var onNetworkStatusChange = my.onNetworkStatusChange;
var onSocketClose = my.onSocketClose;
var onSocketError = my.onSocketError;
var onSocketMessage = my.onSocketMessage;
var onSocketOpen = my.onSocketOpen;
var onUserCaptureScreen = my.onUserCaptureScreen;
var openBluetoothAdapter = my.openBluetoothAdapter;
var openCardDetail = my.openCardDetail;
var openCardList = my.openCardList;
var openKBVoucherDetail = my.openKBVoucherDetail;
var openLocation = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.openLocation);
var openMerchantCardList = my.openMerchantCardList;
var openMerchantTicketList = my.openMerchantTicketList;
var openMerchantVoucherList = my.openMerchantVoucherList;
var openSetting = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.openSetting);
var openTicketDetail = my.openTicketDetail;
var openTicketList = my.openTicketList;
var openVoucherDetail = my.openVoucherDetail;
var openVoucherList = my.openVoucherList;
var optionsSelect = my.optionsSelect;
var pageScrollTo = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.pageScrollTo);
var previewImage = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.previewImage);
var prompt = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.prompt);
var readBLECharacteristicValue = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.readBLECharacteristicValue);
var redirectTo = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.redirectTo);
var reLaunch = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.reLaunch);
var removeSavedFile = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.removeSavedFile);
var removeStorage = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.removeStorage);
var removeStorageSync = my.removeStorageSync;
var removeTabBarBadge = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.removeTabBarBadge);
var reportAnalytics = my.reportAnalytics;
var request = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.request);
var rsa = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.rsa);
var saveFile = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.saveFile);
var saveImage = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.saveImage);
var scan = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.scan);
var SDKVersion = my.SDKVersion;
var sendSocketMessage = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.sendSocketMessage);
var setBackgroundColor = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.setBackgroundColor);
var setBackgroundTextStyle = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.setBackgroundTextStyle);
var setCanPullDown = my.setCanPullDown;
var setClipboard = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.setClipboard);
var setKeepScreenOn = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.setKeepScreenOn);
var setNavigationBar = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.setNavigationBar);
var setOptionMenu = my.setOptionMenu;
var setScreenBrightness = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.setScreenBrightness);
var setStorage = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.setStorage);
var setStorageSync = my.setStorageSync;
var setTabBarBadge = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.setTabBarBadge);
var setTabBarItem = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.setTabBarItem);
var setTabBarStyle = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.setTabBarStyle);
var showActionSheet = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.showActionSheet);
var showAuthGuide = my.showAuthGuide;
var showLoading = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.showLoading);
var showNavigationBarLoading = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.showNavigationBarLoading);
var showSharePanel = my.showSharePanel;
var showTabBar = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.showTabBar);
var showTabBarRedDot = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.showTabBarRedDot);
var showToast = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.showToast);
var startBeaconDiscovery = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.startBeaconDiscovery);
var startBluetoothDevicesDiscovery = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.startBluetoothDevicesDiscovery);
var startPullDownRefresh = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.startPullDownRefresh);
var startZMVerify = my.startZMVerify;
var stopBeaconDiscovery = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.stopBeaconDiscovery);
var stopBluetoothDevicesDiscovery = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.stopBluetoothDevicesDiscovery);
var stopPullDownRefresh = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.stopPullDownRefresh);
var switchTab = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.switchTab);
var textRiskIdentification = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.textRiskIdentification);
var tradePay = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.tradePay);
var uploadFile = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.uploadFile);
var vibrate = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.vibrate);
var vibrateLong = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.vibrateLong);
var vibrateShort = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.vibrateShort);
var watchShake = my.watchShake;
var writeBLECharacteristicValue = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.writeBLECharacteristicValue);
var createVideoContext = my.createVideoContext;
var getOpenUserInfo = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.getOpenUserInfo);
var httpRequest = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(my.httpRequest);

/***/ }),

/***/ "./node_modules/@remax/ali/esm/hostComponents/Button/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@remax/ali/esm/hostComponents/Button/index.js ***!
  \********************************************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var Button = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('button');

/***/ }),

/***/ "./node_modules/@remax/ali/esm/hostComponents/Canvas/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@remax/ali/esm/hostComponents/Canvas/index.js ***!
  \********************************************************************/
/*! exports provided: Canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return Canvas; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var Canvas = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('canvas');

/***/ }),

/***/ "./node_modules/@remax/ali/esm/hostComponents/Checkbox/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@remax/ali/esm/hostComponents/Checkbox/index.js ***!
  \**********************************************************************/
/*! exports provided: Checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var Checkbox = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('checkbox');

/***/ }),

/***/ "./node_modules/@remax/ali/esm/hostComponents/CheckboxGroup/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@remax/ali/esm/hostComponents/CheckboxGroup/index.js ***!
  \***************************************************************************/
/*! exports provided: CheckboxGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return CheckboxGroup; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var CheckboxGroup = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('checkbox-group');

/***/ }),

/***/ "./node_modules/@remax/ali/esm/hostComponents/ContactButton/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@remax/ali/esm/hostComponents/ContactButton/index.js ***!
  \***************************************************************************/
/*! exports provided: ContactButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactButton", function() { return ContactButton; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var ContactButton = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('contact-button');

/***/ }),

/***/ "./node_modules/@remax/ali/esm/hostComponents/CoverImage/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@remax/ali/esm/hostComponents/CoverImage/index.js ***!
  \************************************************************************/
/*! exports provided: CoverImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverImage", function() { return CoverImage; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var CoverImage = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('cover-image');

/***/ }),

/***/ "./node_modules/@remax/ali/esm/hostComponents/CoverView/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@remax/ali/esm/hostComponents/CoverView/index.js ***!
  \***********************************************************************/
/*! exports provided: CoverView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverView", function() { return CoverView; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var CoverView = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('cover-view');

/***/ }),

/***/ "./node_modules/@remax/ali/esm/hostComponents/Form/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@remax/ali/esm/hostComponents/Form/index.js ***!
  \******************************************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var Form = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('form');

/***/ }),

/***/ "./node_modules/@remax/ali/esm/hostComponents/Icon/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@remax/ali/esm/hostComponents/Icon/index.js ***!
  \******************************************************************/
/*! exports provided: Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var Icon = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('icon');

/***/ }),

/***/ "./node_modules/@remax/ali/esm/hostComponents/Image/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@remax/ali/esm/hostComponents/Image/index.js ***!
  \*******************************************************************/
/*! exports provided: Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var Image = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('image');

/***/ }),

/***/ "./node_modules/@remax/ali/esm/hostComponents/Input/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@remax/ali/esm/hostComponents/Input/index.js ***!
  \*******************************************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var Input = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('input');

/***/ }),

/***/ "./node_modules/@remax/ali/esm/hostComponents/Label/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@remax/ali/esm/hostComponents/Label/index.js ***!
  \*******************************************************************/
/*! exports provided: Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var Label = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('label');

/***/ }),

/***/ "./node_modules/@remax/ali/esm/hostComponents/Lifestyle/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@remax/ali/esm/hostComponents/Lifestyle/index.js ***!
  \***********************************************************************/
/*! exports provided: Lifestyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lifestyle", function() { return Lifestyle; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var Lifestyle = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('lifestyle');

/***/ }),

/***/ "./node_modules/@remax/ali/esm/hostComponents/Map/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@remax/ali/esm/hostComponents/Map/index.js ***!
  \*****************************************************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var Map = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('map');

/***/ }),

/***/ "./node_modules/@remax/ali/esm/hostComponents/MovableArea/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@remax/ali/esm/hostComponents/MovableArea/index.js ***!
  \*************************************************************************/
/*! exports provided: MovableArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovableArea", function() { return MovableArea; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var MovableArea = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('movable-area');

/***/ }),

/***/ "./node_modules/@remax/ali/esm/hostComponents/MovableView/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@remax/ali/esm/hostComponents/MovableView/index.js ***!
  \*************************************************************************/
/*! exports provided: MovableView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovableView", function() { return MovableView; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var MovableView = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('movable-view');

/***/ }),

/***/ "./node_modules/@remax/ali/esm/hostComponents/Navigator/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@remax/ali/esm/hostComponents/Navigator/index.js ***!
  \***********************************************************************/
/*! exports provided: Navigator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return Navigator; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var Navigator = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('navigator');

/***/ }),

/***/ "./node_modules/@remax/ali/esm/hostComponents/Picker/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@remax/ali/esm/hostComponents/Picker/index.js ***!
  \********************************************************************/
/*! exports provided: Picker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return Picker; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var Picker = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('picker');

/***/ }),

/***/ "./node_modules/@remax/ali/esm/hostComponents/PickerView/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@remax/ali/esm/hostComponents/PickerView/index.js ***!
  \************************************************************************/
/*! exports provided: PickerView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickerView", function() { return PickerView; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var PickerView = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('picker-view');

/***/ }),

/***/ "./node_modules/@remax/ali/esm/hostComponents/PickerViewColumn/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@remax/ali/esm/hostComponents/PickerViewColumn/index.js ***!
  \******************************************************************************/
/*! exports provided: PickerViewColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickerViewColumn", function() { return PickerViewColumn; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var PickerViewColumn = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('picker-view-column');

/***/ }),

/***/ "./node_modules/@remax/ali/esm/hostComponents/Progress/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@remax/ali/esm/hostComponents/Progress/index.js ***!
  \**********************************************************************/
/*! exports provided: Progress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return Progress; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var Progress = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('progress');

/***/ }),

/***/ "./node_modules/@remax/ali/esm/hostComponents/Radio/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@remax/ali/esm/hostComponents/Radio/index.js ***!
  \*******************************************************************/
/*! exports provided: Radio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return Radio; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var Radio = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('radio');

/***/ }),

/***/ "./node_modules/@remax/ali/esm/hostComponents/RadioGroup/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@remax/ali/esm/hostComponents/RadioGroup/index.js ***!
  \************************************************************************/
/*! exports provided: RadioGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return RadioGroup; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var RadioGroup = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('radio-group');

/***/ }),

/***/ "./node_modules/@remax/ali/esm/hostComponents/RichText/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@remax/ali/esm/hostComponents/RichText/index.js ***!
  \**********************************************************************/
/*! exports provided: RichText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichText", function() { return RichText; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var RichText = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('rich-text');

/***/ }),

/***/ "./node_modules/@remax/ali/esm/hostComponents/ScrollView/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@remax/ali/esm/hostComponents/ScrollView/index.js ***!
  \************************************************************************/
/*! exports provided: ScrollView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return ScrollView; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var ScrollView = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('scroll-view');

/***/ }),

/***/ "./node_modules/@remax/ali/esm/hostComponents/Slider/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@remax/ali/esm/hostComponents/Slider/index.js ***!
  \********************************************************************/
/*! exports provided: Slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var Slider = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('slider');

/***/ }),

/***/ "./node_modules/@remax/ali/esm/hostComponents/Swiper/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@remax/ali/esm/hostComponents/Swiper/index.js ***!
  \********************************************************************/
/*! exports provided: Swiper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return Swiper; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var Swiper = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('swiper');

/***/ }),

/***/ "./node_modules/@remax/ali/esm/hostComponents/SwiperItem/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@remax/ali/esm/hostComponents/SwiperItem/index.js ***!
  \************************************************************************/
/*! exports provided: SwiperItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwiperItem", function() { return SwiperItem; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var SwiperItem = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('swiper-item');

/***/ }),

/***/ "./node_modules/@remax/ali/esm/hostComponents/Switch/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@remax/ali/esm/hostComponents/Switch/index.js ***!
  \********************************************************************/
/*! exports provided: Switch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return Switch; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var Switch = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('switch');

/***/ }),

/***/ "./node_modules/@remax/ali/esm/hostComponents/Text/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@remax/ali/esm/hostComponents/Text/index.js ***!
  \******************************************************************/
/*! exports provided: Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var Text = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('text');

/***/ }),

/***/ "./node_modules/@remax/ali/esm/hostComponents/Textarea/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@remax/ali/esm/hostComponents/Textarea/index.js ***!
  \**********************************************************************/
/*! exports provided: Textarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return Textarea; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var Textarea = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('textarea');

/***/ }),

/***/ "./node_modules/@remax/ali/esm/hostComponents/Video/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@remax/ali/esm/hostComponents/Video/index.js ***!
  \*******************************************************************/
/*! exports provided: Video */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return Video; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var Video = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('video');

/***/ }),

/***/ "./node_modules/@remax/ali/esm/hostComponents/View/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@remax/ali/esm/hostComponents/View/index.js ***!
  \******************************************************************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var View = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('view');

/***/ }),

/***/ "./node_modules/@remax/ali/esm/hostComponents/WebView/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@remax/ali/esm/hostComponents/WebView/index.js ***!
  \*********************************************************************/
/*! exports provided: WebView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return WebView; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var WebView = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('web-view');

/***/ }),

/***/ "./node_modules/@remax/ali/esm/hostComponents/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@remax/ali/esm/hostComponents/index.js ***!
  \*************************************************************/
/*! exports provided: View, ScrollView, Swiper, SwiperItem, MovableView, MovableArea, CoverView, CoverImage, Icon, Text, RichText, Progress, Button, CheckboxGroup, Checkbox, Form, Input, Label, Picker, PickerView, PickerViewColumn, RadioGroup, Radio, Slider, Switch, Textarea, Navigator, Image, Map, Canvas, WebView, Lifestyle, ContactButton, Video */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ "./node_modules/@remax/ali/esm/hostComponents/View/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _View__WEBPACK_IMPORTED_MODULE_0__["View"]; });

/* harmony import */ var _ScrollView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScrollView */ "./node_modules/@remax/ali/esm/hostComponents/ScrollView/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return _ScrollView__WEBPACK_IMPORTED_MODULE_1__["ScrollView"]; });

/* harmony import */ var _Swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Swiper */ "./node_modules/@remax/ali/esm/hostComponents/Swiper/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return _Swiper__WEBPACK_IMPORTED_MODULE_2__["Swiper"]; });

/* harmony import */ var _SwiperItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SwiperItem */ "./node_modules/@remax/ali/esm/hostComponents/SwiperItem/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwiperItem", function() { return _SwiperItem__WEBPACK_IMPORTED_MODULE_3__["SwiperItem"]; });

/* harmony import */ var _MovableView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MovableView */ "./node_modules/@remax/ali/esm/hostComponents/MovableView/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableView", function() { return _MovableView__WEBPACK_IMPORTED_MODULE_4__["MovableView"]; });

/* harmony import */ var _MovableArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MovableArea */ "./node_modules/@remax/ali/esm/hostComponents/MovableArea/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableArea", function() { return _MovableArea__WEBPACK_IMPORTED_MODULE_5__["MovableArea"]; });

/* harmony import */ var _CoverView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CoverView */ "./node_modules/@remax/ali/esm/hostComponents/CoverView/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverView", function() { return _CoverView__WEBPACK_IMPORTED_MODULE_6__["CoverView"]; });

/* harmony import */ var _CoverImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CoverImage */ "./node_modules/@remax/ali/esm/hostComponents/CoverImage/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverImage", function() { return _CoverImage__WEBPACK_IMPORTED_MODULE_7__["CoverImage"]; });

/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Icon */ "./node_modules/@remax/ali/esm/hostComponents/Icon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _Icon__WEBPACK_IMPORTED_MODULE_8__["Icon"]; });

/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Text */ "./node_modules/@remax/ali/esm/hostComponents/Text/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _Text__WEBPACK_IMPORTED_MODULE_9__["Text"]; });

/* harmony import */ var _RichText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./RichText */ "./node_modules/@remax/ali/esm/hostComponents/RichText/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichText", function() { return _RichText__WEBPACK_IMPORTED_MODULE_10__["RichText"]; });

/* harmony import */ var _Progress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Progress */ "./node_modules/@remax/ali/esm/hostComponents/Progress/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return _Progress__WEBPACK_IMPORTED_MODULE_11__["Progress"]; });

/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Button */ "./node_modules/@remax/ali/esm/hostComponents/Button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_12__["Button"]; });

/* harmony import */ var _CheckboxGroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CheckboxGroup */ "./node_modules/@remax/ali/esm/hostComponents/CheckboxGroup/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return _CheckboxGroup__WEBPACK_IMPORTED_MODULE_13__["CheckboxGroup"]; });

/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Checkbox */ "./node_modules/@remax/ali/esm/hostComponents/Checkbox/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _Checkbox__WEBPACK_IMPORTED_MODULE_14__["Checkbox"]; });

/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Form */ "./node_modules/@remax/ali/esm/hostComponents/Form/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _Form__WEBPACK_IMPORTED_MODULE_15__["Form"]; });

/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Input */ "./node_modules/@remax/ali/esm/hostComponents/Input/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _Input__WEBPACK_IMPORTED_MODULE_16__["Input"]; });

/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Label */ "./node_modules/@remax/ali/esm/hostComponents/Label/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _Label__WEBPACK_IMPORTED_MODULE_17__["Label"]; });

/* harmony import */ var _Picker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Picker */ "./node_modules/@remax/ali/esm/hostComponents/Picker/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _Picker__WEBPACK_IMPORTED_MODULE_18__["Picker"]; });

/* harmony import */ var _PickerView__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./PickerView */ "./node_modules/@remax/ali/esm/hostComponents/PickerView/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerView", function() { return _PickerView__WEBPACK_IMPORTED_MODULE_19__["PickerView"]; });

/* harmony import */ var _PickerViewColumn__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./PickerViewColumn */ "./node_modules/@remax/ali/esm/hostComponents/PickerViewColumn/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerViewColumn", function() { return _PickerViewColumn__WEBPACK_IMPORTED_MODULE_20__["PickerViewColumn"]; });

/* harmony import */ var _RadioGroup__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./RadioGroup */ "./node_modules/@remax/ali/esm/hostComponents/RadioGroup/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return _RadioGroup__WEBPACK_IMPORTED_MODULE_21__["RadioGroup"]; });

/* harmony import */ var _Radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Radio */ "./node_modules/@remax/ali/esm/hostComponents/Radio/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _Radio__WEBPACK_IMPORTED_MODULE_22__["Radio"]; });

/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Slider */ "./node_modules/@remax/ali/esm/hostComponents/Slider/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _Slider__WEBPACK_IMPORTED_MODULE_23__["Slider"]; });

/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Switch */ "./node_modules/@remax/ali/esm/hostComponents/Switch/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _Switch__WEBPACK_IMPORTED_MODULE_24__["Switch"]; });

/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Textarea */ "./node_modules/@remax/ali/esm/hostComponents/Textarea/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _Textarea__WEBPACK_IMPORTED_MODULE_25__["Textarea"]; });

/* harmony import */ var _Navigator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Navigator */ "./node_modules/@remax/ali/esm/hostComponents/Navigator/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return _Navigator__WEBPACK_IMPORTED_MODULE_26__["Navigator"]; });

/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Image */ "./node_modules/@remax/ali/esm/hostComponents/Image/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _Image__WEBPACK_IMPORTED_MODULE_27__["Image"]; });

/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Map */ "./node_modules/@remax/ali/esm/hostComponents/Map/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return _Map__WEBPACK_IMPORTED_MODULE_28__["Map"]; });

/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Canvas */ "./node_modules/@remax/ali/esm/hostComponents/Canvas/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return _Canvas__WEBPACK_IMPORTED_MODULE_29__["Canvas"]; });

/* harmony import */ var _WebView__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./WebView */ "./node_modules/@remax/ali/esm/hostComponents/WebView/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return _WebView__WEBPACK_IMPORTED_MODULE_30__["WebView"]; });

/* harmony import */ var _Lifestyle__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Lifestyle */ "./node_modules/@remax/ali/esm/hostComponents/Lifestyle/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lifestyle", function() { return _Lifestyle__WEBPACK_IMPORTED_MODULE_31__["Lifestyle"]; });

/* harmony import */ var _ContactButton__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./ContactButton */ "./node_modules/@remax/ali/esm/hostComponents/ContactButton/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactButton", function() { return _ContactButton__WEBPACK_IMPORTED_MODULE_32__["ContactButton"]; });

/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Video */ "./node_modules/@remax/ali/esm/hostComponents/Video/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return _Video__WEBPACK_IMPORTED_MODULE_33__["Video"]; });




































/***/ }),

/***/ "./node_modules/@remax/ali/esm/index.js":
/*!**********************************************!*\
  !*** ./node_modules/@remax/ali/esm/index.js ***!
  \**********************************************/
/*! exports provided: View, ScrollView, Swiper, SwiperItem, MovableView, MovableArea, CoverView, CoverImage, Icon, Text, RichText, Progress, Button, CheckboxGroup, Checkbox, Form, Input, Label, Picker, PickerView, PickerViewColumn, RadioGroup, Radio, Slider, Switch, Textarea, Navigator, Image, Map, Canvas, WebView, Lifestyle, ContactButton, Video, getAppStub, addCardAuth, addPhoneContact, alert, canIUse, chooseAlipayContact, chooseCity, chooseContact, chooseImage, chooseLocation, choosePhoneContact, clearStorage, clearStorageSync, closeBluetoothAdapter, closeSocket, compressImage, confirm, connectBLEDevice, connectSocket, createAnimation, createCanvasContext, createIntersectionObserver, createMapContext, createSelectorQuery, createWebViewContext, datePicker, disconnectBLEDevice, downloadFile, getAuthCode, getAuthUserInfo, getBatteryInfo, getBatteryInfoSync, getBeacons, getBLEDeviceCharacteristics, getBLEDeviceServices, getBluetoothAdapterState, getBluetoothDevices, getClipboard, getConnectedBluetoothDevices, getFileInfo, getImageInfo, getLocation, getNetworkType, getPhoneNumber, getRunData, getRunScene, getSavedFileInfo, getSavedFileList, getScreenBrightness, getServerTime, getSetting, getStorage, getStorageInfo, getStorageInfoSync, getStorageSync, getSystemInfo, getSystemInfoSync, getTitleColor, getUpdateManager, hideAddToDesktopMenu, hideAllAddToDesktopMenu, hideAllFavoriteMenu, hideBackHome, hideFavoriteMenu, hideKeyboard, hideLoading, hideNavigationBarLoading, hideShareMenu, hideTabBar, hideTabBarRedDot, hideToast, loadFontFace, makePhoneCall, multiLevelSelect, navigateBack, navigateBackMiniProgram, navigateTo, navigateToMiniProgram, notifyBLECharacteristicValueChange, offAccelerometerChange, offBLECharacteristicValueChange, offBLEConnectionStateChanged, offBluetoothAdapterStateChange, offBluetoothDeviceFound, offCompassChange, offGyroscopeChange, offMemoryWarning, offNetworkStatusChange, offSocketClose, offSocketError, offSocketMessage, offSocketOpen, offUserCaptureScreen, onAccelerometerChange, onBeaconServiceChange, onBeaconUpdate, onBLECharacteristicValueChange, onBLEConnectionStateChanged, onBluetoothAdapterStateChange, onBluetoothDeviceFound, onCompassChange, onGyroscopeChange, onMemoryWarning, onNetworkStatusChange, onSocketClose, onSocketError, onSocketMessage, onSocketOpen, onUserCaptureScreen, openBluetoothAdapter, openCardDetail, openCardList, openKBVoucherDetail, openLocation, openMerchantCardList, openMerchantTicketList, openMerchantVoucherList, openSetting, openTicketDetail, openTicketList, openVoucherDetail, openVoucherList, optionsSelect, pageScrollTo, previewImage, prompt, readBLECharacteristicValue, redirectTo, reLaunch, removeSavedFile, removeStorage, removeStorageSync, removeTabBarBadge, reportAnalytics, request, rsa, saveFile, saveImage, scan, SDKVersion, sendSocketMessage, setBackgroundColor, setBackgroundTextStyle, setCanPullDown, setClipboard, setKeepScreenOn, setNavigationBar, setOptionMenu, setScreenBrightness, setStorage, setStorageSync, setTabBarBadge, setTabBarItem, setTabBarStyle, showActionSheet, showAuthGuide, showLoading, showNavigationBarLoading, showSharePanel, showTabBar, showTabBarRedDot, showToast, startBeaconDiscovery, startBluetoothDevicesDiscovery, startPullDownRefresh, startZMVerify, stopBeaconDiscovery, stopBluetoothDevicesDiscovery, stopPullDownRefresh, switchTab, textRiskIdentification, tradePay, uploadFile, vibrate, vibrateLong, vibrateShort, watchShake, writeBLECharacteristicValue, createVideoContext, getOpenUserInfo, httpRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hostComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hostComponents */ "./node_modules/@remax/ali/esm/hostComponents/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["View"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["ScrollView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Swiper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwiperItem", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["SwiperItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["MovableView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableArea", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["MovableArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["CoverView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverImage", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["CoverImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Icon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Text"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichText", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["RichText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Progress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["CheckboxGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Checkbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Form"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Label"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Picker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["PickerView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerViewColumn", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["PickerViewColumn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["RadioGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Radio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Slider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Switch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Textarea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Navigator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Image"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Canvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["WebView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lifestyle", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Lifestyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactButton", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["ContactButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Video"]; });

/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./node_modules/@remax/ali/esm/api/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAppStub", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getAppStub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addCardAuth", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["addCardAuth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addPhoneContact", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["addPhoneContact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alert", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["alert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canIUse", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["canIUse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseAlipayContact", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseAlipayContact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseCity", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseCity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseContact", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseContact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseImage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseLocation", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "choosePhoneContact", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["choosePhoneContact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearStorage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["clearStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearStorageSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["clearStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeBluetoothAdapter", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["closeBluetoothAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeSocket", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["closeSocket"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compressImage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["compressImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "confirm", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["confirm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectBLEDevice", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["connectBLEDevice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectSocket", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["connectSocket"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAnimation", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCanvasContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createCanvasContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createIntersectionObserver", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createIntersectionObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMapContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createMapContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelectorQuery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createSelectorQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createWebViewContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createWebViewContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "datePicker", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["datePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disconnectBLEDevice", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["disconnectBLEDevice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["downloadFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAuthCode", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getAuthCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAuthUserInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getAuthUserInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBatteryInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBatteryInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBatteryInfoSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBatteryInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBeacons", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBeacons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBLEDeviceCharacteristics", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBLEDeviceCharacteristics"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBLEDeviceServices", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBLEDeviceServices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBluetoothAdapterState", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBluetoothAdapterState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBluetoothDevices", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBluetoothDevices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getClipboard", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getClipboard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConnectedBluetoothDevices", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getConnectedBluetoothDevices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFileInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getFileInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getImageInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getImageInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNetworkType", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getNetworkType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPhoneNumber", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getPhoneNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRunData", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getRunData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRunScene", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getRunScene"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSavedFileInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSavedFileInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSavedFileList", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSavedFileList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScreenBrightness", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getScreenBrightness"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getServerTime", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getServerTime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSetting", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSetting"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getStorageInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageInfoSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getStorageInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSystemInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSystemInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSystemInfoSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSystemInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTitleColor", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getTitleColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUpdateManager", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getUpdateManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideAddToDesktopMenu", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideAddToDesktopMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideAllAddToDesktopMenu", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideAllAddToDesktopMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideAllFavoriteMenu", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideAllFavoriteMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideBackHome", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideBackHome"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideFavoriteMenu", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideFavoriteMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideKeyboard", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideKeyboard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideLoading", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideNavigationBarLoading", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideNavigationBarLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideShareMenu", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideShareMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideTabBar", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideTabBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideTabBarRedDot", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideTabBarRedDot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideToast", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideToast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadFontFace", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["loadFontFace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makePhoneCall", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["makePhoneCall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "multiLevelSelect", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["multiLevelSelect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateBack", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["navigateBack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateBackMiniProgram", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["navigateBackMiniProgram"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["navigateTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateToMiniProgram", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["navigateToMiniProgram"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notifyBLECharacteristicValueChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["notifyBLECharacteristicValueChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offAccelerometerChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offAccelerometerChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offBLECharacteristicValueChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offBLECharacteristicValueChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offBLEConnectionStateChanged", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offBLEConnectionStateChanged"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offBluetoothAdapterStateChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offBluetoothAdapterStateChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offBluetoothDeviceFound", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offBluetoothDeviceFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offCompassChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offCompassChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offGyroscopeChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offGyroscopeChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offMemoryWarning", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offMemoryWarning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offNetworkStatusChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offNetworkStatusChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offSocketClose", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offSocketClose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offSocketError", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offSocketError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offSocketMessage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offSocketMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offSocketOpen", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offSocketOpen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offUserCaptureScreen", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offUserCaptureScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAccelerometerChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onAccelerometerChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeaconServiceChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBeaconServiceChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeaconUpdate", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBeaconUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBLECharacteristicValueChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBLECharacteristicValueChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBLEConnectionStateChanged", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBLEConnectionStateChanged"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBluetoothAdapterStateChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBluetoothAdapterStateChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBluetoothDeviceFound", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBluetoothDeviceFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onCompassChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onCompassChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onGyroscopeChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onGyroscopeChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onMemoryWarning", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onMemoryWarning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onNetworkStatusChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onNetworkStatusChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketClose", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onSocketClose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketError", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onSocketError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketMessage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onSocketMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketOpen", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onSocketOpen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onUserCaptureScreen", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onUserCaptureScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openBluetoothAdapter", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openBluetoothAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openCardDetail", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openCardDetail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openCardList", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openCardList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openKBVoucherDetail", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openKBVoucherDetail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openLocation", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openMerchantCardList", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openMerchantCardList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openMerchantTicketList", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openMerchantTicketList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openMerchantVoucherList", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openMerchantVoucherList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openSetting", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openSetting"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openTicketDetail", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openTicketDetail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openTicketList", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openTicketList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openVoucherDetail", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openVoucherDetail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openVoucherList", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openVoucherList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "optionsSelect", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["optionsSelect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pageScrollTo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["pageScrollTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "previewImage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["previewImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prompt", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["prompt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readBLECharacteristicValue", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["readBLECharacteristicValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["redirectTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reLaunch", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["reLaunch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeSavedFile", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["removeSavedFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeStorage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["removeStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeStorageSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["removeStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeTabBarBadge", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["removeTabBarBadge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reportAnalytics", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["reportAnalytics"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "request", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["request"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rsa", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["rsa"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveFile", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["saveFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveImage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["saveImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["scan"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKVersion", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["SDKVersion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendSocketMessage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["sendSocketMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBackgroundColor", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setBackgroundColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBackgroundTextStyle", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setBackgroundTextStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCanPullDown", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setCanPullDown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setClipboard", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setClipboard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setKeepScreenOn", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setKeepScreenOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setNavigationBar", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setNavigationBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setOptionMenu", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setOptionMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setScreenBrightness", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setScreenBrightness"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setStorage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setStorageSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabBarBadge", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setTabBarBadge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabBarItem", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setTabBarItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabBarStyle", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setTabBarStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showActionSheet", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showActionSheet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showAuthGuide", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showAuthGuide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showLoading", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showNavigationBarLoading", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showNavigationBarLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showSharePanel", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showSharePanel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showTabBar", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showTabBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showTabBarRedDot", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showTabBarRedDot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showToast", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showToast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startBeaconDiscovery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startBeaconDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startBluetoothDevicesDiscovery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startBluetoothDevicesDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startPullDownRefresh", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startPullDownRefresh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startZMVerify", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startZMVerify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopBeaconDiscovery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopBeaconDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopBluetoothDevicesDiscovery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopBluetoothDevicesDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopPullDownRefresh", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopPullDownRefresh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchTab", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["switchTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textRiskIdentification", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["textRiskIdentification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tradePay", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["tradePay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uploadFile", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["uploadFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vibrate", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["vibrate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vibrateLong", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["vibrateLong"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vibrateShort", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["vibrateShort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchShake", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["watchShake"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "writeBLECharacteristicValue", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["writeBLECharacteristicValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createVideoContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createVideoContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOpenUserInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getOpenUserInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "httpRequest", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["httpRequest"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./node_modules/@remax/ali/esm/types/index.js");
/* empty/unused harmony star reexport */



/***/ }),

/***/ "./node_modules/@remax/ali/esm/types/config.js":
/*!*****************************************************!*\
  !*** ./node_modules/@remax/ali/esm/types/config.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@remax/ali/esm/types/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@remax/ali/esm/types/index.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./node_modules/@remax/ali/esm/types/config.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@remax/one/esm/api/index.ali.js":
/*!******************************************************!*\
  !*** ./node_modules/@remax/one/esm/api/index.ali.js ***!
  \******************************************************/
/*! exports provided: navigateTo, navigateBack, redirectTo, reLaunch, switchTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_ali__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/ali */ "./node_modules/@remax/ali/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["navigateTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateBack", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["navigateBack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["redirectTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reLaunch", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["reLaunch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchTab", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["switchTab"]; });



/***/ }),

/***/ "./node_modules/@remax/one/esm/components/Modal.js":
/*!*********************************************************!*\
  !*** ./node_modules/@remax/one/esm/components/Modal.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

function Modal(_a) {
  var children = _a.children; // context 一定存在

  var ctx = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageContext"])();
  return Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPortal"])(children, ctx.modalContainer);
}

/***/ }),

/***/ "./node_modules/@remax/one/esm/createHostComponent.js":
/*!************************************************************!*\
  !*** ./node_modules/@remax/one/esm/createHostComponent.js ***!
  \************************************************************/
/*! exports provided: createTarget, createCurrentTarget, createTapEvent, createTouchEvent, createImageEvent, createCallback, createInputEvent, createFormEvent, aliasProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTarget", function() { return createTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCurrentTarget", function() { return createCurrentTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTapEvent", function() { return createTapEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTouchEvent", function() { return createTouchEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createImageEvent", function() { return createImageEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCallback", function() { return createCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInputEvent", function() { return createInputEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFormEvent", function() { return createFormEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aliasProps", function() { return aliasProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createHostComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};




function createTarget(target, detail) {
  return {
    id: target.id,
    offsetLeft: target.offsetLeft,
    offsetTop: target.offsetTop,
    dataset: target.targetDataset || target.dataset,
    value: detail === null || detail === void 0 ? void 0 : detail.value
  };
}
function createCurrentTarget(currentTarget) {
  return {
    id: currentTarget.id,
    offsetLeft: currentTarget.offsetLeft,
    offsetTop: currentTarget.offsetTop,
    dataset: currentTarget.dataset
  };
}
var createTapEvent = function createTapEvent(originalEvent) {
  return {
    type: originalEvent.type,
    stopPropagation: originalEvent.stopPropagation,
    target: createTarget(originalEvent.target, originalEvent.detail),
    currentTarget: createCurrentTarget(originalEvent.currentTarget),
    originalEvent: originalEvent,
    nativeEvent: originalEvent
  };
};
var createTouchEvent = function createTouchEvent(originalEvent) {
  return {
    type: originalEvent.type,
    stopPropagation: originalEvent.stopPropagation,
    target: createTarget(originalEvent.target, originalEvent.detail),
    currentTarget: createCurrentTarget(originalEvent.currentTarget),
    touches: originalEvent.touches,
    changedTouches: originalEvent.touches,
    originalEvent: originalEvent,
    nativeEvent: originalEvent
  };
};
var createImageEvent = function createImageEvent(originalEvent) {
  return {
    type: originalEvent.type,
    target: createTarget(originalEvent.target, originalEvent.detail),
    currentTarget: createCurrentTarget(originalEvent.currentTarget),
    originalEvent: originalEvent,
    nativeEvent: originalEvent
  };
};
function createCallback(fn, eventCreator) {
  if (typeof fn !== 'function') {
    return undefined;
  }

  return function (originalEvent) {
    return fn(eventCreator(originalEvent));
  };
}
var createInputEvent = function createInputEvent(originalEvent) {
  return {
    type: originalEvent.type,
    target: createTarget(originalEvent.target, originalEvent.detail),
    currentTarget: createCurrentTarget(originalEvent.currentTarget),
    originalEvent: originalEvent,
    nativeEvent: originalEvent
  };
};
var createFormEvent = function createFormEvent(originalEvent) {
  return {
    type: originalEvent.type,
    target: createTarget(originalEvent.target, originalEvent.detail),
    currentTarget: createCurrentTarget(originalEvent.currentTarget),
    originalEvent: originalEvent,
    nativeEvent: originalEvent
  };
};

function assignDefaultProps(inputProps, defaultProps) {
  if (defaultProps) {
    Object.keys(defaultProps).forEach(function (key) {
      var _a;

      inputProps[key] = (_a = inputProps[key]) !== null && _a !== void 0 ? _a : defaultProps[key];
    });
  }
}

function aliasProps(props, alias) {
  var _a;

  if (!alias) {
    return props;
  }

  var nextProps = {};

  for (var key in props) {
    nextProps[(_a = alias[key]) !== null && _a !== void 0 ? _a : key] = props[key];
  }

  return nextProps;
}
var createLongTapCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(createCallback);
var createTapCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(createCallback);
var createTouchStartCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(createCallback);
var createTouchMoveCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(createCallback);
var createTouchEndCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(createCallback);
var createTouchCancelCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(createCallback);
var createChangeCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(createCallback);
var createInputCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(createCallback);
var createConfirmCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(createCallback);
var createFocusCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(createCallback);
var createBlurCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(createCallback);
var createSubmitCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(createCallback);
var createResetCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(createCallback);
var createImageLoadCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(createCallback);
var createImageErrorCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(createCallback);
function createHostComponent(name, alias, defaults) {
  var Component = function Component(props, ref) {
    var inputProps = __assign({}, props); // 默认属性根据平台在这里设置


    if (defaults) {
      assignDefaultProps(inputProps, defaults);
    }

    if (props.onLongTap) {
      inputProps.onLongTap = createLongTapCallback(inputProps.onLongTap, createTapEvent);
    }

    if (inputProps.onTap) {
      inputProps.onTap = createTapCallback(inputProps.onTap, createTapEvent);
    }

    if (inputProps.onTouchStart) {
      inputProps.onTouchStart = createTouchStartCallback(inputProps.onTouchStart, createTouchEvent);
    }

    if (inputProps.onTouchMove) {
      inputProps.onTouchMove = createTouchMoveCallback(inputProps.onTouchMove, createTouchEvent);
    }

    if (inputProps.onTouchEnd) {
      inputProps.onTouchEnd = createTouchEndCallback(inputProps.onTouchEnd, createTouchEvent);
    }

    if (inputProps.onTouchCancel) {
      inputProps.onTouchCancel = createTouchCancelCallback(inputProps.onTouchCancel, createTouchEvent);
    }

    if (inputProps.onChange) {
      inputProps.onChange = createChangeCallback(inputProps.onChange, createInputEvent);
    }

    if (inputProps.onInput) {
      inputProps.onInput = createInputCallback(inputProps.onInput, createInputEvent);
    }

    if (inputProps.onConfirm) {
      inputProps.onConfirm = createConfirmCallback(inputProps.onConfirm, createInputEvent);
    }

    if (inputProps.onFocus) {
      inputProps.onFocus = createFocusCallback(inputProps.onFocus, createInputEvent);
    }

    if (inputProps.onBlur) {
      inputProps.onBlur = createBlurCallback(inputProps.onBlur, createInputEvent);
    }

    if (inputProps.onSubmit) {
      inputProps.onSubmit = createSubmitCallback(inputProps.onSubmit, createFormEvent);
    }

    if (inputProps.onReset) {
      inputProps.onReset = createResetCallback(inputProps.onReset, createFormEvent);
    }

    if (name === 'image') {
      if (inputProps.onLoad) {
        inputProps.onLoad = createImageLoadCallback(props.onLoad, createImageEvent);
      }

      if (inputProps.onError) {
        inputProps.onError = createImageErrorCallback(props.onError, createImageEvent);
      }
    }

    var nextProps = inputProps;

    if (alias) {
      nextProps = aliasProps(inputProps, alias);
    }

    nextProps.ref = ref;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](name, nextProps);
  };

  if (true) {
    Component.displayName = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_2__["formatDisplayName"])(name);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](Component);
}

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/Button/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/Button/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createHostComponent */ "./node_modules/@remax/one/esm/createHostComponent.js");
/* harmony import */ var _props_alias__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./props/alias */ "./node_modules/@remax/one/esm/hostComponents/Button/props/alias/index.js");
/* harmony import */ var _props_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./props/default */ "./node_modules/@remax/one/esm/hostComponents/Button/props/default/index.js");



var Button = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('button', _props_alias__WEBPACK_IMPORTED_MODULE_1__["default"], _props_default__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/Button/props/alias/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/Button/props/alias/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  type: 'formType'
});

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/Button/props/default/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/Button/props/default/index.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/Form/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/Form/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createHostComponent */ "./node_modules/@remax/one/esm/createHostComponent.js");
/* harmony import */ var _props_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./props/default */ "./node_modules/@remax/one/esm/hostComponents/Form/props/default/index.js");


var Form = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('form', null, _props_default__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/Form/props/default/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/Form/props/default/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/Image/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/Image/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createHostComponent */ "./node_modules/@remax/one/esm/createHostComponent.js");
/* harmony import */ var _props_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./props/default */ "./node_modules/@remax/one/esm/hostComponents/Image/props/default/index.js");


var Image = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('image', null, _props_default__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/Image/props/default/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/Image/props/default/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/Input/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/Input/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../createHostComponent */ "./node_modules/@remax/one/esm/createHostComponent.js");
/* harmony import */ var _props_alias__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./props/alias */ "./node_modules/@remax/one/esm/hostComponents/Input/props/alias/index.js");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};





var createInputCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(_createHostComponent__WEBPACK_IMPORTED_MODULE_2__["createCallback"]);
var createConfirmCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(_createHostComponent__WEBPACK_IMPORTED_MODULE_2__["createCallback"]);
var createFocusCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(_createHostComponent__WEBPACK_IMPORTED_MODULE_2__["createCallback"]);
var createBlurCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(_createHostComponent__WEBPACK_IMPORTED_MODULE_2__["createCallback"]);

var Input =
/** @class */
function (_super) {
  __extends(Input, _super);

  function Input(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      value: '',
      // 阿里
      controlled: false
    };

    _this.handleInput = function (e) {
      var controlled = _this.state.controlled;

      if (typeof _this.props.onInput === 'function') {
        return _this.props.onInput(e);
      } // 微信
      // 注意，微信要对 input 受控，必须要在 onInput 方法返回值


      return controlled ? _this.props.value : undefined;
    };

    var controlled = props.value !== undefined;
    var value = controlled ? props.value : props.defaultValue;
    _this.state = {
      value: value,
      controlled: controlled
    };
    return _this;
  }

  Input.prototype.componentDidUpdate = function () {
    if (this.props.value !== undefined && this.props.value !== this.state.value) {
      this.setState({
        value: this.props.value
      });
    }
  };

  Input.prototype.render = function () {
    var _a, _b, _c, _d, _e, _f;

    var inputProps = __assign({}, this.props);

    if (inputProps.onInput) {
      inputProps.onInput = createInputCallback(this.handleInput, _createHostComponent__WEBPACK_IMPORTED_MODULE_2__["createInputEvent"]);
    }

    if (inputProps.onConfirm) {
      inputProps.onConfirm = createConfirmCallback(this.props.onConfirm, _createHostComponent__WEBPACK_IMPORTED_MODULE_2__["createInputEvent"]);
    }

    if (inputProps.onFocus) {
      inputProps.onFocus = createFocusCallback(this.props.onFocus, _createHostComponent__WEBPACK_IMPORTED_MODULE_2__["createInputEvent"]);
    }

    if (inputProps.onBlur) {
      inputProps.onBlur = createBlurCallback(this.props.onBlur, _createHostComponent__WEBPACK_IMPORTED_MODULE_2__["createInputEvent"]);
    } // 通用属性的默认属性根据平台在这里设置


    if (false) {}

    if (false) {}

    var nextProps = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_2__["aliasProps"])(__assign(__assign({}, inputProps), this.state), _props_alias__WEBPACK_IMPORTED_MODULE_3__["default"]);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]('input', nextProps);
  }; // 平台独有的属性默认值写在这


  Input.defaultProps = {
    'toutiao-selection-end': 999,
    'toutiao-selection-start': 999,
    'wechat-placeholder-class': 'input-placeholder',
    'wechat-cursor-spacing': 0,
    'wechat-confirm-type': 'done',
    'wechat-confirm-hold': false,
    'wechat-selection-end': -1,
    'wechat-selection-start': -1,
    'wechat-adjust-position': true,
    'wechat-hold-keyboard': false
  };
  return Input;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/Input/props/alias/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/Input/props/alias/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  maxLength: 'maxlength'
});

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/Label/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/Label/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createHostComponent */ "./node_modules/@remax/one/esm/createHostComponent.js");

var Label = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('label', {
  htmlFor: 'for'
});
/* harmony default export */ __webpack_exports__["default"] = (Label);

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/Navigator/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/Navigator/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createHostComponent */ "./node_modules/@remax/one/esm/createHostComponent.js");
/* harmony import */ var _props_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./props/default */ "./node_modules/@remax/one/esm/hostComponents/Navigator/props/default/index.js");


var Navigator = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('navigator', null, _props_default__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (Navigator);

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/Navigator/props/default/index.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/Navigator/props/default/index.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/Text/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/Text/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createHostComponent */ "./node_modules/@remax/one/esm/createHostComponent.js");
/* harmony import */ var _props_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./props/default */ "./node_modules/@remax/one/esm/hostComponents/Text/props/default/index.js");


var Text = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('text', null, _props_default__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/Text/props/default/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/Text/props/default/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/Textarea/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/Textarea/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../createHostComponent */ "./node_modules/@remax/one/esm/createHostComponent.js");
/* harmony import */ var _props_alias__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./props/alias */ "./node_modules/@remax/one/esm/hostComponents/Textarea/props/alias.js");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};





var Textarea =
/** @class */
function (_super) {
  __extends(Textarea, _super);

  function Textarea(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      value: '',
      // 阿里
      controlled: false
    };

    _this.handleInput = function (e) {
      var controlled = _this.state.controlled;

      if (!controlled) {
        _this.setState({
          value: e.target.value
        });
      }

      if (typeof _this.props.onInput === 'function') {
        return _this.props.onInput(e);
      } // 微信
      // 注意，微信要对 input 受控，必须要在 onInput 方法返回值


      return controlled ? _this.props.value : e.target.value;
    };

    var controlled = props.value !== undefined;
    var value = controlled ? props.value : props.defaultValue;
    _this.state = {
      value: value,
      controlled: controlled
    };
    return _this;
  }

  Textarea.prototype.componentDidUpdate = function () {
    if (this.props.value !== undefined && this.props.value !== this.state.value) {
      this.setState({
        value: this.props.value
      });
    }
  };

  Textarea.prototype.render = function () {
    var _a, _b, _c, _d, _e;

    var inputProps = __assign(__assign({}, this.props), {
      onInput: Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_1__["createCallback"])(this.handleInput, _createHostComponent__WEBPACK_IMPORTED_MODULE_1__["createInputEvent"])
    });

    if (inputProps.onConfirm) {
      inputProps.onConfirm = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_1__["createCallback"])(this.props.onConfirm, _createHostComponent__WEBPACK_IMPORTED_MODULE_1__["createInputEvent"]);
    }

    if (inputProps.onFocus) {
      inputProps.onFocus = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_1__["createCallback"])(this.props.onFocus, _createHostComponent__WEBPACK_IMPORTED_MODULE_1__["createInputEvent"]);
    }

    if (inputProps.onBlur) {
      inputProps.onBlur = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_1__["createCallback"])(this.props.onBlur, _createHostComponent__WEBPACK_IMPORTED_MODULE_1__["createInputEvent"]);
    }

    if (false) {}

    if (false) {}

    var nextProps = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_1__["aliasProps"])(__assign(__assign({}, inputProps), this.state), _props_alias__WEBPACK_IMPORTED_MODULE_2__["default"]);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]('textarea', nextProps);
  };

  Textarea.defaultProps = {
    'toutiao-selection-end': 999,
    'toutiao-selection-start': 999,
    'wechat-selection-end': -1,
    'wechat-selection-start': -1,
    'wechat-fixed': false,
    'wechat-placeholder-class': 'textarea-placeholder',
    'wechat-cursor-spacing': 0,
    'wechat-cursor': -1,
    'wechat-show-confirm-bar': true,
    'wechat-adjust-position': true,
    'wechat-hold-keyboard': false,
    'wechat-disable-default-padding': false
  };
  return Textarea;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Textarea);

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/Textarea/props/alias.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/Textarea/props/alias.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  maxLength: 'maxlength'
});

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/View/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/View/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createHostComponent */ "./node_modules/@remax/one/esm/createHostComponent.js");
/* harmony import */ var _props_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./props/default */ "./node_modules/@remax/one/esm/hostComponents/View/props/default/index.js");


var View = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('view', null, _props_default__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/View/props/default/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/View/props/default/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/WebView/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/WebView/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createHostComponent */ "./node_modules/@remax/one/esm/createHostComponent.js");

var WebView = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('web-view', null);
/* harmony default export */ __webpack_exports__["default"] = (WebView);

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/index.js ***!
  \*************************************************************/
/*! exports provided: Button, Form, Image, Input, Label, Navigator, Text, Textarea, View, WebView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./node_modules/@remax/one/esm/hostComponents/Button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form */ "./node_modules/@remax/one/esm/hostComponents/Form/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _Form__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image */ "./node_modules/@remax/one/esm/hostComponents/Image/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _Image__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Input */ "./node_modules/@remax/one/esm/hostComponents/Input/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _Input__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Label */ "./node_modules/@remax/one/esm/hostComponents/Label/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _Label__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Navigator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Navigator */ "./node_modules/@remax/one/esm/hostComponents/Navigator/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return _Navigator__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Text */ "./node_modules/@remax/one/esm/hostComponents/Text/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _Text__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Textarea */ "./node_modules/@remax/one/esm/hostComponents/Textarea/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _Textarea__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./View */ "./node_modules/@remax/one/esm/hostComponents/View/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _View__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _WebView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WebView */ "./node_modules/@remax/one/esm/hostComponents/WebView/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return _WebView__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* empty/unused harmony star reexport */




















/***/ }),

/***/ "./node_modules/@remax/one/esm/index.js":
/*!**********************************************!*\
  !*** ./node_modules/@remax/one/esm/index.js ***!
  \**********************************************/
/*! exports provided: Button, Form, Image, Input, Label, Navigator, Text, Textarea, View, WebView, navigateTo, navigateBack, redirectTo, reLaunch, switchTab, Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hostComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hostComponents */ "./node_modules/@remax/one/esm/hostComponents/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Form"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Image"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Label"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Navigator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Text"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Textarea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["View"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["WebView"]; });

/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./node_modules/@remax/one/esm/api/index.ali.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["navigateTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateBack", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["navigateBack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["redirectTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reLaunch", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["reLaunch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchTab", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["switchTab"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./node_modules/@remax/one/esm/types/index.js");
/* empty/unused harmony star reexport *//* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Modal */ "./node_modules/@remax/one/esm/components/Modal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _components_Modal__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./node_modules/@remax/one/esm/types/event.js":
/*!****************************************************!*\
  !*** ./node_modules/@remax/one/esm/types/event.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@remax/one/esm/types/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@remax/one/esm/types/index.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event */ "./node_modules/@remax/one/esm/types/event.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/annar/esm/_util/index.js":
/*!***********************************************!*\
  !*** ./node_modules/annar/esm/_util/index.js ***!
  \***********************************************/
/*! exports provided: tuple, tupleNum, guid, throttle, mergeStyle, twoDimensional, flat, isObjectValueEqual, isArrayValueEqual, deepClone, sync, to */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _to__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to */ "./node_modules/annar/esm/_util/to.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "to", function() { return _to__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _sync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sync */ "./node_modules/annar/esm/_util/sync.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sync", function() { return _sync__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type */ "./node_modules/annar/esm/_util/type.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuple", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["tuple"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tupleNum", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["tupleNum"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/annar/esm/_util/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "guid", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["guid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["throttle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyle", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["mergeStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "twoDimensional", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["twoDimensional"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flat", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["flat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObjectValueEqual", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["isObjectValueEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArrayValueEqual", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["isArrayValueEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deepClone", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["deepClone"]; });







/***/ }),

/***/ "./node_modules/annar/esm/_util/sync.js":
/*!**********************************************!*\
  !*** ./node_modules/annar/esm/_util/sync.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var sync = function sync(fn) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return new Promise(function (resolve, reject) {
    var obj = _objectSpread({}, args[0]);

    var success = obj.success;

    obj.success = function () {
      for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        params[_key2] = arguments[_key2];
      }

      success && success.apply.apply(success, [this].concat(params));
      var r = params.length > 1 ? params : params[0];
      resolve(r);
    };

    var fail = obj.fail;

    obj.fail = function () {
      for (var _len3 = arguments.length, params = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        params[_key3] = arguments[_key3];
      }

      fail && fail.apply.apply(fail, [this].concat(params));
      var r = params.length > 1 ? params : params[0];
      reject(r);
    };

    fn(obj);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (sync);

/***/ }),

/***/ "./node_modules/annar/esm/_util/to.js":
/*!********************************************!*\
  !*** ./node_modules/annar/esm/_util/to.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
var to = function to(promise) {
  // eslint-disable-next-line no-prototype-builtins
  if (!promise || !Promise.prototype.isPrototypeOf(promise)) {
    return new Promise(function (resolve, reject) {
      reject(new Error('requires promises as the param'));
    })["catch"](function (err) {
      return [err, null];
    });
  }

  return promise.then(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return [null].concat(args);
  })["catch"](function (err) {
    return [err];
  });
};

/* harmony default export */ __webpack_exports__["default"] = (to);

/***/ }),

/***/ "./node_modules/annar/esm/_util/type.js":
/*!**********************************************!*\
  !*** ./node_modules/annar/esm/_util/type.js ***!
  \**********************************************/
/*! exports provided: tuple, tupleNum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuple", function() { return tuple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tupleNum", function() { return tupleNum; });
// https://stackoverflow.com/questions/46176165/ways-to-get-string-literal-type-of-array-values-without-enum-overhead
var tuple = function tuple() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args;
};
var tupleNum = function tupleNum() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return args;
};

/***/ }),

/***/ "./node_modules/annar/esm/_util/utils.js":
/*!***********************************************!*\
  !*** ./node_modules/annar/esm/_util/utils.js ***!
  \***********************************************/
/*! exports provided: guid, throttle, mergeStyle, twoDimensional, flat, isObjectValueEqual, isArrayValueEqual, deepClone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guid", function() { return guid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeStyle", function() { return mergeStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "twoDimensional", function() { return twoDimensional; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flat", function() { return flat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectValueEqual", function() { return isObjectValueEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayValueEqual", function() { return isArrayValueEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepClone", function() { return deepClone; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var guid = function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0;
    var v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}; // 如果你想禁用第一次首先执行的话，传递{leading: false}，还有如果你想禁用最后一次执行的话，传递{trailing: false}。
// 默认是 第一次首先执行并且最后一次会执行，相当于 {leading: true, trailing: true}

var throttle = function throttle(func, wait, options) {
  var previous = 0;
  var timeout = null;
  var context;
  var args;
  if (!options) options = {};

  var later = function later() {
    previous = options.leading === false ? 0 : new Date().getTime();
    timeout = null;
    func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function throttled() {
    var now = new Date().getTime();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this; // eslint-disable-next-line prefer-rest-params

    args = arguments;

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }

      previous = now;
      func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
  };

  return throttled;
};
var mergeStyle = function mergeStyle(target, style) {
  var newTarget = target ? _objectSpread({}, target) : {};

  for (var _key in style) {
    if (Object.prototype.hasOwnProperty.call(style, _key)) {
      var element = style[_key];

      if (element || element === 0) {
        newTarget[_key] = element;
      }
    }
  }

  return newTarget;
};
var twoDimensional = function twoDimensional(data, columns, span) {
  var standard = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 24;
  var two = [];
  var spanTwo = [];
  var colSpan = standard / columns;

  if (!Array.isArray(data)) {
    return [two, spanTwo];
  }

  var spanArray = [];

  if (span) {
    spanArray = new Array(data.length).fill(colSpan);

    if (typeof span === 'number') {
      if (span > 0) {
        spanArray[0] = span;
      }

      if (span < 0) {
        spanArray[data.length - 1] = Math.abs(span);
      }
    }

    if (Array.isArray(span)) {
      spanArray = span.concat(spanArray.slice(span.length));
    }

    var prev = 0;
    var rowIndex = 0;

    for (var i = 0; i < spanArray.length; i++) {
      var item = spanArray[i];
      var row = [data[i]];
      var spanRow = [item];

      if (item >= 24) {
        rowIndex = two.push(row);
        spanTwo.push(spanRow);
      } else {
        if (24 - prev >= item) {
          two[rowIndex] ? two[rowIndex] = two[rowIndex].concat(data[i]) : rowIndex = two.push(row) - 1;
          spanTwo[rowIndex] ? spanTwo[rowIndex] = spanTwo[rowIndex].concat(item) : rowIndex = spanTwo.push(spanRow) - 1;
          prev += item;
        } else {
          rowIndex = two.push(row) - 1;
          spanTwo.push(spanRow);
          prev = item;
        }
      }
    }

    return [two, spanTwo];
  }

  var rowsLength = Math.ceil(data.length / columns);
  var oneDimensional = data.concat([]);
  var index = 0;

  for (var _i = 0; _i < rowsLength; _i++) {
    var _row = oneDimensional.slice(index, index += columns);

    two.push(_row);
    spanTwo.push(new Array(_row.length).fill(colSpan));
  }

  return [two, spanTwo];
};
var flat = function flat(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }

  return arr.reduce(function (prev, curr) {
    if (Array.isArray(curr)) {
      return prev.concat(flat(curr));
    }

    return prev.concat(curr);
  }, []);
};
var isObjectValueEqual = function isObjectValueEqual(a, b) {
  //取对象a和b的属性名
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b); //判断属性名的length是否一致

  if (aProps.length != bProps.length) {
    return false;
  } //循环取出属性名，再判断属性值是否一致


  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];

    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  return true;
};
var isArrayValueEqual = function isArrayValueEqual(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    return false;
  } //判断array的length是否一致


  if (a.length != b.length) {
    return false;
  }

  var isEqual = true;

  for (var i = 0; i < a.length; i += 1) {
    if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(a[i]) === 'object' && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(b[i]) === 'object') {
      !isObjectValueEqual(a[i], b[i]) && (isEqual = false);
    } else {
      a[i] !== b[i] && (isEqual = false);
    }
  }

  return isEqual;
};
var deepClone = function deepClone(data) {
  var cloneData = null;

  if (Array.isArray(data)) {
    cloneData = [];

    for (var i = 0; i < data.length; i += 1) {
      var item = data[i];
      cloneData[i] = deepClone(item);
    }
  } else if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(data) === 'object' && data !== null) {
    cloneData = {};
    Object.keys(data).forEach(function (key) {
      var item = data[key];
      cloneData[key] = deepClone(item);
    });
  } else {
    cloneData = data;
  }

  return cloneData;
};

/***/ }),

/***/ "./node_modules/annar/esm/action-sheet/index.js":
/*!******************************************************!*\
  !*** ./node_modules/annar/esm/action-sheet/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popup */ "./node_modules/annar/esm/popup/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icon */ "./node_modules/annar/esm/icon/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");







var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_6__["getPrefixCls"])('action-sheet');

var ActionSheet = function ActionSheet(props) {
  var open = props.open,
      title = props.title,
      actions = props.actions,
      _props$cancelText = props.cancelText,
      cancelText = _props$cancelText === void 0 ? 'Cancel' : _props$cancelText,
      cover = props.cover,
      _props$maskClosable = props.maskClosable,
      maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable,
      onCancel = props.onCancel,
      onChange = props.onChange;

  var handleCancel = function handleCancel(e) {
    onCancel === null || onCancel === void 0 ? void 0 : onCancel(e);
  };

  var handleChange = function handleChange(action, grid, e) {
    onChange === null || onChange === void 0 ? void 0 : onChange(action, grid, e);
  };

  var handleCloseMask = function handleCloseMask() {
    maskClosable && (onCancel === null || onCancel === void 0 ? void 0 : onCancel());
  };

  var renderAction = function renderAction(action) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      key: action.value,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("".concat(prefixCls, "-action"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-action-destructive"), action.type === 'destructive')),
      onTap: function onTap(e) {
        return handleChange(action, undefined, e);
      }
    }, action.text);
  };

  var renderGrid = function renderGrid(action) {
    var _action$text;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      key: action.value,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("".concat(prefixCls, "-grid"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-action-destructive"), action.type === 'destructive'))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "".concat(prefixCls, "-grid-wrapper")
    }, (_action$text = action.text) === null || _action$text === void 0 ? void 0 : _action$text.map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
        key: item.value,
        className: "".concat(prefixCls, "-grid-item"),
        onTap: function onTap(e) {
          return handleChange(item, action, e);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: "".concat(prefixCls, "-grid-item-icon")
      }, item.icon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        type: item.icon,
        size: "48px",
        color: "rgba(0, 0, 0, 0.8)"
      }) : item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: "".concat(prefixCls, "-grid-item-name")
      }, item.name));
    })));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: prefixCls
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_popup__WEBPACK_IMPORTED_MODULE_4__["default"], {
    transparent: true,
    position: "bottom",
    open: open,
    onClose: handleCloseMask
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("".concat(prefixCls, "-container"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-cover"), cover))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "".concat(prefixCls, "-menu")
  }, title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("".concat(prefixCls, "-action"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-title"), true))
  }, title) : null, actions === null || actions === void 0 ? void 0 : actions.map(function (action) {
    return action.mode === 'grid' ? renderGrid(action) : renderAction(action);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "".concat(prefixCls, "-cancel"),
    onTap: handleCancel
  }, cancelText))));
};

/* harmony default export */ __webpack_exports__["default"] = (ActionSheet);

/***/ }),

/***/ "./node_modules/annar/esm/button/index.js":
/*!************************************************!*\
  !*** ./node_modules/annar/esm/button/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_util */ "./node_modules/annar/esm/_util/index.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loading */ "./node_modules/annar/esm/loading/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icon */ "./node_modules/annar/esm/icon/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");




function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}








var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_9__["getPrefixCls"])('btn');
var ButtonTypes = Object(_util__WEBPACK_IMPORTED_MODULE_6__["tuple"])('default', 'primary');

var AButton = function AButton(props) {
  var _classNames;

  var type = props.type,
      size = props.size,
      className = props.className,
      style = props.style,
      children = props.children,
      onTap = props.onTap,
      disabled = props.disabled,
      danger = props.danger,
      shape = props.shape,
      block = props.block,
      _float = props["float"],
      loading = props.loading,
      loadingText = props.loadingText,
      plain = props.plain,
      hairline = props.hairline,
      look = props.look,
      color = props.color,
      icon = props.icon,
      ghost = props.ghost,
      nativeType = props.nativeType,
      restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["type", "size", "className", "style", "children", "onTap", "disabled", "danger", "shape", "block", "float", "loading", "loadingText", "plain", "hairline", "look", "color", "icon", "ghost", "nativeType"]);

  var handleTap = function handleTap(e) {
    if (disabled) {
      return;
    }

    if (loading) {
      return;
    }

    onTap === null || onTap === void 0 ? void 0 : onTap(e);
  };

  var renderIcon = function renderIcon(childrenElement) {
    var iconSize = '32px';

    if (size === 'small') {
      iconSize = '28px';
    }

    if (size === 'large') {
      iconSize = '36px';
    }

    var iconColor = '#1890FF';

    if (type === 'primary') {
      iconColor = '#FDFFFD';
    }

    if (plain) {
      if (type === 'primary') {
        iconColor = '#1890FF';
      }

      if (color) {
        iconColor = color;
      }
    }

    if (typeof icon === 'string') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
        type: icon,
        color: iconColor,
        size: iconSize,
        style: {
          verticalAlign: '-0.05em',
          marginRight: childrenElement ? '6px' : undefined
        }
      });
    }

    if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["isValidElement"](icon)) {
      var _icon$props;

      return _objectSpread(_objectSpread({}, icon), {}, {
        props: _objectSpread(_objectSpread({}, icon === null || icon === void 0 ? void 0 : icon.props), {}, {
          style: _objectSpread({
            verticalAlign: '-0.05em',
            marginRight: childrenElement ? '6px' : undefined
          }, icon === null || icon === void 0 ? void 0 : (_icon$props = icon.props) === null || _icon$props === void 0 ? void 0 : _icon$props.style)
        })
      });
    }

    return null;
  };

  var classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()(prefixCls, className, (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-").concat(shape), shape), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-").concat(size), size), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-primary"), type === 'primary'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-ghost"), ghost), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-plain"), plain), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-hairline"), hairline), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-block"), block), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-float"), _float), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-float-").concat(_float), _float), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-danger-default"), danger), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-danger"), type === 'primary' && danger), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-look-").concat(look), look), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-loading"), loading), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-disabled"), disabled || loading), _classNames));
  var childrenElement = loading && loadingText ? loadingText : children;
  var iconElement = renderIcon(childrenElement);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["Button"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes,
    type: nativeType,
    disabled: disabled,
    onTap: handleTap,
    style: _objectSpread(_objectSpread({}, style), {}, {
      color: color,
      borderColor: color
    })
  }, restProps), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-loading-icon")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_loading__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "#FDFFFD",
    radius: "36px",
    style: {
      verticalAlign: '-0.3em'
    }
  })) : iconElement, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    className: "".concat(prefixCls, "-text")
  }, childrenElement), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    className: "".concat(prefixCls, "-mask")
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AButton);

/***/ }),

/***/ "./node_modules/annar/esm/card/index.js":
/*!**********************************************!*\
  !*** ./node_modules/annar/esm/card/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}





var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_4__["getPrefixCls"])('card');

var Card = function Card(props) {
  var _classNames3;

  var title = props.title,
      description = props.description,
      extra = props.extra,
      cover = props.cover,
      foot = props.foot,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'vertical' : _props$direction,
      shadow = props.shadow,
      style = props.style,
      contentStyle = props.contentStyle,
      children = props.children,
      onTap = props.onTap;

  var renderTitle = function renderTitle(isHead) {
    return title || description || extra ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("".concat(prefixCls, "-head"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-content-head"), !isHead))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], null, title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "".concat(prefixCls, "-title")
    }, title) : null, description ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "".concat(prefixCls, "-description")
    }, description) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "".concat(prefixCls, "-extra")
    }, extra)) : null;
  };

  var renderHead = function renderHead() {
    if (cover) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: "".concat(prefixCls, "-cover")
      }, cover);
    }

    return renderTitle(true);
  };

  var renderFoot = function renderFoot() {
    return foot ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("".concat(prefixCls, "-foot"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-foot-horizontal"), direction === 'horizontal'))
    }, foot) : null;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(prefixCls, (_classNames3 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(prefixCls, "-horizontal"), cover && direction === 'horizontal'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(prefixCls, "-shadow"), shadow), _classNames3)),
    style: style,
    onTap: onTap
  }, renderHead(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "".concat(prefixCls, "-content"),
    style: _objectSpread({}, contentStyle)
  }, cover ? renderTitle(false) : null, children, direction === 'horizontal' ? renderFoot() : null), direction !== 'horizontal' ? renderFoot() : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./node_modules/annar/esm/cascade-popup/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/annar/esm/cascade-popup/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _cascade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cascade */ "./node_modules/annar/esm/cascade/index.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loading */ "./node_modules/annar/esm/loading/index.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../popup */ "./node_modules/annar/esm/popup/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icon */ "./node_modules/annar/esm/icon/index.js");
/* harmony import */ var _form_value__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../form-value */ "./node_modules/annar/esm/form-value/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");










var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_9__["getPrefixCls"])('cascade-popup');

var CascadePopup = function CascadePopup(props) {
  var value = props.value,
      text = props.text,
      disabled = props.disabled,
      placeholder = props.placeholder,
      options = props.options,
      onChange = props.onChange;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var handleTap = function handleTap() {
    if (disabled) {
      return;
    }

    setShow(true);
  };

  var handleClose = function handleClose() {
    setShow(false);
  };

  var handleChange = function handleChange(v, s, isLast) {
    onChange(v, s);

    if (isLast) {
      setShow(false);
    }
  };

  if (!options || options.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
      className: prefixCls
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
      className: "".concat(prefixCls, "-loading")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_loading__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: prefixCls
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-formitem"),
    onTap: handleTap
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_form_value__WEBPACK_IMPORTED_MODULE_8__["default"], {
    placeholder: placeholder
  }, text || (value === null || value === void 0 ? void 0 : value.map(function (i) {
    return i.name;
  }).join(' ')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_popup__WEBPACK_IMPORTED_MODULE_6__["default"], {
    position: "bottom",
    open: show
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-container")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-container-header")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], null, "\u8BF7\u9009\u62E9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-container-header-close"),
    onTap: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "close",
    color: "#999"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_cascade__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    onChange: handleChange
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (CascadePopup);

/***/ }),

/***/ "./node_modules/annar/esm/cascade/index.js":
/*!*************************************************!*\
  !*** ./node_modules/annar/esm/cascade/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/annar/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _one__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../one */ "./node_modules/annar/esm/one/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../icon */ "./node_modules/annar/esm/icon/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");











var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_10__["getPrefixCls"])('cascade');

var getMatchLevelOptions = function getMatchLevelOptions(value, level, data) {
  var r = null;
  var currentLevel = level - 1;

  for (var i = 0; i < data.length; i += 1) {
    var item = data[i];

    if (currentLevel === 0) {
      if (value === item.value) {
        r = data;
      }
    }

    if (currentLevel > 0) {
      if (item.children) {
        r = getMatchLevelOptions(value, currentLevel, item.children);
      }
    }

    if (r) {
      return r;
    }
  }

  return r;
};

var getSelectedOptions = function getSelectedOptions(value, options) {
  if (!Array.isArray(value) || !Array.isArray(options)) {
    return [];
  }

  var level = 0;
  var selectedOptions = [];

  var recursion = function recursion(levelOptions) {
    for (var i = 0; i < levelOptions.length; i += 1) {
      var option = levelOptions[i];

      if (option.value === value[level]) {
        selectedOptions.push(option);
        level += 1;

        if (selectedOptions.length === value.length) {
          return selectedOptions;
        } else if (selectedOptions.length < value.length) {
          return recursion(option.children || []);
        }
      }
    }

    return selectedOptions;
  };

  return recursion(options);
};

var Cascade = function Cascade(props) {
  var _classNames;

  var name = props.name,
      _props$value = props.value,
      value = _props$value === void 0 ? [] : _props$value,
      _props$options = props.options,
      options = _props$options === void 0 ? [] : _props$options,
      changeOnSelect = props.changeOnSelect,
      _props$height = props.height,
      height = _props$height === void 0 ? '80vh' : _props$height,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      prompt = props.prompt,
      onChange = props.onChange;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(options),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
      levelOptions = _useState2[0],
      setLevelOptions = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState3, 2),
      scrollTop = _useState4[0],
      setScrollTop = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      _useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState5, 2),
      localValue = _useState6[0],
      setLocalValue = _useState6[1];

  var rechoose = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(false);
  var val = changeOnSelect ? value : localValue;
  var selectedOptions = getSelectedOptions(val, options); // useEffect(() => {
  //   if (options && options.length > 0) {
  //     setLevelOptions(options);
  //   }
  // }, [options]) // 无法使用此 useEffect，使用后会报错。

  var handleClick = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(i) {
      var nextValue, nextSelectedOption, lastIndex, lastSelectedOption, _isLast;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              nextValue = [];
              nextSelectedOption = [];
              lastIndex = val.length - 1;
              lastSelectedOption = selectedOptions[lastIndex] || {};

              if (val.length > 0 && (!lastSelectedOption.children || lastSelectedOption.children.length === 0)) {
                nextValue = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(val.slice(0, lastIndex)), [i.value]);
                nextSelectedOption = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(selectedOptions.slice(0, lastIndex)), [i]);
              } else if (val.length > 0 && rechoose.current) {
                nextValue = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(val.slice(0, lastIndex)), [i.value]);
                nextSelectedOption = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(selectedOptions.slice(0, lastIndex)), [i]);
              } else {
                nextValue = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(val), [i.value]);
                nextSelectedOption = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(selectedOptions), [i]);
              }

              if (changeOnSelect) {
                _isLast = false;

                if (!Array.isArray(i.children) || i.children.length === 0) {
                  _isLast = true;
                }

                onChange(nextValue, nextSelectedOption, _isLast);
              }

              if (!changeOnSelect) {
                if (!Array.isArray(i.children) || i.children.length === 0) {
                  setLocalValue(nextValue);
                  onChange(nextValue, nextSelectedOption, true);
                } else {
                  setLocalValue(nextValue);
                }
              }

              rechoose.current = false;
              setScrollTop(function (top) {
                return top === 0 ? 1 : 0;
              });

              if (Array.isArray(i.children) && i.children.length > 0) {
                setLevelOptions(i.children);
              }

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleClick(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleReChoose = function handleReChoose(item, index) {
    rechoose.current = true;

    if (changeOnSelect) {
      onChange(val.slice(0, index + 1));
    }

    if (!changeOnSelect) {
      setLocalValue(val.slice(0, index + 1));
    }

    setLevelOptions(getMatchLevelOptions(item.value, index + 1, options));
    setScrollTop(function (top) {
      return top === 0 ? 1 : 0;
    });
  };

  var h = val.length > 1 ? 90 * val.length + 40 - 30 : 130;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, prefixCls, true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, className, true), _classNames)),
    style: {
      height: height
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "".concat(prefixCls, "-selected")
  }, selectedOptions.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_6__["View"], {
      key: item.value,
      className: "".concat(prefixCls, "-step"),
      onTap: function onTap() {
        handleReChoose(item, index);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_6__["View"], {
      className: "".concat(prefixCls, "-step-line")
    }, index === val.length - 1 ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_6__["View"], {
      className: "".concat(prefixCls, "-step-line-active")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_6__["Text"], {
      className: "".concat(prefixCls, "-step-dot")
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_6__["View"], {
      className: "".concat(prefixCls, "-step-container")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_6__["View"], {
      className: "".concat(prefixCls, "-step-content")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_6__["View"], {
      className: "".concat(prefixCls, "-step-left")
    }, item.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_6__["View"], {
      className: "".concat(prefixCls, "-step-right")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_6__["View"], {
      className: "".concat(prefixCls, "-step-right-text")
    }, prompt === null || prompt === void 0 ? void 0 : prompt(index)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_6__["View"], {
      className: "".concat(prefixCls, "-step-right-arrow")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
      type: "right",
      size: "24px",
      color: "#999"
    }))))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_6__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_one__WEBPACK_IMPORTED_MODULE_7__["ScrollView"], {
    scrollY: true,
    className: "".concat(prefixCls, "-showed"),
    scrollTop: scrollTop,
    style: {
      height: "calc(".concat(height, " - ").concat(h + 80, "px)")
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "".concat(prefixCls, "-showed-title")
  }, "\u9009\u62E9".concat(name)), levelOptions === null || levelOptions === void 0 ? void 0 : levelOptions.map(function (i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_6__["View"], {
      key: i.value,
      className: "".concat(prefixCls, "-showed-category"),
      onTap: function onTap() {
        handleClick(i);
      }
    }, i.text);
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Cascade);

/***/ }),

/***/ "./node_modules/annar/esm/cell/index.js":
/*!**********************************************!*\
  !*** ./node_modules/annar/esm/cell/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icon */ "./node_modules/annar/esm/icon/index.js");
/* harmony import */ var _form_value__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../form-value */ "./node_modules/annar/esm/form-value/index.js");
/* harmony import */ var _picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../picker */ "./node_modules/annar/esm/picker/index.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../input */ "./node_modules/annar/esm/input/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");











var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_10__["getPrefixCls"])('cell');

var Cell = function Cell(props) {
  var label = props.label,
      style = props.style,
      labelStyle = props.labelStyle,
      valueStyle = props.valueStyle,
      children = props.children,
      description = props.description,
      verticality = props.verticality,
      icon = props.icon,
      _props$border = props.border,
      border = _props$border === void 0 ? true : _props$border,
      arrow = props.arrow,
      extra = props.extra,
      required = props.required,
      field = props.field,
      _props$defaultNullVal = props.defaultNullValue,
      defaultNullValue = _props$defaultNullVal === void 0 ? '' : _props$defaultNullVal,
      onTap = props.onTap;

  if (verticality) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: prefixCls,
      style: style,
      onTap: onTap
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: "".concat(prefixCls, "-verticality")
    }, label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: "".concat(prefixCls, "-verticality-label"),
      style: labelStyle
    }, required ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      className: "".concat(prefixCls, "-verticality-required")
    }, "*") : null, label) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: "".concat(prefixCls, "-verticality-value"),
      style: valueStyle
    }, children)));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: prefixCls,
    style: style,
    onTap: onTap
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-container")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-container-main")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("".concat(prefixCls, "-container-main-left"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, "".concat(prefixCls, "-container-main-left-input"), field))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-container-main-left-label")
  }, required ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    className: "".concat(prefixCls, "-container-main-left-label-required")
  }, "*") : null, icon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: icon,
    size: "32px",
    style: {
      marginRight: '10px'
    },
    color: "#333"
  }) : null, label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    className: "".concat(prefixCls, "-container-main-left-label-value"),
    style: labelStyle
  }, label) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-container-main-right")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-container-main-right-value"),
    style: valueStyle
  }, children || children === 0 ? children : defaultNullValue), extra ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-extra")
  }, extra) : null, arrow ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "right",
    style: {
      marginLeft: '10px'
    },
    color: "#666"
  }) : null)), description ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-container-description")
  }, description) : null), border ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-border")
  }) : null);
};

Cell.Picker = function (props) {
  var _props$align = props.align,
      align = _props$align === void 0 ? 'left' : _props$align,
      value = props.value,
      onChange = props.onChange,
      placeholder = props.placeholder,
      children = props.children,
      disabled = props.disabled,
      range = props.range,
      _props$rangeKey = props.rangeKey,
      rangeKey = _props$rangeKey === void 0 ? 'text' : _props$rangeKey;
  var selectedText = '';

  if (Array.isArray(value)) {
    var selected = value.map(function (i, columnIndex) {
      var _range$columnIndex;

      return range === null || range === void 0 ? void 0 : (_range$columnIndex = range[columnIndex]) === null || _range$columnIndex === void 0 ? void 0 : _range$columnIndex[i];
    });
    selectedText = selected.map(function (i) {
      return Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(i) === 'object' ? i[rangeKey] || '' : i;
    }).join(' ');
  } else {
    var _selected = range === null || range === void 0 ? void 0 : range[value];

    selectedText = Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(_selected) === 'object' ? _selected[rangeKey] || '' : _selected;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](Cell, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    labelStyle: {
      width: '180px'
    }
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_picker__WEBPACK_IMPORTED_MODULE_8__["default"], {
    range: range,
    rangeKey: rangeKey,
    disabled: disabled,
    value: value,
    onChange: onChange
  }, children !== null && children !== void 0 ? children : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_form_value__WEBPACK_IMPORTED_MODULE_7__["default"], {
    placeholder: placeholder,
    style: {
      textAlign: align,
      color: disabled ? '#999' : undefined
    }
  }, selectedText)));
};

var defaultInputWrapperStyle = {
  display: 'flex',
  padding: 0,
  border: 0
};
var defaultInputStyle = {
  height: '48px',
  lineHeight: '48px',
  minHeight: '48px'
};

Cell.Input = function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](Cell, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    field: true,
    labelStyle: {
      width: '180px'
    }
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_input__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    style: defaultInputWrapperStyle,
    inputStyle: defaultInputStyle
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Cell);

/***/ }),

/***/ "./node_modules/annar/esm/checkbox/index.js":
/*!**************************************************!*\
  !*** ./node_modules/annar/esm/checkbox/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon */ "./node_modules/annar/esm/icon/index.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}





var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_3__["getPrefixCls"])('checkbox');

var Checkbox = function Checkbox(props) {
  var children = props.children,
      checked = props.checked,
      value = props.value,
      extra = props.extra,
      style = props.style,
      onChange = props.onChange;

  var handleClick = function handleClick(e) {
    onChange === null || onChange === void 0 ? void 0 : onChange(!checked, e, value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: prefixCls,
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "".concat(prefixCls, "-container"),
    onTap: handleClick
  }, checked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "roundcheckfill",
    size: "48px",
    color: "#1890FF"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "round",
    size: "48px",
    color: "#999"
  }), children ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "".concat(prefixCls, "-container-label")
  }, children) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "".concat(prefixCls, "-extra")
  }, extra));
};

var getCheckboxs = function getCheckboxs(children) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var onChange = arguments.length > 2 ? arguments[2] : undefined;

  var onGroupChange = function onGroupChange(checked, e, v) {
    var newValue = (value === null || value === void 0 ? void 0 : value.includes(v)) ? value === null || value === void 0 ? void 0 : value.filter(function (i) {
      return i !== v;
    }) : value === null || value === void 0 ? void 0 : value.concat(v);
    onChange === null || onChange === void 0 ? void 0 : onChange(newValue, e);
  };

  var checkboxs = react__WEBPACK_IMPORTED_MODULE_1__["Children"].map(children, function (checkbox) {
    var p = (checkbox === null || checkbox === void 0 ? void 0 : checkbox.props) || {};
    var checked = p.checked;

    if ((p.value || p.value === 0) && (value === null || value === void 0 ? void 0 : value.includes(p.value))) {
      checked = !checked;
    }

    return _objectSpread(_objectSpread({}, checkbox), {}, {
      props: _objectSpread(_objectSpread({}, checkbox.props), {}, {
        checked: checked,
        onChange: onGroupChange
      })
    });
  });
  return checkboxs;
};

Checkbox.Group = function (props) {
  var _props$value = props.value,
      value = _props$value === void 0 ? [] : _props$value,
      children = props.children,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'row' : _props$direction,
      onChange = props.onChange;
  var checkboxs = getCheckboxs(children, value, onChange);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    style: {
      display: 'flex',
      flexDirection: direction
    }
  }, checkboxs);
};

/* harmony default export */ __webpack_exports__["default"] = (Checkbox); // 注意不要加 React.memo，会导致保错。

/***/ }),

/***/ "./node_modules/annar/esm/col/index.js":
/*!*********************************************!*\
  !*** ./node_modules/annar/esm/col/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}





var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_4__["getPrefixCls"])('col');

var Col = function Col(props) {
  var _classNames;

  var span = props.span,
      _props$offset = props.offset,
      offset = _props$offset === void 0 ? 0 : _props$offset,
      flex = props.flex,
      style = props.style,
      className = props.className,
      children = props.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(prefixCls, (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-").concat(span), span), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-offset-").concat(offset), offset), _classNames), className),
    style: _objectSpread({
      flex: flex
    }, style)
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Col);

/***/ }),

/***/ "./node_modules/annar/esm/common/index.js":
/*!************************************************!*\
  !*** ./node_modules/annar/esm/common/index.js ***!
  \************************************************/
/*! exports provided: annaPrefix, getPrefixCls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "annaPrefix", function() { return annaPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrefixCls", function() { return getPrefixCls; });
var annaPrefix = 'anna';
var getPrefixCls = function getPrefixCls(name) {
  return "".concat(annaPrefix, "-").concat(name);
};

/***/ }),

/***/ "./node_modules/annar/esm/date-picker/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/annar/esm/date-picker/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/construct */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/construct.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../picker */ "./node_modules/annar/esm/picker/index.js");





var startYear = new Date().getFullYear();

function getDays(year, month) {
  var days = [];
  month = String(parseInt(month, 10));
  var date = new Date(Number(year), Number(month), 0);
  var maxDay = date.getDate();

  for (var i = 1; i <= maxDay; i++) {
    var day = i < 10 ? '0' + i : String(i);
    days.push(day);
  }

  return days;
}

function getRange(format) {
  var date = new Date();
  var years = [];
  var months = [];
  var range = [];
  var currentYear = startYear;
  var currentMonth = date.getMonth();
  var days = getDays(String(currentYear), String(currentMonth + 1));

  var hours = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Array(24).keys()).map(function (i) {
    return i < 10 ? '0' + i : String(i);
  });

  var minutes = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Array(60).keys()).map(function (i) {
    return i < 10 ? '0' + i : String(i);
  });

  for (var i = currentYear; i <= currentYear + 10; i++) {
    years.push(i);
  }

  for (var _i = 1; _i <= 12; _i++) {
    var month = _i < 10 ? '0' + _i : String(_i);
    months.push(month);
  }

  if (format.includes('YYYY')) {
    range.push(years);
  }

  if (format.includes('MM')) {
    range.push(months);
  }

  if (format.includes('DD')) {
    range.push(days);
  }

  if (format.includes('HH')) {
    range.push(hours);
  }

  if (format.includes('mm')) {
    range.push(minutes);
  }

  return range;
}

function getInitValue(format) {
  return dayjs__WEBPACK_IMPORTED_MODULE_3___default()().format(format);
}

function getFormat(type, format) {
  var rangeFormat = 'YYYY-MM-DD';

  if (format && typeof format === 'string') {
    rangeFormat = format;
  } else {
    if (type === 'date') {
      rangeFormat = 'YYYY-MM-DD';
    }

    if (type === 'time') {
      rangeFormat = 'HH:mm';
    }

    if (type === 'datetime') {
      rangeFormat = 'YYYY-MM-DD HH:mm';
    }
  }

  return rangeFormat;
}

function transformDate2Index(date, format) {
  var o = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(date);
  var indexArray = [];

  if (format.includes('YYYY')) {
    indexArray.push(o.$y - startYear);
  }

  if (format.includes('MM')) {
    indexArray.push(o.$M);
  }

  if (format.includes('DD')) {
    indexArray.push(o.$D - 1);
  }

  if (format.includes('HH')) {
    var hourIndex = date.indexOf(':');
    var H = Number(date.slice(hourIndex - 2, hourIndex));
    indexArray.push(isNaN(o.$H) ? H : o.$H);
  }

  if (format.includes('mm')) {
    var minuteIndex = format.includes('HH') ? date.indexOf(':') + 3 : date.indexOf(':');
    var m = Number(date.slice(minuteIndex - 2, minuteIndex));
    indexArray.push(isNaN(o.$m) ? m : o.$m);
  }

  return indexArray;
}

var DatePicker = function DatePicker(props) {
  var _props$type = props.type,
      type = _props$type === void 0 ? 'date' : _props$type,
      format = props.format,
      _props$value = props.value,
      value = _props$value === void 0 ? getInitValue(getFormat(type, format)) : _props$value,
      disabled = props.disabled,
      children = props.children,
      onChange = props.onChange;
  var rangeFormat = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return getFormat(type, format);
  }, [type, format]);
  var range = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return getRange(rangeFormat);
  }, [rangeFormat]); // const [range, setRange] = useState(getRange(rangeFormat));

  var handleChange = function handleChange(v) {
    var dateArray = v === null || v === void 0 ? void 0 : v.map(function (i, columnIndex) {
      var _range$columnIndex;

      return range === null || range === void 0 ? void 0 : (_range$columnIndex = range[columnIndex]) === null || _range$columnIndex === void 0 ? void 0 : _range$columnIndex[i];
    });

    if (dateArray.length < 5 && rangeFormat.includes('mm')) {
      var filledLength = 5 - dateArray.length;
      var insert = dayjs__WEBPACK_IMPORTED_MODULE_3___default()().format('YYYY-MM-DD').split('-').slice(0, filledLength);
      dateArray.unshift.apply(dateArray, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(insert));
    }

    dateArray[1] = dateArray[1] - 1; // @ts-ignore

    var date = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(Object(_babel_runtime_helpers_esm_construct__WEBPACK_IMPORTED_MODULE_0__["default"])(Date, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(dateArray))).format(rangeFormat);
    onChange === null || onChange === void 0 ? void 0 : onChange(date);
  };

  var pickerValue = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return transformDate2Index(value, rangeFormat);
  }, [value, rangeFormat]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_picker__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: pickerValue,
    onChange: handleChange,
    range: range,
    disabled: disabled
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (DatePicker);

/***/ }),

/***/ "./node_modules/annar/esm/dropdown/index.js":
/*!**************************************************!*\
  !*** ./node_modules/annar/esm/dropdown/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");



var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_2__["getPrefixCls"])('dropdown');

var Dropdown = function Dropdown(props) {
  var _props$options = props.options,
      options = _props$options === void 0 ? [] : _props$options,
      value = props.value,
      _props$activeColor = props.activeColor,
      activeColor = _props$activeColor === void 0 ? '#1890FF' : _props$activeColor,
      onChange = props.onChange;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: prefixCls
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "".concat(prefixCls, "-content")
  }, options.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: "".concat(prefixCls, "-content-option"),
      key: item.value,
      onTap: function onTap() {
        return onChange === null || onChange === void 0 ? void 0 : onChange(item);
      },
      style: item.value === value ? {
        color: activeColor,
        fontWeight: 500
      } : undefined
    }, item.text);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ }),

/***/ "./node_modules/annar/esm/filter/filter.js":
/*!*************************************************!*\
  !*** ./node_modules/annar/esm/filter/filter.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mask */ "./node_modules/annar/esm/mask/index.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item */ "./node_modules/annar/esm/filter/item.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");




function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}






var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_7__["getPrefixCls"])('filter');

var InternalFilter = function InternalFilter(props) {
  var filterRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])([]);
  var style = props.style,
      zIndex = props.zIndex,
      children = props.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      showMask = _useState2[0],
      setShowMask = _useState2[1];

  var hanldeShowMask = function hanldeShowMask(value) {
    setShowMask(value);
  };

  var handleTapItem = function handleTapItem(value, index, tapCb) {
    filterRef.current.forEach(function (item, cindex) {
      if (index !== cindex) {
        item.current.close();
      }
    });

    if (value) {
      setShowMask(true);
    } else {
      setShowMask(false);
    }

    tapCb === null || tapCb === void 0 ? void 0 : tapCb();
  };

  var hanldeTapMask = function hanldeTapMask() {
    filterRef.current.forEach(function (item) {
      item.current.close();
    });
    setShowMask(false);
  };

  var filterItems = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.map(children, function (filterItem, index) {
    var itemRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
    filterRef.current[index] = itemRef;

    if (filterItem.ref) {
      filterRef.current[index] = filterItem.ref;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_item__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, filterItem.props, {
      ref: filterRef.current[index],
      onTap: function onTap(v) {
        var _filterItem$props;

        return handleTapItem(v, index, (_filterItem$props = filterItem.props) === null || _filterItem$props === void 0 ? void 0 : _filterItem$props.onTap);
      },
      onShowMask: hanldeShowMask,
      id: index
    }));
  });
  var isAddZIndex = zIndex || zIndex === 0;
  var filterStyle = style;

  if (isAddZIndex) {
    filterStyle = _objectSpread(_objectSpread({}, style), {}, {
      zIndex: zIndex
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: prefixCls,
    style: filterStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-content"),
    style: {
      height: showMask ? '100%' : '100px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-items")
  }, filterItems)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_mask__WEBPACK_IMPORTED_MODULE_5__["default"], {
    show: showMask,
    onTap: hanldeTapMask,
    style: {
      top: 'unset',
      bottom: 'unset',
      height: '100%'
    },
    zIndex: 0
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (InternalFilter); // {/* mask必须放到items的后面,否则会导致动画transition失效 */}

/***/ }),

/***/ "./node_modules/annar/esm/filter/index.js":
/*!************************************************!*\
  !*** ./node_modules/annar/esm/filter/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ "./node_modules/annar/esm/filter/filter.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ "./node_modules/annar/esm/filter/item.js");


var Filter = _filter__WEBPACK_IMPORTED_MODULE_0__["default"];
Filter.Item = _item__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Filter);

/***/ }),

/***/ "./node_modules/annar/esm/filter/item.js":
/*!***********************************************!*\
  !*** ./node_modules/annar/esm/filter/item.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../one */ "./node_modules/annar/esm/one/index.js");
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dropdown */ "./node_modules/annar/esm/dropdown/index.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../popup */ "./node_modules/annar/esm/popup/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");









var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_8__["getPrefixCls"])('filter-item');

var Item = function Item(props, ref) {
  var _classNames, _options$find;

  var title = props.title,
      onTap = props.onTap,
      children = props.children,
      onShowMask = props.onShowMask,
      value = props.value,
      _props$options = props.options,
      options = _props$options === void 0 ? [] : _props$options,
      onChange = props.onChange,
      activeColor = props.activeColor,
      disabled = props.disabled;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"])(ref, function () {
    return {
      toggle: function toggle() {
        setOpen(function (state) {
          if (state) {
            setTimeout(function () {
              onShowMask === null || onShowMask === void 0 ? void 0 : onShowMask(false);
            });
          } else {
            setTimeout(function () {
              onShowMask === null || onShowMask === void 0 ? void 0 : onShowMask(true);
            });
          }

          return !state;
        });
      },
      open: function open() {
        setOpen(true);
      },
      close: function close() {
        setOpen(false);
      }
    };
  }, []);

  var handleTap = function handleTap() {
    if (disabled) {
      return;
    }

    setOpen(function (state) {
      return !state;
    });
    onTap === null || onTap === void 0 ? void 0 : onTap(!open);
  };

  var handleChange = function handleChange(e) {
    onChange === null || onChange === void 0 ? void 0 : onChange(e);
    setOpen(false);
    onShowMask === null || onShowMask === void 0 ? void 0 : onShowMask(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: prefixCls
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    style: {
      backgroundColor: '#FDFFFD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-label"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-label-disabled"), disabled), _classNames)),
    onTap: handleTap
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "".concat(prefixCls, "-label-text")
  }, (options === null || options === void 0 ? void 0 : (_options$find = options.find(function (option) {
    return option.value === value;
  })) === null || _options$find === void 0 ? void 0 : _options$find.text) || title), open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "".concat(prefixCls, "-label-chevronUp")
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "".concat(prefixCls, "-label-chevronDown")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_popup__WEBPACK_IMPORTED_MODULE_7__["default"], {
    position: "bottom",
    square: true,
    curve: "ease",
    mask: false,
    open: open,
    style: {
      position: 'absolute',
      zIndex: -1,
      transform: open ? 'translate3d(0, 100%, 0)' : 'translate3d(0, 0, 0)'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_one__WEBPACK_IMPORTED_MODULE_5__["ScrollView"], {
    scrollY: true,
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-value"), true))
  }, children ? children : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_dropdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: value,
    options: options,
    onChange: handleChange,
    activeColor: activeColor
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(Item));

/***/ }),

/***/ "./node_modules/annar/esm/form-value/index.js":
/*!****************************************************!*\
  !*** ./node_modules/annar/esm/form-value/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");



var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_2__["getPrefixCls"])('form-value');

var Value = function Value(props) {
  var placeholder = props.placeholder,
      style = props.style,
      children = props.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: prefixCls,
    style: style
  }, children || children === 0 ? children : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "".concat(prefixCls, "-placeholder")
  }, placeholder));
};

/* harmony default export */ __webpack_exports__["default"] = (Value);

/***/ }),

/***/ "./node_modules/annar/esm/form/context.js":
/*!************************************************!*\
  !*** ./node_modules/annar/esm/form/context.js ***!
  \************************************************/
/*! exports provided: FormContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormContext", function() { return FormContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var FormContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({
  values: {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange: function onChange(event, name) {
    /* */
  }
});

/***/ }),

/***/ "./node_modules/annar/esm/form/form.js":
/*!*********************************************!*\
  !*** ./node_modules/annar/esm/form/form.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ "./node_modules/annar/esm/form/context.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}






var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_6__["getPrefixCls"])('form');

var getItemRulesObject = function getItemRulesObject(children) {
  var rules = react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.toArray(children).map(function (i) {
    var _i$props, _i$props2;

    return {
      name: i === null || i === void 0 ? void 0 : (_i$props = i.props) === null || _i$props === void 0 ? void 0 : _i$props.name,
      rules: i === null || i === void 0 ? void 0 : (_i$props2 = i.props) === null || _i$props2 === void 0 ? void 0 : _i$props2.rules
    };
  });
  var itemRulesObj = {};
  var nullValuesObj = {};
  rules.forEach(function (i) {
    if (i.name && i.rules && Array.isArray(i.rules)) {
      itemRulesObj[i.name] = i.rules;
      nullValuesObj[i.name] = undefined;
    }
  });
  return [itemRulesObj, nullValuesObj];
};

var AnnarForm = function AnnarForm(props) {
  var initialValues = props.initialValues,
      children = props.children,
      onFinish = props.onFinish,
      onFinishFailed = props.onFinishFailed,
      onReset = props.onReset;

  var _getItemRulesObject = getItemRulesObject(children),
      _getItemRulesObject2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_getItemRulesObject, 2),
      itemRulesObj = _getItemRulesObject2[0],
      nullValuesObj = _getItemRulesObject2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(Object.assign({}, nullValuesObj, initialValues)),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(nullValuesObj),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      errors = _useState4[0],
      setErrors = _useState4[1];

  var handleSubmit = function handleSubmit(e) {
    var _e$preventDefault, _e$stopPropagation;

    e === null || e === void 0 ? void 0 : (_e$preventDefault = e.preventDefault) === null || _e$preventDefault === void 0 ? void 0 : _e$preventDefault.call(e);
    e === null || e === void 0 ? void 0 : (_e$stopPropagation = e.stopPropagation) === null || _e$stopPropagation === void 0 ? void 0 : _e$stopPropagation.call(e);
    var errorFlag = false;
    var errorState = {};
    var errorFields = {};
    var names = Object.keys(values);

    for (var i = 0; i < names.length; i += 1) {
      var _name = names[i];
      var value = values[_name];
      var rules = itemRulesObj[_name];

      if (rules) {
        for (var j = 0; j < rules.length; j += 1) {
          var rule = rules[j] || {};
          var required = rule.required,
              pattern = rule.pattern,
              validator = rule.validator,
              _rule$message = rule.message,
              message = _rule$message === void 0 ? "".concat(_name, " is required") : _rule$message;

          if (required) {
            if (!value && value !== 0) {
              errorState[_name] = {
                error: true,
                message: message
              };
              errorFields[_name] = value;
              errorFlag = true;
              break;
            }
          }

          if (pattern) {
            var isPass = pattern.test(value);

            if (!isPass) {
              errorState[_name] = {
                error: true,
                message: message
              };
              errorFields[_name] = value;
              errorFlag = true;
              break;
            }
          }

          if (validator && typeof validator === 'function') {
            var result = validator(value);

            if (!result) {
              errorState[_name] = {
                error: true,
                message: message
              };
              errorFields[_name] = value;
              errorFlag = true;
              break;
            }
          }
        }
      }
    }

    if (errorFlag) {
      setErrors(_objectSpread(_objectSpread({}, nullValuesObj), errorState));
      onFinishFailed === null || onFinishFailed === void 0 ? void 0 : onFinishFailed(values, errorFields);
      return;
    }

    if (!errorFlag) {
      setErrors(nullValuesObj);
    }

    onFinish === null || onFinish === void 0 ? void 0 : onFinish(values);
  };

  var handleChange = function handleChange(e, name) {
    var t = e.target;
    setValues(function (state) {
      return _objectSpread(_objectSpread({}, state), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, t.value));
    });
  };

  var handleChangeError = function handleChangeError(v, name) {
    setErrors(function (state) {
      return _objectSpread(_objectSpread({}, state), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, v));
    });
  };

  var providerValue = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return {
      values: values,
      errors: errors,
      onChange: handleChange,
      onChangeError: handleChangeError
    };
  }, [values, errors]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_5__["FormContext"].Provider, {
    value: providerValue
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(prefixCls),
    onSubmit: handleSubmit,
    onReset: onReset
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (AnnarForm);

/***/ }),

/***/ "./node_modules/annar/esm/form/index.js":
/*!**********************************************!*\
  !*** ./node_modules/annar/esm/form/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./node_modules/annar/esm/form/form.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ "./node_modules/annar/esm/form/item.js");


var Form = _form__WEBPACK_IMPORTED_MODULE_0__["default"];
Form.Item = _item__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./node_modules/annar/esm/form/item.js":
/*!*********************************************!*\
  !*** ./node_modules/annar/esm/form/item.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ "./node_modules/annar/esm/form/context.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}






var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_6__["getPrefixCls"])('form-item');

var FormItem = function FormItem(props) {
  var name = props.name,
      rules = props.rules,
      style = props.style,
      children = props.children;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_5__["FormContext"]),
      values = _useContext.values,
      errors = _useContext.errors,
      onChange = _useContext.onChange,
      onChangeError = _useContext.onChangeError;

  var handleChange = function handleChange(e) {
    var error = name ? errors[name] || {} : {};

    if (Array.isArray(rules) && Object.keys(error).length > 0) {
      onChangeError({}, name);
    }

    onChange === null || onChange === void 0 ? void 0 : onChange(e, name);
  };

  var handleBlur = function handleBlur(e) {
    var value = e.target.value;

    if (Array.isArray(rules)) {
      var errorFlag = false;
      var errorObj = {};

      for (var i = 0; i < rules.length; i += 1) {
        var rule = rules[i] || {};
        var required = rule.required,
            pattern = rule.pattern,
            validator = rule.validator,
            _rule$message = rule.message,
            message = _rule$message === void 0 ? "".concat(name, " is required") : _rule$message;

        if (required) {
          if (!value && value !== 0) {
            errorObj = {
              error: true,
              message: message
            };
            errorFlag = true;
            break;
          }
        }

        if (pattern) {
          var isPass = pattern.test(value);

          if (!isPass) {
            errorObj = {
              error: true,
              message: message
            };
            errorFlag = true;
            break;
          }
        }

        if (validator && typeof validator === 'function') {
          var result = validator(value);

          if (!result) {
            errorObj = {
              error: true,
              message: message
            };
            errorFlag = true;
            break;
          }
        }
      }

      if (errorFlag) {
        onChangeError(errorObj, name);
      }

      if (!errorFlag) {
        onChangeError({}, name);
      }
    }
  };

  var childrenNode = children;

  if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(children) === 'object' && children !== null) {
    var _ref = children,
        childrenProps = _ref.props;

    if (childrenProps && name) {
      childrenNode = _objectSpread(_objectSpread({}, children), {}, {
        props: _objectSpread(_objectSpread({}, childrenProps), {}, {
          value: values[name],
          onChange: handleChange,
          onBlur: handleBlur
        })
      });
    }
  }

  var renderErrorNode = function renderErrorNode() {
    var height = '0';
    var errorMessage = null;

    if (name && errors[name] && errors[name].error) {
      var _errors$name;

      height = '60px';
      errorMessage = errors === null || errors === void 0 ? void 0 : (_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.message;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
      className: "".concat(prefixCls, "-explain"),
      style: {
        height: height
      }
    }, errorMessage);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(prefixCls),
    style: style
  }, childrenNode, renderErrorNode());
};

/* harmony default export */ __webpack_exports__["default"] = (FormItem);

/***/ }),

/***/ "./node_modules/annar/esm/grid/index.js":
/*!**********************************************!*\
  !*** ./node_modules/annar/esm/grid/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../row */ "./node_modules/annar/esm/row/index.js");
/* harmony import */ var _col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../col */ "./node_modules/annar/esm/col/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_util */ "./node_modules/annar/esm/_util/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");








var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_7__["getPrefixCls"])('grid');

var getColIndex = function getColIndex(two, rindex, cindex) {
  var list = two.slice(0, rindex + 1);
  list[rindex] = list[rindex].slice(0, cindex + 1);
  var flatedList = Object(_util__WEBPACK_IMPORTED_MODULE_6__["flat"])(list);
  return flatedList.length;
};

var Grid = function Grid(props) {
  var _props$data = props.data,
      data = _props$data === void 0 ? [] : _props$data,
      _props$columns = props.columns,
      columns = _props$columns === void 0 ? 4 : _props$columns,
      _props$gutter = props.gutter,
      gutter = _props$gutter === void 0 ? 0 : _props$gutter,
      span = props.span,
      border = props.border,
      children = props.children;

  var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return Object(_util__WEBPACK_IMPORTED_MODULE_6__["twoDimensional"])(data, columns, span, 24);
  }, [data === null || data === void 0 ? void 0 : data.length]),
      _useMemo2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMemo, 2),
      two = _useMemo2[0],
      spanTwo = _useMemo2[1];

  var gutterArray = gutter;

  if (!Array.isArray(gutter)) {
    gutterArray = [gutter];
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(prefixCls)
  }, two === null || two === void 0 ? void 0 : two.map(function (row, rindex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_row__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: rindex,
      gutter: gutterArray[0],
      className: border && "".concat(prefixCls, "-row-border"),
      style: {
        marginBottom: rindex !== two.length - 1 ? "".concat(gutterArray[1], "px") : undefined,
        borderBottom: two.length - 1 !== rindex ? border : undefined
      }
    }, row === null || row === void 0 ? void 0 : row.map(function (col, cindex) {
      var _spanTwo$rindex;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_col__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: cindex,
        span: spanTwo === null || spanTwo === void 0 ? void 0 : (_spanTwo$rindex = spanTwo[rindex]) === null || _spanTwo$rindex === void 0 ? void 0 : _spanTwo$rindex[cindex],
        className: border && "".concat(prefixCls, "-col-border"),
        style: {
          borderRight: row.length - 1 !== cindex ? border : undefined
        }
      }, typeof children === 'function' ? children === null || children === void 0 ? void 0 : children(col, getColIndex(spanTwo, rindex, cindex), cindex, rindex) : children);
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ }),

/***/ "./node_modules/annar/esm/icon/index.js":
/*!**********************************************!*\
  !*** ./node_modules/annar/esm/icon/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}





var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_4__["getPrefixCls"])('icon');

var Icon = function Icon(props) {
  var _classNames;

  var type = props.type,
      color = props.color,
      size = props.size,
      style = props.style;
  var fontSize = '28px';

  if (size) {
    if (typeof size === 'string') {
      fontSize = size;
    }

    if (typeof size === 'number') {
      fontSize = size + 'px';
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, prefixCls, true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "iconfont", true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "icon-".concat(type), true), _classNames)),
    style: _objectSpread(_objectSpread({}, style), {}, {
      color: color,
      fontSize: fontSize
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./node_modules/annar/esm/image-upload/index.js":
/*!******************************************************!*\
  !*** ./node_modules/annar/esm/image-upload/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/annar/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../one */ "./node_modules/annar/esm/one/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_util */ "./node_modules/annar/esm/_util/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icon */ "./node_modules/annar/esm/icon/index.js");









var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_7__["getPrefixCls"])('image-upload');

var ImageUpload = function ImageUpload(props) {
  var _props$files = props.files,
      files = _props$files === void 0 ? [] : _props$files,
      onChange = props.onChange,
      multiple = props.multiple,
      multipleCount = props.multipleCount,
      sizeType = props.sizeType,
      sourceType = props.sourceType,
      _props$deletable = props.deletable,
      deletable = _props$deletable === void 0 ? true : _props$deletable,
      disabled = props.disabled,
      maxCount = props.maxCount,
      children = props.children;

  var handleClickImage = function handleClickImage(index) {
    var urls = files;
    var current = index;

    if (typeof files[index] !== 'string') {
      urls = files.map(function (i) {
        return i.url;
      });
    }

    Object(_one__WEBPACK_IMPORTED_MODULE_5__["previewImage"])({
      urls: urls,
      current: current,
      // @ts-ignore
      enablesavephoto: true,
      enableShowPhotoDownload: true
    });
  };

  var handleAdd = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var params, _yield$to, _yield$to2, errc, resc, targetFiles, newFiles;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!disabled) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              params = {};

              if (multiple) {
                params.multiple = true;
                params.count = 99;
              }

              if (multipleCount) {
                params.count = multipleCount;
              }

              if (sizeType) {
                params.sizeType = sizeType;
              }

              if (sourceType) {
                params.sourceType = sourceType;
              }

              _context.next = 9;
              return Object(_util__WEBPACK_IMPORTED_MODULE_6__["to"])(Object(_util__WEBPACK_IMPORTED_MODULE_6__["sync"])(_one__WEBPACK_IMPORTED_MODULE_5__["chooseImage"], params));

            case 9:
              _yield$to = _context.sent;
              _yield$to2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_yield$to, 2);
              errc = _yield$to2[0];
              resc = _yield$to2[1];

              if (!errc) {
                _context.next = 15;
                break;
              }

              return _context.abrupt("return");

            case 15:
              targetFiles = resc.filePaths ? resc.filePaths.map(function (i) {
                return i;
              }) : resc.tempFilePaths.map(function (i) {
                return i;
              });
              newFiles = files.concat(targetFiles);
              onChange === null || onChange === void 0 ? void 0 : onChange(newFiles);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleAdd() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleDelete = function handleDelete(e, index) {
    e.stopPropagation();
    var newValue = Object(_util__WEBPACK_IMPORTED_MODULE_6__["deepClone"])(files);
    newValue.splice(index, 1);
    newValue = newValue.map(function (item, index) {
      var newItem = item;

      if (typeof newItem === 'string') {
        return newItem;
      }

      newItem.key = String(index);
      return newItem;
    });
    onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: prefixCls
  }, files.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      key: item.key || index,
      className: "".concat(prefixCls, "-item"),
      onTap: function onTap() {
        return handleClickImage(index);
      }
    }, deletable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: "".concat(prefixCls, "-item-delete")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      style: {
        height: '24px'
      },
      onTap: function onTap(e) {
        handleDelete(e, index);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
      type: "close",
      size: "24px",
      color: "#FDFFFD",
      style: {
        width: '24px',
        height: '24px',
        verticalAlign: 'text-top'
      }
    }))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["Image"], {
      mode: "widthFix",
      src: item.url || item
    }));
  }), !maxCount || files.length < maxCount ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    onTap: handleAdd
  }, children !== null && children !== void 0 ? children : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-add")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "add",
    size: "48px",
    color: "#BABEC6"
  }))) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (ImageUpload);

/***/ }),

/***/ "./node_modules/annar/esm/images/index.js":
/*!************************************************!*\
  !*** ./node_modules/annar/esm/images/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../one */ "./node_modules/annar/esm/one/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");




var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_3__["getPrefixCls"])('images');

var Images = function Images(props) {
  var _props$data = props.data,
      data = _props$data === void 0 ? [] : _props$data;

  var handleClickImage = function handleClickImage(index) {
    var urls = data;
    var current = index;

    if (typeof data[index] !== 'string') {
      urls = data.map(function (i) {
        return i.url;
      });
    }

    Object(_one__WEBPACK_IMPORTED_MODULE_2__["previewImage"])({
      urls: urls,
      current: current,
      // @ts-ignore
      enablesavephoto: true,
      enableShowPhotoDownload: true
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: prefixCls
  }, data && data.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
      key: item.key || index,
      className: "".concat(prefixCls, "-item"),
      onTap: function onTap() {
        return handleClickImage(index);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      mode: "widthFix",
      src: item.url || item
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Images);

/***/ }),

/***/ "./node_modules/annar/esm/index.js":
/*!*****************************************!*\
  !*** ./node_modules/annar/esm/index.js ***!
  \*****************************************/
/*! exports provided: Button, Icon, Popup, Row, Col, Grid, Space, Tabs, Steps, Dropdown, Selector, Form, Input, Picker, PickerView, PickerViewColumn, Radio, Checkbox, Switch, DatePicker, ImageUpload, Cascade, Rate, Textarea, SearchBar, FormValue, Stepper, Card, Cell, Swiper, Images, Progress, ProgressBar, Tag, ActionSheet, Filter, Loading, Mask, Result, Spin, Skeleton, Ling, SwipeAction, SelectorPopup, CascadePopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./node_modules/annar/esm/button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./node_modules/annar/esm/icon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _icon__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup */ "./node_modules/annar/esm/popup/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return _popup__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./row */ "./node_modules/annar/esm/row/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return _row__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./col */ "./node_modules/annar/esm/col/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return _col__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid */ "./node_modules/annar/esm/grid/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return _grid__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _space__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./space */ "./node_modules/annar/esm/space/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Space", function() { return _space__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs */ "./node_modules/annar/esm/tabs/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return _tabs__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _steps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./steps */ "./node_modules/annar/esm/steps/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Steps", function() { return _steps__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dropdown */ "./node_modules/annar/esm/dropdown/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return _dropdown__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./selector */ "./node_modules/annar/esm/selector/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Selector", function() { return _selector__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form */ "./node_modules/annar/esm/form/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _form__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./input */ "./node_modules/annar/esm/input/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _input__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _picker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./picker */ "./node_modules/annar/esm/picker/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _picker__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _picker_view__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./picker-view */ "./node_modules/annar/esm/picker-view/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerView", function() { return _picker_view__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _picker_view_column__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./picker-view-column */ "./node_modules/annar/esm/picker-view-column/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerViewColumn", function() { return _picker_view_column__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./radio */ "./node_modules/annar/esm/radio/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _radio__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./checkbox */ "./node_modules/annar/esm/checkbox/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _checkbox__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./switch */ "./node_modules/annar/esm/switch/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _switch__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _date_picker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./date-picker */ "./node_modules/annar/esm/date-picker/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePicker", function() { return _date_picker__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _image_upload__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./image-upload */ "./node_modules/annar/esm/image-upload/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageUpload", function() { return _image_upload__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _cascade__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./cascade */ "./node_modules/annar/esm/cascade/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cascade", function() { return _cascade__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _rate__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./rate */ "./node_modules/annar/esm/rate/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rate", function() { return _rate__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./textarea */ "./node_modules/annar/esm/textarea/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _textarea__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _search_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./search-bar */ "./node_modules/annar/esm/search-bar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchBar", function() { return _search_bar__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _form_value__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./form-value */ "./node_modules/annar/esm/form-value/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormValue", function() { return _form_value__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _stepper__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./stepper */ "./node_modules/annar/esm/stepper/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stepper", function() { return _stepper__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./card */ "./node_modules/annar/esm/card/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _card__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./cell */ "./node_modules/annar/esm/cell/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return _cell__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./swiper */ "./node_modules/annar/esm/swiper/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return _swiper__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./images */ "./node_modules/annar/esm/images/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Images", function() { return _images__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _progress__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./progress */ "./node_modules/annar/esm/progress/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return _progress__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _progress_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./progress-bar */ "./node_modules/annar/esm/progress-bar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return _progress_bar__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./tag */ "./node_modules/annar/esm/tag/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return _tag__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _action_sheet__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./action-sheet */ "./node_modules/annar/esm/action-sheet/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionSheet", function() { return _action_sheet__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./filter */ "./node_modules/annar/esm/filter/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return _filter__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./loading */ "./node_modules/annar/esm/loading/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return _loading__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _mask__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./mask */ "./node_modules/annar/esm/mask/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mask", function() { return _mask__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _result__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./result */ "./node_modules/annar/esm/result/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return _result__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _spin__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./spin */ "./node_modules/annar/esm/spin/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spin", function() { return _spin__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _skeleton__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./skeleton */ "./node_modules/annar/esm/skeleton/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Skeleton", function() { return _skeleton__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _ling__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./ling */ "./node_modules/annar/esm/ling/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ling", function() { return _ling__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _swipe_action__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./swipe-action */ "./node_modules/annar/esm/swipe-action/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwipeAction", function() { return _swipe_action__WEBPACK_IMPORTED_MODULE_42__["default"]; });

/* harmony import */ var _selector_popup__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./selector-popup */ "./node_modules/annar/esm/selector-popup/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectorPopup", function() { return _selector_popup__WEBPACK_IMPORTED_MODULE_43__["default"]; });

/* harmony import */ var _cascade_popup__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./cascade-popup */ "./node_modules/annar/esm/cascade-popup/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CascadePopup", function() { return _cascade_popup__WEBPACK_IMPORTED_MODULE_44__["default"]; });

// 通用


 // 布局




 // 导航




 // 数据录入
















 // 数据展示







 // 反馈








 // 手势

 // 二次封装




/***/ }),

/***/ "./node_modules/annar/esm/input/index.js":
/*!***********************************************!*\
  !*** ./node_modules/annar/esm/input/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");





var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_4__["getPrefixCls"])('input');

var AnnarInput = function AnnarInput(props) {
  var name = props.name,
      type = props.type,
      size = props.size,
      value = props.value,
      prefix = props.prefix,
      suffix = props.suffix,
      className = props.className,
      style = props.style,
      inputStyle = props.inputStyle,
      align = props.align,
      placeholder = props.placeholder,
      disabled = props.disabled,
      maxLength = props.maxLength,
      onChange = props.onChange,
      onFocus = props.onFocus,
      onBlur = props.onBlur;

  var _type = type === 'password' ? 'text' : type;

  var inputElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(prefixCls, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-align-").concat(align), align)),
    style: inputStyle,
    name: name // @ts-ignore
    ,
    type: _type,
    password: type === 'password',
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    maxLength: maxLength,
    onInput: onChange,
    onFocus: onFocus,
    onBlur: onBlur
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("".concat(prefixCls, "-wrapper"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-wrapper-").concat(size), size), className),
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "".concat(prefixCls, "-prefix")
  }, prefix), inputElement, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "".concat(prefixCls, "-suffix")
  }, suffix));
};

/* harmony default export */ __webpack_exports__["default"] = (AnnarInput);

/***/ }),

/***/ "./node_modules/annar/esm/ling/index.js":
/*!**********************************************!*\
  !*** ./node_modules/annar/esm/ling/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icon */ "./node_modules/annar/esm/icon/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");




function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}






var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_7__["getPrefixCls"])('ling');

var Ling = function Ling(props, ref) {
  var _classNames;

  var _props$position = props.position,
      position = _props$position === void 0 ? 'top' : _props$position;
  var durationRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(2000);
  var onCloseRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      config = _useState4[0],
      setConfig = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (show && durationRef.current !== 0) {
      setTimeout(function () {
        setShow(false);
      }, durationRef.current);
    }

    if (!show) {
      var _onCloseRef$current;

      (_onCloseRef$current = onCloseRef.current) === null || _onCloseRef$current === void 0 ? void 0 : _onCloseRef$current.call(onCloseRef);
    }
  }, [show, durationRef.current, onCloseRef.current]);

  var handleShow = function handleShow(params, duration, onClose) {
    if (typeof params === 'string') {
      setConfig({
        title: params,
        titleColor: '#333'
      });
    }

    if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(params) === 'object' && params !== null) {
      setConfig(params);
    }

    if (duration || duration === 0) {
      durationRef.current = duration;
    } else {
      durationRef.current = 2000;
    }

    if (onClose && typeof onClose === 'function') {
      onCloseRef.current = onClose;
    }

    setShow(true);
  };

  var handleShowStatus = function handleShowStatus(commonConfig, params, duration, onClose) {
    var config = commonConfig;

    if (typeof params === 'string') {
      config = _objectSpread({
        title: params,
        titleColor: '#333'
      }, commonConfig);
    }

    if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(params) === 'object' && params !== null) {
      config = _objectSpread(_objectSpread({}, params), commonConfig);
    }

    handleShow(config, duration, onClose);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useImperativeHandle"])(ref, function () {
    return {
      show: handleShow,
      info: function info(params, duration, onClose) {
        var infoConfig = {
          icon: 'infofill',
          iconColor: '#1890ff'
        };
        handleShowStatus(infoConfig, params, duration, onClose);
      },
      success: function success(params, duration, onClose) {
        var successConfig = {
          icon: 'roundcheckfill',
          iconColor: '#52c41a'
        };
        handleShowStatus(successConfig, params, duration, onClose);
      },
      warning: function warning(params, duration, onClose) {
        var warningConfig = {
          icon: 'warnfill',
          iconColor: '#faad14'
        };
        handleShowStatus(warningConfig, params, duration, onClose);
      },
      error: function error(params, duration, onClose) {
        var errorConfig = {
          icon: 'roundclosefill',
          iconColor: '#f5222d'
        };
        handleShowStatus(errorConfig, params, duration, onClose);
      }
    };
  });
  var classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, prefixCls, true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-show"), show), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-").concat(position), position), _classNames));
  var iconNode = typeof (config === null || config === void 0 ? void 0 : config.icon) === 'string' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: config === null || config === void 0 ? void 0 : config.icon,
    color: config === null || config === void 0 ? void 0 : config.iconColor,
    size: "52px"
  }) : config === null || config === void 0 ? void 0 : config.icon;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: classes
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-container")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-title"),
    style: {
      color: config === null || config === void 0 ? void 0 : config.titleColor
    }
  }, config === null || config === void 0 ? void 0 : config.title), (config === null || config === void 0 ? void 0 : config.content) || (config === null || config === void 0 ? void 0 : config.content) === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-content")
  }, config === null || config === void 0 ? void 0 : config.content) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-icon")
  }, iconNode));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(Ling));

/***/ }),

/***/ "./node_modules/annar/esm/loading/index.js":
/*!*************************************************!*\
  !*** ./node_modules/annar/esm/loading/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}




var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_3__["getPrefixCls"])('loading');

var Loading = function Loading(props) {
  var style = props.style,
      type = props.type,
      _props$color = props.color,
      color = _props$color === void 0 ? '#999' : _props$color,
      _props$gapColor = props.gapColor,
      gapColor = _props$gapColor === void 0 ? '#FDFFFD' : _props$gapColor,
      _props$radius = props.radius,
      radius = _props$radius === void 0 ? '42px' : _props$radius;

  if (type === 'gap') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "".concat(prefixCls, "-gap"),
      style: {
        height: radius,
        width: radius,
        border: "2px solid ".concat(color)
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "".concat(prefixCls, "-gap-fill"),
      style: {
        backgroundColor: gapColor
      }
    }));
  }

  if (type === 'wave') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "".concat(prefixCls, "-wave")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      style: {
        backgroundColor: color
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      style: {
        backgroundColor: color
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      style: {
        backgroundColor: color
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      style: {
        backgroundColor: color
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      style: {
        backgroundColor: color
      }
    }));
  }

  if (type === 'anna') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "".concat(prefixCls, "-anna")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      style: {
        backgroundColor: color
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      style: {
        backgroundColor: color
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      style: {
        backgroundColor: color
      }
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: prefixCls,
    style: _objectSpread(_objectSpread({}, style), {}, {
      height: radius,
      width: radius,
      borderColor: "".concat(color, " ").concat(color, " transparent")
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./node_modules/annar/esm/mask/index.js":
/*!**********************************************!*\
  !*** ./node_modules/annar/esm/mask/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}





var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_4__["getPrefixCls"])('mask');

var Mask = function Mask(props) {
  var _classNames;

  var show = props.show,
      onTap = props.onTap,
      zIndex = props.zIndex,
      style = props.style,
      children = props.children;
  var maskZindex = zIndex || zIndex === 0 ? zIndex : 999;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, prefixCls, true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "_active"), show), _classNames)),
    style: _objectSpread(_objectSpread({}, style), {}, {
      zIndex: maskZindex
    }),
    onTap: onTap
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Mask);

/***/ }),

/***/ "./node_modules/annar/esm/one/api/chooseImage/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/annar/esm/one/api/chooseImage/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax_ali__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remax/ali */ "./node_modules/remax/ali.js");

/* harmony default export */ __webpack_exports__["default"] = (remax_ali__WEBPACK_IMPORTED_MODULE_0__["chooseImage"]);

/***/ }),

/***/ "./node_modules/annar/esm/one/api/createSelectorQuery/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/annar/esm/one/api/createSelectorQuery/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax_ali__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remax/ali */ "./node_modules/remax/ali.js");

/* harmony default export */ __webpack_exports__["default"] = (remax_ali__WEBPACK_IMPORTED_MODULE_0__["createSelectorQuery"]);

/***/ }),

/***/ "./node_modules/annar/esm/one/api/datePicker/index.js":
/*!************************************************************!*\
  !*** ./node_modules/annar/esm/one/api/datePicker/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax_ali__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remax/ali */ "./node_modules/remax/ali.js");

/* harmony default export */ __webpack_exports__["default"] = (remax_ali__WEBPACK_IMPORTED_MODULE_0__["datePicker"]);

/***/ }),

/***/ "./node_modules/annar/esm/one/api/hideLoading/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/annar/esm/one/api/hideLoading/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax_ali__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remax/ali */ "./node_modules/remax/ali.js");

/* harmony default export */ __webpack_exports__["default"] = (remax_ali__WEBPACK_IMPORTED_MODULE_0__["hideLoading"]);

/***/ }),

/***/ "./node_modules/annar/esm/one/api/index.js":
/*!*************************************************!*\
  !*** ./node_modules/annar/esm/one/api/index.js ***!
  \*************************************************/
/*! exports provided: createSelectorQuery, datePicker, chooseImage, previewImage, showToast, showLoading, hideLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createSelectorQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createSelectorQuery */ "./node_modules/annar/esm/one/api/createSelectorQuery/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelectorQuery", function() { return _createSelectorQuery__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _datePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datePicker */ "./node_modules/annar/esm/one/api/datePicker/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "datePicker", function() { return _datePicker__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _chooseImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chooseImage */ "./node_modules/annar/esm/one/api/chooseImage/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseImage", function() { return _chooseImage__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _previewImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./previewImage */ "./node_modules/annar/esm/one/api/previewImage/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "previewImage", function() { return _previewImage__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _showToast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./showToast */ "./node_modules/annar/esm/one/api/showToast/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showToast", function() { return _showToast__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _showLoading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./showLoading */ "./node_modules/annar/esm/one/api/showLoading/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showLoading", function() { return _showLoading__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _hideLoading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hideLoading */ "./node_modules/annar/esm/one/api/hideLoading/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideLoading", function() { return _hideLoading__WEBPACK_IMPORTED_MODULE_6__["default"]; });









/***/ }),

/***/ "./node_modules/annar/esm/one/api/previewImage/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/annar/esm/one/api/previewImage/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax_ali__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remax/ali */ "./node_modules/remax/ali.js");

/* harmony default export */ __webpack_exports__["default"] = (remax_ali__WEBPACK_IMPORTED_MODULE_0__["previewImage"]);

/***/ }),

/***/ "./node_modules/annar/esm/one/api/showLoading/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/annar/esm/one/api/showLoading/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax_ali__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remax/ali */ "./node_modules/remax/ali.js");

/* harmony default export */ __webpack_exports__["default"] = (remax_ali__WEBPACK_IMPORTED_MODULE_0__["showLoading"]);

/***/ }),

/***/ "./node_modules/annar/esm/one/api/showToast/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/annar/esm/one/api/showToast/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax_ali__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remax/ali */ "./node_modules/remax/ali.js");

/* harmony default export */ __webpack_exports__["default"] = (remax_ali__WEBPACK_IMPORTED_MODULE_0__["showToast"]);

/***/ }),

/***/ "./node_modules/annar/esm/one/base/checkbox/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/annar/esm/one/base/checkbox/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax_ali__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remax/ali */ "./node_modules/remax/ali.js");

/* harmony default export */ __webpack_exports__["default"] = (remax_ali__WEBPACK_IMPORTED_MODULE_0__["Checkbox"]);

/***/ }),

/***/ "./node_modules/annar/esm/one/base/index.js":
/*!**************************************************!*\
  !*** ./node_modules/annar/esm/one/base/index.js ***!
  \**************************************************/
/*! exports provided: ScrollView, Checkbox, Picker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scroll_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll-view */ "./node_modules/annar/esm/one/base/scroll-view/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return _scroll_view__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox */ "./node_modules/annar/esm/one/base/checkbox/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _checkbox__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./picker */ "./node_modules/annar/esm/one/base/picker/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _picker__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./node_modules/annar/esm/one/base/picker/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/annar/esm/one/base/picker/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax_ali__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remax/ali */ "./node_modules/remax/ali.js");

/* harmony default export */ __webpack_exports__["default"] = (remax_ali__WEBPACK_IMPORTED_MODULE_0__["Picker"]);

/***/ }),

/***/ "./node_modules/annar/esm/one/base/scroll-view/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/annar/esm/one/base/scroll-view/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax_ali__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remax/ali */ "./node_modules/remax/ali.js");

/* harmony default export */ __webpack_exports__["default"] = (remax_ali__WEBPACK_IMPORTED_MODULE_0__["ScrollView"]);

/***/ }),

/***/ "./node_modules/annar/esm/one/index.js":
/*!*********************************************!*\
  !*** ./node_modules/annar/esm/one/index.js ***!
  \*********************************************/
/*! exports provided: createSelectorQuery, datePicker, chooseImage, previewImage, showToast, showLoading, hideLoading, ScrollView, Checkbox, Picker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./node_modules/annar/esm/one/api/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelectorQuery", function() { return _api__WEBPACK_IMPORTED_MODULE_0__["createSelectorQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "datePicker", function() { return _api__WEBPACK_IMPORTED_MODULE_0__["datePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseImage", function() { return _api__WEBPACK_IMPORTED_MODULE_0__["chooseImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "previewImage", function() { return _api__WEBPACK_IMPORTED_MODULE_0__["previewImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showToast", function() { return _api__WEBPACK_IMPORTED_MODULE_0__["showToast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showLoading", function() { return _api__WEBPACK_IMPORTED_MODULE_0__["showLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideLoading", function() { return _api__WEBPACK_IMPORTED_MODULE_0__["hideLoading"]; });

/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./node_modules/annar/esm/one/base/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return _base__WEBPACK_IMPORTED_MODULE_1__["ScrollView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _base__WEBPACK_IMPORTED_MODULE_1__["Checkbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _base__WEBPACK_IMPORTED_MODULE_1__["Picker"]; });




/***/ }),

/***/ "./node_modules/annar/esm/picker-view-column/index.js":
/*!************************************************************!*\
  !*** ./node_modules/annar/esm/picker-view-column/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");





var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_4__["getPrefixCls"])('picker-view-column');
var heightUnit = 44;

var PickerViewColumn = function PickerViewColumn(props) {
  var _props$value = props.value,
      value = _props$value === void 0 ? 0 : _props$value,
      _props$options = props.options,
      options = _props$options === void 0 ? [] : _props$options,
      _props$optionsKey = props.optionsKey,
      optionsKey = _props$optionsKey === void 0 ? 'text' : _props$optionsKey,
      onChange = props.onChange;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(heightUnit * 2),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      initial = _useState2[0],
      setInitial = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      start = _useState4[0],
      setStart = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initial),
      _useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      y = _useState6[0],
      setY = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      columnHeight = _useState8[0],
      setColumnHeight = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
      isTransition = _useState10[0],
      setIsTransition = _useState10[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setColumnHeight(options.length * heightUnit);
  }, [options]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!value || value <= 0) {
      setY(heightUnit * 2);
      return;
    }

    setY(-heightUnit * value + heightUnit * 2);
  }, [value]);

  var handleTouchStart = function handleTouchStart(e) {
    var _e$preventDefault;

    (_e$preventDefault = e.preventDefault) === null || _e$preventDefault === void 0 ? void 0 : _e$preventDefault.call(e);
    setIsTransition(false);
    setStart(e.touches[0].clientY);
  };

  var handleTouchMove = function handleTouchMove(e) {
    var _e$preventDefault2;

    (_e$preventDefault2 = e.preventDefault) === null || _e$preventDefault2 === void 0 ? void 0 : _e$preventDefault2.call(e);
    var diff = e.touches[0].clientY - start;
    var updateY = diff + initial;

    if (updateY < -columnHeight + heightUnit * 2) {
      setY(-columnHeight + heightUnit * 2);
      return;
    }

    if (updateY > heightUnit * 3) {
      setY(heightUnit * 3);
      return;
    }

    setY(updateY);
  };

  var handleTouchEnd = function handleTouchEnd(e) {
    var _e$preventDefault3;

    (_e$preventDefault3 = e.preventDefault) === null || _e$preventDefault3 === void 0 ? void 0 : _e$preventDefault3.call(e);

    if (y < -columnHeight + heightUnit * 3) {
      var val = -columnHeight + heightUnit * 3;
      setY(val);
      setInitial(val);
      setIsTransition(true);
      var v = Math.floor((val - heightUnit * 2) / -heightUnit);
      onChange === null || onChange === void 0 ? void 0 : onChange(v);
      return;
    }

    if (y > heightUnit * 2) {
      var _val = heightUnit * 2;

      setY(_val);
      setInitial(_val);
      setIsTransition(true);

      var _v = Math.floor((_val - heightUnit * 2) / -heightUnit);

      onChange === null || onChange === void 0 ? void 0 : onChange(_v);
      return;
    }

    if (y % heightUnit !== 0) {
      var r = Math.round(y / heightUnit) - Math.floor(y / heightUnit);
      var _val2 = 0;

      if (r === 1) {
        _val2 = Math.ceil(y / heightUnit) * heightUnit;
      } else {
        _val2 = Math.floor(y / heightUnit) * heightUnit;
      }

      setY(_val2);
      setInitial(_val2);
      setIsTransition(true);

      var _v2 = Math.floor((_val2 - heightUnit * 2) / -heightUnit);

      onChange === null || onChange === void 0 ? void 0 : onChange(_v2);
      return;
    }

    setInitial(y);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: prefixCls
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-items"),
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    style: {
      transform: "translate3d(0, ".concat(y, "PX, 0)"),
      transition: "".concat(isTransition ? 'transform' : 'none', " 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)")
    }
  }, options === null || options === void 0 ? void 0 : options.map(function (option, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
      key: index,
      className: "".concat(prefixCls, "-item")
    }, Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(option) === 'object' ? option === null || option === void 0 ? void 0 : option[optionsKey] : option);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PickerViewColumn);

/***/ }),

/***/ "./node_modules/annar/esm/picker-view/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/annar/esm/picker-view/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");



var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_2__["getPrefixCls"])('picker-view');

var PickerView = function PickerView(props) {
  var title = props.title,
      children = props.children,
      onOK = props.onOK,
      onCancel = props.onCancel;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "".concat(prefixCls)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "".concat(prefixCls, "-toolbar")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "".concat(prefixCls, "-cancel"),
    onTap: onCancel
  }, "\u53D6\u6D88"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "".concat(prefixCls, "-tittle")
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "".concat(prefixCls, "-confirm"),
    onTap: onOK
  }, "\u786E\u5B9A")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "".concat(prefixCls, "-columns")
  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "".concat(prefixCls, "-selected")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "".concat(prefixCls, "-mask")
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PickerView);

/***/ }),

/***/ "./node_modules/annar/esm/picker/index.js":
/*!************************************************!*\
  !*** ./node_modules/annar/esm/picker/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popup */ "./node_modules/annar/esm/popup/index.js");
/* harmony import */ var _picker_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../picker-view */ "./node_modules/annar/esm/picker-view/index.js");
/* harmony import */ var _picker_view_column__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../picker-view-column */ "./node_modules/annar/esm/picker-view-column/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");








var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_7__["getPrefixCls"])('picker');

var Picker = function Picker(props) {
  var _props$value = props.value,
      value = _props$value === void 0 ? 0 : _props$value,
      range = props.range,
      _props$rangeKey = props.rangeKey,
      rangeKey = _props$rangeKey === void 0 ? 'text' : _props$rangeKey,
      disabled = props.disabled,
      children = props.children,
      onChange = props.onChange;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var val = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(value < 0 ? 0 : value);

  var handleTap = function handleTap() {
    if (disabled) {
      return;
    }

    setOpen(function (state) {
      return !state;
    });
  };

  var handleOK = function handleOK(e) {
    onChange === null || onChange === void 0 ? void 0 : onChange(val.current, e);
    setOpen(false);
  };

  var handleChangeColumn = function handleChangeColumn(multiple, v, index) {
    if (multiple) {
      val.current = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Array.isArray(val.current) ? val.current : [val.current]);
      val.current[index] = v;
      return;
    }

    val.current = v;
  };

  var multiple = false;

  if (Array.isArray(range === null || range === void 0 ? void 0 : range[0])) {
    multiple = true;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: prefixCls
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    onTap: handleTap
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_popup__WEBPACK_IMPORTED_MODULE_4__["default"], {
    position: "bottom",
    open: open,
    onClose: function onClose() {
      return setOpen(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_picker_view__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onOK: handleOK,
    onCancel: function onCancel() {
      return setOpen(false);
    }
  }, multiple ? range === null || range === void 0 ? void 0 : range.map(function (columnData, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_picker_view_column__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: index,
      value: value[index],
      options: columnData,
      optionsKey: rangeKey,
      onChange: function onChange(v) {
        return handleChangeColumn(true, v, index);
      }
    });
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_picker_view_column__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: value,
    options: range,
    optionsKey: rangeKey,
    onChange: function onChange(v) {
      return handleChangeColumn(false, v);
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Picker);

/***/ }),

/***/ "./node_modules/annar/esm/popup/index.js":
/*!***********************************************!*\
  !*** ./node_modules/annar/esm/popup/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mask */ "./node_modules/annar/esm/mask/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icon */ "./node_modules/annar/esm/icon/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");







var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_6__["getPrefixCls"])('popup');

var Popup = function Popup(props) {
  var _classNames;

  var _props$open = props.open,
      open = _props$open === void 0 ? false : _props$open,
      children = props.children,
      onClose = props.onClose,
      closeable = props.closeable,
      title = props.title,
      _props$position = props.position,
      position = _props$position === void 0 ? 'center' : _props$position,
      style = props.style,
      _props$mask = props.mask,
      mask = _props$mask === void 0 ? true : _props$mask,
      square = props.square,
      curve = props.curve,
      transparent = props.transparent;

  var handleClickMask = function handleClickMask() {
    onClose === null || onClose === void 0 ? void 0 : onClose();
  };

  var classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-container"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-container-").concat(position), position), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-container-ease"), curve === 'ease'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-container-square"), square), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-container-active"), open), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-container-transparent"), transparent), _classNames));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: prefixCls
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: classes,
    style: style
  }, title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "".concat(prefixCls, "-container-title")
  }, title) : null, children, closeable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "".concat(prefixCls, "-container-close"),
    onTap: function onTap() {
      onClose === null || onClose === void 0 ? void 0 : onClose();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "close",
    size: "40px",
    color: "#999"
  })) : null), mask ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_mask__WEBPACK_IMPORTED_MODULE_4__["default"], {
    show: open,
    onTap: handleClickMask
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Popup);

/***/ }),

/***/ "./node_modules/annar/esm/progress-bar/index.js":
/*!******************************************************!*\
  !*** ./node_modules/annar/esm/progress-bar/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loading */ "./node_modules/annar/esm/loading/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");







var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_6__["getPrefixCls"])('progress_bar');

var ProgressBar = function ProgressBar(props) {
  var _props$data = props.data,
      data = _props$data === void 0 ? [] : _props$data,
      value = props.value,
      style = props.style;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      move = _React$useState2[0],
      setMove = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (data.length > 1 && !move) {
      setTimeout(function () {
        setMove(true);
      }, 100);
    }
  }, [data]);
  var curIndex = -1;
  data.forEach(function (item, index) {
    if (value === item.key) {
      curIndex = index;
    }
  });
  var moveX = data.length > 0 ? 100 / data.length * (curIndex + 1) : 100;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: prefixCls,
    style: style
  }, data === null || data === void 0 ? void 0 : data.map(function (item, index) {
    var _classNames;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
      key: item.key,
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-node"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-node_first"), index === 0), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-node_last"), index === curIndex), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-node_active"), index <= curIndex), _classNames))
    }, item.value);
  }), data.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_loading__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "gap",
    gapColor: "#E8E8E8"
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-process"),
    style: {
      width: move ? "".concat(moveX, "%") : 0,
      transition: "width ".concat((curIndex + 1) * 0.3, "s ease-in")
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProgressBar);

/***/ }),

/***/ "./node_modules/annar/esm/progress/index.js":
/*!**************************************************!*\
  !*** ./node_modules/annar/esm/progress/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}




var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_4__["getPrefixCls"])('progress');

var validProgress = function validProgress(progress) {
  if (!progress || progress < 0) {
    return 0;
  }

  if (progress > 100) {
    return 100;
  }

  return progress;
};

var sortGradient = function sortGradient(gradients) {
  var tempArr = [];
  Object.keys(gradients).forEach(function (key) {
    var formattedKey = parseFloat(key.replace(/%/g, ''));

    if (!isNaN(formattedKey)) {
      tempArr.push({
        key: formattedKey,
        value: gradients[key]
      });
    }
  });
  tempArr = tempArr.sort(function (a, b) {
    return a.key - b.key;
  });
  return tempArr.map(function (_ref) {
    var key = _ref.key,
        value = _ref.value;
    return "".concat(value, " ").concat(key, "%");
  }).join(', ');
};

var handleGradient = function handleGradient(color) {
  var _color$from = color.from,
      from = _color$from === void 0 ? '#1890ff' : _color$from,
      _color$to = color.to,
      to = _color$to === void 0 ? '#1890ff' : _color$to,
      _color$direction = color.direction,
      direction = _color$direction === void 0 ? 'to right' : _color$direction,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(color, ["from", "to", "direction"]);

  if (Object.keys(rest).length !== 0) {
    var sortedGradients = sortGradient(rest);
    return {
      backgroundImage: "linear-gradient(".concat(direction, ", ").concat(sortedGradients, ")")
    };
  }

  return {
    backgroundImage: "linear-gradient(".concat(direction, ", ").concat(from, ", ").concat(to, ")")
  };
};

var Line = function Line(props) {
  var percent = props.percent,
      width = props.width,
      size = props.size,
      color = props.color,
      bgColor = props.bgColor,
      _props$shape = props.shape,
      shape = _props$shape === void 0 ? 'round' : _props$shape,
      successPercent = props.successPercent,
      children = props.children;
  var backgroundProps;

  if (color && typeof color !== 'string') {
    backgroundProps = handleGradient(color);
  } else {
    backgroundProps = {
      background: color
    };
  }

  var bgStyle;
  var borderRadius = null;

  if (shape === 'sharp') {
    borderRadius = 0;
  }

  if (shape === 'square') {
    borderRadius = '4px';
  }

  if (borderRadius || borderRadius === 0) {
    bgStyle = {
      borderRadius: borderRadius
    };
  }

  if (bgColor && typeof bgColor === 'string') {
    bgStyle = _objectSpread(_objectSpread({}, bgStyle), {}, {
      backgroundColor: bgColor
    });
  }

  var sizeWidth = '16px';

  if (size === 'small') {
    sizeWidth = '12px';
  }

  if (size === 'large') {
    sizeWidth = '20px';
  }

  var percentStyle = _objectSpread({
    width: "".concat(validProgress(percent), "%"),
    height: width || sizeWidth,
    borderRadius: borderRadius
  }, backgroundProps);

  var successPercentStyle = {
    width: "".concat(validProgress(successPercent), "%"),
    height: width || sizeWidth,
    borderRadius: borderRadius
  };
  var successSegment = successPercent !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-success-bg"),
    style: successPercentStyle
  }) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-outer")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-inner"),
    style: bgStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-bg"),
    style: percentStyle
  }), successSegment)), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Line);

/***/ }),

/***/ "./node_modules/annar/esm/radio/index.js":
/*!***********************************************!*\
  !*** ./node_modules/annar/esm/radio/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}





var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_5__["getPrefixCls"])('radio');

var Radio = function Radio(props) {
  var children = props.children,
      checked = props.checked,
      value = props.value,
      extra = props.extra,
      style = props.style,
      onChange = props.onChange;

  var handleClick = function handleClick(e) {
    onChange === null || onChange === void 0 ? void 0 : onChange(!checked, e, value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: prefixCls,
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-container"),
    onTap: handleClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("".concat(prefixCls, "-out-round"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, "".concat(prefixCls, "-out-round-checked"), checked))
  }, checked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-inner-round")
  }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-children")
  }, children)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-extra")
  }, extra));
};

var getRadios = function getRadios(children, value, onChange) {
  var onGroupChange = function onGroupChange(checked, e, v) {
    var newValue = v;
    onChange === null || onChange === void 0 ? void 0 : onChange(newValue, e);
  };

  var radios = react__WEBPACK_IMPORTED_MODULE_2__["Children"].map(children, function (radio) {
    var newRadio = radio;
    var checked = false;

    if (newRadio && newRadio.props) {
      if ((newRadio.props.value || newRadio.props.value === 0 || newRadio.props.value === false) && newRadio.props.value === value) {
        checked = true;
      } else {
        checked = false;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Radio, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, newRadio.props, {
        checked: checked,
        onChange: onGroupChange
      }));
    }

    return newRadio;
  });
  return radios;
};

Radio.Group = function (props) {
  var value = props.value,
      children = props.children,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'row' : _props$direction,
      onChange = props.onChange,
      style = props.style;
  var radios = getRadios(children, value, onChange);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    style: _objectSpread({
      display: 'flex',
      flexDirection: direction
    }, style)
  }, radios);
};

/* harmony default export */ __webpack_exports__["default"] = (Radio);

/***/ }),

/***/ "./node_modules/annar/esm/rate/index.js":
/*!**********************************************!*\
  !*** ./node_modules/annar/esm/rate/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon */ "./node_modules/annar/esm/icon/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");






var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_4__["getPrefixCls"])('rate');

var Rate = function Rate(props) {
  var _props$count = props.count,
      count = _props$count === void 0 ? 5 : _props$count,
      label = props.label,
      _props$value = props.value,
      value = _props$value === void 0 ? 0 : _props$value,
      onChange = props.onChange,
      readOnly = props.readOnly,
      _props$icon = props.icon,
      icon = _props$icon === void 0 ? 'favor' : _props$icon,
      _props$iconFill = props.iconFill,
      iconFill = _props$iconFill === void 0 ? 'favorfill' : _props$iconFill,
      _props$size = props.size,
      size = _props$size === void 0 ? '48px' : _props$size,
      _props$color = props.color,
      color = _props$color === void 0 ? '#FFD700' : _props$color;

  var handleClick = function handleClick(index) {
    if (readOnly) {
      return;
    }

    onChange === null || onChange === void 0 ? void 0 : onChange(index + 1);
  };

  var stars = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    if (!count) {
      return [];
    }

    return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(new Array(count).keys());
  }, [count]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: prefixCls
  }, label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "".concat(prefixCls, "-label")
  }, label) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "".concat(prefixCls, "-value")
  }, stars.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      key: index,
      className: "".concat(prefixCls, "-value-star"),
      onTap: function onTap() {
        handleClick(index);
      }
    }, value >= index + 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: iconFill,
      size: size,
      color: color
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: icon,
      size: size,
      color: "#999"
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Rate);

/***/ }),

/***/ "./node_modules/annar/esm/result/index.js":
/*!************************************************!*\
  !*** ./node_modules/annar/esm/result/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon */ "./node_modules/annar/esm/icon/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");




var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_3__["getPrefixCls"])('result');

var getIconNameByStatus = function getIconNameByStatus(status) {
  var obj = {
    name: 'infofill',
    color: '#1890ff'
  };

  switch (status) {
    case 'info':
      obj = {
        name: 'infofill',
        color: '#1890ff'
      };
      break;

    case 'success':
      obj = {
        name: 'roundcheckfill',
        color: '#52c41a'
      };
      break;

    case 'warning':
      obj = {
        name: 'warnfill',
        color: '#faad14'
      };
      break;

    case 'error':
      obj = {
        name: 'roundclosefill',
        color: '#f5222d'
      };
      break;

    default:
      break;
  }

  return obj;
};

var Result = function Result(props) {
  var _props$status = props.status,
      status = _props$status === void 0 ? 'info' : _props$status,
      title = props.title,
      subTitle = props.subTitle,
      extra = props.extra,
      children = props.children,
      icon = props.icon,
      height = props.height;
  var isCustomIcon = false;
  var iconObj = getIconNameByStatus(status);

  if (icon) {
    if (Object.prototype.toString.call(icon) === '[object Object]') {
      iconObj = icon;
    } else {
      isCustomIcon = true;
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: prefixCls,
    style: {
      height: height || '100vh'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "".concat(prefixCls, "-icon")
  }, isCustomIcon ? icon : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "".concat(prefixCls, "-icon-status")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: iconObj.name,
    color: iconObj.color,
    size: "168px"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "".concat(prefixCls, "-title")
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "".concat(prefixCls, "-sub_title")
  }, subTitle), children ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "".concat(prefixCls, "-content")
  }, children) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "".concat(prefixCls, "-extra")
  }, extra));
};

/* harmony default export */ __webpack_exports__["default"] = (Result);

/***/ }),

/***/ "./node_modules/annar/esm/row/index.js":
/*!*********************************************!*\
  !*** ./node_modules/annar/esm/row/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}





var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_4__["getPrefixCls"])('row');

var renderCols = function renderCols(columns, halfGutter) {
  var cols = react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.map(columns, function (column) {
    var style = halfGutter ? {
      paddingLeft: "".concat(halfGutter, "px"),
      paddingRight: "".concat(halfGutter, "px")
    } : null;
    return _objectSpread(_objectSpread({}, column), {}, {
      props: _objectSpread(_objectSpread({}, column.props), {}, {
        style: _objectSpread(_objectSpread({}, column.props.style), style)
      })
    });
  });
  return cols;
};

var Row = function Row(props) {
  var _classNames;

  var _props$gutter = props.gutter,
      gutter = _props$gutter === void 0 ? 0 : _props$gutter,
      _props$justify = props.justify,
      justify = _props$justify === void 0 ? 'start' : _props$justify,
      _props$align = props.align,
      align = _props$align === void 0 ? 'top' : _props$align,
      style = props.style,
      className = props.className,
      children = props.children;
  var halfGutter = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return gutter / 2;
  }, [gutter]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(prefixCls, (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-justify-").concat(justify), justify), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-align-").concat(align), align), _classNames), className),
    style: _objectSpread(_objectSpread({}, style), {}, {
      marginLeft: "-".concat(halfGutter, "px"),
      marginRight: "-".concat(halfGutter, "px")
    })
  }, renderCols(children, halfGutter));
};

/* harmony default export */ __webpack_exports__["default"] = (Row);

/***/ }),

/***/ "./node_modules/annar/esm/search-bar/index.js":
/*!****************************************************!*\
  !*** ./node_modules/annar/esm/search-bar/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icon */ "./node_modules/annar/esm/icon/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");








var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_6__["getPrefixCls"])('search_bar');
var showBtn = false;

var SearchBar = function SearchBar(props) {
  var _classNames, _classNames3, _classNames4;

  var value = props.value,
      placeholder = props.placeholder,
      onInput = props.onInput,
      onClear = props.onClear,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      onActionClick = props.onActionClick,
      onSubmit = props.onSubmit,
      inputStyle = props.inputStyle,
      shape = props.shape,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      _props$confirmType = props.confirmType,
      confirmType = _props$confirmType === void 0 ? 'search' : _props$confirmType,
      style = props.style,
      focus = props.focus,
      _props$actionName = props.actionName,
      actionName = _props$actionName === void 0 ? '取消' : _props$actionName,
      keepShowActionButton = props.keepShowActionButton,
      hideActionButton = props.hideActionButton,
      size = props.size;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      isFocus = _useState2[0],
      setIsFocus = _useState2[1];

  var handleFocus = function handleFocus(e) {
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
    setIsFocus(true);
  };

  var handleBlur = function handleBlur(e) {
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
    setIsFocus(false);
  };

  var handleInput = function handleInput(e) {
    onInput === null || onInput === void 0 ? void 0 : onInput(e.target.value);
  };

  var handleClear = function handleClear() {
    onClear === null || onClear === void 0 ? void 0 : onClear(value);
  };

  var handleActionClick = function handleActionClick() {
    showBtn = false;
    onActionClick === null || onActionClick === void 0 ? void 0 : onActionClick();
  };

  var handleConfirm = function handleConfirm(e) {
    onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(e.target.value);
  };

  var active = isFocus || value || focus;

  if (active && !showBtn) {
    showBtn = true;
  }

  var iconSize = '32px';

  if (size === 'large') {
    iconSize = '36px';
  }

  if (size === 'small') {
    iconSize = '28px';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, prefixCls, true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-large"), size === 'large'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-small"), size === 'small'), _classNames)),
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("".concat(prefixCls, "-input"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-input-").concat(shape), shape)),
    style: inputStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames3 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(prefixCls, "-input-synthetic"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(prefixCls, "-input-is_left"), active), _classNames3))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-input-synthetic-icon")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "search",
    size: iconSize,
    color: "#999"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-input-synthetic-placeholder"),
    style: {
      visibility: active ? 'hidden' : 'visible'
    }
  }, placeholder)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    className: "".concat(prefixCls, "-input-value") // @ts-ignore
    ,
    type: type,
    confirmType: confirmType,
    value: value,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onInput: handleInput,
    onConfirm: handleConfirm,
    focus: focus
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-input-clear"),
    onTap: handleClear
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "roundclosefill",
    size: "".concat(iconSize, "px"),
    color: "#999",
    style: {
      visibility: value ? 'visible' : 'hidden'
    }
  }))), !hideActionButton ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames4 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, "".concat(prefixCls, "-action_button"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, "".concat(prefixCls, "-show_action_button"), keepShowActionButton ? true : active), _classNames4)),
    onTap: handleActionClick
  }, actionName) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

/***/ }),

/***/ "./node_modules/annar/esm/selector-popup/index.js":
/*!********************************************************!*\
  !*** ./node_modules/annar/esm/selector-popup/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popup */ "./node_modules/annar/esm/popup/index.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../selector */ "./node_modules/annar/esm/selector/index.js");
/* harmony import */ var _form_value__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../form-value */ "./node_modules/annar/esm/form-value/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");









var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_7__["getPrefixCls"])('selector-popup');

var SelectorPopup = function SelectorPopup(props) {
  var placeholder = props.placeholder,
      children = props.children,
      title = props.title,
      onChange = props.onChange;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var handleTap = function handleTap() {
    setShow(true);
  };

  var handleClose = function handleClose() {
    setShow(false);
  };

  var handleChange = function handleChange(value, valueStr) {
    onChange === null || onChange === void 0 ? void 0 : onChange(value, valueStr);
    handleClose();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: prefixCls
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-formitem"),
    onTap: handleTap
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_form_value__WEBPACK_IMPORTED_MODULE_6__["default"], {
    placeholder: placeholder
  }, children)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_popup__WEBPACK_IMPORTED_MODULE_4__["default"], {
    position: "bottom",
    title: title,
    closeable: true,
    open: show,
    onClose: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-container")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_selector__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    style: {
      height: '540px'
    },
    onChange: handleChange
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectorPopup);

/***/ }),

/***/ "./node_modules/annar/esm/selector/index.js":
/*!**************************************************!*\
  !*** ./node_modules/annar/esm/selector/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");







var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_5__["getPrefixCls"])('selector');
var currentParent = null;

var Selector = function Selector(props) {
  var _props$value = props.value,
      value = _props$value === void 0 ? [] : _props$value,
      _props$options = props.options,
      options = _props$options === void 0 ? [] : _props$options,
      style = props.style,
      onChange = props.onChange,
      onChangeParentOption = props.onChangeParentOption;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      parentData = _useState2[0],
      setParentData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      childrenData = _useState4[0],
      setChildrenData = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      activeParent = _useState6[0],
      setActiveParent = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (options.length > 0) {
      var data = options[0].children || [];
      currentParent = options[0];
      setActiveParent(currentParent.value);
      setParentData(options);
      setChildrenData(data);
    }
  }, [options]);

  var handleClickParentOption = function handleClickParentOption(option) {
    var data = option.children || [];
    currentParent = option;
    setChildrenData(data);
    setActiveParent(option.value);
    onChangeParentOption === null || onChangeParentOption === void 0 ? void 0 : onChangeParentOption(option);
  };

  var handleClickChildrenOption = function handleClickChildrenOption(option) {
    onChange === null || onChange === void 0 ? void 0 : onChange([currentParent.value, option.value], "".concat(currentParent.text, " ").concat(option.text));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: prefixCls,
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-parent")
  }, parentData === null || parentData === void 0 ? void 0 : parentData.map(function (option, index) {
    var _classNames;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
      key: option.value,
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-option"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-active"), activeParent === option.value), _classNames)),
      onTap: function onTap() {
        handleClickParentOption(option);
      }
    }, option.text, activeParent === option.value && index !== 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
      className: "".concat(prefixCls, "-option-rounded_top")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
      className: "".concat(prefixCls, "-option-rounded_top-circle")
    })) : null, activeParent === option.value ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
      className: "".concat(prefixCls, "-option-rounded_bottom")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
      className: "".concat(prefixCls, "-option-rounded_bottom-circle")
    })) : null);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-children")
  }, childrenData === null || childrenData === void 0 ? void 0 : childrenData.map(function (option) {
    var _classNames2;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
      key: option.value,
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-option"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-active"), (value === null || value === void 0 ? void 0 : value[1]) === option.value), _classNames2)),
      onTap: function onTap() {
        handleClickChildrenOption(option);
      }
    }, option.text);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Selector);

/***/ }),

/***/ "./node_modules/annar/esm/skeleton/index.js":
/*!**************************************************!*\
  !*** ./node_modules/annar/esm/skeleton/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");




function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}





var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_6__["getPrefixCls"])('skeleton');

var Skeleton = function Skeleton(props) {
  var _classNames7;

  var _props$title = props.title,
      title = _props$title === void 0 ? true : _props$title,
      titleColor = props.titleColor,
      backgroundColor = props.backgroundColor,
      active = props.active,
      _props$avatar = props.avatar,
      avatar = _props$avatar === void 0 ? false : _props$avatar,
      _props$loading = props.loading,
      loading = _props$loading === void 0 ? true : _props$loading,
      _props$image = props.image,
      image = _props$image === void 0 ? false : _props$image,
      _props$paragraph = props.paragraph,
      paragraph = _props$paragraph === void 0 ? {
    rows: 3,
    width: [80, 'auto', 200]
  } : _props$paragraph,
      _props$repetitions = props.repetitions,
      repetitions = _props$repetitions === void 0 ? 1 : _props$repetitions,
      space = props.space,
      customize = props.customize,
      fade = props.fade,
      style = props.style,
      children = props.children;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      loadingEnd = _React$useState2[0],
      setLoadingEnd = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      renderStart = _React$useState4[0],
      setRenderStart = _React$useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (fade) {
      if (!loading) {
        setTimeout(function () {
          setLoadingEnd(true);
        }, 300);
      }

      if (loading) {
        setLoadingEnd(false);
        setRenderStart(false);
      }
    }
  }, [loading]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (fade) {
      if (loadingEnd) {
        setTimeout(function () {
          setRenderStart(true);
        }, 100);
      }
    }
  }, [loadingEnd]);
  var rows = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return paragraph.rows ? Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Array(paragraph.rows).keys()) : [];
  }, [paragraph]);
  var rowsWidth = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    if (typeof paragraph.width === 'number') {
      return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Array(rows.length).fill("".concat(paragraph.width, "px")));
    }

    if (typeof paragraph.width === 'string') {
      return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Array(rows.length).fill(paragraph.width));
    }

    if (Array.isArray(paragraph.width)) {
      var _paragraph$width;

      return (_paragraph$width = paragraph.width) === null || _paragraph$width === void 0 ? void 0 : _paragraph$width.map(function (i) {
        if (typeof i === 'number') {
          return "".concat(i, "px");
        } else if (typeof i === 'string') {
          return i;
        } else {
          return 'auto';
        }
      });
    }
  }, [paragraph]);

  var renderImage = function renderImage(visible) {
    var _classNames;

    return visible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-image"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-active"), active), _classNames))
    }) : null;
  };

  var renderAvatar = function renderAvatar(visible) {
    var _classNames2;

    return visible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-avatar"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-active"), active), _classNames2))
    }) : null;
  };

  var renderTitle = function renderTitle(visible) {
    var _classNames3;

    return visible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames3 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(prefixCls, "-title"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(prefixCls, "-active"), active), _classNames3)),
      style: {
        backgroundColor: titleColor
      }
    }) : null;
  };

  var renderParagraph = function renderParagraph() {
    return rows.map(function (item, index) {
      var _classNames4;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
        key: item,
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames4 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, "".concat(prefixCls, "-row"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, "".concat(prefixCls, "-active"), active), _classNames4)),
        style: {
          width: rowsWidth === null || rowsWidth === void 0 ? void 0 : rowsWidth[index]
        }
      });
    });
  };

  var renderSkeleton = function renderSkeleton() {
    var skeleton = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Array(repetitions).keys());

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, skeleton === null || skeleton === void 0 ? void 0 : skeleton.map(function (i, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
        key: i,
        className: "".concat(prefixCls, "-item"),
        style: {
          marginBottom: index !== skeleton.length - 1 ? space : 0
        }
      }, customize ? customize : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, renderImage(image), renderAvatar(avatar), renderTitle(title), renderParagraph()));
    }));
  };

  if (fade) {
    var _classNames6;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: prefixCls
    }, !loadingEnd ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("".concat(prefixCls, "-placeholder"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-hidden"), !loading)),
      style: _objectSpread({
        backgroundColor: backgroundColor
      }, style)
    }, renderSkeleton()) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames6 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames6, "".concat(prefixCls, "-container"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames6, "".concat(prefixCls, "-container-active"), renderStart), _classNames6))
    }, children));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: prefixCls
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-placeholder"),
    style: _objectSpread({
      backgroundColor: backgroundColor
    }, style)
  }, renderSkeleton()) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames7 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames7, "".concat(prefixCls, "-container"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames7, "".concat(prefixCls, "-container-active"), true), _classNames7))
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Skeleton);

/***/ }),

/***/ "./node_modules/annar/esm/space/index.js":
/*!***********************************************!*\
  !*** ./node_modules/annar/esm/space/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");





var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_4__["getPrefixCls"])('space');

var renderItems = function renderItems(children, size, direction) {
  var itemStyle = undefined;

  if (typeof size === 'number') {
    itemStyle = direction === 'vertical' ? {
      marginBottom: size
    } : {
      marginRight: size
    };
  }

  var items = [];
  react__WEBPACK_IMPORTED_MODULE_1__["Children"].forEach(children, function (child, index) {
    var itemCn = classnames__WEBPACK_IMPORTED_MODULE_3___default()("".concat(prefixCls, "-item"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-").concat(direction, "-").concat(size), typeof size === 'string' && size));

    if (child === undefined || child === null) {
      return;
    }

    items.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      key: index,
      className: itemCn,
      style: itemStyle
    }, child));
  });
  return items;
};

var Space = function Space(props) {
  var _props$size = props.size,
      size = _props$size === void 0 ? 'small' : _props$size,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'horizontal' : _props$direction,
      _props$align = props.align,
      align = _props$align === void 0 ? direction === 'horizontal' ? 'center' : undefined : _props$align,
      style = props.style,
      className = props.className,
      children = props.children;
  var cn = classnames__WEBPACK_IMPORTED_MODULE_3___default()(prefixCls, "".concat(prefixCls, "-").concat(direction), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-align-").concat(align), align), className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: cn,
    style: style
  }, renderItems(children, size, direction));
};

/* harmony default export */ __webpack_exports__["default"] = (Space);

/***/ }),

/***/ "./node_modules/annar/esm/spin/index.js":
/*!**********************************************!*\
  !*** ./node_modules/annar/esm/spin/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}





var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_4__["getPrefixCls"])('spin');

var Spin = function Spin(props) {
  var _classNames;

  var loading = props.loading,
      children = props.children,
      className = props.className,
      style = props.style;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, prefixCls, true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, className, true), _classNames)),
    style: _objectSpread({}, style)
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "".concat(prefixCls, "-loading")
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "".concat(prefixCls, "-default")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], null, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Spin);

/***/ }),

/***/ "./node_modules/annar/esm/stepper/index.js":
/*!*************************************************!*\
  !*** ./node_modules/annar/esm/stepper/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon */ "./node_modules/annar/esm/icon/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");






var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_5__["getPrefixCls"])('stepper');

var Stepper = function Stepper(props) {
  var _classNames2, _classNames3, _classNames4;

  var _props$min = props.min,
      min = _props$min === void 0 ? 1 : _props$min,
      max = props.max,
      _props$step = props.step,
      step = _props$step === void 0 ? 1 : _props$step,
      _props$value = props.value,
      value = _props$value === void 0 ? min : _props$value,
      disabled = props.disabled,
      plain = props.plain,
      shape = props.shape,
      size = props.size,
      color = props.color,
      bgColor = props.bgColor,
      onChange = props.onChange,
      onInput = props.onInput,
      onTap = props.onTap,
      onFocus = props.onFocus,
      onBlur = props.onBlur;
  var val = value;
  var minusDisabled = val <= min || disabled;
  var plusDisabled = (max || max === 0) && val >= max || disabled;

  var handlePlus = function handlePlus() {
    if (!val && val !== 0) {
      return;
    }

    if (plusDisabled) {
      return;
    }

    var newValue = max && val + step > max ? max : val + step;
    onTap === null || onTap === void 0 ? void 0 : onTap(newValue);
    onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
  };

  var handleMinus = function handleMinus() {
    if (!val && val !== 0) {
      return;
    }

    if (minusDisabled) {
      return;
    }

    var newValue = val - step < min ? min : val - step;
    onTap === null || onTap === void 0 ? void 0 : onTap(newValue);
    onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
  };

  var handleInput = function handleInput(e) {
    onInput === null || onInput === void 0 ? void 0 : onInput(Number(e.target.value), e);
    onChange === null || onChange === void 0 ? void 0 : onChange(Number(e.target.value), e);
  };

  var handleFocus = function handleFocus(e) {
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
  };

  var handleBlur = function handleBlur(e) {
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);

    if (minusDisabled) {
      onInput === null || onInput === void 0 ? void 0 : onInput(min);
      onChange === null || onChange === void 0 ? void 0 : onChange(min);
    }

    if (plusDisabled) {
      onInput === null || onInput === void 0 ? void 0 : onInput(max);
      onChange === null || onChange === void 0 ? void 0 : onChange(max);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(prefixCls, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-").concat(size), size))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("".concat(prefixCls, "-btn"), "".concat(prefixCls, "-minus"), (_classNames2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-btn-disabled"), minusDisabled), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-btn-plain"), plain), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-btn-plain-disabled"), plain && minusDisabled), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-btn-circle"), shape === 'circle'), _classNames2)),
    onTap: handleMinus
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "move",
    size: "36px",
    color: "#999"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "".concat(prefixCls, "-input-wrapper")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("".concat(prefixCls, "-input"), (_classNames3 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(prefixCls, "-input-disabled"), disabled), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(prefixCls, "-input-circle"), shape === 'circle'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(prefixCls, "-input-plain"), plain), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(prefixCls, "-binputtn-plain-disabled"), plain && disabled), _classNames3)),
    type: "number",
    value: String(val),
    onInput: handleInput,
    onFocus: handleFocus,
    onBlur: handleBlur,
    disabled: disabled
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("".concat(prefixCls, "-btn"), "".concat(prefixCls, "-plus"), (_classNames4 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, "".concat(prefixCls, "-btn-disabled"), plusDisabled), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, "".concat(prefixCls, "-btn-plain"), plain), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, "".concat(prefixCls, "-btn-plain-disabled"), plain && plusDisabled), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, "".concat(prefixCls, "-btn-circle"), shape === 'circle'), _classNames4)),
    style: {
      borderColor: bgColor || color,
      backgroundColor: bgColor,
      opacity: plusDisabled && bgColor ? 0.4 : undefined
    },
    onTap: handlePlus
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "add",
    size: "36px",
    color: color || '#333'
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Stepper);

/***/ }),

/***/ "./node_modules/annar/esm/steps/index.js":
/*!***********************************************!*\
  !*** ./node_modules/annar/esm/steps/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon */ "./node_modules/annar/esm/icon/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");






var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_5__["getPrefixCls"])('steps');

var Steps = function Steps(props) {
  var _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'horizontal' : _props$direction,
      _props$current = props.current,
      current = _props$current === void 0 ? 0 : _props$current,
      steps = props.steps,
      status = props.status;
  var statusIconType = status === 'error' ? 'roundclosefill' : 'roundcheckfill';
  var statusIconColor = status === 'error' ? '#f5222d' : '#1890FF';

  var getTitle = function getTitle(item, index) {
    if (index === current) {
      if (status === 'error') {
        return item.errorTitle || item.title;
      }
    }

    return item.title;
  };

  if (direction === 'vertical') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: prefixCls
    }, steps === null || steps === void 0 ? void 0 : steps.map(function (item, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
        key: index,
        className: "".concat(prefixCls, "-step")
      }, index === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: "".concat(prefixCls, "-circle_current")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        className: "".concat(prefixCls, "-circle_current-icon")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
        type: "roundcheckfill",
        size: "40px",
        color: "#1890FF"
      }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: "".concat(prefixCls, "-circle")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: "".concat(prefixCls, "-line")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: "".concat(prefixCls, "-step-header")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: "".concat(prefixCls, "-step-header-title")
      }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: "".concat(prefixCls, "-step-header-extra")
      }, item.extra)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: "".concat(prefixCls, "-step-description")
      }, item.description));
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "".concat(prefixCls, "_horizontal")
  }, steps === null || steps === void 0 ? void 0 : steps.map(function (item, index) {
    var _classNames;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      key: index,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "_horizontal-step"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "_horizontal-step-finish"), index <= current - 1), _classNames))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "".concat(prefixCls, "_horizontal-step-container")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "".concat(prefixCls, "_horizontal-step-container-icon")
    }, index < current ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: "roundcheckfill",
      size: "40px",
      color: "#1890FF"
    }) : null, index === current ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: statusIconType,
      size: "40px",
      color: statusIconColor
    }) : null, index > current ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "".concat(prefixCls, "_horizontal-step-container-icon-default")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], null)) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "".concat(prefixCls, "_horizontal-step-container-content")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "".concat(prefixCls, "_horizontal-step-container-content-title")
    }, getTitle(item, index)))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Steps);

/***/ }),

/***/ "./node_modules/annar/esm/swipe-action/index.js":
/*!******************************************************!*\
  !*** ./node_modules/annar/esm/swipe-action/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../one */ "./node_modules/annar/esm/one/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_util */ "./node_modules/annar/esm/_util/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");








var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_7__["getPrefixCls"])('swipe');

var SwipeAction = function SwipeAction(props) {
  var _classNames2;

  var open = props.open,
      _props$options = props.options,
      options = _props$options === void 0 ? [] : _props$options,
      onTouchStart = props.onTouchStart,
      onOpened = props.onOpened,
      onClosed = props.onClosed,
      children = props.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      x = _useState2[0],
      setX = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      origin = _useState4[0],
      setOrigin = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('none'),
      _useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      transition = _useState6[0],
      setTransition = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      startX = _useState8[0],
      setStartX = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
      actionsWidth = _useState10[0],
      setActionsWidth = _useState10[1];

  var swipeId = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return Object(_util__WEBPACK_IMPORTED_MODULE_6__["guid"])();
  }, []);

  var handleActionsWidth = function handleActionsWidth(id) {
    Object(_one__WEBPACK_IMPORTED_MODULE_5__["createSelectorQuery"])() // @ts-ignore
    .select(".".concat(prefixCls, "-actions-").concat(id)).boundingClientRect().exec(function (rect) {
      var _rect$;

      var w = Array.isArray(rect) ? rect === null || rect === void 0 ? void 0 : (_rect$ = rect[0]) === null || _rect$ === void 0 ? void 0 : _rect$.width : rect === null || rect === void 0 ? void 0 : rect.width;
      setActionsWidth(w);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    handleActionsWidth(swipeId);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var width = Number("-".concat(actionsWidth));
    setX(open ? width : 0);
    setOrigin(open ? width : 0);
    setTransition('all 0.3s');
  }, [open]);
  var throttleTouchMove = Object(_util__WEBPACK_IMPORTED_MODULE_6__["throttle"])(function (e) {
    var touch = e.touches[0];
    var currenrX = touch.pageX;
    var diff = currenrX - startX;
    var total = diff + origin;

    if (total >= 0) {
      return;
    }

    setX(total);
  }, 30, {
    trailing: false
  });

  var handleTouchStart = function handleTouchStart(e) {
    // touch当前行时关闭其他行
    onTouchStart === null || onTouchStart === void 0 ? void 0 : onTouchStart(e);
    var touch = e.touches[0];
    setStartX(touch.pageX);
    setTransition('none');
  };

  var handleTouchMove = function handleTouchMove(e) {
    // @ts-ignore
    throttleTouchMove(e);
  };

  var handleTouchEnd = function handleTouchEnd(e) {
    var width = Number("-".concat(actionsWidth));

    if (x >= 0) {
      return;
    }

    if (x > origin) {
      onClosed === null || onClosed === void 0 ? void 0 : onClosed(e);
      setX(0);
      setOrigin(0);
      setTransition('all 0.3s');
      return;
    }

    var x2 = 0;
    var origin2 = 0;

    if (x <= -30) {
      x2 = width;
      origin2 = width;
      onOpened === null || onOpened === void 0 ? void 0 : onOpened(e);
    }

    if (x > -30) {
      x2 = 0;
      origin2 = 0;
      onClosed === null || onClosed === void 0 ? void 0 : onClosed(e);
    }

    setX(x2);
    setOrigin(origin2);
    setTransition('all 0.3s');
  };

  var handleTouchCancel = function handleTouchCancel() {
    var width = Number("-".concat(actionsWidth));
    setX(width);
    setOrigin(width);
  };

  var handleTap = function handleTap(item) {
    var _item$onTap;

    item === null || item === void 0 ? void 0 : (_item$onTap = item.onTap) === null || _item$onTap === void 0 ? void 0 : _item$onTap.call(item, item);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(prefixCls, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-class"), true)) // style={options?.[options.length - 1]?.style}

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-container"),
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    onTouchCancel: handleTouchCancel,
    style: {
      transform: "translate3d(".concat(x, "PX, 0, 0)"),
      //使用transform或导致子级内的fixed直接降级为absolute
      // left: `${x}PX`,
      transition: transition
    }
  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-actions"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-actions-").concat(swipeId), true), _classNames2))
  }, options === null || options === void 0 ? void 0 : options.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
      key: index,
      className: "".concat(prefixCls, "-action"),
      onTap: function onTap() {
        return handleTap(item);
      },
      style: item === null || item === void 0 ? void 0 : item.style
    }, item === null || item === void 0 ? void 0 : item.name);
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SwipeAction);

/***/ }),

/***/ "./node_modules/annar/esm/swiper/index.js":
/*!************************************************!*\
  !*** ./node_modules/annar/esm/swiper/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swiper */ "./node_modules/annar/esm/swiper/swiper.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ "./node_modules/annar/esm/swiper/item.js");


var Swiper = _swiper__WEBPACK_IMPORTED_MODULE_0__["default"];
Swiper.Item = _item__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Swiper);

/***/ }),

/***/ "./node_modules/annar/esm/swiper/item.js":
/*!***********************************************!*\
  !*** ./node_modules/annar/esm/swiper/item.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");




var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_3__["getPrefixCls"])('swiper-item');

var SwiperItem = function SwiperItem(props) {
  var className = props.className,
      style = props.style,
      children = props.children,
      onTap = props.onTap;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(prefixCls, className),
    style: style,
    onTap: onTap
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (SwiperItem);

/***/ }),

/***/ "./node_modules/annar/esm/swiper/swiper.js":
/*!*************************************************!*\
  !*** ./node_modules/annar/esm/swiper/swiper.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _one__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../one */ "./node_modules/annar/esm/one/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_util */ "./node_modules/annar/esm/_util/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");





function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}







var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_9__["getPrefixCls"])('swiper');

var getChildrenNode = function getChildrenNode(children) {
  var _childrenNode;

  var childrenArray = react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.toArray(children);

  if (childrenArray.length <= 1) {
    return childrenArray;
  }

  var childrenNode = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(childrenArray);

  childrenNode.unshift(childrenArray[childrenArray.length - 1]);
  childrenNode.push(childrenArray[0]);
  childrenNode = (_childrenNode = childrenNode) === null || _childrenNode === void 0 ? void 0 : _childrenNode.map(function (child, index) {
    return _objectSpread(_objectSpread({}, child), {}, {
      key: '.' + index
    });
  });
  return childrenNode;
};

var getIndicatorsNode = function getIndicatorsNode(num, current, position, color, style, look) {
  var defaultColor = undefined;
  var activeColor = undefined;

  if (Array.isArray(color)) {
    if (color[0] && typeof color[0] === 'string') {
      activeColor = color[0];
    }

    if (color[1] && typeof color[1] === 'string') {
      defaultColor = color[1];
    }
  }

  if (look === 'dark') {
    activeColor = '#000';
    defaultColor = 'rgba(0, 0, 0, 0.13)';
  }

  if (look === 'anna') {
    activeColor = '#ff7777';
    defaultColor = 'rgba(255, 119, 119, 0.2)';
  }

  var defaultStyle = {};
  var activeStyle = {};

  if (Array.isArray(style)) {
    if (style[0] && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(style[0]) === 'object') {
      activeStyle = style[0];
    }

    if (style[1] && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(style[1]) === 'object') {
      defaultStyle = style[1];
    }
  }

  var activeIndex = current - 1;

  if (current === 1) {
    activeIndex = 0;
  }

  if (current === 0) {
    activeIndex = num - 1;
  }

  if (current > num) {
    activeIndex = 0;
  }

  var indicators = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(new Array(num).keys());

  var indicatorsNode = indicators.map(function (i) {
    var _classNames;

    var indicatorStyle = Object.assign({}, activeIndex === i ? activeStyle : defaultStyle, {
      backgroundColor: activeIndex === i ? activeColor : defaultColor
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_5__["View"], {
      key: i,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("".concat(prefixCls, "-indicator"), (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_classNames, "".concat(prefixCls, "-indicator-").concat(position), position), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_classNames, "".concat(prefixCls, "-indicator-active"), activeIndex === i), _classNames)),
      style: indicatorStyle
    });
  });
  return indicatorsNode;
};

var InternalSwiper = function InternalSwiper(props) {
  var _classNames2;

  var autoplay = props.autoplay,
      _props$autoplayInterv = props.autoplayInterval,
      autoplayInterval = _props$autoplayInterv === void 0 ? 3000 : _props$autoplayInterv,
      _props$duration = props.duration,
      duration = _props$duration === void 0 ? 300 : _props$duration,
      _props$shape = props.shape,
      shape = _props$shape === void 0 ? 'square' : _props$shape,
      size = props.size,
      height = props.height,
      vertical = props.vertical,
      _props$curve = props.curve,
      curve = _props$curve === void 0 ? 'ease' : _props$curve,
      _props$showIndicators = props.showIndicators,
      showIndicators = _props$showIndicators === void 0 ? true : _props$showIndicators,
      _props$indicatorLook = props.indicatorLook,
      indicatorLook = _props$indicatorLook === void 0 ? 'light' : _props$indicatorLook,
      indicatorColor = props.indicatorColor,
      indicatorStyle = props.indicatorStyle,
      _props$indicatorPosit = props.indicatorPosition,
      indicatorPosition = _props$indicatorPosit === void 0 ? vertical ? 'right' : 'bottom' : _props$indicatorPosit,
      style = props.style,
      children = props.children; // Make Special treatment when the number of childNodes is 1

  var childrenArray = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.toArray(children);
  }, [children]);
  var startPoint = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(0);
  var startTime = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(0);
  var sideLength = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(0);
  var swiperId = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(Object(_util__WEBPACK_IMPORTED_MODULE_8__["guid"])());
  var swiperWidth = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(0);
  var swiperHeight = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(0);
  var swiperItemIndex = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(childrenArray.length > 1 ? 1 : 0);
  var origin = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(0);
  var intervalId = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      distance = _useState2[0],
      setDistance = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('none'),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      transition = _useState4[0],
      setTransition = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var getSwiperWidth = function getSwiperWidth() {
      Object(_one__WEBPACK_IMPORTED_MODULE_7__["createSelectorQuery"])() // @ts-ignore
      .select(".".concat(prefixCls, "-id-").concat(swiperId.current)).boundingClientRect().exec(function (rect) {
        var node = Array.isArray(rect) ? rect === null || rect === void 0 ? void 0 : rect[0] : rect;
        swiperWidth.current = node === null || node === void 0 ? void 0 : node.width;
        swiperHeight.current = node === null || node === void 0 ? void 0 : node.height;

        if (vertical) {
          sideLength.current = node === null || node === void 0 ? void 0 : node.height;
        } else {
          sideLength.current = node === null || node === void 0 ? void 0 : node.width;
        }

        if (childrenArray.length > 1) {
          origin.current = -sideLength.current;
          setDistance(origin.current);
        }
      });
    };

    getSwiperWidth();
  }, []); // Seamless switching

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    // if (distance !== (childrenArray.length + 1) * -sideLength.current) {
    //   return;
    // }
    if (swiperItemIndex.current === 0) {
      setTimeout(function () {
        swiperItemIndex.current = childrenArray.length;
        origin.current = swiperItemIndex.current * -sideLength.current;
        setDistance(origin.current);
        setTransition('none');
      }, duration); // Extend 300ms and set the transition to none
    }

    if (swiperItemIndex.current > childrenArray.length) {
      setTimeout(function () {
        swiperItemIndex.current = 1;
        origin.current = swiperItemIndex.current * -sideLength.current;
        setDistance(origin.current);
        setTransition('none');
      }, duration); // Extend 300ms and set the transition to none
    }
  }, [swiperItemIndex.current, duration, distance]); // move

  var move = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (direction) {
    if (direction === 'left') {
      swiperItemIndex.current = swiperItemIndex.current + 1;
    }

    if (direction === 'right') {
      swiperItemIndex.current = swiperItemIndex.current - 1;
    }

    origin.current = swiperItemIndex.current * -sideLength.current;
    setDistance(origin.current);
    setTransition("all ".concat(duration / 1000, "s ").concat(curve));
  }, [swiperItemIndex.current, sideLength.current, duration]); // control autoplay

  var controlAutoplay = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (action) {
    if (action === 'start') {
      if (autoplay && !intervalId.current) {
        intervalId.current = setInterval(function () {
          move('left');
        }, autoplayInterval);
      }
    }

    if (action === 'stop') {
      if (intervalId.current) {
        clearInterval(intervalId.current);
        intervalId.current = null;
      }
    }
  }, [autoplay, autoplayInterval, intervalId.current]); // autoplay

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (!autoplay) {
      controlAutoplay('stop');
    }

    if (intervalId.current) {
      return;
    }

    if (autoplay) {
      controlAutoplay('start');
    }
  }, [autoplay, intervalId.current]);
  var throttleTouchMove = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(Object(_util__WEBPACK_IMPORTED_MODULE_8__["throttle"])(function (e) {
    var touch = e.touches[0];
    var diff = (vertical ? touch.pageY : touch.pageX) - startPoint.current;
    var currDistance = diff + origin.current;

    if (currDistance) {
      setDistance(currDistance);
      setTransition('none');
    }
  }, 10, {
    trailing: false
  }), [startPoint.current, origin.current]);

  var handleTouchStart = function handleTouchStart(e) {
    if (childrenArray.length <= 1) {
      return;
    }

    controlAutoplay('stop');
    var touch = e.touches[0];
    startPoint.current = vertical ? touch.pageY : touch.pageX;
    startTime.current = Date.now();
  };

  var handleTouchMove = function handleTouchMove(e) {
    if (childrenArray.length <= 1) {
      return;
    } // @ts-ignore


    throttleTouchMove(e);
  };

  var handleTouchEnd = function handleTouchEnd(e) {
    if (childrenArray.length <= 1) {
      return;
    }

    var touch = e.changedTouches[0];
    var diff = (vertical ? touch.pageY : touch.pageX) - startPoint.current;
    var speed = diff / (Date.now() - startTime.current);
    var harfSideLength = sideLength.current / 2;
    console.log('speed', speed);

    if (Math.abs(speed) > 0.3) {
      if (diff > 0) {
        move('right');
      }

      if (diff < 0) {
        move('left');
      }
    } else if (harfSideLength < Math.abs(diff)) {
      if (diff > 0) {
        move('right');
      }

      if (diff < 0) {
        move('left');
      }
    } else {
      move();
    }

    controlAutoplay('start');
  };

  var handleTouchCancel = function handleTouchCancel() {
    if (childrenArray.length <= 1) {
      return;
    }

    move();
  };

  var childrenNode = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    return getChildrenNode(children);
  }, [children]);
  var indicatorsNode = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    return getIndicatorsNode(childrenArray.length, swiperItemIndex.current, indicatorPosition, indicatorColor, indicatorStyle, indicatorLook);
  }, [childrenArray.length, swiperItemIndex.current, indicatorPosition, indicatorColor, indicatorStyle, indicatorLook]);
  var classes = classnames__WEBPACK_IMPORTED_MODULE_6___default()(prefixCls, (_classNames2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_classNames2, "".concat(prefixCls, "-id-").concat(swiperId.current), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_classNames2, "".concat(prefixCls, "-").concat(shape), shape), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_classNames2, "".concat(prefixCls, "-").concat(size), size), _classNames2));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: classes,
    style: _objectSpread(_objectSpread({}, style), {}, {
      height: height,
      borderRadius: shape === 'round' ? swiperHeight.current : undefined
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("".concat(prefixCls, "-track"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, "".concat(prefixCls, "-track-vertical"), vertical)),
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    onTouchCancel: handleTouchCancel,
    style: {
      transform: "translate3d(".concat(vertical ? '0, ' + distance + 'PX' : distance + 'PX, 0', ", 0)"),
      transition: transition
    }
  }, childrenNode), showIndicators ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("".concat(prefixCls, "-indicators"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, "".concat(prefixCls, "-indicators-").concat(indicatorPosition), indicatorPosition))
  }, indicatorsNode) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (InternalSwiper);

/***/ }),

/***/ "./node_modules/annar/esm/switch/index.js":
/*!************************************************!*\
  !*** ./node_modules/annar/esm/switch/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../one */ "./node_modules/annar/esm/one/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");






var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_5__["getPrefixCls"])('switch');

var Switch = function Switch(props) {
  var _classNames, _classNames2;

  var checked = props.checked,
      disabled = props.disabled,
      small = props.small,
      onChange = props.onChange;

  var handleChange = function handleChange() {
    if (disabled) {
      return;
    }

    onChange === null || onChange === void 0 ? void 0 : onChange(!checked);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: prefixCls,
    onTap: handleChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_one__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-default"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-checked"), !small && checked), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-checked-small"), small && checked), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames)) // onChange={handleChange}
    ,
    value: checked ? 'on' : 'off',
    checked: checked
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("".concat(prefixCls, "-checkbox"), (_classNames2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-checkbox-small"), small), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-checkbox-disabled"), disabled), _classNames2))
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Switch);

/***/ }),

/***/ "./node_modules/annar/esm/tabs/index.js":
/*!**********************************************!*\
  !*** ./node_modules/annar/esm/tabs/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _one__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../one */ "./node_modules/annar/esm/one/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_util */ "./node_modules/annar/esm/_util/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");




function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}







var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_8__["getPrefixCls"])('tabs');
var heightUnit = 48; // const prevTabs: any[] = [];

var getTabContents = function getTabContents(children, activeKey, animated) {
  var tabContents = [];
  var tabs = [];
  react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.forEach(children, function (node, index) {
    var newNode = node;

    if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.isValidElement(node)) {
      return tabs.push({
        key: newNode.key,
        tab: newNode.props.tab
      }) && tabContents.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(TabContent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
        key: newNode.key
      }, newNode.props, {
        active: activeKey === undefined ? index === 0 && newNode.key : String(activeKey) === newNode.key,
        animated: animated
      })));
    }
  });
  return [tabs, tabContents];
};

var getTabIndex = function getTabIndex(tabs, activeKey) {
  var tIndex = 0;
  tabs.forEach(function (i, index) {
    if (i.key === activeKey) {
      tIndex = index;
    }
  });
  return tIndex;
};

var Tabs = function Tabs(props) {
  var type = props.type,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'horizontal' : _props$direction,
      activeKey = props.activeKey,
      animated = props.animated,
      fixed = props.fixed,
      onTabClick = props.onTabClick,
      headerContent = props.headerContent,
      children = props.children,
      headerStyle = props.headerStyle,
      extra = props.extra,
      titleWidth = props.titleWidth,
      titleSquare = props.titleSquare,
      titleAlign = props.titleAlign; // 针对同一个页面出现两个Tabs，给每个Tabs一个 UniqueID

  var TABS_TITLE_ID = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(_util__WEBPACK_IMPORTED_MODULE_7__["guid"], []);

  var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return getTabContents(children, activeKey, animated);
  }, [children]),
      _useMemo2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMemo, 2),
      tabs = _useMemo2[0],
      tabContents = _useMemo2[1]; // 将 activeKey 实时转化成当前 selected 的Tab，后面都将以 selected 作为当前选择的 Tab 的标志符


  var selected = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return getTabIndex(tabs, activeKey);
  }, [activeKey, tabs]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      titleWrapperLeft = _useState2[0],
      setTitleWrapperLeft = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      titleNodes = _useState4[0],
      setTitleNodes = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (type === 'plain') {
      var _query$select$scrollO, _query$select;

      var query = Object(_one__WEBPACK_IMPORTED_MODULE_6__["createSelectorQuery"])();
      (_query$select$scrollO = (_query$select = query.select(".".concat(prefixCls, "-plain-").concat(TABS_TITLE_ID))).scrollOffset) === null || _query$select$scrollO === void 0 ? void 0 : _query$select$scrollO.call(_query$select).exec(function (ret) {
        var r = Array.isArray(ret) ? ret[0] : ret;
        setTitleWrapperLeft(-((r === null || r === void 0 ? void 0 : r.scrollLeft) || 0));
      });
    }
  }, [activeKey]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (type === 'plain') {
      var query = Object(_one__WEBPACK_IMPORTED_MODULE_6__["createSelectorQuery"])(); // 不加setTimeout的话只能获取部分的nodes(可能是部分 .anna-tabs-plain-title 节点还没来得及渲染出来)

      setTimeout(function () {
        query.selectAll(".".concat(prefixCls, "-plain-").concat(TABS_TITLE_ID, " .").concat(prefixCls, "-plain-title")).boundingClientRect().exec(function (ret) {
          var r = Array.isArray(ret) ? ret[0] : [ret];
          var nodes = (r === null || r === void 0 ? void 0 : r.map(function (i) {
            return {
              offsetLeft: i.left,
              offsetWidth: i.width
            };
          })) || []; // 解决切换tabbar导致页面渲染找不到相关节点(因为此时已经在跳转后一个页面，所以找不到)，从而使nodes这个数组为空，继而导致Tabs下标left重置为0。

          nodes.length > 0 && setTitleNodes(nodes);
        });
      }, 100);
    }
  }, [tabs]);

  var handleTabClick = function handleTabClick(item) {
    onTabClick === null || onTabClick === void 0 ? void 0 : onTabClick(item);
  };

  var activeKeyStr = String(activeKey);

  var renderTabs = function renderTabs() {
    var _classNames4;

    if (type === 'plain') {
      var _classNames;

      var titleNode = (titleNodes === null || titleNodes === void 0 ? void 0 : titleNodes[selected]) || {
        offsetLeft: 0,
        offsetWidth: 0
      }; // 注；此处left的位置是相对于 .anna-tabs-plain 的，不是相对于手机视窗左侧的。所以如果 .anna-tabs-plain 不能
      // 占据视窗width的100%，Tabs的下标位置就会偏右。

      var left = titleNode.offsetLeft + titleNode.offsetWidth / 2; // 解决小程序下无法获取到元素的 offsetLeft 的问题，使用 scrollOffset 来获取 scrollLeft。

      if (titleWrapperLeft < 0) {// left += Math.abs(titleWrapperLeft); //不需要这一步，因为offsetLeft是相对于父元素的，而不是相对于视窗的
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-plain"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-plain-center"), titleAlign === 'center'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-plain-").concat(TABS_TITLE_ID), true), _classNames))
      }, tabs.map(function (item) {
        var _classNames2;

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
          key: item.key,
          className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-plain-title"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-plain-center-title"), titleAlign === 'center'), _classNames2)),
          onTap: function onTap() {
            return handleTabClick(item);
          }
        }, item.tab);
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
        className: "".concat(prefixCls, "-plain-active"),
        style: {
          transform: "translateX(".concat(left, "PX) translateX(-50%)")
        }
      }));
    }

    if (type === 'card') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
        className: "".concat(prefixCls, "-card")
      }, tabs.map(function (item) {
        var _classNames3;

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
          key: item.key,
          className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames3 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(prefixCls, "-card-title"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(prefixCls, "-card-active"), activeKeyStr === item.key), _classNames3)),
          onTap: function onTap() {
            return handleTabClick(item);
          }
        }, item.tab);
      }));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: "".concat(prefixCls, "-slider")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames4 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, "".concat(prefixCls, "-slider-bg"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, "".concat(prefixCls, "-slider-bg-square"), titleSquare), _classNames4))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: "".concat(prefixCls, "-slider-container")
    }, tabs.map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
        key: item.key,
        className: "".concat(prefixCls, "-slider-title"),
        style: {
          fontWeight: activeKeyStr === item.key ? 500 : 400,
          width: titleWidth ? "".concat(titleWidth, "px") : null
        },
        onTap: function onTap() {
          handleTabClick(item);
        }
      }, item.tab);
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: "".concat(prefixCls, "-slider-active"),
      style: {
        width: "".concat(100 / tabs.length, "%"),
        transform: "translateX(".concat(selected * 100, "%)")
      }
    }))), extra);
  };

  if (direction === 'vertical') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: prefixCls
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: "".concat(prefixCls, "-vertical")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: "".concat(prefixCls, "-vertical-sidebar")
    }, tabs === null || tabs === void 0 ? void 0 : tabs.map(function (item, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
        key: item.key,
        className: "".concat(prefixCls, "-vertical-sidebar-item"),
        style: {
          fontWeight: selected === index ? 500 : 400,
          backgroundColor: selected === index ? '#FDFFFD' : '#FAFAFA'
        },
        onTap: function onTap() {
          return handleTabClick(item);
        }
      }, item.tab, selected === index && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
        className: "".concat(prefixCls, "-vertical-sidebar-top")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
        className: "".concat(prefixCls, "-vertical-sidebar-top-circle")
      })), selected === index && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
        className: "".concat(prefixCls, "-vertical-sidebar-bottom")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
        className: "".concat(prefixCls, "-vertical-sidebar-bottom-circle")
      })));
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: "".concat(prefixCls, "-vertical-sidebar-active"),
      style: {
        transform: "translate3d(0, ".concat(selected * heightUnit, "PX, 0)")
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: "".concat(prefixCls, "-vertical-content")
    }, tabContents)));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: prefixCls
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("".concat(prefixCls, "-header"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-header-fixed"), fixed)),
    style: _objectSpread({}, headerStyle)
  }, renderTabs(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-header-content")
  }, headerContent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-content")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-content-wrapper"),
    style: animated ? {
      transition: "all 0.3s ease",
      transform: "translate3d(".concat(-selected * 100, "%, 0, 0)")
    } : {}
  }, tabContents)));
};

var TabContent = function TabContent(props) {
  var active = props.active,
      style = props.style,
      animated = props.animated,
      children = props.children;

  if (!active) {
    var _classNames6;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("".concat(prefixCls, "-content-tab"), (_classNames6 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames6, "".concat(prefixCls, "-content-tab-inactive"), !animated), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames6, "".concat(prefixCls, "-content-tab-inactive-animated"), animated), _classNames6)),
      style: style
    }, children);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-content-tab"),
    style: style
  }, children);
};

Tabs.TabContent = TabContent;
/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ }),

/***/ "./node_modules/annar/esm/tag/index.js":
/*!*********************************************!*\
  !*** ./node_modules/annar/esm/tag/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}





var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_5__["getPrefixCls"])('tag');

var Tag = function Tag(props) {
  var _classNames;

  var color = props.color,
      plain = props.plain,
      size = props.size,
      block = props.block,
      className = props.className,
      style = props.style,
      children = props.children,
      onTap = props.onTap;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(prefixCls, (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-plain"), plain), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-small"), size === 'small'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-large"), size === 'large'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-block"), block), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-").concat(color), color), _classNames), className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: classes,
    style: style,
    onTap: onTap
  }, children);
};

Tag.CheckableTag = function (props) {
  var _classNames2;

  var className = props.className,
      checked = props.checked,
      checkedColor = props.checkedColor,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style,
      disabled = props.disabled,
      onChange = props.onChange,
      children = props.children;
  var height = style.height;
  var tagHeight = height;

  if (typeof height === 'string') {
    if (height.includes('px')) {
      tagHeight = Number(height.slice(0, -2));
    } else {
      tagHeight = Number(height);
    }
  }

  var tagStyle = undefined;

  if (height) {
    tagStyle = _objectSpread(_objectSpread({}, style), {}, {
      lineHeight: "".concat(tagHeight - 4, "px")
    });
  }

  var handleChange = function handleChange() {
    if (disabled) {
      return;
    }

    onChange === null || onChange === void 0 ? void 0 : onChange(!checked);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    size: "large"
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames2, "".concat(prefixCls, "-checkable"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames2, "".concat(prefixCls, "-checked"), checked), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames2, "".concat(prefixCls, "-").concat(checkedColor), checked && checkedColor), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames2, "".concat(prefixCls, "-disabled"), disabled), _classNames2), className),
    style: tagStyle,
    onTap: handleChange
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Tag);

/***/ }),

/***/ "./node_modules/annar/esm/textarea/index.js":
/*!**************************************************!*\
  !*** ./node_modules/annar/esm/textarea/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");





var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_4__["getPrefixCls"])('textarea');

var ATextarea = function ATextarea(props) {
  var _classNames;

  var _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      name = props.name,
      value = props.value,
      placeholder = props.placeholder,
      disabled = props.disabled,
      maxlength = props.maxlength,
      focus = props.focus,
      autoHeight = props.autoHeight,
      showCount = props.showCount,
      _props$rows = props.rows,
      rows = _props$rows === void 0 ? 3 : _props$rows,
      _props$controlled = props.controlled,
      controlled = _props$controlled === void 0 ? false : _props$controlled,
      onChange = props.onChange,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      onConfirm = props.onConfirm;

  var handleChangeInput = function handleChangeInput(e) {
    onChange === null || onChange === void 0 ? void 0 : onChange(e);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: prefixCls
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Textarea"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-default"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, className, true), _classNames)) // @ts-ignore
    ,
    placeholderClass: "".concat(prefixCls, "-placeholder"),
    name: name,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    maxlength: maxlength,
    focus: focus,
    autoHeight: autoHeight,
    showCount: showCount,
    controlled: controlled,
    onInput: handleChangeInput,
    onFocus: onFocus,
    onBlur: onBlur,
    onConfirm: onConfirm,
    rows: rows
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ATextarea);

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/construct.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/construct.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _construct; });
/* harmony import */ var _babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/setPrototypeOf */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_isNativeReflectConstruct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/isNativeReflectConstruct */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");


function _construct(Parent, args, Class) {
  if (Object(_babel_runtime_helpers_esm_isNativeReflectConstruct__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(_babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _isNativeReflectConstruct; });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithHoles */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArrayLimit */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableRest */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithoutHoles */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableSpread */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!******************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/regenerator/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/regenerator/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* istanbul ignore next */
module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* istanbul ignore next */
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

/* global define */
(function () {
  'use strict';

  var hasOwn = {}.hasOwnProperty;

  function classNames() {
    var classes = [];

    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;

      var argType = _typeof(arg);

      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg) && arg.length) {
        var inner = classNames.apply(null, arg);

        if (inner) {
          classes.push(inner);
        }
      } else if (argType === 'object') {
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }

    return classes.join(' ');
  }

  if ( true && module.exports) {
    classNames.default = classNames;
    module.exports = classNames;
  } else if ( true && _typeof(__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) === 'object' && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    // register as 'classnames', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    window.classNames = classNames;
  }
})();

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* istanbul ignore next */
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";

  var t = "millisecond",
      e = "second",
      n = "minute",
      r = "hour",
      i = "day",
      s = "week",
      u = "month",
      a = "quarter",
      o = "year",
      f = "date",
      h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,
      c = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      d = {
    name: "en",
    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
  },
      $ = function $(t, e, n) {
    var r = String(t);
    return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
  },
      l = {
    s: $,
    z: function z(t) {
      var e = -t.utcOffset(),
          n = Math.abs(e),
          r = Math.floor(n / 60),
          i = n % 60;
      return (e <= 0 ? "+" : "-") + $(r, 2, "0") + ":" + $(i, 2, "0");
    },
    m: function t(e, n) {
      if (e.date() < n.date()) return -t(n, e);
      var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
          i = e.clone().add(r, u),
          s = n - i < 0,
          a = e.clone().add(r + (s ? -1 : 1), u);
      return +(-(r + (n - i) / (s ? i - a : a - i)) || 0);
    },
    a: function a(t) {
      return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
    },
    p: function p(h) {
      return {
        M: u,
        y: o,
        w: s,
        d: i,
        D: f,
        h: r,
        m: n,
        s: e,
        ms: t,
        Q: a
      }[h] || String(h || "").toLowerCase().replace(/s$/, "");
    },
    u: function u(t) {
      return void 0 === t;
    }
  },
      y = "en",
      M = {};

  M[y] = d;

  var m = function m(t) {
    return t instanceof S;
  },
      D = function D(t, e, n) {
    var r;
    if (!t) return y;
    if ("string" == typeof t) M[t] && (r = t), e && (M[t] = e, r = t);else {
      var i = t.name;
      M[i] = t, r = i;
    }
    return !n && r && (y = r), r || !n && y;
  },
      v = function v(t, e) {
    if (m(t)) return t.clone();
    var n = "object" == _typeof(e) ? e : {};
    return n.date = t, n.args = arguments, new S(n);
  },
      g = l;

  g.l = D, g.i = m, g.w = function (t, e) {
    return v(t, {
      locale: e.$L,
      utc: e.$u,
      x: e.$x,
      $offset: e.$offset
    });
  };

  var S = function () {
    function d(t) {
      this.$L = D(t.locale, null, !0), this.parse(t);
    }

    var $ = d.prototype;
    return $.parse = function (t) {
      this.$d = function (t) {
        var e = t.date,
            n = t.utc;
        if (null === e) return new Date(NaN);
        if (g.u(e)) return new Date();
        if (e instanceof Date) return new Date(e);

        if ("string" == typeof e && !/Z$/i.test(e)) {
          var r = e.match(h);

          if (r) {
            var i = r[2] - 1 || 0,
                s = (r[7] || "0").substring(0, 3);
            return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
          }
        }

        return new Date(e);
      }(t), this.$x = t.x || {}, this.init();
    }, $.init = function () {
      var t = this.$d;
      this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
    }, $.$utils = function () {
      return g;
    }, $.isValid = function () {
      return !("Invalid Date" === this.$d.toString());
    }, $.isSame = function (t, e) {
      var n = v(t);
      return this.startOf(e) <= n && n <= this.endOf(e);
    }, $.isAfter = function (t, e) {
      return v(t) < this.startOf(e);
    }, $.isBefore = function (t, e) {
      return this.endOf(e) < v(t);
    }, $.$g = function (t, e, n) {
      return g.u(t) ? this[e] : this.set(n, t);
    }, $.unix = function () {
      return Math.floor(this.valueOf() / 1e3);
    }, $.valueOf = function () {
      return this.$d.getTime();
    }, $.startOf = function (t, a) {
      var h = this,
          c = !!g.u(a) || a,
          d = g.p(t),
          $ = function $(t, e) {
        var n = g.w(h.$u ? Date.UTC(h.$y, e, t) : new Date(h.$y, e, t), h);
        return c ? n : n.endOf(i);
      },
          l = function l(t, e) {
        return g.w(h.toDate()[t].apply(h.toDate("s"), (c ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), h);
      },
          y = this.$W,
          M = this.$M,
          m = this.$D,
          D = "set" + (this.$u ? "UTC" : "");

      switch (d) {
        case o:
          return c ? $(1, 0) : $(31, 11);

        case u:
          return c ? $(1, M) : $(0, M + 1);

        case s:
          var v = this.$locale().weekStart || 0,
              S = (y < v ? y + 7 : y) - v;
          return $(c ? m - S : m + (6 - S), M);

        case i:
        case f:
          return l(D + "Hours", 0);

        case r:
          return l(D + "Minutes", 1);

        case n:
          return l(D + "Seconds", 2);

        case e:
          return l(D + "Milliseconds", 3);

        default:
          return this.clone();
      }
    }, $.endOf = function (t) {
      return this.startOf(t, !1);
    }, $.$set = function (s, a) {
      var h,
          c = g.p(s),
          d = "set" + (this.$u ? "UTC" : ""),
          $ = (h = {}, h[i] = d + "Date", h[f] = d + "Date", h[u] = d + "Month", h[o] = d + "FullYear", h[r] = d + "Hours", h[n] = d + "Minutes", h[e] = d + "Seconds", h[t] = d + "Milliseconds", h)[c],
          l = c === i ? this.$D + (a - this.$W) : a;

      if (c === u || c === o) {
        var y = this.clone().set(f, 1);
        y.$d[$](l), y.init(), this.$d = y.set(f, Math.min(this.$D, y.daysInMonth())).$d;
      } else $ && this.$d[$](l);

      return this.init(), this;
    }, $.set = function (t, e) {
      return this.clone().$set(t, e);
    }, $.get = function (t) {
      return this[g.p(t)]();
    }, $.add = function (t, a) {
      var f,
          h = this;
      t = Number(t);

      var c = g.p(a),
          d = function d(e) {
        var n = v(h);
        return g.w(n.date(n.date() + Math.round(e * t)), h);
      };

      if (c === u) return this.set(u, this.$M + t);
      if (c === o) return this.set(o, this.$y + t);
      if (c === i) return d(1);
      if (c === s) return d(7);
      var $ = (f = {}, f[n] = 6e4, f[r] = 36e5, f[e] = 1e3, f)[c] || 1,
          l = this.$d.getTime() + t * $;
      return g.w(l, this);
    }, $.subtract = function (t, e) {
      return this.add(-1 * t, e);
    }, $.format = function (t) {
      var e = this;
      if (!this.isValid()) return "Invalid Date";

      var n = t || "YYYY-MM-DDTHH:mm:ssZ",
          r = g.z(this),
          i = this.$locale(),
          s = this.$H,
          u = this.$m,
          a = this.$M,
          o = i.weekdays,
          f = i.months,
          h = function h(t, r, i, s) {
        return t && (t[r] || t(e, n)) || i[r].substr(0, s);
      },
          d = function d(t) {
        return g.s(s % 12 || 12, t, "0");
      },
          $ = i.meridiem || function (t, e, n) {
        var r = t < 12 ? "AM" : "PM";
        return n ? r.toLowerCase() : r;
      },
          l = {
        YY: String(this.$y).slice(-2),
        YYYY: this.$y,
        M: a + 1,
        MM: g.s(a + 1, 2, "0"),
        MMM: h(i.monthsShort, a, f, 3),
        MMMM: h(f, a),
        D: this.$D,
        DD: g.s(this.$D, 2, "0"),
        d: String(this.$W),
        dd: h(i.weekdaysMin, this.$W, o, 2),
        ddd: h(i.weekdaysShort, this.$W, o, 3),
        dddd: o[this.$W],
        H: String(s),
        HH: g.s(s, 2, "0"),
        h: d(1),
        hh: d(2),
        a: $(s, u, !0),
        A: $(s, u, !1),
        m: String(u),
        mm: g.s(u, 2, "0"),
        s: String(this.$s),
        ss: g.s(this.$s, 2, "0"),
        SSS: g.s(this.$ms, 3, "0"),
        Z: r
      };

      return n.replace(c, function (t, e) {
        return e || l[t] || r.replace(":", "");
      });
    }, $.utcOffset = function () {
      return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
    }, $.diff = function (t, f, h) {
      var c,
          d = g.p(f),
          $ = v(t),
          l = 6e4 * ($.utcOffset() - this.utcOffset()),
          y = this - $,
          M = g.m(this, $);
      return M = (c = {}, c[o] = M / 12, c[u] = M, c[a] = M / 3, c[s] = (y - l) / 6048e5, c[i] = (y - l) / 864e5, c[r] = y / 36e5, c[n] = y / 6e4, c[e] = y / 1e3, c)[d] || y, h ? M : g.a(M);
    }, $.daysInMonth = function () {
      return this.endOf(u).$D;
    }, $.$locale = function () {
      return M[this.$L];
    }, $.locale = function (t, e) {
      if (!t) return this.$L;
      var n = this.clone(),
          r = D(t, e, !0);
      return r && (n.$L = r), n;
    }, $.clone = function () {
      return g.w(this.$d, this);
    }, $.toDate = function () {
      return new Date(this.valueOf());
    }, $.toJSON = function () {
      return this.isValid() ? this.toISOString() : null;
    }, $.toISOString = function () {
      return this.$d.toISOString();
    }, $.toString = function () {
      return this.$d.toUTCString();
    }, d;
  }(),
      p = S.prototype;

  return v.prototype = p, [["$ms", t], ["$s", e], ["$m", n], ["$H", r], ["$W", i], ["$M", u], ["$y", o], ["$D", f]].forEach(function (t) {
    p[t[1]] = function (e) {
      return this.$g(e, t[0], t[1]);
    };
  }), v.extend = function (t, e) {
    return t(e, S, v), v;
  }, v.locale = D, v.isDayjs = m, v.unix = function (t) {
    return v(1e3 * t);
  }, v.en = M[y], v.Ls = M, v.p = {}, v;
});

/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }

  for (var i = 0; i < newInputs.length; i++) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }

  return true;
}

function memoizeOne(resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = areInputsEqual;
  }

  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;

  function memoized() {
    var newArgs = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }

    if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
      return lastResult;
    }

    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  }

  return memoized;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeOne);

/***/ }),

/***/ "./node_modules/remax/ali.js":
/*!***********************************!*\
  !*** ./node_modules/remax/ali.js ***!
  \***********************************/
/*! exports provided: View, ScrollView, Swiper, SwiperItem, MovableView, MovableArea, CoverView, CoverImage, Icon, Text, RichText, Progress, Button, CheckboxGroup, Checkbox, Form, Input, Label, Picker, PickerView, PickerViewColumn, RadioGroup, Radio, Slider, Switch, Textarea, Navigator, Image, Map, Canvas, WebView, Lifestyle, ContactButton, Video, getAppStub, addCardAuth, addPhoneContact, alert, canIUse, chooseAlipayContact, chooseCity, chooseContact, chooseImage, chooseLocation, choosePhoneContact, clearStorage, clearStorageSync, closeBluetoothAdapter, closeSocket, compressImage, confirm, connectBLEDevice, connectSocket, createAnimation, createCanvasContext, createIntersectionObserver, createMapContext, createSelectorQuery, createWebViewContext, datePicker, disconnectBLEDevice, downloadFile, getAuthCode, getAuthUserInfo, getBatteryInfo, getBatteryInfoSync, getBeacons, getBLEDeviceCharacteristics, getBLEDeviceServices, getBluetoothAdapterState, getBluetoothDevices, getClipboard, getConnectedBluetoothDevices, getFileInfo, getImageInfo, getLocation, getNetworkType, getPhoneNumber, getRunData, getRunScene, getSavedFileInfo, getSavedFileList, getScreenBrightness, getServerTime, getSetting, getStorage, getStorageInfo, getStorageInfoSync, getStorageSync, getSystemInfo, getSystemInfoSync, getTitleColor, getUpdateManager, hideAddToDesktopMenu, hideAllAddToDesktopMenu, hideAllFavoriteMenu, hideBackHome, hideFavoriteMenu, hideKeyboard, hideLoading, hideNavigationBarLoading, hideShareMenu, hideTabBar, hideTabBarRedDot, hideToast, loadFontFace, makePhoneCall, multiLevelSelect, navigateBack, navigateBackMiniProgram, navigateTo, navigateToMiniProgram, notifyBLECharacteristicValueChange, offAccelerometerChange, offBLECharacteristicValueChange, offBLEConnectionStateChanged, offBluetoothAdapterStateChange, offBluetoothDeviceFound, offCompassChange, offGyroscopeChange, offMemoryWarning, offNetworkStatusChange, offSocketClose, offSocketError, offSocketMessage, offSocketOpen, offUserCaptureScreen, onAccelerometerChange, onBeaconServiceChange, onBeaconUpdate, onBLECharacteristicValueChange, onBLEConnectionStateChanged, onBluetoothAdapterStateChange, onBluetoothDeviceFound, onCompassChange, onGyroscopeChange, onMemoryWarning, onNetworkStatusChange, onSocketClose, onSocketError, onSocketMessage, onSocketOpen, onUserCaptureScreen, openBluetoothAdapter, openCardDetail, openCardList, openKBVoucherDetail, openLocation, openMerchantCardList, openMerchantTicketList, openMerchantVoucherList, openSetting, openTicketDetail, openTicketList, openVoucherDetail, openVoucherList, optionsSelect, pageScrollTo, previewImage, prompt, readBLECharacteristicValue, redirectTo, reLaunch, removeSavedFile, removeStorage, removeStorageSync, removeTabBarBadge, reportAnalytics, request, rsa, saveFile, saveImage, scan, SDKVersion, sendSocketMessage, setBackgroundColor, setBackgroundTextStyle, setCanPullDown, setClipboard, setKeepScreenOn, setNavigationBar, setOptionMenu, setScreenBrightness, setStorage, setStorageSync, setTabBarBadge, setTabBarItem, setTabBarStyle, showActionSheet, showAuthGuide, showLoading, showNavigationBarLoading, showSharePanel, showTabBar, showTabBarRedDot, showToast, startBeaconDiscovery, startBluetoothDevicesDiscovery, startPullDownRefresh, startZMVerify, stopBeaconDiscovery, stopBluetoothDevicesDiscovery, stopPullDownRefresh, switchTab, textRiskIdentification, tradePay, uploadFile, vibrate, vibrateLong, vibrateShort, watchShake, writeBLECharacteristicValue, createVideoContext, getOpenUserInfo, httpRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_ali__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/ali */ "./node_modules/@remax/ali/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["View"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["ScrollView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["Swiper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwiperItem", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["SwiperItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableView", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["MovableView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableArea", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["MovableArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverView", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["CoverView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverImage", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["CoverImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["Icon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["Text"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichText", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["RichText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["Progress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["CheckboxGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["Checkbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["Form"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["Label"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["Picker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerView", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["PickerView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerViewColumn", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["PickerViewColumn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["RadioGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["Radio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["Slider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["Switch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["Textarea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["Navigator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["Image"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["Map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["Canvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["WebView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lifestyle", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["Lifestyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactButton", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["ContactButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["Video"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAppStub", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["getAppStub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addCardAuth", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["addCardAuth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addPhoneContact", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["addPhoneContact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alert", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["alert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canIUse", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["canIUse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseAlipayContact", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["chooseAlipayContact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseCity", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["chooseCity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseContact", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["chooseContact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseImage", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["chooseImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseLocation", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["chooseLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "choosePhoneContact", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["choosePhoneContact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearStorage", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["clearStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearStorageSync", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["clearStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeBluetoothAdapter", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["closeBluetoothAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeSocket", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["closeSocket"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compressImage", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["compressImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "confirm", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["confirm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectBLEDevice", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["connectBLEDevice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectSocket", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["connectSocket"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAnimation", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["createAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCanvasContext", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["createCanvasContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createIntersectionObserver", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["createIntersectionObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMapContext", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["createMapContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelectorQuery", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["createSelectorQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createWebViewContext", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["createWebViewContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "datePicker", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["datePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disconnectBLEDevice", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["disconnectBLEDevice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["downloadFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAuthCode", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["getAuthCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAuthUserInfo", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["getAuthUserInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBatteryInfo", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["getBatteryInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBatteryInfoSync", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["getBatteryInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBeacons", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["getBeacons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBLEDeviceCharacteristics", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["getBLEDeviceCharacteristics"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBLEDeviceServices", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["getBLEDeviceServices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBluetoothAdapterState", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["getBluetoothAdapterState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBluetoothDevices", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["getBluetoothDevices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getClipboard", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["getClipboard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConnectedBluetoothDevices", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["getConnectedBluetoothDevices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFileInfo", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["getFileInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getImageInfo", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["getImageInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["getLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNetworkType", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["getNetworkType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPhoneNumber", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["getPhoneNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRunData", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["getRunData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRunScene", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["getRunScene"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSavedFileInfo", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["getSavedFileInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSavedFileList", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["getSavedFileList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScreenBrightness", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["getScreenBrightness"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getServerTime", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["getServerTime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSetting", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["getSetting"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorage", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["getStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageInfo", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["getStorageInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageInfoSync", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["getStorageInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageSync", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["getStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSystemInfo", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["getSystemInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSystemInfoSync", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["getSystemInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTitleColor", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["getTitleColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUpdateManager", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["getUpdateManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideAddToDesktopMenu", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["hideAddToDesktopMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideAllAddToDesktopMenu", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["hideAllAddToDesktopMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideAllFavoriteMenu", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["hideAllFavoriteMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideBackHome", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["hideBackHome"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideFavoriteMenu", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["hideFavoriteMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideKeyboard", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["hideKeyboard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideLoading", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["hideLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideNavigationBarLoading", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["hideNavigationBarLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideShareMenu", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["hideShareMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideTabBar", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["hideTabBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideTabBarRedDot", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["hideTabBarRedDot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideToast", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["hideToast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadFontFace", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["loadFontFace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makePhoneCall", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["makePhoneCall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "multiLevelSelect", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["multiLevelSelect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateBack", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["navigateBack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateBackMiniProgram", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["navigateBackMiniProgram"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["navigateTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateToMiniProgram", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["navigateToMiniProgram"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notifyBLECharacteristicValueChange", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["notifyBLECharacteristicValueChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offAccelerometerChange", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["offAccelerometerChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offBLECharacteristicValueChange", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["offBLECharacteristicValueChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offBLEConnectionStateChanged", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["offBLEConnectionStateChanged"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offBluetoothAdapterStateChange", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["offBluetoothAdapterStateChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offBluetoothDeviceFound", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["offBluetoothDeviceFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offCompassChange", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["offCompassChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offGyroscopeChange", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["offGyroscopeChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offMemoryWarning", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["offMemoryWarning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offNetworkStatusChange", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["offNetworkStatusChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offSocketClose", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["offSocketClose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offSocketError", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["offSocketError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offSocketMessage", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["offSocketMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offSocketOpen", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["offSocketOpen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offUserCaptureScreen", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["offUserCaptureScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAccelerometerChange", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["onAccelerometerChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeaconServiceChange", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["onBeaconServiceChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeaconUpdate", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["onBeaconUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBLECharacteristicValueChange", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["onBLECharacteristicValueChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBLEConnectionStateChanged", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["onBLEConnectionStateChanged"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBluetoothAdapterStateChange", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["onBluetoothAdapterStateChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBluetoothDeviceFound", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["onBluetoothDeviceFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onCompassChange", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["onCompassChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onGyroscopeChange", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["onGyroscopeChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onMemoryWarning", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["onMemoryWarning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onNetworkStatusChange", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["onNetworkStatusChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketClose", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["onSocketClose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketError", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["onSocketError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketMessage", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["onSocketMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketOpen", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["onSocketOpen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onUserCaptureScreen", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["onUserCaptureScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openBluetoothAdapter", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["openBluetoothAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openCardDetail", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["openCardDetail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openCardList", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["openCardList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openKBVoucherDetail", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["openKBVoucherDetail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openLocation", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["openLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openMerchantCardList", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["openMerchantCardList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openMerchantTicketList", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["openMerchantTicketList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openMerchantVoucherList", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["openMerchantVoucherList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openSetting", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["openSetting"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openTicketDetail", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["openTicketDetail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openTicketList", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["openTicketList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openVoucherDetail", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["openVoucherDetail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openVoucherList", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["openVoucherList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "optionsSelect", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["optionsSelect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pageScrollTo", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["pageScrollTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "previewImage", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["previewImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prompt", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["prompt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readBLECharacteristicValue", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["readBLECharacteristicValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["redirectTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reLaunch", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["reLaunch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeSavedFile", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["removeSavedFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeStorage", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["removeStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeStorageSync", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["removeStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeTabBarBadge", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["removeTabBarBadge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reportAnalytics", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["reportAnalytics"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "request", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["request"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rsa", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["rsa"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveFile", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["saveFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveImage", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["saveImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["scan"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKVersion", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["SDKVersion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendSocketMessage", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["sendSocketMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBackgroundColor", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["setBackgroundColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBackgroundTextStyle", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["setBackgroundTextStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCanPullDown", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["setCanPullDown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setClipboard", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["setClipboard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setKeepScreenOn", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["setKeepScreenOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setNavigationBar", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["setNavigationBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setOptionMenu", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["setOptionMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setScreenBrightness", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["setScreenBrightness"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setStorage", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["setStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setStorageSync", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["setStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabBarBadge", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["setTabBarBadge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabBarItem", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["setTabBarItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabBarStyle", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["setTabBarStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showActionSheet", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["showActionSheet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showAuthGuide", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["showAuthGuide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showLoading", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["showLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showNavigationBarLoading", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["showNavigationBarLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showSharePanel", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["showSharePanel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showTabBar", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["showTabBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showTabBarRedDot", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["showTabBarRedDot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showToast", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["showToast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startBeaconDiscovery", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["startBeaconDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startBluetoothDevicesDiscovery", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["startBluetoothDevicesDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startPullDownRefresh", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["startPullDownRefresh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startZMVerify", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["startZMVerify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopBeaconDiscovery", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["stopBeaconDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopBluetoothDevicesDiscovery", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["stopBluetoothDevicesDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopPullDownRefresh", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["stopPullDownRefresh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchTab", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["switchTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textRiskIdentification", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["textRiskIdentification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tradePay", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["tradePay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uploadFile", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["uploadFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vibrate", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["vibrate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vibrateLong", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["vibrateLong"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vibrateShort", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["vibrateShort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchShake", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["watchShake"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "writeBLECharacteristicValue", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["writeBLECharacteristicValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createVideoContext", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["createVideoContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOpenUserInfo", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["getOpenUserInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "httpRequest", function() { return _remax_ali__WEBPACK_IMPORTED_MODULE_0__["httpRequest"]; });



/***/ }),

/***/ "./node_modules/remax/one.js":
/*!***********************************!*\
  !*** ./node_modules/remax/one.js ***!
  \***********************************/
/*! exports provided: Button, Form, Image, Input, Label, Navigator, Text, Textarea, View, WebView, navigateTo, navigateBack, redirectTo, reLaunch, switchTab, Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_one__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/one */ "./node_modules/@remax/one/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["Form"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["Image"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["Label"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["Navigator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["Text"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["Textarea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["View"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["WebView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["navigateTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateBack", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["navigateBack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["redirectTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reLaunch", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["reLaunch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchTab", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["switchTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["Modal"]; });



/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* istanbul ignore next */
/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./src/pages/cloud/Cloud.tsx":
/*!***********************************!*\
  !*** ./src/pages/cloud/Cloud.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Cloud = function Cloud(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user"
  }, "Cloud");
};

/* harmony default export */ __webpack_exports__["default"] = (Cloud);

/***/ }),

/***/ "./src/pages/component/Carousel/Carousel.less":
/*!****************************************************!*\
  !*** ./src/pages/component/Carousel/Carousel.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/component/Carousel/Carousel.tsx":
/*!***************************************************!*\
  !*** ./src/pages/component/Carousel/Carousel.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Carousel_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Carousel.less */ "./src/pages/component/Carousel/Carousel.less");
/* harmony import */ var _Carousel_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Carousel_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var annar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! annar */ "./node_modules/annar/esm/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Carousel = function Carousel(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      image = _useState2[0],
      setImage = _useState2[1];

  var baseItemStyle = {
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '36px',
    height: '100%'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(annar__WEBPACK_IMPORTED_MODULE_2__["Swiper"], {
    autoplay: true,
    indicatorLook: props.indicatorLook || 'dark',
    height: props.height || '300px'
  }, props.images && props.images.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(annar__WEBPACK_IMPORTED_MODULE_2__["Swiper"].Item, {
      key: index,
      style: baseItemStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'carousel-item',
      style: {
        backgroundColor: item.bgColor
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "carousel-img",
      src: item.url,
      alt: "\u672A\u627E\u5230\u56FE\u7247"
    })));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ }),

/***/ "./src/pages/component/SvgIcon/SvgIcon.less":
/*!**************************************************!*\
  !*** ./src/pages/component/SvgIcon/SvgIcon.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/component/SvgIcon/SvgIcon.tsx":
/*!*************************************************!*\
  !*** ./src/pages/component/SvgIcon/SvgIcon.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SvgIcon_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SvgIcon.less */ "./src/pages/component/SvgIcon/SvgIcon.less");
/* harmony import */ var _SvgIcon_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SvgIcon_less__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var SvgIcon = function SvgIcon(props) {
  var type = props.type,
      _props$size = props.size,
      size = _props$size === void 0 ? 16 : _props$size,
      _props$color = props.color,
      color = _props$color === void 0 ? '#333' : _props$color,
      width = props.width,
      height = props.height;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "svg-icon",
    style: _objectSpread({
      width: width || size + 'px',
      height: height || size + 'px'
    }, props.style)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: {
      width: '100%',
      height: '100%'
    },
    src: "/svg/".concat(type, ".svg"),
    alt: ""
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SvgIcon);

/***/ }),

/***/ "./src/pages/component/context/Context.less":
/*!**************************************************!*\
  !*** ./src/pages/component/context/Context.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/component/context/Context.tsx":
/*!*************************************************!*\
  !*** ./src/pages/component/context/Context.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_cloud_Cloud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/pages/cloud/Cloud */ "./src/pages/cloud/Cloud.tsx");
/* harmony import */ var _pages_find_Find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/pages/find/Find */ "./src/pages/find/Find.tsx");
/* harmony import */ var _pages_user_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/pages/user/User */ "./src/pages/user/User.tsx");
/* harmony import */ var _pages_video_Video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pages/video/Video */ "./src/pages/video/Video.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Context_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Context.less */ "./src/pages/component/context/Context.less");
/* harmony import */ var _Context_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Context_less__WEBPACK_IMPORTED_MODULE_5__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Context = function Context(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('#ffffff'),
      _useState2 = _slicedToArray(_useState, 2),
      backgroundColor = _useState2[0],
      setBackgroundColor = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (props.menu === '1') {
      setBackgroundColor('');
    } else {
      setBackgroundColor('#ffffff');
    }
  }, [props.menu]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "context",
    style: {
      backgroundColor: backgroundColor
    }
  }, props.menu === '1' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_pages_user_User__WEBPACK_IMPORTED_MODULE_2__["default"], null) : props.menu === '2' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_pages_find_Find__WEBPACK_IMPORTED_MODULE_1__["default"], null) : props.menu === '3' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_pages_cloud_Cloud__WEBPACK_IMPORTED_MODULE_0__["default"], null) : props.menu === '4' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_pages_video_Video__WEBPACK_IMPORTED_MODULE_3__["default"], null) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Context);

/***/ }),

/***/ "./src/pages/component/footer/Footer.less":
/*!************************************************!*\
  !*** ./src/pages/component/footer/Footer.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/component/footer/Footer.tsx":
/*!***********************************************!*\
  !*** ./src/pages/component/footer/Footer.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var annar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! annar */ "./node_modules/annar/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer.less */ "./src/pages/component/footer/Footer.less");
/* harmony import */ var _Footer_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Footer_less__WEBPACK_IMPORTED_MODULE_2__);




var Footer = function Footer(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "footer-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "footer-image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2420744160,4087949052&fm=26&gp=0.jpg",
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "footer-label"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "footer-progress"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(annar__WEBPACK_IMPORTED_MODULE_0__["Progress"], {
    percent: 50,
    shape: "sharp",
    width: 40
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "footer-menu"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/pages/component/header/Header.less":
/*!************************************************!*\
  !*** ./src/pages/component/header/Header.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/component/header/Header.tsx":
/*!***********************************************!*\
  !*** ./src/pages/component/header/Header.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SvgIcon_SvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SvgIcon/SvgIcon */ "./src/pages/component/SvgIcon/SvgIcon.tsx");
/* harmony import */ var _Header_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.less */ "./src/pages/component/header/Header.less");
/* harmony import */ var _Header_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_less__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Header = function Header(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('2'),
      _useState2 = _slicedToArray(_useState, 2),
      currentTab = _useState2[0],
      setCurrentTab = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    id: '1',
    title: '我的',
    new: false
  }, {
    id: '2',
    title: '发现',
    new: false
  }, {
    id: '3',
    title: '云村',
    new: false
  }, {
    id: '4',
    title: '视频',
    new: true
  }]),
      _useState4 = _slicedToArray(_useState3, 2),
      tabs = _useState4[0],
      setTabs = _useState4[1];

  function changeTab(id) {
    tabs.forEach(function (item) {
      if (item.id === id) {
        item.new = false;
      }
    });
    setTabs(tabs);
    setCurrentTab(id);
    props.ocChangeTab && props.ocChangeTab(id);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon_SvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "menu",
    size: "48"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-tabs"
  }, tabs && tabs.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: item.id,
      onClick: function onClick() {
        return changeTab(item.id);
      },
      className: currentTab === item.id ? 'tab active' : 'tab'
    }, item.title, item.new ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "new"
    }) : null);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-search"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon_SvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "search",
    size: "48"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/pages/find/Find.less":
/*!**********************************!*\
  !*** ./src/pages/find/Find.less ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/find/Find.tsx":
/*!*********************************!*\
  !*** ./src/pages/find/Find.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/Carousel/Carousel */ "./src/pages/component/Carousel/Carousel.tsx");
/* harmony import */ var _component_SvgIcon_SvgIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/SvgIcon/SvgIcon */ "./src/pages/component/SvgIcon/SvgIcon.tsx");
/* harmony import */ var _Find_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Find.less */ "./src/pages/find/Find.less");
/* harmony import */ var _Find_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Find_less__WEBPACK_IMPORTED_MODULE_4__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Find = function Find(props) {
  var images = [{
    url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2420744160,4087949052&fm=26&gp=0.jpg',
    name: '1',
    bgColor: '#999'
  }, {
    url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1723782218,71054171&fm=26&gp=0.jpg',
    name: '2',
    bgColor: '#666'
  }, {
    url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4256956787,1960961286&fm=26&gp=0.jpg',
    name: '3',
    bgColor: '#333'
  }];
  var menus = [{
    url: 'date',
    id: 0,
    label: '每日推荐'
  }, {
    url: 'redio',
    id: 1,
    label: '私人FM'
  }, {
    url: 'music',
    id: 2,
    label: '歌单'
  }, {
    url: 'stats',
    id: 3,
    label: '排行榜'
  }, {
    url: 'audio',
    id: 4,
    label: '直播'
  }, {
    url: 'radio',
    id: 5,
    label: '电台'
  }, {
    url: 'digital-ocean',
    id: 6,
    label: '数字专辑'
  }, {
    url: 'chat',
    id: 7,
    label: '畅聊'
  }, {
    url: 'game',
    id: 8,
    label: '游戏专区'
  }];
  var menusWidth = menus.length * 140 + 20;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      open1 = _React$useState4[0],
      setOpen1 = _React$useState4[1];

  var handleOpen = function handleOpen() {
    setOpen(true);
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  var handleDelete = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('Delete');

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleDelete() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "user"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_component_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    images: images,
    timeOut: 2
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "user-find"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "find-inner",
    style: {
      width: menusWidth + 'px'
    }
  }, menus && menus.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: item.id,
      className: "flex"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flex-div"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_component_SvgIcon_SvgIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: item.url,
      size: "100",
      style: {
        backgroundColor: 'red',
        borderRadius: '50%',
        padding: '20px'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "flex-label",
      htmlFor: item.lebel
    }, item.label)));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Find);

/***/ }),

/***/ "./src/pages/index/index.css?modules":
/*!*******************************************!*\
  !*** ./src/pages/index/index.css?modules ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"app":"app___2lhPP","logo":"logo___Al4Xb","logo-spin":"logo-spin___3_EwH","text":"text___XEtZ5"};

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css?modules */ "./src/pages/index/index.css?modules");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css_modules__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/header/Header */ "./src/pages/component/header/Header.tsx");
/* harmony import */ var _component_context_Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/context/Context */ "./src/pages/component/context/Context.tsx");
/* harmony import */ var _component_footer_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/footer/Footer */ "./src/pages/component/footer/Footer.tsx");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var _page = function _page() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"]('2'),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      menu = _React$useState2[0],
      setMenu = _React$useState2[1];

  function onChangeTab(id) {
    setMenu(id);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default.a.app
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_component_header_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ocChangeTab: function ocChangeTab(id) {
      return onChangeTab(id);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_component_context_Context__WEBPACK_IMPORTED_MODULE_5__["default"], {
    menu: menu
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_component_footer_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], null));
}; // 这个咋启动 骑一下


_page.displayName = "Page[pages/index/index]";
/* harmony default export */ __webpack_exports__["default"] = (Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_page, "pages/index/index")));

/***/ }),

/***/ "./src/pages/user/User.tsx":
/*!*********************************!*\
  !*** ./src/pages/user/User.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var User = function User(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user"
  }, "user");
};

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./src/pages/video/Video.tsx":
/*!***********************************!*\
  !*** ./src/pages/video/Video.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Video = function Video(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user"
  }, "video");
};

/* harmony default export */ __webpack_exports__["default"] = (Video);

/***/ }),

/***/ 1:
/*!*****************************************!*\
  !*** multi ./src/pages/index/index.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hongchao.yan/Desktop/project/react-android/react/my-app/src/pages/index/index.tsx */"./src/pages/index/index.tsx");


/***/ })

},[[1,"runtime","remax-vendors"]]]);