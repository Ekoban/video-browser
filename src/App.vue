<template>
    <div class="container">
        <SearchBar @termChange="onTermChange"></SearchBar>
        <VideoList 
            @videoSelect="onVideoSelect"
            :videos= "videos"
        ></VideoList>
        <VideoDetail></VideoDetail>
    </div>            
</template>


<script>
    import axios from 'axios';
    import SearchBar from './components/SearchBar';
    import VideoList from './components/VideoList';
    import VideoDetail from './components/VideoDetail';
    
    const API_KEY = 'AIzaSyCZ-v9yUC0UZ6pZ-02yP7mbhZZ6y2k4jFg';

    export default {
        name: 'App',
        components: {
            SearchBar,
            VideoList,
            VideoDetail
        },
        data() {
            return {
                videos: [],
                test: ''
            }
        },
        methods: {
            onTermChange(searchTerm){
                axios.get('https://www.googleapis.com/youtube/v3/search', {
                    params: {
                        key: API_KEY,
                        type: 'video',
                        part: 'snippet', //what type of info we want to get back
                        q: searchTerm //query
                    }
                }).then(response => {
                    this.videos = response.data.items;
                    });
            },
            onVideoSelect(video) {
                this.test = video.snippet.title;
                console.log("It worked !")
            }
        }
    }
    //purpose: help debug tools - tells Vue template is in the same file
 
</script>

<style>

</style>
