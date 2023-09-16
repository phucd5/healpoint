import React from "react";
import styled from "styled-components";
import frontImage from "../images/Front.png";
import backImage from "../images/Back.png";

const PageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: #f2f2f2;
`;

const ImageContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 800px;
`;

const BodySelector = () => {
	const handleHeadClick = () => {
		alert("Head");
	};
	return (
		<PageContainer>
			<ImageContainer>
				<map name="bodyMap">
					<area
						shape="rect"
						coords="0,0,100,20" // Define coordinates for the top 20% of the image
						alt="Top Area"
						onClick={handleHeadClick}
					/>
				</map>

				<img src={frontImage} alt="Front" />
				<img src={backImage} alt="Back" />
			</ImageContainer>
		</PageContainer>
	);
};

export default BodySelector;
