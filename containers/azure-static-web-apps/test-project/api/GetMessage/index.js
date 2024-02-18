module.exports = async (context, req) => {
	context.res = {
		body: {
			text: "Hello from the API",
		},
	};
};
