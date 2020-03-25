<template>
    <div>
        <v-dialog ref="dialog"
                v-model="show"
                :return-value.sync="date"
                persistent
                width="290px"
        >
        <v-date-picker v-model="date" scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="show = false">Cancel</v-btn>
          <v-btn text color="primary" @click="confirm">OK</v-btn>
        </v-date-picker>
      </v-dialog>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        data: () => ({
            date: new Date().toISOString().substr(0, 10),
        }),
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
        methods: {
            confirm() {
                this.$emit('date', this.date );
                this.show = false;
            }
        }, 
    }
</script>

<style scoped>

</style>