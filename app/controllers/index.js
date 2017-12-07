
function createRow(i) {
    var card = Ti.UI.Android.createCardView({
        contentPadding: 20,
        cardCornerRadius: 10,
        cardUseCompatPadding: true,
        elevation: 5,
        top: 10,
        backgroundColor: "#ffffff",
        borderColor:"#ff00ff",
        borderWidth :5,
        borderRadius:5
    });
    var view = Ti.UI.createView({
    	layout:'vertical',
    	height: Ti.UI.SIZE,
    	width: Ti.UI.SIZE
    });
    var label = Ti.UI.createLabel({
        color:'black',
        text: 'A long',
        bottom: '10dp'
    });
    // Create an ImageView.
    var anImageView = Ti.UI.createImageView({
        image : '/instagram/instagram.png',
        width : '25dp',
        height : '30dp',
        top : '30dp',
        bottom : '10dp',
        right : '20dp',
        left : '20dp'
    });
    anImageView.addEventListener('load', function() {
        Ti.API.info('Image loaded!');
    });
    
    // Add to the parent view.
    view.add(anImageView);
    
    view.add(label);

	card.add(view);

    return card;
}

var scrollView = Ti.UI.createScrollView({
    layout: 'vertical',
});

for (var i = 0; i <= 20; i++) {
    var row = createRow(i);
    scrollView.add(row);
}
//$.myWin.add(scrollView);
$.myWin.open();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////Facebook Login/////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var fb = require('facebook');
	//
	// Login Status
	//
	var label = Ti.UI.createLabel({
		text:'Logged In = ' + fb.loggedIn,
		color: '#000',
		font:{fontSize:20},
		top:10,
		textAlign:'center'
	});
	$.myWin.add(label);
		
	fb.addEventListener('login',function(e) {
		// You *will* get this event if loggedIn == false below
     	// Make sure to handle all possible cases of this event
     	//alert("clicked");
     	if (e.success) {
 			Ti.API.log('login from uid: '+e.uid+' name: '+JSON.parse(e.data).name + JSON.stringify(JSON.parse(e.data)));
 			label.text = 'Logged In = ' + fb.loggedIn;
 			 // fb.requestWithGraphPath("me?fields=name,email,first_name,last_name", {}, 'GET', function(e) {
// 
                // var data = JSON.parse(e.result);
                // Ti.API.info("-- email: " + data.email);
                // Ti.API.info("-- data" + JSON.stringify(data));
            // });
            
            fb.requestWithGraphPath('me/groups', {}, 'GET',  function(e) {
        if (!e.success) {
            if (e.error) {
                alert(e.error);
            } else {
                alert("call was unsuccessful");
            }
            return;
        }
        var result = JSON.parse(e.result).data;
    });
            
            
     	}
     	else if (e.cancelled) {
       		// user cancelled 
       		alert('cancelled');
     	}
     	else {
       		alert(e.error);   		
     	}
  	});
	fb.addEventListener('logout', function(e) {
		alert('logged out');
		label.text = 'Logged In = ' + fb.loggedIn;
  	});
	
	var loginButton = fb.createLoginButton({
		readPermissions: ['public_profile', 'email', 'user_birthday'],
		top: 260
	});
	
	fb.setLoginBehavior(fb.LOGIN_BEHAVIOR_BROWSER);
	
	//Android's LoginButton width shouldn't be fixed
	if (Ti.Platform.osname != 'android') {
		loginButton.width = 200;
	} 
	
	loginButton.readPermissions = ['email','public_profile', 'user_birthday'];
	$.myWin.add(loginButton); 


	var loginButton = Ti.UI.createButton({
		title:'Custom Log in',
		top:50,
		width:160,
		height:40
	});
	$.myWin.add(loginButton);
	
	loginButton.addEventListener('click', function() {
  		if (!fb.loggedIn) {
  		// then you want to show a login UI
  			fb.authorize();
  		}
	});
	
		var logoutButton = Ti.UI.createButton({
		title:'Custom Logout',
		top:100,
		width:160,
		height:40
	});
	$.myWin.add(logoutButton);
		
	logoutButton.addEventListener('click', function() {
		if(fb.loggedIn) {
			fb.logout();
		}
	});
	
	var permissionsButton = Ti.UI.createButton({
		title:'Current Permissions',
		top:200,
		height:40
	});
	$.myWin.add(permissionsButton);
		
	permissionsButton.addEventListener('click', function() {
		fb.refreshPermissionsFromServer();
	});	
	
	fb.addEventListener('tokenUpdated', function() {
		var list = fb.getPermissions();
		var text = 'Permissions granted:' + '\n';
		for (var v in list)
		{
			if (v!==null)
			{
				text += list[v] + '\n';
			}
		}
		alert(text);
	});

fb.initialize();

$.myWin.fbProxy = fb.createActivityWorker({
    lifecycleContainer: $.myWin
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////Google SignIn//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var Google = require('ti.googlesignin');
Google.initialize({
    clientID: "569057758070-ikg6h5533polccr13c55ea2mvgsos238.apps.googleusercontent.com" //  Web application client ID, not androidID !!!!
});
var scroll = Ti.UI.createScrollView({
    top: 40,
    layout: 'vertical',
    scrollType: 'vertical'
});
//$.myWin.add(scroll);

var btn = Ti.UI.createButton({
    title: 'Sign In with Google'
});

Google.addEventListener('login', function(e) {
    Ti.API.info('Logged in!');
    Ti.API.info(' ***** RESULT: ' + JSON.stringify(e));

   //ANDROID RESULT:
   // {
   //     "familyName": "Family",
   //     "givenName": "Person",
   //     "fullName": "Person Name",
   //     "accountName": "user@domain.com",
   //     "token": "abc",
   //     "email": "user@domain.com",
   //     "displayName": "User Name",
   //     "photo": "https://lh5.googleusercontent.com/-F58Ul6-zinE/AAAAAAAAAAI/AAAAAAAAAAAA/123456789/abc-d/photo.jpg",
   // }
});

btn.addEventListener('click', function() {
	Google.signIn();
});

$.myWin.add(btn);
$.myWin.open();
