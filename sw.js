window.OneSignal = window.OneSignal || [];
OneSignal.push(function() {
  OneSignal.init({
    appId: "2e7a2add-017c-4365-8d3c-9ffe6b62582f",
    notifyButton: {
      enable: true,
    },
    subdomainName: "befriend",
    welcomeNotification: {
      "title": 'Hi, Thanks for joining the befriend',
      "message": "Thanks for joining befriend dashboard, submit your login ID to see the statistics and ratings that were given to you!",
     "url": "https://www.google.com" 
    }
  });
  });
  //many things are there and I can't remeber for which purpose I used this for!

  //So, this is just to set subscription to true
  OneSignal.setSubscription(true);
//this is to get the userId of current user who is using
  OneSignal.getUserId(function(userId)
    {      
      //this will send the userId to thunkable
      ThunkableWebviewerExtension.postMessage(userId);
    });
    //this will trigger if the server recieves a message
    ThunkableWebviewerExtension.receiveMessage(function(message) {

    var ty = localStorage.getItem(message);
  // if the user is not registered then it will register   
      if(ty == null){
      OneSignal.getUserId(function(userId){    
      localStorage.setItem(message,userId);
      });
    }else{
      // if the user is registered then it will send notification
      sendMessage();
      OneSignal.push(["addListenerForNotificationOpened", function(event) {       
        if (event.action === 'Yes') { 
      
          ThunkableWebviewerExtension.postMessage(ty);
          
        } else if (event.action === 'No') {
          
          //if no one clicks the yes then it will send thanks for your immediate reply!
          alert("Thanks for your immediate reply");                
        }
      }]);
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
               });})}}});   
    