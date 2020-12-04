<template>
    <div>
        <v-card
            elevation="2"
            class="mb-3"
        >
            <v-card-title>
                <v-row>
                    <v-col>
                        <h3 class="text-title-tool">{{title}}</h3>
                    </v-col>
                    <v-col>
                       <div class="btn-remover">
                            <v-btn text color="error">
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
                            {{tag}}
                        </v-chip>                       
                    </div>
                  </v-row>
                </v-container>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    props:[
        'title',
        'description',
        'tags'
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