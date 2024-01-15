<script setup>
import {toRefs} from "vue";
import PartOneParent from "@/components/modules/moduleOne/1_part/PartOneParent.vue";
import PartTwoParent from "@/components/modules/moduleOne/2_part/PartTwoParent.vue";
import PartThreeParent from "@/components/modules/moduleOne/3_part/PartThreeParent.vue";
import PartFourParent from "@/components/modules/moduleOne/4_part/PartFourParent.vue";
import PartFiveParent from "@/components/modules/moduleOne/5_part/PartFiveParent.vue";
import PartSixParent from "@/components/modules/moduleOne/6_part/PartSixParent.vue";

const props = defineProps({
    moduleNumber: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tsInfo: {
        type: String,
        required: true
    }
})

const { moduleNumber, description, tsInfo } = toRefs(props);
</script>

<template>
    <div class="module">
      <h3>Module {{moduleNumber}}</h3>

      <p>Description: {{description}}, <span class="no-ts">TsInfo: {{tsInfo}}</span></p>

      <ParentWrapper :partNumber="1" :partDescription="'Refs, props, emits'">
          <PartOneParent :testProp="[1,2,3]" :testPropTwo="'hello'"/>
      </ParentWrapper>

      <ParentWrapper :partNumber="2" :partDescription="'Conditional rendering, conditional style bindings, v-for, v-show, v-if, v-model'">
          <PartTwoParent/>
      </ParentWrapper>

      <ParentWrapper :partNumber="3" :partDescription="'Hooks:  created, mounted, остальные (в том числе onErrorCaptured), keep alive (+ options API), default props (на примере синей рамки в ChildWrapper), props-validation (ChildWrapper), namedSpacedComponents'">
          <ErrorBoundary>
              <PartThreeParent/>
          </ErrorBoundary>
      </ParentWrapper>

      <ParentWrapper :partNumber="4" :partDescription="'Define expose, $attrs, slots'">
          <PartFourParent/>
      </ParentWrapper>

      <ParentWrapper :partNumber="5" :partDescription="'Watch'">
          <PartFiveParent/>
      </ParentWrapper>

      <ParentWrapper :partNumber="6" :partDescription="'Composable functions (альтернатива mixins), suspense (is an experimental feature and its API will likely change.), defineAsyncComponent, custom directives (main.ts), teleport, defineModel'">
          <ErrorBoundary>
              <PartSixParent/>
          </ErrorBoundary>
      </ParentWrapper>
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
