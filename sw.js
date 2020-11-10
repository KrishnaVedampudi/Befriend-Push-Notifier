window.OneSignal = window.OneSignal || [];
OneSignal.push(function() {
  OneSignal.init({
    appId: "2e7a2add-017c-4365-8d3c-9ffe6b62582f",
    notifyButton: {
      enable: true,
    },
    subdomainName: "befriend",
    welcomeNotification: {
      "title" :"A message from befriend O'bot",
      "message": "Thanks for joining befriend. This is a place where professionals like you and customers meet together.",
     "url": "https://www.google.com" 
    }
  });
  });
  var x12;
  OneSignal.setSubscription(true);
  OneSignal.getUserId(function(userId,x12)
    {      
      if(x12 == 1){
        console.log(x12);
        x12 = 0;        
      }else{      
      ThunkableWebviewerExtension.postMessage(userId);
      }
    });  
    ThunkableWebviewerExtension.receiveMessage(function(message,x12) {
       function sendMessage ()
     {         
    var xpy =  localStorage.getItem(message);
     OneSignal.getUserId(function() {                    
          web_buttons=[
           {
           "id":"Yes",
           "text":"I am willing" 
           },
           {
             "id":"NO",
             "text":"I am not willing"
           }]                 
          const body = {    
           "app_id": "2e7a2add-017c-4365-8d3c-9ffe6b62582f",
           "include_player_ids":[xpy],
           "channel_for_external_user_ids": "push",
           "data": {"foo": "bar"},           
           "contents": {"en": "Hello, someone is waiting for you!!!! If you want to aceept the job request, click on I am willing"},
           "web_buttons": web_buttons
          }           
          fetch('https://onesignal.com/api/v1/notifications', {
                  method: 'POST',
                 body: JSON.stringify(body),
                  headers: {               
                     'Content-type': 'application/json; charset=UTF-8',
                     'Authorization': 'Basic YzE0ZDk1NzYtYTExNS00YmMzLTk4ZWItMWFlOTNiNzA5NTJm'}
             }).then(response => response.json())
              .then(json => {
                 console.log(json);
              });
            });
          }
x12 = 1;
if(message == null){
  console.log(message);
}else{
    var ty = localStorage.getItem(message);
      if(ty == null){
      OneSignal.getUserId(function(userId){    
      localStorage.setItem(message,userId);
      });
    }else{     
      sendMessage();
      OneSignal.push(["addListenerForNotificationOpened", function(event) {       
        if (event.action === 'Yes') { 
      
          ThunkableWebviewerExtension.postMessage(ty);
          
        } else if (event.action === 'No') {
          
          //if no one clicks the yes then it will send thanks for your immediate reply!
          alert("Thanks for your immediate reply");                
        }
      }]);
    }}});
    
