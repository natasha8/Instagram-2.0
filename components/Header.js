import Image from "next/image";
import {
	SearchIcon,
	PlusCircleIcon,
	UserGroupIcon,
	HeartIcon,
	PaperAirplaneIcon,
	MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { modalState } from "../atoms/modalAtom";

const Header = () => {
	const { data: session, status } = useSession();
	const [open, setOpen] = useRecoilState(modalState);
	const router = useRouter();
	console.log("HEADER SESSION", session);
	return (
		<div className="shadow-sm border-b bg-white sticky top-0 z-50 ">
			<div className="flex justify-between max-w-6xl mx-5  lg:mx-auto">
				{/* LEFT - LOGO*/}
				<div
					className="relative hidden lg:inline-grid w-24 cursor-pointer"
					onClick={() => router.push("/")}
				>
					<Image
						src="https://links.papareact.com/ocw"
						alt="Picture of the author"
						layout="fill"
						objectFit="contain"
					/>
				</div>
				<div
					className="relative w-10 lg:hidden flex-shrink-0"
					onClick={() => router.push("/")}
				>
					<Image
						src="https://links.papareact.com/jjm"
						alt="Picture of the author"
						layout="fill"
						objectFit="contain"
					/>
				</div>

				{/* MIDDLE - SEARCH*/}
				<div className="max-w-xs">
					<div className="relative mt-1 p-3 rounded-md">
						<div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
							<SearchIcon
								className="h-5 w-5 text-gray-400"
								aria-hidden="true"
							/>
						</div>
						<input
							type="text"
							className="bg-gray-50 focus:ring-black focus:border-black block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
							placeholder="Search"
						/>
					</div>
				</div>
				{/*RIGHT - ICONS */}
				<div className="flex items-center justify-end space-x-4">
					<HomeIcon
						className="navBtn"
						onClick={() => router.push("/")}
					/>
					<MenuIcon className="h-6 md:hidden cursor-pointer" />

					{session ? (
						<>
							<div className="relative navBtn">
								<PaperAirplaneIcon className="navBtn" />
								<div className="absolute -top-2 -right-1 text-xs w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white animate-pulse">
									8
								</div>
							</div>
							<PlusCircleIcon
								className="navBtn rotate-1"
								onClick={() => setOpen(true)}
							/>
							<UserGroupIcon className="navBtn" />
							<HeartIcon className="navBtn" />
							<img
								onClick={signOut}
								src={session.user.image}
								alt="..."
								className="h-9 rounded-full cursor-pointer"
							/>
						</>
					) : (
						<button onClick={signIn}>Sign In</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
