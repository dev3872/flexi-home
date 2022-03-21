import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import BasicSelect from "./BasicSelect";
import ownerNavbar from "../images/owner_navbar.jpg";
import dealerNavbar from "../images/dealer_navbar.jpg";
import sellerNavbar from "../images/seller_navbar.jpg";
import tenantNavbar from "../images/tenant_navbar.webp";
import userIcon from "../images/user-64.png";
import { Buyers, Tenants, Owners, Builders } from "./NavbarOptions";
import { Link } from "react-router-dom";
const navbarImages = [sellerNavbar, tenantNavbar, ownerNavbar, dealerNavbar];
const pages = [
	"For Buyers",
	"For Tenants",
	"For Owners",
	"For Builder/Dealers",
];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];
const settings = [
	{ name: "Register", link: "sign-up" },
	{ name: "Login", link: "sign-in" },
	{ name: "FAQ", link: "faq" },
	{ name: "About-us", link: "about-us" },
];
const navbarOptions = [Buyers, Tenants, Owners, Builders];
declare module "@mui/material/styles" {
	interface BreakpointOverrides {
		xs: true;
		sm: true;
		md: true;
		lg: true;
		xl: true;
		xxl: true;
	}
}

const ResponsiveAppBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position="static">
			<Container maxWidth="xxl">
				<Toolbar disableGutters>
					<Typography
						variant="h4"
						noWrap
						component="div"
						sx={{ mr: 4, display: { xs: "none", md: "flex" } }}
					>
						FlexiHome
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
					>
						FlexiHome
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{pages.map((page, index) => (
							<Button
								key={page}
								sx={{
									my: 2,
									mx: { xs: 0, md: 5 },
									color: "white",
									display: "block",
								}}
							>
								<BasicSelect
									name={page}
									image={navbarImages[index]}
									option={navbarOptions[index]}
								/>
							</Button>
						))}
					</Box>
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Post Property">
							<Typography
								variant="h6"
								noWrap
								component="div"
								sx={{ p: 0, mx: 2 }}
							>
								POST PROPERTY
							</Typography>
						</Tooltip>
					</Box>
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<img src={userIcon} alt="userIcon" />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: "45px" }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem key={setting.name} onClick={handleCloseUserMenu}>
									<Link to={setting.link}>
										<Typography sx={{textDecoration:'none'}}  >{setting.name}</Typography>
									</Link>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default ResponsiveAppBar;
