<template>

    <transition name="modal">
        <div class="modal-backdrop"
            v-show="isOpen"
            :class="{open : isOpen}"
            @click="$emit('onClose')"
        >
            <div 
                class="modal-dialog"
                @click.stop
            >
                <div class="modal-header">
                    <div class="modal-title">
                        {{ this.title }}
                    </div>
                    

                    <div 
                        class="modal-close"
                        @click="$emit('onClose', true)"
                    >
                        <svg-icon name="close" class="modal-close-btn"/>
                    </div>
                </div>
                <div class="modal-body">
                    <slot />
                </div>
            </div>
        </div>
    </transition>

</template>

<script>
import SvgIcon from '../../components/SvgIcon'

export default {
    
    props: {
        title: String,
        isOpen: Boolean
    },
    components: {
        SvgIcon
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
    height: 40%;
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