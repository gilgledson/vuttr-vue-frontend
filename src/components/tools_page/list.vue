<template>
  <div>
   <template v-if="tools.length">
      <Tool v-for="(tool, key) in tools" 
        :key="key"
        :title="tool.name"
        :description="tool.description"
        :tags="tool.tags"
        :index="key"
        :id="tool.id"
      ></Tool>
   </template>
   <template v-else>
     <p>No tools found</p>
   </template>
   
  </div>
</template>

<script>
import Tool from './tool';

export default {
  name: 'tools_list',
  props:[
    'tools'
  ],
  components:{
    Tool
  }
}
</script>


