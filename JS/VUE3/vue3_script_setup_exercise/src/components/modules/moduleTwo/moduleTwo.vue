<script setup lang="ts">
import {toRefs} from "vue";
// если подчеркивает - то это bug IDE
import PartOneParent from "@/components/modules/moduleTwo/1_part/PartOneParent.vue";
import PartTwoParent from "@/components/modules/moduleTwo/2_part/PartTwoParent.vue";
import PartThreeParent from "@/components/modules/moduleTwo/3_part/PartThreeParent.vue";
import PartFourParent from "@/components/modules/moduleTwo/4_part/PartFourParent.vue";
import PartFiveParent from "@/components/modules/moduleTwo/5_part/PartFiveParent.vue";
import PartSixParent from "@/components/modules/moduleTwo/6_part/PartSixParent.vue";

const props = defineProps<{
    moduleNumber: Number,
    description: String,
    tsInfo: String
}>()

const { moduleNumber, description, tsInfo } = toRefs(props);
</script>

<template>
    <div class="module">
      <h3>Module {{moduleNumber}}</h3>

      <p>Description: {{description}}, <span class="ts">TsInfo: {{tsInfo}}</span></p>

      <ParentWrapperTs :partNumber="1" :partDescription="'Refs, props, emits'">
          <PartOneParent :testProp="[1,2,3]" :testPropTwo="'hello'"/>
      </ParentWrapperTs>

      <ParentWrapperTs :partNumber="2" :partDescription="'Conditional rendering, conditional style bindings, v-for, v-show, v-if, v-model'">
          <PartTwoParent/>
      </ParentWrapperTs>

      <ParentWrapperTs :partNumber="3" :partDescription="'Hooks:  created, mounted, остальные (в том числе onErrorCaptured), keep alive, default props (на примере синей рамки в ChildWrapper), props-validation (ChildWrapper), namedSpacedComponents'">
          <ErrorBoundaryTs>
              <PartThreeParent/>
          </ErrorBoundaryTs>
      </ParentWrapperTs>

      <ParentWrapperTs :partNumber="4" :partDescription="'Define expose, $attrs, slots'">
          <PartFourParent/>
      </ParentWrapperTs>

      <ParentWrapperTs :partNumber="5" :partDescription="'(SAME!!!) Watch'">
          <PartFiveParent/>
      </ParentWrapperTs>

      <ParentWrapperTs :partNumber="6" :partDescription="'(SAME!!!) Composable functions (альтернатива mixins), suspense (is an experimental feature and its API will likely change.), defineAsyncComponent, custom directives (main.ts), teleport, defineModel'">
          <ErrorBoundary>
              <PartSixParent/>
          </ErrorBoundary>
      </ParentWrapperTs>
    </div>
</template>

<style>
.module {
    display: flex;
    flex-direction: column;
    border-right: 2px solid black;
    padding: 10px;
    max-width: 400px;
}

.no-ts, .ts {
    font-size: 26px;
}

.no-ts {
    color: red;
}

.ts {
    color: blue;
}
</style>
