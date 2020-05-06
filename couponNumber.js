var char =['abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789'];
		var max=100000000;
		var random=(Math.random()*max);	
		var sb;
		
		while (random>0)
		{
			sb = sb + (char[random % char.length]);
			random /= char.length;
		}

		var couponCode = sb;
		console.log("Coupon Code: "+couponCode);