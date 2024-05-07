var app = angular.module("myapp", ['ngCookies']);
app.controller("myappCtrl", function($scope, $cookies, $cookieStore, $http) 
{
	
/****************************************************************************/
/************************** Get Admin Details ***********************************/
/****************************************************************************/	
	$scope.cook_admin_email = $cookieStore.get("cook_admin_email");
	$scope.cook_user_email = $cookieStore.get("cook_user_email");
	$scope.cook_staff_dept = $cookieStore.get("cook_staff_dept");
	$scope.cook_work_email = $cookieStore.get("cook_work_email");

	$scope.user_logout = function() 
	{
		if(confirm("Are You Sure?"))
		{
			$cookies.cook_user_email = "";
			$cookies.cook_admin_email = "";
			window.location = "index.html";
			return;
		}
		else
		{
			return false;
		}
	}
	
	$scope.admin_logout = function() 
	{
		if(confirm("Are You Sure?"))
		{
			$cookies.cook_admin_email = "";
			$cookies.cook_user_email = "";
			window.location = "index.html";
			return;
		}
		else
		{
			return false;
		}
	}

$scope.update_id = function(cus_id) 
	{
		window.location = "get_geolocation.html";
		$cookieStore.put("cook_cus_id",cus_id);
		return;
	}	
	
	$scope.cook_cus_id = $cookieStore.get("cook_cus_id");
	
			
	$scope.update_location = function() 
	{		
	
		//$scope.get_Latitude = document.getElementById('get_Latitude').value;
		//$scope.get_Longitude = document.getElementById('get_Longitude').value;
		
        $http.post('http://10.0.2.2/projects/fuel/web/update_location.php', 
			{	
			'field_1': $scope.field_1, 'field_2':$scope.field_2,
			'email':$scope.cook_cus_id
			})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Updated Successful");
				window.location = "view_students.html";
				//location.reload(); 
				return;				
			}
			else if(data.success == 2)
			{
				alert("Please Fill All Fields");
			}
			else
			{
				alert("Login Unsuccessful");
			}
        });
    }
	
	
	$scope.more_info = function(cus_id) 
	{
		window.location = "view_business_more.html";
		$cookieStore.put("cook_bus_id",cus_id);
		return;
	}	
	
	$scope.cook_bus_id = $cookieStore.get("cook_bus_id");

	$scope.view_rating = function(cus_id) 
	{
		window.location = "view_business_rating.html";
		$cookieStore.put("cook_cus_id",cus_id);
		return;
	}	
	
	$scope.cook_cus_id = $cookieStore.get("cook_cus_id");

	$http.post('http://10.0.2.2/projects/fuel/web/get_survey_choice_user.php')
		.success(function(data, status, headers, config) 
		{
			$scope.user_survey_choice_details = data.details;
        });
		
	$http.post('http://10.0.2.2/projects/fuel/web/get_bus_more.php', {'id': $scope.cook_bus_id})
	.success(function(data, status, headers, config) 
	{
			$scope.more_details = data.details;
    });
	
	$http.post('http://10.0.2.2/projects/fuel/web/get_user_rating.php', {'email': $scope.cook_user_email})
	.success(function(data, status, headers, config) 
	{
			$scope.user_rating_details = data.details;
    });
	
	$http.post('http://10.0.2.2/projects/fuel/web/get_bus_rating.php', {'email': $scope.cook_cus_id})
	.success(function(data, status, headers, config) 
	{
			$scope.bus_rating_details = data.details;
    });
	
	$http.post('http://10.0.2.2/projects/fuel/web/get_booking_status.php', {'email': $scope.cook_user_email})
	.success(function(data, status, headers, config) 
	{
			$scope.user_booking_details = data.details;
    });
	
	$http.post('http://10.0.2.2/projects/fuel/web/get_booking_user_status.php', {'email': $scope.cook_work_email})
	.success(function(data, status, headers, config) 
	{
			$scope.status_booking_details = data.details;
    });
	
