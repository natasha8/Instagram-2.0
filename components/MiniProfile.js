import { signOut, useSession } from "next-auth/react";

const MiniProfile = () => {
	const { data: session } = useSession();
	console.log("SESSION", session);
	return (
		<div className="flex items-center justify-between mt-14 ml-10">
			<img
				className="w-16 h-16 rounded-full border p-[2px]"
				src={session?.user.image}
				alt="user image"
			/>
			<div className="flex-1 mx-8">
				<h2 className="font-bold">{session?.user.username}</h2>
				<h3 className="text-sm text-gray-800">Welcome to Instagram</h3>
			</div>
			<button
				className="text-black text-sm font-semibold"
				onClick={signOut}
			>
				Sign Out
			</button>
		</div>
	);
};

export default MiniProfile;
