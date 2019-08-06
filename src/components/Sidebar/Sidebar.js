import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <section className="sidebar">
                <h3 className="sidebar__title">Components</h3>
                <ul className="sidebar__list">
                    <li className="sidebar__list-item">List 1</li>
                    <li className="sidebar__list-item">List 2</li>
                    <li className="sidebar__list-item">List 3</li>
                    <li className="sidebar__list-item">List 4</li>
                </ul>
            </section>
        );
    }
}

export default Sidebar;