import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
			isCompressed: false,
		}
    }

    toggleDrawer = () => {
		this.setState(state => ({ isCompressed: !state.isCompressed }));
	}
    
    render() {
        const { isCompressed } = this.state;
        const { links } = this.props;

        return (
            <React.Fragment>
                {isCompressed && (<div className="overlay" onClick={this.toggleDrawer} />)}
                <aside className={`sidebar ${isCompressed ? '' : 'sidebar--compressed'}`}>
                    <div
                        className={`${isCompressed ? 'sidebar__main__open' : 'sidebar__main'}`}
                        onClick={this.toggleDrawer}
                    >
                        <span className={`sidebar__icon fas ${isCompressed ? 'fa-times' : 'fa-bars'}`} />
                    </div>
                    <ul className="sidebar__list">
                        {links.length && links.map((link, i) => (
                            <li 
                                key={i}
                                className="sidebar__list-item"
                            >
                                <Link
                                    to={link.url}
                                    className="sidebar__list-link"
                                >
                                    <span className={`sidebar__icon fas fa-${link.icon}`} />
                                    {isCompressed && ( <p className="sidebar__list-name">{link.name}</p> )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>
            </React.Fragment>
        );
    }
}

export default Sidebar;