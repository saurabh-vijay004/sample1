

//var arrayforViews = [{"img": "/instagram/bag.jpg","title":"Leather Bag","description":"a short description about product"},{"img": "/instagram/bag.jpg","title":"Duffle Bag","description":"a short description about product"},{"img": "/instagram/bag.jpg","title":"Bag","description":"a short description about product"}];
var arrayforViews = [{"img": "/instagram/bag.jpg","title":"Leather Bag","description":"STARTING FROM", "price":"439", "currency":"AED","original_price":"300","offer_price":"270","discount":"10%"},
{"img": "/instagram/bag.jpg","title":"Duffle Bag","description":"STARTING FROM", "price":"439", "currency":"AED","original_price":"300","offer_price":"270","discount":"10%"},
{"img": "/instagram/bag.jpg","title":"Bag","description":"STARTING FROM", "price":"439", "currency":"AED","original_price":"300","offer_price":"270","discount":"10%"},
{"img": "/instagram/bag.jpg","title":"Bag","description":"STARTING FROM", "price":"439", "currency":"AED","original_price":"300","offer_price":"270","discount":"10%"},
{"img": "/instagram/bag.jpg","title":"Bag","description":"STARTING FROM", "price":"439", "currency":"AED","original_price":"300","offer_price":"270","discount":"10%"}];

//fetch the  height of the screen
var screenHeight = Ti.Platform.displayCaps.platformHeight;
 
//fetch the  width of the screen
var screenWidth = Ti.Platform.displayCaps.platformWidth;
if(Ti.Platform.osname === 'android'){
	screenWidth = Ti.Platform.displayCaps.xdpi;
}

Ti.API.info('Ti.Platform.displayCaps.density: ' + Ti.Platform.displayCaps.density);
Ti.API.info('Ti.Platform.displayCaps.dpi: ' + Ti.Platform.displayCaps.dpi);
Ti.API.info('Ti.Platform.displayCaps.platformHeight: ' + Ti.Platform.displayCaps.platformHeight);
Ti.API.info('Ti.Platform.displayCaps.platformWidth: ' + Ti.Platform.displayCaps.platformWidth);
if((Ti.Platform.osname === 'iphone')||(Ti.Platform.osname === 'ipad')||(Ti.Platform.osname === 'android')){
  Ti.API.info('Ti.Platform.displayCaps.logicalDensityFactor: ' + Ti.Platform.displayCaps.logicalDensityFactor);
}
if(Ti.Platform.osname === 'android'){
  Ti.API.info('Ti.Platform.displayCaps.xdpi: ' + Ti.Platform.displayCaps.xdpi);
  Ti.API.info('Ti.Platform.displayCaps.ydpi: ' + Ti.Platform.displayCaps.ydpi);
}


