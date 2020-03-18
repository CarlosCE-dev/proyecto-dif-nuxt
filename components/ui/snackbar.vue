<template>
    <div>
        <v-snackbar v-model="show" :timeout="snackbar.timeout" :color="snackbar.color">
                {{ snackbar.text }}
            <v-btn color="white" text @click="show = false">
                Close
            </v-btn>
        </v-snackbar>
    </div>
</template>

<script>
    export default {
        props: ['value','snackbar'],
        computed: {
            show: {
                get () {
                    return this.value;
                },
                set (value) {
                    this.$emit('input', value)
                }
            }
        }, 
    }
</script>
