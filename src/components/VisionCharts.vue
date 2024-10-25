<script setup>
import { ref } from "vue";
import { VueDataUi } from "vue-data-ui";
import "vue-data-ui/style.css"
import {dataFour} from "@/store/store.js";

const config = ref({
  "responsiveBreakpoint": 400,
  "userOptions": {
    "show": true,
    "buttons": {
      "tooltip": false,
      "pdf": true,
      "csv": true,
      "img": true,
      "table": false,
      "labels": false,
      "fullscreen": true,
      "sort": false,
      "stack": false,
      "animation": false
    },
    "buttonTitles": {
      "open": "Open options",
      "close": "Close options",
      "pdf": "Download PDF",
      "csv": "Download CSV",
      "img": "Download PNG",
      "fullscreen": "Toggle fullscreen",
      "animation": "Toggle animation"
    }
  },
  "animation": {
    "use": false,
    "speedMs": 1000,
    "pauseOnHover": true
  },
  "style": {
    "backgroundColor": "#FFFFFF",
    "color": "#1A1A1A",
    "fontFamily": "inherit"
  },
  "border": {
    "size": 0,
    "color": "#2D353C"
  },
  "caption": {
    "text": "S004",
    "padding": {
      "top": 12,
      "right": 12,
      "bottom": 12,
      "left": 12
    },
    "style": {
      "backgroundColor": "#FFFFFF",
      "color": "#1A1A1A",
      "fontSize": "16px",
      "fontWeight": "bold",
      "textAlign": "left"
    }
  },
  "thead": {
    "style": {
      "verticalAlign": "middle"
    },
    "tr": {
      "height": 32,
      "border": {
        "size": 0,
        "color": "#2D353C"
      },
      "style": {
        "backgroundColor": "#FFFFFF",
        "color": "#1A1A1A",
        "boxShadow": "0px 6px 12px -6px #1A1A1A50"
      },
      "th": {
        "border": {
          "size": 0,
          "color": "#2D353C"
        },
        "padding": {
          "top": 0,
          "right": 12,
          "bottom": 0,
          "left": 0
        },
        "style": {
          "borderSpacing": 0,
          "border": "none",
          "textAlign": "right",
          "fontVariantNumeric": "tabular-nums"
        }
      }
    }
  },
  "tbody": {
    "tr": {
      "visible": 15,
      "height": 32,
      "border": {
        "size": 0,
        "color": "#2D353C"
      },
      "style": {
        "backgroundColor": "#FFFFFF",
        "color": "#1A1A1A"
      },
      "td": {
        "alternateColor": true,
        "alternateOpacity": 0.5,
        "border": {
          "size": 0,
          "color": "#2D353C"
        },
        "padding": {
          "top": 0,
          "right": 12,
          "bottom": 0,
          "left": 0
        },
        "style": {
          "fontVariantNumeric": "tabular-nums",
          "textAlign": "right",
          "backgroundColor": "#fefcdd"
        }
      }
    }
  }
});


const dataset = ref(dataFour.dataset);

</script>

<template>
  <div>
    <VueDataUi component="VueUiCarouselTable" :config="config" :dataset="dataset" />
  </div>
</template>