/****************************************************************************/
/************************** Add Complaint *********************************/
/****************************************************************************/
	$scope.create_student = function() 
	{		
		$http.post('http://10.0.2.2/projects/fuel/web/create_student.php', {
		'field_1':$scope.field_1,'field_2':$scope.field_2,'field_3':$scope.field_3,
		'field_4':$scope.field_4,'field_5':$scope.field_5,'field_6':$scope.field_6,
		'field_7':$scope.field_7,'field_8':$scope.field_8,'field_14':$scope.field_14,'email':$scope.cook_work_email
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Created Successfully");
				window.location = "home.html";
				return;				
			}
			else if(data.success == 2)
			{
				alert("Please Fill All Fields");
			}
			else
			{
				alert("Un Successfully");
			}
        });
    }
/****************************************************************************/
/************************** admin Details *********************************/
/****************************************************************************/
	$http.post('http://10.0.2.2/projects/fuel/web/admin_get.php')
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			$scope.admin_details = data.details;
		}
		else
		{
			$scope.admin_details = "No Data Found !!!";
		}
    });
/****************************************************************************/
/************************** Get Feedback *********************************/
/****************************************************************************/
	$http.post('http://10.0.2.2/projects/fuel/web/feedback_get.php', {	'email':$scope.cook_work_email})
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			$scope.feedback_details = data.details;
		}
		else
		{
			$scope.feedback_details = "No Data Found !!!";
		}
    });
/****************************************************************************/
/************************** Get All details  *********************************/
/****************************************************************************/
	$http.post('http://10.0.2.2/projects/fuel/web/get_business_user.php')
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			$scope.user_bus_details = data.details;
		}
		else
		{
			$scope.user_bus_details = "No Data Found !!!";
		}
    });
	
	$http.post('http://10.0.2.2/projects/fuel/web/student_get.php', {	'email':$scope.cook_work_email})
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			$scope.details = data.details;
		}
		else
		{
			$scope.details = "No Data Found !!!";
		}
    });
	
	$http.post('http://10.0.2.2/projects/fuel/web/get_sport.php')
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			$scope.sport_details = data.details;
		}
		else
		{
			$scope.sport_details = "No Data Found !!!";
		}
    });
	
/****************************************************************************/
/************************** Add Requriments *********************************/
/****************************************************************************/
	$scope.create_feedback = function() 
	{		
		$http.post('http://10.0.2.2/projects/fuel/web/create_feedback.php', 
		{
		'field_1':$scope.field_1,'field_2':$scope.field_2,'email':$scope.cook_field_1
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Feedback Submitted Successfully");
				window.location = "user_home.html";
				return;				
			}
			else if(data.success == 2)
			{
				alert("Please Fill All Fields");
			}
			else if(data.success == 0)
			{
				alert("Error In Creating");
			}
			else
				{
					alert("Un Successfully");
				}
        });
    }

	
/****************************************************************************/
/************************** User Update *********************************/
/****************************************************************************/
	
		$http.post('http://10.0.2.2/projects/fuel/web/get_user_info.php',
		{
			'email':$scope.cook_user_email
		})
		.success(function(data, status, headers, config) 
		{
				$scope.userdetails = data.details;
          });
		  
$scope.user_update_info = function(name,password,mobile) 
	{
		window.location = "user_info_edit.html";
		$cookieStore.put("cook_name",name);
		$cookieStore.put("cook_password",password);
		$cookieStore.put("cook_mobile",mobile);
		return;
	}	
	
	$scope.cook_name = $cookieStore.get("cook_name");
	$scope.cook_password = $cookieStore.get("cook_password");
	$scope.cook_mobile = $cookieStore.get("cook_mobile");

	$scope.save_update_info = function() 
	{		
		$http.post('http://10.0.2.2/projects/fuel/web/user_update_info.php',{
		 'name':$scope.cook_name, 'password':$scope.cook_password,
		 'mobile': $scope.cook_mobile, 'email': $scope.cook_user_email})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Submited successfully");
				window.location = "user_update_info.html";
				return;				
			}
			else
			{
				alert("Invalid Inputs");
			}   
          });
     }
	 
	 
