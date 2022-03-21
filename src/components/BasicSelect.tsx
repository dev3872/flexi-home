import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import BasicCard from "./BasicCard";

export default function BasicSelect(props: {
	name: string;
	image: string;
	option: {
		name: string;
		options: string[];
	}[];
}) {
	const [open, setOpen] = React.useState(false);
	return (
		<Box
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
			sx={{ position: "relative", minWidth: 120 }}
		>
			<Typography
				key={"basic-select"+props.name}
				variant="h6"
				noWrap
				component="div"
				sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
			>
				{props.name}
			</Typography>
			{open && <BasicCard image={props.image} option={props.option}/>}
		</Box>
	);
}
