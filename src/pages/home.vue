<template>
    <div class="main-page">
        <h1 class="page-title">VUTTR</h1>
        <h3 class="page-subtitle">Very Useful Tools to Remember</h3>
        <v-row>
            <v-col cols="9" xs="12" >
                <v-row>
                    <v-col>
                        <v-text-field
                            label="Search"
                            prepend-icon="mdi-magnify"
                            v-model="search"
                        >
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-checkbox
                            :label="`Search in tags only`"
                            v-model="tagonly"
                        ></v-checkbox>
                    </v-col>
                </v-row>
                  
            </v-col>
            <v-col cols="3" xs="12" >
               <v-row>
                   <v-col class="mt-3">
                        <v-btn block @click="dialog = true">+Add</v-btn>
                   </v-col>
               </v-row>
            </v-col>
        </v-row>
        <tool-list :tools="tools"></tool-list>
        <tool-form :dialog="dialog" @closemodal="dialog  = false" ></tool-form>
    </div>
</template>

<script>
import "../assets/css/style.css"
import ToolList from "../components/tools_page/list";
import ToolForm from "../components/tools_page/form";
import { mapGetters } from 'vuex'

export default {
    components:{
       'tool-list':ToolList,
       'tool-form': ToolForm
    },
    watch:{
        search(){
            this.$store.dispatch('getSearchTools');
        }
    },
    computed:{
        search:{
            get() {
                return this.$store.state.search;
            },
            set(val) {
                this.$store.commit("SET_SEARCH", val);
            }
        },
        tagonly:{
            get() {
                return this.$store.state.tagonly;
            },
            set(val) {
                this.$store.commit("SET_TAGONLY", val);
            }
        },
        ...mapGetters({
            tools: 'getTools'
        })
    },
    mounted() {
        this.$store.dispatch('getTools')
    },
    data() {
        return {
            dialog: false
        }
    },
}
</script>