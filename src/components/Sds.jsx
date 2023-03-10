// import * as Sds from "hengna";
// import "hengna/dist/antd.less";
import * as Sds from "@shoplazza/sds";
import "@shoplazza/sds/dist/@shoplazza/sds.css";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

console.log(Sds);

const Button = (Sds || {}).Button;
// console.log(Button);

const Test = () => {
	const [count, setCount] = useState(0);
	const value = "click to copy";
	return (
		<div>
			<span> sds: </span>
			{Button && (
				<Button
					type="primary"
					onClick={() => {
						setCount(count + 1);
					}}>
					<span>current count is: {count}</span>
				</Button>
			)}
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
