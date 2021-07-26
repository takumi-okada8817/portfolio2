import axios from 'axios';
import React from 'react';
import Tag from './tag';

const TagArea = ({tagInfo,videoId,handleNotice,registerNotice,refresh})=>{

    const registerTag = (e)=>{

        e.preventDefault();

        const tagRegistrationValue = e.target[0].value;

        const tagObj = document.getElementsByClassName("tag");
        const tagArray = [].map.call(tagObj,(ele)=>{
            return ele;
        });
        const checkedTag = tagArray.filter((ele)=>{
            return ele.innerText === tagRegistrationValue;
        });

        console.log(typeof(checkedTag.length));

        if(checkedTag.length === 0 && tagRegistrationValue !== ""){
            axios
                .get("http://localhost:3001/tagRegister",{
                    params: {
                        tagVal: tagRegistrationValue,
                        videoId: videoId
                    }
                })
                .then((res)=>{
                    if(res.data.length){
                        handleNotice(res.data,videoId);
                    }
                })
                .catch((error)=>{
                    console.log(error);
                });
        }else{
            handleNotice("このタグはすでに登録されているか、タグが空白です");
        }
    }

    if(tagInfo === "10個までタグを登録できます" || tagInfo.length === 0){
        console.log(tagInfo);
        return(
            <div>
                <h5>{tagInfo}</h5>
                <form className="registerTag" onSubmit={registerTag}>
                    <input id="tagForm" type="text" autoComplete="off"/>
                    <button type="submit">登録</button>
                    <span>{registerNotice}</span>
                </form>
            </div>
        );
    }else{
        console.log(tagInfo.length);
        const tags = tagInfo.map((tag)=>{

            return <Tag key={tag.tag} tag={tag} videoId={videoId} refresh={refresh}/>
        });

        return(
            <div>
                <ul>
                    <div className="tagArea">{tags}</div>
                </ul>
                <form className="registerTag" onSubmit={registerTag}>
                    <input id="tagForm" type="text" autoComplete="off" />
                    <button type="submit">登録</button>
                    <span>{registerNotice}</span>
                </form>
            </div>
        );
    }
}

export default TagArea;