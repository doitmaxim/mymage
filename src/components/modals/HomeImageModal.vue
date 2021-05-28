<template>
    
    <div class="home-image-modal">
        <div class="home-image-modal-menu">

            <a href="#" class="modal-link">
                <svg-icon class="modal-link-icon" name="bookmark-modal"/>
                <span>
                    Save
                </span>
            </a>
            <a class="modal-link"
                :href="imageUrl" 
                @click.prevent="downloadImage(imageUrl, 'drugoi.jpg')"
            >
                <svg-icon class="modal-link-icon" name="download"/>
                <span>
                    Download
                </span>
            </a>

        </div>
        {{ inner }}
        <br>
        Нажал на меню картинки юзера: <b>@{{ user }} </b>
    </div>

</template>

<script>
import SvgIcon from '../SvgIcon'
import axios from 'axios'
export default {

    props: {
        inner: String,
        user: String,
        imageUrl: String
    },
    components: {
        SvgIcon
    },
    methods: {
        forceDownload(response, title) {
            console.log(title)
            const url = window.URL.createObjectURL( new Blob([response.data]) )
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', title)
            document.body.appendChild(link)
            link.click()
        },
        downloadImage(url, title = 'test.jpg'){
            axios({
                method: 'get',
                url,
                responseType: 'arraybuffer'
            })
                .then( (response) => {
                    this.forceDownload(response, title)
                })
                .catch( () => console.log('error occured'))
        }
    }

}
</script>
<style lang="scss">
@import '~@/assets/styles/vars.scss';
.home-image-modal-menu {
    display: grid;
    grid-template-rows: repeat(auto, 1fr);
}

.modal-link {
    display: flex;
    align-items: center;
    color: $text;
    text-decoration: none;
    font-size: 16px;
}

.modal-link-icon {
    margin-right: 5px;
    fill: $text;
}

</style>