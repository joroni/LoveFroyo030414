/* function checkAuth(){
                if (result.user.uid != 0) {
                      return true;
					}
                      else {
                        alert('Oops! we need you login');
						  return false;
                         $('#login_name_wrapper').show('slow');
                    	 $('#login_pass_wrapper').show('slow');
					 	 $('#login').show('slow');
                      }
                   error:function(xhr, status, message){
                    alert(message);
                  }
            
			 }
         

	*/
		 
		  
		  // SOCIAL PAGE 
		function listSocial() {
			$("#sitelogo").hide();
			$('#footer').show('slow');
			deviceIsReady();
			$("#listArticles").hide();
				$('#preloader').show('slow');
				$('#status').show('slow');
				$('#shout-comments').hide();
				$('#suggestion').hide();
				  
				node_load(3, {
					success: function(node) {
						$('#preloader').fadeOut();
					  $('#status').fadeOut();
					  $('#social_share').show('slow');
					  $('#social_facebook').show('slow');
					  $('#social_twitter').show('slow');
					//  $('#social-comments').show('slow');
					
					 
					 $("#title").html("<img src='"+Drupal.settings.site_path + node.title+"'/>");
						$("#comment_link").html("<a href='" + node.path+"'>Comment</a>");
					
					},
					error: function(xhr, status, message) {
					  alert(message)
					}
				});
			}
			function popupWin1() {
					node_load(3, {
								success: function(node) {
									$('#preloader').fadeOut();
								  $('#status').fadeOut();
								
								},
								error: function(xhr, status, message) {
								  alert(message)
								}
							});
			}// END SOCIAL PAGEtest_services_comment
		/**
 * Loads a node.
 * @param {Number} nid
 * @param {Object} options
 */
/*function node_load(nid, options) {
  try {
    entity_load('node', nid, options);
  }
  catch (error) { console.log('node_load - ' + error); }
}
*/		
		//SHOUT PAGE 

		function listShout() {
			//	checkAuth();
			$("#sitelogo").hide();
			$('#footer').show('slow');
				deviceIsReady();
				$('#preloader').show('slow');
				$('#status').show('slow');
				//$('#social-comments').hide();
				$('#suggestion').hide();
				 $('#shout-comments').show('slow');
				 $('#social_share').hide();
				  $('#social_facebook').hide();
				$('#social_twitter').hide();
				 	node_load(5, { 
					success: function(node) {
						$('#preloader').fadeOut();
						$('#listArticles').show('slow');
						$("#listArticles").load(Drupal.settings.site_path + "/?q=node/"+node.nid);
						//$("#listArticles").load(Drupal.settings.site_path + "/?q=drupalgap/node/"+node.nid+".json");
						//$("#listArticles").load(Drupal.settings.site_path + "/?q=drupalgap/views_datasource/drupalgap_comments");
						//$("#listArticles").load('http://m.reisandirvys.com/node/5.json/comment#viewcomment');
						
					  $('#status').fadeOut();
					 $('#social_share').hide();
					
					 // alert('Loaded node: ' + node.title);
					  $("#title").html('Shout Out!');
					  
						$("#title").html("<img src='"+Drupal.settings.site_path + node.title+"'/>");
						$("#comment_link").html("<a href='" + node.path+"'>Comment</a>");
						
					},
					error: function(xhr, status, message) {
					  alert(message)
					}
				});
			}
			
			
			/* function() {
                          comment_load(comment_create_result.cid, {
                              success:function(comment_retrieve_result) {
                                var lng = language_default();
                                start();
                                expect(3);
                                ok(comment_retrieve_result.cid == comment_create_result.cid, "cid");
                                ok(comment_retrieve_result.subject == comment.subject, "subject");
                                ok(comment_retrieve_result.comment_body[lng][0].value == comment_retrieve_result.comment_body[lng][0].value, "comment_body");
							  }
						  });
			 }*/
			
			//$("#getCameraSerialNumbers").click(function () {
			//	$("#step1Content").load('YourUrl');
		//	});

			function popupWin2() {
					node_load(5, {
								success: function(node) {
									$('#preloader').fadeOut();
								  $('#status').fadeOut();
									$("#contents").html(data);
								  //alert('Loaded node: ' + node.title);
								},
								error: function(xhr, status, message) {
								  alert(message)
								}
							});
			}
			
		
					
      // END SHOUT PAGE 
	  
	 
	 
	 
	 // WHATS PAGE 
	function listWhats() {
		$("#sitelogo").hide();
		$('#footer').show('slow');
				deviceIsReady();
				$("#listArticles").hide();
				$('#preloader').show('slow');
				$('#status').show('slow');
				$('#social_share').hide();
				  $('#social_facebook').hide();
				$('#social_twitter').hide();
			//	$('#social-comments').hide();
				$('#shout-comments').hide();
				
				node_load(15, {
					success: function(node) {
						//('#social-comments').hide();
						$('#preloader').fadeOut();
					  $('#status').fadeOut();
					  $('#suggestion').show('slow');
					  
						$("#title").html("<img src='"+Drupal.settings.site_path + node.title+"'/>");
					 // alert('Loaded node: ' + node.title);
					},
					error: function(xhr, status, message) {
					  alert(message)
					}
				});
				
				
			}

			function popupWin3() {
					node_load(9, {
								success: function(node) {
									$('#preloader').fadeOut();
								  $('#status').fadeOut();
									//$("#contents").html(data);
								 // alert('Loaded node: ' + node.title);
								},
								error: function(xhr, status, message) {
								  alert(message)
								}
							});
			}
     // END WHATS PAGE
	 
	 // VOTE PAGE 
			function listVote() {
				$("#sitelogo").hide();
				$('#footer').show('slow');
				deviceIsReady();
				
				/*var query = {
				  parameters: {
					vid: 7
				  }
				};
				taxonomy_term_index(query, {
					success: function(terms) {
					  if (terms.length == 0) { return; }
					  alert('Loaded ' + terms.name + ' term(s)!');
					}
				});*/
				 $('#suggestion').hide();
				$('#preloader').show('slow');
				$('#status').show('slow');
				$('#social_share').hide();
				  $('#social_facebook').hide();
				$('#social_twitter').hide();
				
				
				node_load(11, {
					success: function(node) {
						$('#preloader').fadeOut();
					  	$('#status').fadeOut();
					 	 $('#social_share').hide();
						   $('#social_facebook').hide();
				$('#social_twitter').hide();
						 
					//$("#title").html(node.title);
						/*$("#title").html("<img src='"+Drupal.settings.site_path + node.title+"'/>");*/
						$('#preloader').fadeOut();
						$('#status').fadeOut();
						$("#listArticles").hide();
						/*$("#listArticles").show('slow');
						$("#listArticles").load(Drupal.settings.site_path + "/?q=node/"+node.nid);*/
					
									//$("#contents").html(data);
					},
					error: function(xhr, status, message) {
					  alert(message)
					}
				});
				
				
			}

			
     // END VOTE PAGE