import "../styles/globals.scss";
import { Sofia_Sans } from "next/font/google";

const sofiaSans = Sofia_Sans({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
});

export const metadata = {
	title: "IEEE UT - Home",
	description: "Generated by create next app"
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={sofiaSans.className}>{children}</body>
		</html>
	);
}
