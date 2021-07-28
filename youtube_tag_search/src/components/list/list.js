import React from 'react';
import Item from './item';
import './list.css';

const List = ({list, handleSelectedItem, getYoutubeListMore, term, nextPageToken})=>{

    const renderList = list.map((videoItem) =>{

        return <Item key={videoItem.id.videoId} videoItem={videoItem} handleSelectedItem={handleSelectedItem}/>
    });

    if(renderList.length === 0){

        return(

            <div>
                <div className="renderList">{renderList}</div>
            </div>
        );
    }else{
        return(

            <div className="renderListWrapper">
                <div className="renderList">{renderList}</div>
                {console.log(renderList)}
                <div className="loadMore">
                    <button onClick={()=>getYoutubeListMore(term,nextPageToken)}>Load more ...</button>
                </div>
            </div>
        );
    }
}

export default List;
