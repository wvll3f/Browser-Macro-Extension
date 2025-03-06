console.log('Macro Manager Extension Background Script Running');

chrome.runtime.onInstalled.addListener(() => {
  console.log('Macro Manager Extension installed');
});