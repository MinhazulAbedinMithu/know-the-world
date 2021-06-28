import React from "react";
import { Container } from "react-bootstrap";
import brandImg from "../../image/knowtheworld.png";
const About = () => {
	return (
		<Container>
			<div className="about ">
				<div className="about-head text-center py-5">
					<img src={brandImg} alt="" className="rounded "/>
				</div>
        <div className="about-desc">
          <h4>Description: </h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsum eligendi aliquam illo esse sequi voluptatem voluptate soluta alias tempora, laudantium consequuntur delectus quam cum praesentium necessitatibus! Eos, suscipit facere.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sint accusantium odio tempore quidem provident eius nostrum nobis corporis saepe voluptates, consequuntur debitis explicabo delectus deleniti maiores totam odit nesciunt? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis corrupti totam accusantium repudiandae magni, doloribus quis dignissimos tempora, pariatur hic iusto aliquam voluptates sint tenetur? Iusto odit doloribus eum omnis deleniti tenetur asperiores? Quam blanditiis minima ab eaque, iste vitae?</p>
        </div>
			</div>
		</Container>
	);
};

export default About;
