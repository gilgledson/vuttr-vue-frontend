<template>
    <v-dialog
      v-model="dialog"
      width="600px"
      persistent
    >
    <v-card>
        <v-card-title>
          <span class="headline">Create New Tool</span>
        </v-card-title>
        <v-card-text>
            <v-overlay :value="overlay">
                <v-progress-circular
                    indeterminate
                    size="64"
                ></v-progress-circular>
            </v-overlay>
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-row>
                    <v-col>
                            <v-text-field v-model="tool.name" label="Tool name" :rules="rules"  hide-details="auto"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field  v-model="tool.link" label="Tool Link" :rules="rules"  hide-details="auto"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-textarea v-model="tool.description" label="Tool description"></v-textarea>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-combobox
                            label="Tags"
                            multiple
                            v-model="tool.tags"
                            persistent-hint
                            small-chips
                            >
                            <template v-slot:no-data>
                                <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>
                                     Press <kbd>enter</kbd> to add a new tag
                                    </v-list-item-title>
                                </v-list-item-content>
                                </v-list-item>
                            </template>
                        </v-combobox>
                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
           <v-btn
            color="blue darken-1"
            text
            @click="closeModal()"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="create()"
          >
            Save
          </v-btn>
        </v-card-actions>
      
    </v-card>
    </v-dialog>
</template>
<script>
export default {
    name: "create-modal-tool",
    
    props:{
        'dialog':{
            required: true,
            type: Boolean
        }
    },
    data() {
        return {
            tool:{
                name: "",
                link: "",
                description: "",
                tags:[]
            },
            rules: [
                value => !!value || 'This field is required.'
            ],
            valid: false,
            overlay: false,
        }
    },  
    methods: {
        closeModal(){
            this.$refs.form.reset()
            this.$emit('closemodal', true);
        },
        async create(){
            if(this.$refs.form.validate(true)){
                this.overlay = true;
                let result = await this.$store.dispatch('createTool', this.tool);
                if(result){
                    this.$store.dispatch('makeToast', {
                        'message': "Tool added successfully",
                        "type": "SUCCESS"
                    })
                }else{
                    this.$store.dispatch('makeToast', {
                        'message': "Erro in add tool",
                        "type": "DANGER"
                    })
                }
                this.overlay = false;
                this.closeModal();
            }
          
        }
    },

}
</script>