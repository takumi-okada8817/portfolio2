import React from 'react';

const Item = ({videoItem, handleSelectedItem})=>{

    return(
        <div onClick={()=>handleSelectedItem(videoItem)} style={{cursor: 'pointer'}}>
            <img src={videoItem.snippet.thumbnails.medium.url} alt={videoItem.snippet.description}/>
            <div>
                <div>{videoItem.snippet.title}</div>
            </div>
        </div>
    );
}

export default Item;