/****************************************************************************/
/************************** Delete Products *********************************/
/****************************************************************************/
	// products_delete
	$scope.delete_bus = function(cus_id) 
	{		
        $http.post('http://10.0.2.2/projects/fuel/web/delete_bus.php', 
		{
		'id': cus_id
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Deleted Successful");
				window.location = "view_students.html";
				return;
			}
			else if(data.success == 0)
			{
				alert("Error While Deleting Product!!");
			}
			else
			{
				alert("No id found");
			}
        });
    }

/****************************************************************************/
/************************** Student Update *********************************/
/****************************************************************************/
$scope.update_student = function(cus_id,field_1,field_2,field_3,
								 field_4,field_5,field_6,field_7,field_8,field_14) 
	{
		window.location = "update_student.html";
		$cookieStore.put("cook_cus_id",cus_id);
		$cookieStore.put("cook_field_1",field_1);
		$cookieStore.put("cook_field_2",field_2);
		$cookieStore.put("cook_field_3",field_3);
		$cookieStore.put("cook_field_4",field_4);
		$cookieStore.put("cook_field_5",field_5);
		$cookieStore.put("cook_field_6",field_6);
		$cookieStore.put("cook_field_7",field_7);
		$cookieStore.put("cook_field_8",field_8);
		$cookieStore.put("cook_field_14",field_14);
		return;
	}	
	
	$scope.cook_cus_id = $cookieStore.get("cook_cus_id");
	$scope.cook_field_1 = $cookieStore.get("cook_field_1");
	$scope.cook_field_2 = $cookieStore.get("cook_field_2");
	$scope.cook_field_3 = $cookieStore.get("cook_field_3");
	$scope.cook_field_4 = $cookieStore.get("cook_field_4");
	$scope.cook_field_5 = $cookieStore.get("cook_field_5");
	$scope.cook_field_6 = $cookieStore.get("cook_field_6");
	$scope.cook_field_7 = $cookieStore.get("cook_field_7");
	$scope.cook_field_8 = $cookieStore.get("cook_field_8");
	$scope.cook_field_14 = $cookieStore.get("cook_field_14");

	$scope.save_student = function() 
	{		
		$http.post('http://10.0.2.2/projects/fuel/web/save_student.php',{
		'id':$scope.cook_cus_id,'field_1':$scope.cook_field_1,'field_2':$scope.cook_field_2,
		'field_3':$scope.cook_field_3,'field_4':$scope.cook_field_4,'field_5':$scope.cook_field_5,
		'field_6':$scope.cook_field_6,'field_7':$scope.cook_field_7,'field_8':$scope.cook_field_8,
		'field_14':$scope.cook_field_14})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Submited successfully");
				window.location = "view_students.html";
				return;				
			}
			else
			{
				alert("Invalid Inputs");
			}   
          });
     }


$scope.update_slot = function(cus_id,field_12,field_13) 
	{
		window.location = "update_slot.html";
		$cookieStore.put("cook_cus_id",cus_id);
		$cookieStore.put("cook_field_12",field_12);
		$cookieStore.put("cook_field_13",field_13);
		return;
	}	
	
	$scope.cook_cus_id = $cookieStore.get("cook_cus_id");
	$scope.cook_field_12 = $cookieStore.get("cook_field_12");
	$scope.cook_field_13 = $cookieStore.get("cook_field_13");

	$scope.save_slot = function() 
	{		
		$http.post('http://10.0.2.2/projects/fuel/web/save_slot.php',{
		'id':$scope.cook_cus_id,'field_1':$scope.cook_field_12,'field_2':$scope.cook_field_13})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Submited successfully");
				window.location = "view_students.html";
				return;				
			}
			else
			{
				alert("Invalid Inputs");
			}   
          });
     }


	/****************************************************************************/
