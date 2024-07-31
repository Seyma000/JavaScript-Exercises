document.addEventListener('DOMContentLoaded', () => {
    const jokeElement = document.getElementById('joke');
    const newJokeBtn = document.getElementById('newJokeBtn');

    function fetchJoke() {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(data => {
                jokeElement.textContent = data.value;
            })
            .catch(error => {
                jokeElement.textContent = 'Şaka yüklenirken bir hata oluştu.';
                console.error('Error fetching joke:', error);
            });
    }

    newJokeBtn.addEventListener('click', fetchJoke);

    // Fetch a joke when the page loads
    fetchJoke();
});
