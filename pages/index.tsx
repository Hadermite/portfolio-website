import { NextPage } from "next"
import Head from "next/head"

import HeroSection from "../components/HeroSection"
import ExperienceSection from "../components/ExperienceSection"


const HomePage: NextPage = () =>
	<>
		<Head>
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900" />
			<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800" />
		</Head>

		<HeroSection />
		<ExperienceSection />
	</>

export default HomePage