/************************** Get All details  *********************************/
/****************************************************************************/
	$http.post('http://10.0.2.2/projects/fuel/web/work_get.php')
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			$scope.work_details = data.details;
		}
		else
		{
			$scope.work_details = "No Data Found !!!";
		}
    });
/****************************************************************************/
/************************** Create Survey Question **************************/
/************************** create_choice		 **************************/
/****************************************************************************/
$scope.update_survey = function(cus_id,email) 
	{
		window.location = "post_feedback.html";
		$cookieStore.put("cook_cus_id",cus_id);
		$cookieStore.put("cook_field_1",email);
		return;
	}	
	
$scope.update_status = function(cus_id,field_6) 
	{
		window.location = "admin_post_status.html";
		$cookieStore.put("cook_cus_id",cus_id);
		$cookieStore.put("cook_field_6",field_6);
		return;
	}	
	
$scope.submit_survey = function() 
	{
		window.location = "view_rating_user.html";
		return;
	}	
	
	$scope.cook_cus_id = $cookieStore.get("cook_cus_id");
	$scope.cook_field_1 = $cookieStore.get("cook_field_1");

	
	$scope.create_choice_user = function(field_2,field_3,field_4,
					field_5,field_6,field_7,field_8,field_9) 
	{		
        $http.post('http://10.0.2.2/projects/fuel/web/create_choice_user.php', 
		{
		'id': $scope.cook_cus_id,'email': $scope.cook_field_1,
		'field_2': field_2,'field_3': field_3,'field_4': field_4,
		'field_5': field_5,'field_6': field_6,'field_7': field_7,
		'field_8': field_8,'field_9': field_9,
		'field_10': $scope.cook_user_email
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				//alert("Successful");
				//window.location = "survey_answer.html";
				//return;
			}
			else if(data.success == 0)
			{
				alert("Failed!!");
			}
			else
			{
				alert("No id found");
			}
        });
    }

	
	$scope.save_status = function() 
	{		
		$http.post('http://10.0.2.2/projects/fuel/web/save_status.php',{
		 'cus_id':$scope.cook_cus_id, 'field_9':$scope.cook_field_6})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Submited successfully");
				window.location = "view_admin_booking.html";
				return;				
			}
			else
			{
				alert("Invalid Inputs");
			}   
          });
     }

/****************************************************************************/
/************************** Get All User details  *********************************/
/****************************************************************************/
	$http.post('http://10.0.2.2/projects/fuel/web/user_get_all.php')
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			$scope.all_user_details = data.details;
		}
		else
		{
			$scope.all_user_details = "No Data Found !!!";
		}
    });
	
$scope.update_booking = function(cus_id,email,field_1,field_2,field_3) 
	{
		window.location = "update_booking.html";
		$cookieStore.put("cook_cus_id",cus_id);
		$cookieStore.put("cook_email",email);
		$cookieStore.put("cook_field_1",field_1);
		$cookieStore.put("cook_field_2",field_2);
		$cookieStore.put("cook_field_3",field_3);
		return;
	}	
	
	$scope.cook_cus_id = $cookieStore.get("cook_cus_id");
	$scope.cook_email = $cookieStore.get("cook_email");
	/*
	$scope.cook_field_1 = $cookieStore.get("cook_field_1");
	$scope.cook_field_2 = $cookieStore.get("cook_field_2");
	$scope.cook_field_3 = $cookieStore.get("cook_field_3");
	*/
	$scope.save_booking = function() 
	{		
		$scope.field_10 = document.getElementById('price_id').value;

		$http.post('http://10.0.2.2/projects/fuel/web/save_booking.php',{
		'email':$scope.cook_email,'field_1':$scope.cook_field_1,'field_2':$scope.cook_field_2,
		'field_3':$scope.cook_field_3,'field_4':$scope.field_4,'field_5':$scope.field_5,
		'field_8':$scope.field_8,'field_9':$scope.field_9,'field_10':$scope.field_10,
		'field_7':$scope.cook_user_email})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Payment Done successfully");
				window.location = "view_booking.html";
				return;				
			}
			else if(data.success == 3)
			{
				alert("Enter 10 Digit Mobile No");
				return;				
			}
			else if(data.success == 4)
			{
				alert("Enter 16 Digit Card Number");
				return;				
			}
			else if(data.success == 5)
			{
				alert("Enter 3 Digit CVV");
				return;				
			}
			else
			{
				alert("Invalid Inputs");
			}   
          });
     }


