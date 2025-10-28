const fs = require("fs");
const path = "src/pages/experience/coming.astro";
let text = fs.readFileSync(path, "utf8");
text = text.replace(
  'if ("ResizeObserver" in window) {\n          const resizeObserver = new ResizeObserver(adjustHeights);\n          resizeObserver.observe(mapContainer);\n        } else {\n          window.addEventListener("resize", adjustHeights);\n        }',
  'if ("ResizeObserver" in window) {\n          const resizeObserver = new ResizeObserver(adjustHeights);\n          resizeObserver.observe(mapContainer);\n        } else {\n          adjustHeights();\n        }'
);
fs.writeFileSync(path, text, "utf8");
