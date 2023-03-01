<slot />

<style global>
	html {
		font-family: greycliff-cf, sans-serif;
		font-size: 14px;
	}
	section {
		flex: 1 1;
		max-width: calc(26vw);
		width: 100%;
	}
	h2,
	h3 {
		text-transform: uppercase;
		font-weight: 300;
		letter-spacing: 3px;
	}
	button,
	input,
	select,
	textarea {
		appearance: none;
		border: 1px solid slategray;
		border-radius: 3px;
		box-sizing: border-box;
		font-family: inherit;
		font-size: 0.8rem;
		letter-spacing: 1px;
		text-transform: uppercase;
		margin: 0;
		padding: 2px 10px;
	}
	button {
		background-color: transparent;
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
