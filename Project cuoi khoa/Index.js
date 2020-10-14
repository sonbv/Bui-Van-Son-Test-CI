let data = [{"quiz":"I am full of energy. I am literally bouncing off the walls","mood":"1","dysphoria":"2","euphoria":"0"},{"quiz":"Some people get on my nerves","mood":"1","dysphoria":"0","euphoria":"2"},{"quiz":"I am feeling gloomy","mood":"1","dysphoria":"0","euphoria":"2"},{"quiz":"I want to be left alone","mood":"1","dysphoria":"0","euphoria":"2"},{"quiz":"I feel overwhelmed by work or studies","mood":"1","dysphoria":"0","euphoria":"2"},{"quiz":"I feel like a superhero","mood":"1","dysphoria":"2","euphoria":"0"},{"quiz":"I am dissatisfied with myself","mood":"1","dysphoria":"0","euphoria":"2"},{"quiz":"I am ecstatic","mood":"1","dysphoria":"2","euphoria":"0"},{"quiz":"I don't know anyone I could trust","mood":"1","dysphoria":"0","euphoria":"2"},{"quiz":"I live in a depressing environment","mood":"1","dysphoria":"0","euphoria":"2"},{"quiz":"My relationships never work out","mood":"1","dysphoria":"0","euphoria":"2"},{"quiz":"I am extremely enthusiastic about my life","mood":"1","dysphoria":"2","euphoria":"0"},{"quiz":"I feel intimidated by other people","mood":"1","dysphoria":"0","euphoria":"2"},{"quiz":"I am fed up","mood":"1","dysphoria":"0","euphoria":"2"},{"quiz":"I am annoyed","mood":"1","dysphoria":"0","euphoria":"2"},{"quiz":"I am extremely excited about meeting other people","mood":"1","dysphoria":"2","euphoria":"0"},{"quiz":"I am riding the positive momentum","mood":"1","dysphoria":"2","euphoria":"0"},{"quiz":"I feel hopeless about my future","mood":"1","dysphoria":"0","euphoria":"2"},{"quiz":"I am miserable","mood":"1","dysphoria":"0","euphoria":"2"},{"quiz":"I can't rely on anyone","mood":"1","dysphoria":"0","euphoria":"2"}];
const questions = document.getElementById('questions');
let mood1 = questions[i].mood
let mood2 = questions[i].dysphoria
let mood3 = questions[i].euphoria

for (i = 0; i<data.length; i++) {
    questions.innerHTML = data[i].quiz;
}

// questions.innerHTML = data[Math.floor(Math.random() * data.length)]
// function show_questions() {
// random_questions = data[Math.floor(Math.random() * data.length)];
// questions.innerHTML = for (i = 0; i<data.length; i++) {data[i].quiz;};
// };

// show_questions();
// reload.addEventListener('click', show_questions);

