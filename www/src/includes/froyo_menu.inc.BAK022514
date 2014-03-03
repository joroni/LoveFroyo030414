 /********************** SOCIAL PAGE **************************/


	   
		function listSocial() {
				$('#preloader').show('slow');
				$('#status').show('slow');
				$('#shout-comments').hide();
				$('#suggestion').hide();
				node_load(3, {
					success: function(node) {
						$('#preloader').fadeOut();
					  $('#status').fadeOut();
					  $('#social-comments').show('slow');
					 // alert('Loaded node: ' + node.title);
					 // $("#title").html(node.title);
					 // $("#banner").html("<img src='" + node.path+"'/>");
					 $("#title").html("<img src='"+Drupal.settings.site_path + node.title+"'/>");
						$("#comment_link").html("<a href='" + node.path+"'>Comment</a>");
					// $("#banner").html(node.field_social_image);
					  
					 //  $image_field_values = field_get_items('node', $new_node, 'field_image');
					   // $("#latestlist").html(node.field_get_items('node', 'field_image'));
					 // $("#image").html("Loaded node: " + field_shout_image.filename);
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
									//$("#contents").html(data);
								 // alert('Loaded node: ' + node.title);
								},
								error: function(xhr, status, message) {
								  alert(message)
								}
							});
			}
		/********************** END SOCIAL PAGE **************************/
		
		/********************** SHOUT PAGE **************************/

			function listShout() {
					$('#preloader').show('slow');
				$('#status').show('slow');
				$('#social-comments').hide();
				$('#suggestion').hide();
				node_load(5, {
					success: function(node) {
						$('#preloader').fadeOut();
						$('#social-comments').hide();
					  $('#status').fadeOut();
					 $('#shout-comments').show('slow');
					 // alert('Loaded node: ' + node.title);
					 /* $("#title").html('Shout Out!');*/
					  
						$("#title").html("<img src='"+Drupal.settings.site_path + node.title+"'/>");
						$("#comment_link").html("<a href='" + node.path+"'>Comment</a>");
					},
					error: function(xhr, status, message) {
					  alert(message)
					}
				});
			}
			function popupWin2() {
					node_load(5, {
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
      /********************** SHOUT PAGE **************************/
	  
	  /********************** WHATS PAGE **************************/

			function listWhats() {
				$('#preloader').show('slow');
				$('#status').show('slow');
				$('#social_share').hide();
				$('#suggestion').hide();
				
				node_load(15, {
					success: function(node) {
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
      /********************** WHATS PAGE **************************/