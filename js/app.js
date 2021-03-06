var Nav = React.createClass({
    render: function() {
        return <div className='col-xs-12 col-sm-5' id='navbar'>
            <ul
                id='navbarUl'
                className=
                    'nav navbar-nav navbar-right nav-pills'
            >
                <li>
                    { this.props.children }
                </li>
            </ul>
        </div>;
    }
});

var Header = React.createClass({
    render: function() {
        return (
            <div className='navbar navbar-default' id='header'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-xs-12 col-sm-7'>
                            <a href='/'>
                                <img
                                    id='banner'
                                    src='resources/images/banner.png'
                                />
                            </a>
                        </div>
                        <Nav>
                            <a href='/about.html'>
                                <span style={ { color: '#888' } }>
                                    About
                                </span>
                            </a>
                        </Nav>
                    </div>
                </div>
            </div>
        );
    }
});

var Footer = React.createClass({
    render: function() {
        return (
            <footer className='footer'>
                <div className='container-fluid'>
                    <div className='footer-content'>
                        <div className='row'>
                            <div className='col-xs-5'></div>
                            <div className='col-xs-2'>
                                <a href='/'>
                                    <img
                                        className='center-block'
                                        id='footer-icon'
                                        src='resources/images/entwine-logo.png'
                                    />
                                </a>
                            </div>
                            <div className='col-xs-5'>
                                <p id='copyright'>
                                    Entwine © Hobu, Inc.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
});

var Thumb = React.createClass({
    render: function() {
        var r = this.props.resource;
        var href = '/data/' + r.page + '.html';

        var flags = [
            <a href={ href }>
                <img
                    className='flag'
                    title='Served from NA'
                    src='resources/icons/na.svg'
                />
            </a>
        ];

        if (r.eu) {
            flags = flags.concat(
                <a href={ href + '?b=http://eu-c.entwine.io' }>
                    <img
                        className='flag'
                        title='Served from EU'
                        src='resources/icons/eu.svg'
                    />
                </a>
            );
        }

        return <div className='col-xs-6 col-sm-4'>
            <a
                href={ '/data/' + r.page + '.html' }
            >
                <img
                    className='img-responsive thumb img-thumbnail'
                    src={ 'resources/images/' + r.page + '.jpg' }
                />
            </a>
            <p className='lead center-block'>{ r.name } { flags }</p>
        </div>;
    }
});

var Resource = function(name, page, eu) {
    this.name = name;
    this.page = page;
    this.eu = eu;
};

var Page = React.createClass({
    render: function() {
        var eu = true;

        var resources = [
            new Resource('Denmark', 'denmark', eu),
            new Resource('Railway - France', 'sncf', eu),
            new Resource('Red Rocks Amphitheatre', 'red-rocks', eu),
            new Resource('New Zealand', 'new-zealand'),
            new Resource('New York City', 'nyc', eu),
            new Resource('Iowa', 'iowa', eu),
            new Resource('Kentucky', 'kentucky'),
            new Resource('Lake Isabella', 'lake-isabella', eu),
            new Resource('Washington DC', 'dc'),
            new Resource('Netherlands', 'ahn'),
            new Resource('Minnesota', 'mn'),
            new Resource('Autzen Stadium', 'autzen', eu),
            new Resource('Vanuatu Village - Nepal', 'vanuatu-village', eu),
            new Resource('Dublin', 'dublin'),
            new Resource('Half Dome - Yosemite', 'half-dome', eu),
            new Resource('Cedar Falls Bridge - Iowa', 'iowa-bridge', eu),
            new Resource('Mount St. Helens', 'st-helens', eu),
            new Resource('Space Shuttle Discovery', 'shuttle', eu),
            new Resource('Lone Star Geyser', 'lone-star', eu),
        ];

        return <div>
            <Header/>
                <div className='container-fluid'>
                    <div className='row'>
                        <div
                            className='col-xs-12'
                            style={ { paddingBottom: 64 } }
                        >
                            <h2
                                className='center-block row'
                                style={ {
                                    color: '#192854',
                                    paddingTop: 36,
                                    paddingBottom: 24
                                } }
                            >
                                Entwine
                                <span style={ { color: '#39B44A' } }> / </span>
                                Potree
                            </h2>
                            <div className='row'>
                                <div className='col-xs-12'>
                                    <small style={ { color: '#888', paddingBottom: 24 } } className='text-right col-xs-12'>
                                        Use the EU flag links for data served from Frankfurt
                                    </small>
                                </div>
                            </div>
                            {
                                resources.map((v, i) =>
                                        <Thumb
                                            key={ i }
                                            resource={ v }
                                            name={ v.name }
                                            href={ v.page }
                                            src={ v.image }/>)
                            }
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>;
    }
});

ReactDOM.render(<Page/>, document.getElementById('app'));

