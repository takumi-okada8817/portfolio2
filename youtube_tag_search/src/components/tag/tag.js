import axios from 'axios';
import React from 'react';

const Tag = ({tag,videoId,refresh})=>{

    const deleteTag = (e)=>{

        e.preventDefault();

        const deleteTag = e.target.textContent;
        console.log(e);
        console.log(deleteTag);
        axios
            .get("http://localhost:3001/deleteTag",{
                params: {
                    deleteTag: deleteTag,
                    videoId: videoId
                }
            })
            .then((res)=>{
                console.log(res);
                refresh(videoId);
            })
            .catch((error)=>{
                console.log(error);
            });
    }

    return(
        <li>
            <form onSubmit={deleteTag}>
                <div className='tag' style={{border: 'black solid 1px',textDecoration: 'none',display:'inline-block'}}>
                    {tag.tag}
                    <button className='deleteTag' style={{border: 'none',backgroundColor: 'white'}}>
                        <svg viewBox="0 0 100 100" style={{width: '11px',height: '11px'}}><path d="M50 32.8L81.6 1.2a4.1 4.1 0 015.8 0l11.4 11.4a4.1 4.1 0 010 5.9L67.2 50l31.6 31.6a4.1 4.1 0 010 5.8L87.4 98.8a4.1 4.1 0 01-5.9 0L50 67.2 18.4 98.8a4.1 4.1 0 01-5.8 0L1.2 87.4a4.1 4.1 0 010-5.9L32.8 50 1.2 18.4a4.1 4.1 0 010-5.8L12.6 1.2a4.1 4.1 0 015.9 0L50 32.8z"></path></svg>
                    </button>
                </div>
            </form>
        </li>
    );
}

export default Tag;