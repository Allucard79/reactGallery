const movies = [{
        id: 1,
        title: 'Hobbit',
        desc: 'Film na podstawie książki J.R.R Tolkiena',
        poster: './img/hobbit.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film opowiadający historię króla sawanny',
        poster: './img/lionKing.jpg'
    },
    {
        id: 3,
        title: 'Alien',
        desc: 'Kino grozy połączone z fantastyką naukową.',
        poster: './img/alien.jpg'
    }
];

const Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired
    },

    render: function () {
        return React.createElement('li', {
                key: this.props.movie.id
            },
            React.createElement(MovieTitle, {
                title: this.props.movie.title
            }),
            React.createElement(MovieDescription, {
                desc: this.props.movie.desc
            }),
            React.createElement(MovieImage, {
                poster: this.props.movie.poster
            })
        )
    }
});

const MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },

    render: function () {
        return React.createElement('h2', {
            className: 'movieTitle'
        }, this.props.title)
    }

});

const MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired
    },

    render: function () {
        return React.createElement('p', {
            className: 'movieDescription'
        }, this.props.desc)
    }
});

const MovieImage = React.createClass({
    propTypes: {
        poster: React.PropTypes.string.isRequired
    },

    render: function () {
        return React.createElement('img', {
            className: 'movieImage',
            src: this.props.poster
        })
    }
});

const MoviesList = React.createClass({
    propTypes: {
        list: React.PropTypes.array.isRequired
    },

    render: function () {
        const moviesElements = this.props.list.map(function (movie) {
            return React.createElement(Movie, {
                key: movie.id,
                movie: movie
            });
        });
        return (
            React.createElement('ul', {
                className: 'moviesList'
            }, moviesElements)
        )
    }
});

const element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement(MoviesList, {list: movies})
    );
ReactDOM.render(element, document.getElementById('app'));