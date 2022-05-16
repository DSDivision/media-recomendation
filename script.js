fetch("http://127.0.0.1:8000/recommendation/", {method: "GET"})
    .then(res => res.json())
    .then(data => {
        for (var k in data){
            console.log(data[k])
        }
    })

document.getElementById("get-recomendations-btn").addEventListener("click", getR);

function getR(){
    fetch("http://127.0.0.1:8000/recommendation/", {
        method: "GET"
    })
        .then(res => res.json())
        .then(data => {
            let output = "";
            for (var r in data){
                output += `
                <div class="result">
                    <div class="thumbnail">
                        <img src="/movie_test_thumbnail.jpg" alt="thumbnail"></img>
                    </div>
                    <div class="text">
                        <h2 class="title">
                            ${data[r].title} ${data[r].release_year}
                        </h2>
                        <h3>
                            <div class="rating">
                                Genre: ${data[r].listed_in}
                            </div>
                        </h3>
                        ${data[r].description}
                        <a href="https://www.imdb.com/">IMDb</a>
                    </div>
                </div>
                `;
            };

            document.getElementById("results").innerHTML = output
        })
}

/*
<div class="result">
    <div class="thumbnail">
        <img src="/movie_test_thumbnail.jpg" alt="thumbnail"></img>
    </div>
    <div class="text">
        <h3 class="title">
            Title of the movie
            <div class="rating">
                8/10
            </div>
        </h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatum suscipit doloremque quidem tenetur, necessitatibus molestiae quae corrupti maxime ratione. Iure hic nihil animi, voluptates maxime quo eligendi possimus. Vero.
        <a href="https://www.imdb.com/">IMDb</a>
    </div>
</div>
*/