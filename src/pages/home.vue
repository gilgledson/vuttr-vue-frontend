<template>
    <div class="main-page">
        <h1 class="page-title">VUTTR</h1>
        <h3 class="page-subtitle">Very Useful Tools to Remember</h3>
        <v-row>
            <v-col cols="9">
                <v-row>
                    <v-col>
                        <v-text-field
                            label="Search"
                            prepend-icon="mdi-magnify"
                        >
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-checkbox
                            :label="`Search in tags only`"
                        ></v-checkbox>
                    </v-col>
                </v-row>
                  
            </v-col>
            <v-col cols="3">
               <v-row>
                   <v-col>
                        <v-btn>+Add</v-btn>
                   </v-col>
               </v-row>
            </v-col>
        </v-row>
        <tool-list :tools="tools"></tool-list>
    </div>
</template>

<script>
import "../assets/css/style.css"
import ToolList from "../components/tools_page/list";

export default {
    components:{
       'tool-list':ToolList
    },
    data() {
        return {
            tools:[
                {
                    'title': 'Teste ferramenta',
                    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                    'tags': ['Tag1', 'tag2', 'tag3']
                },
                {
                    'title': 'Teste ferramenta',
                    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                    'tags': ['Tag1', 'tag2', 'tag3']
                },
            ]
        }
    },
}
</script>