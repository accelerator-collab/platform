import React, { Component } from 'react';

class GridList extends Component {
    render() {
        const {children} = this.props;
        const gridTileData = [
            {
                imgSource: 'https://via.placeholder.com/400x400',
                title: 'Image 1',
                author: 'Chris',
                cols: 2,
            },
            {
                imgSource: 'https://via.placeholder.com/150x150',
                title: 'Image 2',
                author: 'Pol',
                cols: 2,
            },
        ];
        const gridCols = 3;

        return (
            <div className="gridlist">
                <ul className="gridlist__container" cols={gridCols}>
                    {gridTileData && gridTileData.length && gridTileData.map((item, i) => 
                        <li className="gridlist__tile" key={i} cols={item.cols || 1}>Item 1</li>
                        <CTA 
                            key={i}
                            ctaSize={item.ctaSize} 
                            ctaDesc={item.ctaDesc} 
                            ctaIcon={item.ctaIcon} 
                            tag={item.tag} />
                    )}
                    <li className="gridlist__tile">Item 1</li>
                    <li className="gridlist__tile">Item 2</li>
                    <li className="gridlist__tile">Item 3</li>
                    <li className="gridlist__tile">Item 4</li>
                    <li className="gridlist__tile">Item 5</li>
                </ul>
            </div>
        );
    }
}

export default GridList;