/*
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////       Banner View      /////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function createBannerRow(i,arrayforViews) {
    var card = Ti.UI.createView({
        left: "10dp",
        right: "10dp",
        top: '10dp',
        borderColor:"#000000",
        borderWidth :'1dp',
        // borderRadius:'5dp',
        layout: 'vertical',
        height: Ti.UI.SIZE,
    	width: Ti.UI.FILL
    });
    var view = Ti.UI.createView({
    	layout:'vertical',
    	height: Ti.UI.SIZE,
    	width: Ti.UI.SIZE
    });
    
        var titleLabel = Ti.UI.createLabel({
        color:'black',
        text: arrayforViews.title,
        bottom: '10dp',
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font:{
        	fontSize: "20dp",
        	fontStyle: "bold"
        }
    });
    
    var label = Ti.UI.createLabel({
        color:'black',
        text: arrayforViews.description,
        bottom: '10dp',
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  		font:{
        	//fontSize: "20dp",
        	fontStyle: "semibold"
        }
    });
    Ti.API.log(arrayforViews.img);
    // Create an ImageView.
    var anImageView = Ti.UI.createImageView({
        image : arrayforViews.img,
       //	url:arrayforViews.img,
        width : Ti.UI.FILL,
        height : '200dp',
        bottom : '10dp',
    });
    anImageView.addEventListener('load', function() {
        Ti.API.info('Image loaded!');
    });
    
    // Add to the parent view.
    view.add(anImageView);
    view.add(titleLabel);
    view.add(label);

	card.add(view);

    return card;
}
*/
/*
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////      TILEVIEW       ///////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function createRowView(){
 var rowView = Ti.UI.createView({
    	layout:'horizontal',
    	height: Ti.UI.SIZE,
    	width: screenWidth,
    	top: screenWidth * 0.06
    });
	return rowView;
}

function createTileRow(i,arrayforViews) {
var cardLeft = screenWidth * 0.04;
var cardRight = screenWidth * 0.06;
if(i%2 == 1){
	cardLeft = screenWidth * 0.06;
	cardRight = screenWidth * 0.04;
}
Ti.API.info("i === " + i + 'cardLeft====' + cardLeft + '  cardRight=====' + cardRight);
    var card = Ti.UI.createView({
        left: cardLeft,
        right: cardRight,
        top: '10dp',
        borderColor:"#000",
        borderWidth :'1dp',
        // borderRadius:'5dp',
        layout: 'vertical',
        height: Ti.UI.SIZE,
    	width: Ti.UI.SIZE
    });
    var view = Ti.UI.createView({
    	layout:'vertical',
    	height: Ti.UI.SIZE,
    	width: Ti.UI.SIZE
    });
        var titleLabel = Ti.UI.createLabel({
        color:'black',
        text: arrayforViews.title,
        width : screenWidth * 0.35,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font:{
        	fontSize: "16dp",
        	fontStyle: "bold"
        }
    });
        var priceView = Ti.UI.createView({
    	layout:'horizontal',
    	height: Ti.UI.SIZE,
    	width: '38%'
    });
    var startingLabel = Ti.UI.createLabel({
        color:'#c0c0c0',
        text: arrayforViews.description,
        right: '5dp',
       // width : screenWidth * 0.35,
  		font:{
        	fontSize: "12dp",
        	fontStyle: "semibold"
        }
    });
    var currencyLabel = Ti.UI.createLabel({
        color:'red',
        text: arrayforViews.currency,
     //   width : screenWidth * 0.35,
       // textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  		font:{
        	fontSize: "12dp",
        	fontStyle: "bold"
        }
    });
    var priceLabel = Ti.UI.createLabel({
        color:'Red',
        text: arrayforViews.price,
        //left: '5dp',
    //    width : screenWidth * 0.35,
       // textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  		font:{
        	fontSize: "12dp",
        	fontStyle: "bold"
        }
    });
  
    // Create an ImageView.
    var anImageView = Ti.UI.createImageView({
        image : arrayforViews.img,
       //	url:arrayforViews.img,
        width : screenWidth * 0.40,
        height : '200dp',
        bottom : '10dp',
    });
    anImageView.addEventListener('load', function() {
        Ti.API.info('Image loaded!');
    });
    
    // Add to the parent view.
    view.add(anImageView);
    view.add(titleLabel);
    priceView.add(startingLabel);
    priceView.add(currencyLabel);
    priceView.add(priceLabel);

	card.add(view);
	card.add(priceView);

    return card;
}*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////      CATEGORYTILEVIEW       ////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function createRowView(){
 var rowView = Ti.UI.createView({
    	layout:'horizontal',
    	height: Ti.UI.SIZE,
    	width: screenWidth,
    	top: screenWidth * 0.06
    });
	return rowView;
}

function createCategoryTileRow(i,arrayforViews) {
var cardLeft = screenWidth * 0.04;
var cardRight = screenWidth * 0.06;
if(i%2 == 1){
	cardLeft = screenWidth * 0.06;
	cardRight = screenWidth * 0.04;
}
Ti.API.info("i === " + i + 'cardLeft====' + cardLeft + '  cardRight=====' + cardRight);
    var card = Ti.UI.createView({
        left: cardLeft,
        right: cardRight,
        top: '10dp',
        borderColor:"#000",
        borderWidth :'1dp',
        // borderRadius:'5dp',
        layout: 'vertical',
        height: Ti.UI.SIZE,
    	width: Ti.UI.SIZE
    });
    var view = Ti.UI.createView({
    	layout:'vertical',
    	height: Ti.UI.SIZE,
    	width: Ti.UI.SIZE
    });
        var titleLabel = Ti.UI.createLabel({
        color:'black',
        text: arrayforViews.title,
        width : screenWidth * 0.35,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font:{
        	fontSize: "16dp",
        	fontStyle: "bold"
        }
    });
        var priceView = Ti.UI.createView({
    	layout:'horizontal',
    	height: Ti.UI.SIZE,
    	width: '38%'
    });
    var startingLabel = Ti.UI.createLabel({
        color:'#2F4F4F',
        text: arrayforViews.description,
        right: '5dp',
       // width : screenWidth * 0.35,
  		font:{
        	fontSize: "12dp",
        	fontStyle: "semibold"
        }
    });
    var currencyLabel = Ti.UI.createLabel({
        color:'red',
        text: arrayforViews.currency,
     //   width : screenWidth * 0.35,
       // textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  		font:{
        	fontSize: "12dp",
        	fontStyle: "bold"
        }
    });
    var priceLabel = Ti.UI.createLabel({
        color:'Red',
        text: arrayforViews.price,
        //left: '5dp',
    //    width : screenWidth * 0.35,
       // textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  		font:{
        	fontSize: "12dp",
        	fontStyle: "bold"
        }
    });
  
    // Create an ImageView.
    var anImageView = Ti.UI.createImageView({
        image : arrayforViews.img,
       //	url:arrayforViews.img,
        width : screenWidth * 0.40,
        height : '200dp',
        bottom : '10dp',
    });
    anImageView.addEventListener('load', function() {
        Ti.API.info('Image loaded!');
    });
    
    // Add to the parent view.
    view.add(anImageView);
    view.add(titleLabel);
   // priceView.add(startingLabel);
   // priceView.add(currencyLabel);
   // priceView.add(priceLabel);
var originalPrice = arrayforViews.currency +" " +arrayforViews.original_price;
var offerPrice = " " +arrayforViews.currency +" " +arrayforViews.offer_price;
var discount = " " + "(" +arrayforViews.discount + ")";
var text = originalPrice + " " + offerPrice + discount;
var attr = Ti.UI.createAttributedString({
    text: text,
    attributes: [
        {
            type: Ti.UI.ATTRIBUTE_STRIKETHROUGH_STYLE,
            value: "#2F4F4F",
            range: [text.indexOf(originalPrice), (originalPrice).length]
        },
        {
        	type: Titanium.UI.ATTRIBUTE_FOREGROUND_COLOR,
            value: "red",
            range: [text.indexOf(offerPrice),  (offerPrice).length]
        }
        ,
        {
        	type: Titanium.UI.ATTRIBUTE_FOREGROUND_COLOR,
            value: "#2F4F4F",
            range: [text.indexOf(discount),  (discount).length]
        }
    ]
});
 
var attrlabel = Ti.UI.createLabel({
    attributedString: attr,
    color:'#2F4F4F',
    font:{
    	fontStyle: 'bold'
    },
    bottom: 5
});

	card.add(view);
	card.add(priceView);
	card.add(attrlabel);
	//card.add(offerPriceLabel);
    return card;
}

var scrollView = Ti.UI.createScrollView({
    layout: 'vertical',
    scrollType: 'vertical'
});

Ti.API.info(arrayforViews.length + " -- " + JSON.stringify(arrayforViews));
for (var i = 1; i <= arrayforViews.length; i++) {
    // var row = createBannerRow(i,arrayforViews[i]);
   
    if(i%2 == 1){
    	var rowView = createRowView();
    }
    var row = createCategoryTileRow(i,arrayforViews[i-1]);
     if(i==arrayforViews.length){
    	 row.bottom = 10;
     }
    rowView.add(row);
    scrollView.add(rowView);
}
$.myWin.add(scrollView);
$.myWin.open();
/*
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
*/