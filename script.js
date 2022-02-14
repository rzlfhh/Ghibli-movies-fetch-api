async function getUsers() {
    let url = 'https://ghibliapi.herokuapp.com/films';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    let users = await getUsers();
    let html = '';
    users.forEach(user => {
        let htmlSegment = `<div class="card">
                                <div class="card-header">
                                    <img src="${user.image}" alt="rover" />
                                </div>
                                <div class="card-body">
                                    <span class="tag tag-teal">${user.director}</span>
                                    <h4>
                                        ${user.title} <span> (${user.original_title})</span>
                                    </h4>

                                    <p>
                                        ${user.release_date}
                                    </p>

                                    <p>
                                        ${user.description}
                                    </p>
                                </div>
                            </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();