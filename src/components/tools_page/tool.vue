<template>
    <div>
        <v-expand-x-transition>
            <v-card
                elevation="2"
                class="mb-3"
            >
                <v-card-title>
                    <v-row>
                        <v-col>
                            <h3 class="text-title-tool">
                                <template v-if="!$store.state.tagonly">
                                  <text-highlight  :queries="search">{{title}}</text-highlight>
                                </template>
                                <template v-else>
                                    {{title}}
                                </template>
                            </h3>
                        </v-col>
                        <v-col>
                        <div class="btn-remover">
                                <v-btn @click="dialog = true" text color="error">
                                    <v-icon>mdi-close</v-icon> Remover
                                </v-btn>
                        </div>
                        </v-col>
                    </v-row>
                </v-card-title>
                <v-card-text>
                    <p class="text-descript">
                        {{description}}
                    </p>
                    <v-container>
                    <v-row>
                        <div class="tools-tags">
                            <v-chip v-for="(tag, key) in tags" :key="key" class="ma-1" >
                              <text-highlight :queries="search">
                                   {{tag}}
                              </text-highlight> 
                            </v-chip>                       
                        </div>
                    </v-row>
                    </v-container>
                </v-card-text>
                 <v-dialog
                v-model="dialog"
                persistent
                max-width="290"
            >
            <v-card>
                <v-card-title class="headline">
                Delete tool
                </v-card-title>
                <v-card-text>
                    Do you really want to delete the tool?
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                      <v-btn
                        color="red red-1"
                        text
                        @click="dialog = false"
                    >
                        NOT
                    </v-btn>
                    <v-btn
                        color="green darken-1"
                        text
                        @click="deleteItem()"
                    >
                        YES
                    </v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>

            </v-card>
           
        </v-expand-x-transition>
    </div>
</template>

<script>
import TextHighlight from 'vue-text-highlight';
import {mapGetters} from 'vuex';
export default {
    components:{
        'text-highlight':TextHighlight
    },
    computed:mapGetters({
        search: "getSearch"
    }),
    data() {
        return {
            dialog:false
        }
    },
    methods: {
        
        async deleteItem(){
            this.dialog = false;
            let result = await this.$store.dispatch('deleteTool', {
                id: this.id,
                index: this.index
            });
            if(result){
                    this.$store.dispatch('makeToast', {
                        "message": "Tool deleted successfully",
                        "type": "SUCCESS"
                    })
            }else{
                this.$store.dispatch('makeToast', {
                    "message": "Error when trying to delete tool",
                    "type": "DANGER"
                })
            }
        }
    },  
    props:[
        'id',
        'title',
        'description',
        'tags',
        'index'
    ],
    name: "too_card"
}
</script>
<style scoped>
.btn-remover{
    float: right;
}
.text-title-tool{
    text-align: left;
}
.text-descript{
    text-align: justify;
}
.tools-tags{
    float: left;
    margin-bottom: 10px;
}
</style>