import { Button } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const Test = () => {
	const [count, setCount] = useState(0);
	const value = "click to copy";
	return (
		<div>
			<Button
				type="primary"
				onClick={() => {
					setCount(count + 1);
				}}>
				current count is: {count}
			</Button>
			<CopyToClipboard
				text={value}
				onCopy={() => {
					alert(`Copied: ${value}`);
				}}>
				<button>{value}</button>
			</CopyToClipboard>
		</div>
	);
};

export default Test;
