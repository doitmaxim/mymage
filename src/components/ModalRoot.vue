<template>
    <transition name="modal">
        <div class="modal-backdrop"
            v-if="visible"
            @click="hideModal"
        >
            <div 
                class="modal-dialog"
                @click.stop
            >
                <div class="modal-header">
                    <div class="modal-title">
                        {{title}}
                    </div>
                    

                    <div 
                        class="modal-close"
                        @click="hideModal"
                    >
                        <svg-icon name="close" class="modal-close-btn"/>
                    </div>
                </div>
                <div class="modal-body">
                    <component :is="loadComponent"></component>
                </div>
            </div>
        </div>
    </transition>

</template>

<script>
import SvgIcon from './SvgIcon'

export default {
    components: {
        SvgIcon
    },
    methods: {
        hideModal() {
            this.$store.commit('modal/hideModal')
        }
    },
    computed: {
        title() {
            const title = this.$store.getters['modal/getModalTitle']
            if (!title) return
            console.log(title)
            return title
        },
        visible() {
            return this.$store.getters['modal/checkVisible']
        },
        loadComponent() {
            const componentName = this.$store.getters['modal/getModalComponent']
            if (!componentName) return
            return () => import(`@/components/modals/${ componentName }.vue`);
        }
    }

}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/vars.scss';
.modal-backdrop {
    background-color: transparentize($text, .6);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 200;
    display: flex;
    flex-direction: column-reverse;
}
.modal-dialog {
    width: 100%;
    background-color: $bg;
    padding: 10px 15px;
    border-radius: 15px 15px 0 0;
    transform: translateY(0%);
    transition: .2s ease-in-out;
}
.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}
.modal-title {
    font-size: 18px;
    font-weight: bold;
}
.modal-close {
    display: flex;
    align-items: center;
}
.modal-close-btn {
    fill: $text
}
.modal-enter-active, .modal-leave-active {
    transition: .2s ease-in-out;
}
.modal-enter .modal-dialog, .modal-leave-to .modal-dialog {
    transform: translateY(100%);
}
</style>