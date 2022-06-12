<slot />

<style global>
	html {
		font-family: greycliff-cf, sans-serif;
	}
	section {
		flex: 1 1;
		max-width: calc(26vw);
		width: 100%;
	}
	h2 {
		text-transform: uppercase;
		font-weight: 300;
		letter-spacing: 3px;
	}
	input,
	select,
	textarea {
		border: 1px solid grey;
		border-radius: 3px;
		box-sizing: border-box;
		font-family: inherit;
		font-size: inherit;
		margin: 0;
		padding: 2px 10px;
	}
	button {
		background-color: transparent;
		border: 1px solid slategray;
		border-radius: 3px;
		font-family: inherit;
		letter-spacing: 1px;
		text-transform: uppercase;
	}
	button:hover {
		background-color: slategray;
		color: white;
	}
	button:active,
	button:focus {
		outline: 2px solid salmon;
	}
</style>
