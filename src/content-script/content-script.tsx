import React from "react";
import styles from "@/styles/injectedTailwind.css";

type Props = {};
const ContentScript = (props: Props) => {
	// console.log(styles.toString())
	return (
		<div>
			<style type="text/css">{styles.toString()}</style>
			<div className="isolate absolute z-[999] flex h-screen w-screen items-center justify-center bg-gray-300 bg-opacity-30 inset-0">
				ContentScript
			</div>
		</div>
	);
};
export default ContentScript;
