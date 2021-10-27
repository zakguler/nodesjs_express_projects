[async] statement
[await]
[promise]


	"async and await make promises easier to write"
	async makes a function return a Promise
	await makes a function wait for a Promise

    The keyword async before a function makes the function return a promise
    The keyword await before a function makes the function wait for a promise

	-The two arguments (resolve and reject) are pre-defined by JavaScript.
	-We will not create them, but call one of them when the executor function is ready.
	-Very often we will not need a reject function.