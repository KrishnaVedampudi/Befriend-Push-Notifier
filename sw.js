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
      subscribe: "Recieve Job Requests from Customers", /* Prompt's text when not subscribed */
      unsubscribe: "Unsubscribe from push notifications", 
      explanation: "Hi, Please click Recieve job requests so that any customer will notify you if they need you", /* Optional text appearing before the prompt button */
    },
    unsubscribeEnabled: false,
  }
}
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
  if(message != null)
  {  
    OneSignal.push(function()
     {    
       OneSignal.isPushNotificationsEnabled(function(isEnabled)
           {
              if(isEnabled == true)
                {
                 OneSignal.push(function(userId)                                    
                   {
                     ThunkableWebviewerExtension.postMessage(userId);
                  });
               }else
                {
                  console.log('user not subscribed');
                  ThunkableWebviewerExtension.postMessage('not subscribed');
                }
          });
     });    
    }else
    {    
      console.log('no call was recieved');
    }  
  });  

