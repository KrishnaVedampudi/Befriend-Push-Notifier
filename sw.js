var x = "";
window.OneSignal = window.OneSignal || [];
OneSignal.push(function() {
  OneSignal.init({
    appId: "2e7a2add-017c-4365-8d3c-9ffe6b62582f",
    notifyButton: {
      enable: true,
    },
    subdomainName : "befriend",
    welcomeNotification: {
      "title" :"A message from befriend O'bot",
      "message": "Thanks for joining befriend. This is a place where professionals like you and customers meet together.",
     "url": "https://www.google.com" 
    }
  });
  });
ThunkableWebviewerExtension.receiveMessage(function(message)
  {
     x = message;
  });


function prompt()
{
   OneSignal.setSubscription(true);
  OneSignal.getUserId(function(userId){   
   
    console.log(userId);
    OneSignal.setExternalUserId();
    });
}  

function render()
{  
  OneSignal.push(function(){
    OneSignal.showNativePrompt();
  });  
  prompt();
}        
