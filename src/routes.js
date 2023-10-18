// import
import Dashboard from "views/Dashboard/Dashboard";
import Tables from "views/Dashboard/Tables";
import Billing from "views/Dashboard/Billing";
import RTLPage from "views/Dashboard/RTL";
import Profile from "views/Dashboard/Profile";
import SignIn from "views/Auth/SignIn.js";
import SignUp from "views/Auth/SignUp.js";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";

var dashRoutes = [
	{
		path: "/dashboard",
		name: "Dashboard",
		icon: <HomeIcon color="inherit" />,
		component: Dashboard,
		layout: "/admin",
	},
	{
		path: "/formula",
		name: "Formulas",
		icon: <StatsIcon color="inherit" />,
		component: Tables,
		layout: "/admin",
	},
	{
		path: "/log",
		name: "Output logs",
		icon: <CreditIcon color="inherit" />,
		component: Billing,
		layout: "/admin",
	},

	{
		name: "USER MANAGEMENT",
		category: "users",
		state: "pageCollapse",
		views: [
			{
				path: "/users",
				name: "Users",
				icon: <PersonIcon color="inherit" />,
				secondaryNavbar: true,
				component: Tables,
				layout: "/admin",
			},
			{
				path: "/roles",
				name: "Roles",
				icon: <DocumentIcon color="inherit" />,
				component: Tables,
				layout: "/admin",
			},
		],
	},
];
export default dashRoutes;
