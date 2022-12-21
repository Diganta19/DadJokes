fetch('https://icanhazdadjoke.com/slack').then(res => res.json()).then(jokes => {
    const jokesText = jokes.attachments[0].text;
    const jokeText = document.getElementById('text');

    jokeText.innerHTML = jokesText;
})