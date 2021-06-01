<template>
    
    <div class="home-image-modal">
        <div class="home-image-modal-menu">

            <a href="#" class="modal-link">
                <svg-icon class="modal-link-icon" name="bookmark-modal"/>
                <span>
                    Сохранить
                </span>
            </a>
            <a class="modal-link"
                :href="image.largeImageURL" 
                @click.prevent="downloadImage(image.largeImageURL, image.user+'.jpg')"
            >
                <svg-icon class="modal-link-icon" name="download"/>
                <span>
                    Скачать
                </span>
            </a>
            <a href="#" class="modal-link">
                <svg-icon class="modal-link-icon" name="sendimage"/>
                <span>
                    Поделиться
                </span>
            </a>
            <a href="#" class="modal-link modal-link--repot">
                <svg-icon class="modal-link-icon" name="warning"/>
                <span>
                    Пожаловаться
                </span>
            </a>
        </div>
    </div>

</template>

<script>
import SvgIcon from '../SvgIcon'
import axios from 'axios'
export default {
    name: 'HomeImageModal',
    components: {
        SvgIcon
    },
    computed: {
        image() {
            const innerProps = this.$store.getters['modal/getInnerProps']
            if (!innerProps) return
            return innerProps
        }
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
    margin: 5px 0;
}

.modal-link-icon {
    margin-right: 5px;
    fill: $text;
}

.modal-link--repot {
    color: $report;

    .modal-link-icon {
        fill: $report;
    }
}

</style>