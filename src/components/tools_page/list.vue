<template>
  <div>
   <template v-if="tools">
     <ToolCard v-for="(tool, key) in tools" :key="key"
      :title="tool.title"
      :description="tool.description"
      :tags="tool.tags"
    ></ToolCard>
   </template>
   <template v-else>
     <p>No tools found</p>
   </template>
   
  </div>
</template>

<script>
import ToolCard from './tool_card';

export default {
  name: 'tools_list',
  props:[
    'tools'
  ],
  components:{
    ToolCard
  }
}
</script>


