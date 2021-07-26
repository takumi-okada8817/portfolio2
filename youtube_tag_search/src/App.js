import React,{Component} from 'react';
import './App.css';
import Header from './components/header/header';
import Video from './components/video/video';
import List from './components/list/list';
import searchYoutube from 'youtube-api-v3-search';
import axios from 'axios';

//youtube api
const YOUTUBE_API_KEY = 'AIzaSyCm5q9_3nXn4OL84BNJ6MWS6vSGa3WUyyM';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      list: [],
      selectedItem: null,
      description: null,
      tagInfo: "10個までタグを登録できます",
      registerNotice: null
    }
  }

  //inputを取得する
  getYoutubeList = (term)=>{

    searchYoutube(YOUTUBE_API_KEY, 
      {
        q:term,
        maxResults: 10
      },(error,result) =>{

        this.setState({list: result.items});
        console.log(result);
    });
  }

  //クリックされたitemの処理
  handleSelectedItem = (videoItem)=>{
    this.setState({selectedItem: videoItem});
  }

  //videos:listを使ってdescriptionを取得
  getDescription = (videoId)=>{
    const videosListUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${YOUTUBE_API_KEY}`;
    
    axios
      .get(videosListUrl)
      .then(res =>{
        this.setState({description: res.data.items[0].snippet.description});
        console.log(res.data.items[0].snippet.description);
      })
  }
  
  //mysqlでタグを取得
  componentDidUpdate(pP,pS){
    if(pS.selectedItem !== this.state.selectedItem){
      axios
        .get('http://localhost:3001/',{
          params: {
            videoId: this.state.selectedItem.id.videoId
          }
        })
        .then((res)=>{
          console.log(res);
          if(res.data.length){
            const tagInfo = res.data;
            this.setState({tagInfo: tagInfo});
          }
        })
        .catch((error)=>{
          console.log(error);
        });
    }
  }

  //タグ登録notice
  handleNotice = (notice,id)=>{
    this.setState({registerNotice: notice});
    axios
        .get('http://localhost:3001/',{
          params: {
            videoId: id
          }
        })
        .then((res)=>{
          console.log(res);
          if(res.data.length){
            const tagInfo = res.data;
            this.setState({tagInfo: tagInfo});
          }
        })
        .catch((error)=>{
          console.log(error);
        });
    document.getElementById('tagForm').value = '';
  }
  
  //tagarea refresh
  refresh = (videoId)=>{
    axios
    .get('http://localhost:3001/',{
      params: {
        videoId: videoId
      }
    })
    .then((res)=>{
      console.log(res);
      if(res.data.length){
        const tagInfo = res.data;
        this.setState({tagInfo: tagInfo});
      }
    })
    .catch((error)=>{
      console.log(error);
    });
  }

  render(){

    console.log(this.state.tagInfo);

    return (
      <div className="App">

        <header className="App-header">
          <Header getYoutubeList={this.getYoutubeList} mysql={this.mysql}/>
        </header>

        <Video video={this.state.selectedItem} getDescription={this.getDescription} description={this.state.description} tagInfo={this.state.tagInfo} handleNotice={this.handleNotice} registerNotice={this.state.registerNotice} refresh={this.refresh}/>

        <div id="listWrapper">
          <List list={this.state.list} handleSelectedItem={this.handleSelectedItem}/>
        </div>

      </div>
    );
  }
}

export default App;