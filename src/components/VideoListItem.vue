<template>
    <div>
        <li @click="onVideoSelect" class="list-group-item media">
            <img class="mr-3" :src="thumbnailUrl" />
            <div class="media-body"> 
                {{ videoTitle }} 
            </div>
        </li>
    </div>

</template>

<script>
export default {
    name:'VideoListItem',
    props: ['video'],
    computed: {
        thumbnailUrl() {
            return this.video.snippet.thumbnails.default.url
        },
        videoTitle() {
            return this.video.snippet.title
        },
    methods: {
        onVideoSelect() {
            this.$emit('videoSelect', this.video);
            console.log("First emit !")
        }
    }
    
    }

}
</script>

<style scoped>
    li {
        display: flex;
        cursor: pointer;
    }
    li:hover {
        background-color:darkgrey;
    }    
</style>
