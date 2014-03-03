  
  // Set the site path (without the trailing slash).
     // Drupal.settings.site_path = "http://m.reisandirvys.com"; // http://www.example.com
      // Set the Service Resource endpoint path.
      //Drupal.settings.endpoint = "drupalgap";
	   Drupal.settings.debug = true;
		
		
		 connect();
		
		
		function set_drupal_settings() {
            Drupal.settings.site_path = $('#site_path').val();
            Drupal.settings.endpoint = $('#endpoint').val();
		
          // Set the site path.
          Drupal.settings.site_path = window.location.href.replace('/javascript-application/','').replace('index.html', '');
		  
          $('#site_path').val(Drupal.settings.site_path);
		  
		  $('#endpoint').val(Drupal.settings.endpoint);
		  
		}  
		  
		$().ready(function() {
       		set_drupal_settings();
       
            //  if ((Drupal.settings.site_path == '') || (Drupal.settings.endpoint == '')) {
            //    alert('Oops! Please check you connection.');
           //     return false;
           //   }
          	
			 
              system_connect({
                  success:function(result){
					 
					// $('#footer').hide();
					// $('#preloader').fadeOut();
//					 $('#status').fadeOut();
					 $('#connect_wrapper').hide();
					 $('#connect2_wrapper').hide();
                     $('#login_name_wrapper').show('slow');
                     $('#login_pass_wrapper').show('slow');
					 $('#login').show('slow');
					 $('#logout').hide();
                    
					if (result.user.uid != 0) {
					
					alert('Hi, ' + result.user.name + '!');
					//$('#panel-fixed-page1').hide();
					// $('#panel-fixed-page2').show('slow');
					 $('#footer').show('slow');
					 $('#go').hide();
					 $('#login_name_wrapper').hide();
                     $('#login_pass_wrapper').hide();
					 $('#navmenu').show('slow');
					 $('#login').hide();
                      $('#logout').show('slow');
                      $('#go').hide();
					  $('#run_nodes').hide();
					}
                  //if (Drupal.user.uid == 0) {
					if (result.user.uid == 0) {
					alert('Please Sign in');
					$('#go').show('slow');
					$('#login').show('slow');
					$('#logout').hide();
					$('#footer').hide();
                      }
                    else {
						 	$('#login_name_wrapper').show('slow');
                    		$('#login_pass_wrapper').show('slow');
                      		$('#login').show('slow');
                      		//$('#go').hide();
                    }
                /*  },
                  error:function(xhr, status, message){
                    alert(message);
                  }*/
				  }
			  });
			  
              return false;
			  
        //  });
		/*};
           Checker();*/
          $('#login').on('click', function(){
              set_drupal_settings();
			  //  $('#preloader').show('slow');
				//	  $('#status').show('slow');
              user_login($('#login_name').val(), $('#login_pass').val(), {
                  success:function(result){
                    alert('Hi, ' + result.user.name + '!');
                    $('#login').hide();
					 $('#navmenu').show('slow');
					//    $('#preloader').fadeOut();
					 // $('#status').fadeOut();
					  $('#login_name_wrapper').hide();
                    $('#login_pass_wrapper').hide();
                    $('#logout').show('slow');
                    $('#run_nodes').hide();
					 $('#footer').show('slow');
                  },
                  error:function(xhr, status, message){
                    alert(message);
                  }
              });
              return false;
          });
          $('#logout').on('click', function(){
			    $('#preloader').show('slow');
					  $('#status').show('slow');
              user_logout({
                  success:function(result){
					//    $('#preloader').fadeOut();
					//  $('#status').fadeOut();
                    if (result[0]) {
                       alert("Logged out!");
					    $('#login_name_wrapper').show('slow');
                    $('#login_pass_wrapper').show('slow');
                       $('#login').show('slow');
                       //$('#run_nodes').hide();
                       $('#logout').hide();
                    }
                  }
              });
              return false;
          });
          
          
		 
         /* $('#run_tests').on('click', function(){
              if ($('#login_name').val() == '') {
                alert('Enter your user name to run tests!');
                return false;
              }
              if ($('#login_pass').val() == '') {
                alert('Enter your password to run tests!');
                return false;
              }
              set_drupal_settings();
              test_services_system();
              // this call iterates through other tests
              test_services_user($('#login_name').val(), $('#login_pass').val());
              return false;
          });*/
		   $('#run_nodes').on('click', function(){
              if ($('#login_name').val() == '') {
                alert('Enter your user name to run tests!');
                return false;
              }
              if ($('#login_pass').val() == '') {
                alert('Enter your password to run tests!');
                return false;
              }
              set_drupal_settings();
              //services_node();
			   services_term();
			  //taxonomy_term_load();
              // this call iterates through other tests
           // user_load($('#login_name').val(), $('#login_pass').val());
              return false;
          });
		  
		  $('#popClose').on('click', function(){
             $('#popupWin3-screen').hide();
              //return false;
          });
		  
		  
      });





