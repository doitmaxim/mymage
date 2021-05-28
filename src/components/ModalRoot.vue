<template>
    <modal 
        :isOpen="!!component"
        :title="title"
        @onClose="handleModalClose"
    >
        <component 
            :is="component" 
            @onClose="handleClose"
            v-bind="props"
        />
    </modal>

</template>

<script>
import { ModalBus } from '../eventBus'

import Modal from './modals/Modal'

export default {
    data() {
        return {
            component: null,
            title: '',
            props: null,
            closeOnClick: true
        }
    },
    components: {
        Modal
    },
    created() {
        ModalBus.$on('open', ({ component, title = '', props = null, closeOnClick = true }) => {
            this.component = component,
            this.title = title,
            this.props = props,
            this.closeOnClick = true
        })
        document.addEventListener('keyup', this.handleKeyup)
    },
    methods: {
        handleModalClose(force = false) {
            if (!this.closeOnClick && !force) return
            this.handleClose()
        },
        handleClose() {
            this.component = null
        },
        handleKeyup(e) {
            if (e.keyCode == 27) this.handleClose
        }
    }
}
</script>
