var x = "";
window.OneSignal = window.OneSignal || [];
OneSignal.push(function() {
  OneSignal.init({
    appId: "2e7a2add-017c-4365-8d3c-9ffe6b62582f",  
   
promptOptions: {
  customlink: {
    enabled: true,
    style: "button", 
    size: "medium", 
    color: {
      button: '#E12D30', 
      text: '#FFFFFF',
    },
    text: {
      subscribe: "Subscribe from push notifications", /* Prompt's text when not subscribed */
      unsubscribe: "Unsubscribe from push notifications", 
      explanation: "Hi, please click subscribe to get updates on new news", /* Optional text appearing before the prompt button */
    },
    unsubscribeEnabled: true,
  }
},    
    welcomeNotification: {
      "title" :"A message from befriend O'bot",
      "message": "Thanks for joining befriend. This is a place where professionals like you and customers meet together.",
     "url": "https://www.google.com" 
    }
  });
});
ThunkableWebviewerExtension.receiveMessage(function(message)
{
    OneSignal.push(function()
      {
      OneSignal.isPushNotificationsEnabled(function(isEnabled)
         {
             if(message == "for testing" && isEnabled == true)
                 {  
                    OneSignal.push(function()
                        {   
                            OneSignal.getUserId(function(userId)                                    
                                {
                                    ThunkableWebviewerExtension.postMessage(userId);
                                });              
                        });      
                 }      
         });
     });
 });  
