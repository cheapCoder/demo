import Copy from "react-copy-to-clipboard";

export default () => {
	const name = "lwjeflqjwelfjqlwejflqkjewflkqjewfqewf";
	return (
		<Copy
			text={name}
			onCopy={() => {
				console.log("copy");
			}}>
			tokentoken
		</Copy>
	);
};
