var timeout	 = 500;
var closetimer	 = 0;
var ddmenuitem	 = 0;

function cursor_wait() {
	document.body.style.cursor = 'wait';
}

function cursor_clear() {
	document.body.style.cursor = 'default';
}
	
// open hidden layer
function mopen( id )
{
    // cancel close timer
    mcancelclosetime();

    // close old layer
    if( ddmenuitem ) ddmenuitem.style.visibility = 'hidden';

    // get new layer and show it
    ddmenuitem = document.getElementById( id );
    ddmenuitem.style.visibility = 'visible';

}
// close showed layer
function mclose()
{
    if( ddmenuitem ) ddmenuitem.style.visibility = 'hidden';
}


// go close timer
function mclosetime()
{
    closetimer = window.setTimeout( mclose, timeout );
}

// cancel close timer
function mcancelclosetime()
{
    if( closetimer )
    {
        window.clearTimeout( closetimer );
        closetimer = null;
    }
}

// close layer when click - out
document.onclick = mclose;

function ta_init()
{
    // onload img - check4updates happens on image onload function which happens before this
    // so web page logic is already happened.
    //
    var isLocal = 1;
    var isVista = 0;
    var isXP = 0;

    var url = location.href;
    if( url.indexOf( 'http' ) != - 1 )
    {
        isLocal = 0;
    }
    var ua = navigator.userAgent.toLowerCase();
    if ( ua.indexOf( 'windows nt 5.1' ) != - 1 )
    {
        isXP = 1;
    }
    if ( ua.indexOf( 'windows nt 6.0' ) != - 1 )
    {
        isVista = 1;
    }
    if ( ua.indexOf( 'windows nt 6.1' ) != - 1 )
    {
        isVista = 1;
        // Windows 7
    }
    if ( ua.indexOf( 'windows nt 6.2' ) != - 1 )
    {
        isVista = 1;
        // Windows 8
    }

    // conditional logic goes here... for demo page

}
function hideMessage()
{
    hideContent( 'disclaimer' );
}

function installApp()
{
    // conditional logic
    var ua = navigator.userAgent.toLowerCase();
    if ( ua.indexOf( 'windows' ) != - 1 )
    {
        if ( ua.indexOf( 'nt 5.0' ) != - 1 )
        {
            alert( "This button is not supported for Windows 2000 machines." );
        }
        else
        {
            // alert( "After install, the results page sometimes is not be displayed in front of your other browser windows.\nTo open the results page, just click one the Results page on the Taskbar at the bottom of your screen.\n\nWhen we implement a fix for this, it will eliminate the need for this message." );
            return true;
        }
    }
    else
    {
        alert( "This button is for Windows users only." );
    }
    return false;
}

function downloadApp()
{
    if ( installApp() )
    {
        location.href = "oominstallerinstaller.exe";
    }

}


function runApp()
{
    var windowlocation = window.location.href;
    if ( windowlocation.indexOf( "http" ) > -1 )
    {
        //demoResults();
    }
    else
    {
        //document.location.href = "run.html";
        getoominstaller();
    }
}

function demoResults()
{
    // Run fixit button - ADD ME
    document.location.href = "demoresults.html";
}

function readmore()
{
    window.open( "readme.html", "", "height=600, width=900,scrollbars=yes,resizable=yes" );
}

function terms()
{
    window.open( "termsofuse.html", "_blank", "height=600,width=900,scrollbars=yes,resizable=yes" );
}

function shareapp()
{
    window.open( "shareapp.html", "", "height=600,width=900,scrollbars=yes,resizable=yes" );
}

function goCommunity()
{
    document.location.href = "http://factory.snapback-apps.com/commune/2011/11/03/hello-world-user-developer-page/"
}

function goOTMApp()
{
    // document.location.href = "http://www.engineering.cdp.com/a/otmapp";
    document.location.href = "http://www.snapback-apps.com/otmapp";
}

function goContactUs()
{
    window.open( "contactus.html", "", "height=400,width=700,scrollbars=yes,resizable=yes" );
}

function goFAQ()
{
    window.open( "faq.html", "", "height=400,width=700,scrollbars=yes,resizable=yes" );
}

function goDEF()
{
    window.open( "def.html", "", "height=400,width=700,scrollbars=yes,resizable=yes" );
}

function appReviews()
{
    alert( "Clicking the link will send user to reviews for app page (in wordpress)" );
}