$scope.update_id_2 = function(cus_id) 
	{
		window.location = "get_geolocation_2.html";
		$cookieStore.put("cook_cus_id",cus_id);
		return;
	}	
	
	$scope.cook_cus_id = $cookieStore.get("cook_cus_id");
	
			
	$scope.update_location_2 = function() 
	{		
	
		//$scope.get_Latitude = document.getElementById('get_Latitude').value;
		//$scope.get_Longitude = document.getElementById('get_Longitude').value;
		
        $http.post('http://10.0.2.2/projects/fuel/web/update_location_2.php', 
			{	
			'field_1': $scope.field_1, 'field_2':$scope.field_2,
			'email':$scope.cook_cus_id
			})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Updated Successful");
				window.location = "view_booking.html";
				//location.reload(); 
				return;				
			}
			else if(data.success == 2)
			{
				alert("Please Fill All Fields");
			}
			else
			{
				alert("Login Unsuccessful");
			}
        });
    }
	
	
/****************************************************************************/
/************************** create Area *********************************/
/****************************************************************************/
	$scope.create_price = function() 
	{
	$http.post('http://10.0.2.2/projects/fuel/web/create_price.php', 
		{
		'field_1':$scope.field_1,'field_2':$scope.field_2,'email':$scope.cook_work_email
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				location.reload(); 
				return;				
			}
			else if(data.success == 2)
			{
				alert("Fill All Fields");
			}
			
			else
				{
					alert("Un Successfully");
				}
        });
    }
/*****************************************************************************/
/************************** Update update_employee*********************************/
/****************************************************************************/
	$scope.update_price = function(cus_id,field_2) 
	{
		$cookieStore.put("cook_cus_id",cus_id);
		$cookieStore.put("cook_field_1",field_2);
		window.location = "edit_price.html";
		return;
	}
	

	$scope.cook_cus_id = $cookieStore.get("cook_cus_id");
	$scope.cook_field_1 = $cookieStore.get("cook_field_1");
	
		
$scope.save_price = function() 
	{
	$http.post('http://10.0.2.2/projects/fuel/web/save_price.php', {
			'id': $scope.cook_cus_id,
			'field_1': $scope.cook_field_1})
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			alert("Updated Successfully");
			window.location = "create_price.html";
			$cookies.cook_cus_id = "";
			$cookies.cook_field_1 = "";	
			return;
		}
				else if(data.success == 2)
				{
					alert("Adding Unsuccessful");
				}
				else
				{
					alert("Fill All Fields");
				}
			
    });
	}
	
	
	
	$http.post('http://10.0.2.2/projects/fuel/web/get_price.php')
	.success(function(data, status, headers, config) 
	{
			$scope.price_details = data.details;
	});
	
	$scope.delete_price = function(cusid) 
	{		
        $http.post('http://10.0.2.2/projects/fuel/web/delete_price.php', 
		{
		'id': cusid
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Deleted Successful");
				window.location = "create_price.html";
				return;
			}
			else if(data.success == 0)
			{
				alert("Error While Deleting Product!!");
			}
			else
			{
				alert("No id found");
			}
        });
    }





	
});