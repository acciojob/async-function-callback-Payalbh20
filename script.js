sync function getData(callback) {
		  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
		  const data = await response.json();
		  callback(data.title);
		}

		document.getElementById('btn').addEventListener('click', async () => {
			getData((title) => {
				document.getElementById('output').innerText = title;
			});
		});