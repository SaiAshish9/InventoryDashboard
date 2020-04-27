import {
	FaShoppingCart,
	FaChartLine,
	FaWallet,
	FaShoppingBasket,
	FaIdCard,
	FaTruckPickup,
	FaFileAlt,
	FaCodeBranch,
	FaLock,
	FaUser
} from 'react-icons/fa';

import React from 'react';

export default [
	{
		name:'Dashboard', 
		path:'/', 
		icon:<FaChartLine />

	},
	{
		name:'Sell', 
		path:'/sell', 
		icon:<FaShoppingCart />

	},
	{
		name:'Purchase', 
		path:'/purchase', 
		icon:<FaWallet />

	},
	{
		name:'Order', 
		path:'/order', 
		icon:<FaShoppingBasket />
	},
	{
		name:'Profile', 
		path:'/profile', 
		icon:<FaIdCard />
	},
	{
		name:'Inventory', 
		path:'/inventory', 
		icon:<FaTruckPickup />
	},{
		name:'Reports', 
		path:'/reports', 
		icon:<FaFileAlt />
	},{
		name:'Branch', 
		path:'/branch', 
		icon:<FaCodeBranch />
	},{
		name:'Account', 
		path:'/account', 
		icon:<FaLock />
	},{
		name:'User', 
		path:'/user', 
		icon:<FaUser />
	},
]