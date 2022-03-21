import * as React from "react";
import {
	CardMedia,
	Card,
	Grid,
	styled,
	rgbToHex,
	Box,
	Typography,
	Zoom,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ItemName = styled(Box)(({ theme }) => ({
	backgroundColor: rgbToHex("rgb(244, 245, 247)"),
	minHeight: "100%",
	padding: theme.spacing(1),
	color: rgbToHex("rgb(4, 21, 51)"),
}));
const ItemList = styled(Box)(({ theme }) => ({
	backgroundColor: rgbToHex("rgb(255, 255, 255)"),
	minHeight: "100%",
	padding: theme.spacing(1),
	color: rgbToHex("rgb(4, 21, 51)"),
}));

export default function BasicCard(props: {
	image: string;
	option: {
		name: string;
		options: string[];
	}[];
}) {
	const [selectedName, setSelectedName] = React.useState<number>(0);
    const [selectedOption, setSelectedOption] = React.useState<number>(-1);
	return (
		<Card
			sx={{
				position: "absolute",
				zIndex: 10,
				minWidth: 900,
				minHeight: "max-content",
				border: "none",
				display: "flex",
			}}
		>
			<Grid container>
				<Grid item xs={3}>
					<ItemName>
						{props.option.map((option, index) => {
							return (
								<ItemName sx={{ display: "flex" }} key={`key-${index}`}>
									<Typography
										onMouseEnter={() => {
											setSelectedName(index);
										}}
										variant="body1"
										component="div"
										textAlign={"start"}
										sx={{ mt: 2 }}
									>
										{option.name}
									</Typography>
									<Zoom
										in={index === selectedName ? true : false}
										style={{
											transitionDelay: index === selectedName ? "50ms" : "0ms",
										}}
									>
										<ArrowForwardIosIcon sx={{ mt: 2, ml: "auto", mr: 2 }} />
									</Zoom>
								</ItemName>
							);
						})}
					</ItemName>
				</Grid>
				<Grid item xs={6}>
					<ItemList>
						{props.option[selectedName].options.map((option, index) => {
							return (
								<Typography
                                    onMouseEnter={()=>setSelectedOption(index)}
                                    onMouseLeave={()=>setSelectedOption(-1)}
									key={`media-${index}`}
									variant="body1"
									component="div"
									textAlign={"start"}
									sx={selectedOption===index?{ py: 2,backgroundColor: rgbToHex("rgb(244, 245, 247)"),}:{py: 2}}
								>
									{option}
								</Typography>
							);
						})}
					</ItemList>
				</Grid>
				<Grid item xs={3} sx={{ my: "auto", pr: 2 }}>
					<CardMedia
						key={`media-${props.image}`}
						sx={{ backgroundColor: rgbToHex("rgb(244, 245, 247)") }}
						component="img"
						height="200"
						image={props.image}
						alt="green iguana"
					/>
				</Grid>
			</Grid>
		</Card>
	);
}
