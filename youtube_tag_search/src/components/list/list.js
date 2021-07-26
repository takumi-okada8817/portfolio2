import React from 'react';
import Item from './item'

const List = ({list, handleSelectedItem})=>{

    const renderList = list.map((videoItem) =>{

        return <Item key={videoItem.id.videoId} videoItem={videoItem} handleSelectedItem={handleSelectedItem}/>
    });

    return <div className="renderList">{renderList}</div>
}

export default List;