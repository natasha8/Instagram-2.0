import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";

export default function Home() {
	return (
		<div className="bg-pink-100 h-screen overflow-y-scroll scrollbar-hide">
			<Head>
				<title>Instagram 2.0</title>
			</Head>

			{/* HEADER*/}
			<Header />
			{/* FEED*/}
			<Feed />
			{/* MODAL*/}
			<Modal />
		</div>
	);
}