// User Dev page for app
function helpWithApp()
{
    window.open( "http://factory.snapback-apps.com/commune/2011/11/03/hello-world-user-developer-page/", "", "height=400,width=700,location=yes,menubar=yes,toolbar=yes,scrollbars=yes,resizable=yes" );
    // document.location.href = "http://factory.snapback-apps.com/wordpress/wp-content/plugins/autologin-guest/autologin.php?redirect_to=http://factory.snapback-apps.com/wordpress/oominstaller/wp-admin/post.php%3Fpost=12%26action=edit";
}

function chattest()
{
    // just need post number to activate - and set displays to block = can test with demo page
    // window.open( "http://factory.snapback-apps.com/wordpress/wp-content/plugins/autologin-guest/autologin.php?redirect_to=http://factory.snapback-apps.com/wordpress/rw/wp-admin/post.php%3Fpost=12%26action=view", "", "height=400,width=700,toolbar=yes,scrollbars=yes,resizable=yes" );
}


function openremote( uri )
{
   var myCmd = "openremote," + uri;
   var url = location.href;
   var isLocal = 1;
   if( url.indexOf( 'http' ) != - 1 )
   {
      isLocal = 0;
   }

   if ( isLocal )
   {
      output = doCommand2( myCmd );
      output = output.toUpperCase();
      if( output.substring( 0, 6 ) == "2,OK,{" )
      {
         // window.location.replace( 'results.html' );
         // Stay on page instead of showing results page.
      }
      else if( output.substring( 0, 6 ) == "2,PIPE" )
      {
         window.location.replace( 'pipedown.html' );
      }
      else if( output.substring( 0, 6 ) == "6,UPDA" )
      {
         window.location.replace( 'updating.html' );
      }
      else if( output.substring( 0, 6 ) == "3,OK,{" )
      {
         // window.location.replace( 'results.html' );
      }
      else if( output.substring( 0, 6 ) == "4,OK,{" )
      {
         // location.href = "results.html";
      }
      else if( output.substring( 0, 6 ) == "2,DENY" )
      {
         window.location.replace( 'deny.html' );
      }
      else
      {
         // alert( output.substring( 0, 6 ) );
         location.href = "unknown.html";
      }
   }
}


//Estimate speed
// Test file on server
var imageAddr = "http://snapback-apps.com/oom/invis.gif";
// Size of file in bytes - in this case it is 1K
var downloadSize = 1024;
var timeOut;
var currentSpeed = 0;

function fnSampleInternetSpeed()
{
   //var oProgress = document.getElementById("progress");
   //oProgress.innerHTML = "Loading the image, please wait...";
   //oProgress.innerHTML = "";
   window.setTimeout(fnMeasureSpeed, 1);
}

function fnMeasureSpeed()
{
   // Kill download after .5 seconds
   window.setTimeout(fnStopDownload, 500);
   var oProgress = document.getElementById("progress");
   var startTime, endTime;
   var download = new Image();
   download.onload = function ()
   {
      endTime = (new Date()).getTime();
      fnShowResults();
   }

   download.onerror = function (err, msg)
   {
      // No download so indicate a long time
      endTime = startTime * 1024;
      fnShowResults();
   }

   startTime = (new Date()).getTime();
   var cacheBuster = "?nnn=" + startTime;
   download.src = imageAddr + cacheBuster;

   function fnShowResults()
   {
      var duration = (endTime - startTime) / 1000;
      var bitsLoaded = downloadSize * 8;
      var speedBps = (bitsLoaded / duration).toFixed(2);
      var speedKbps = (speedBps / 1024).toFixed(2);
      var speedMbps = (speedKbps / 1024).toFixed(2);
      if (isNaN(speedKbps))
      {
         speedKbps = 0;
      }
      currentSpeed = speedKbps;
      //oProgress.innerHTML = "Your connection speed is: <br />" + speedKbps + " kbps<br />";
      //speedBps + " bps<br />"   +
      //speedKbps + " kbps<br />" +
      //speedMbps + " Mbps<br />";
   }

   function fnStopDownload()
   {
      //cancel image downloads
      if(window.stop !== undefined)
      {
         window.stop();
      }
      else if(document.execCommand !== undefined)
      {
         document.execCommand("Stop", false);
      }
      fnShowResults();
   }
}
