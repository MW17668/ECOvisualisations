{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "height": 300,
  "width": 400,
  "description": "NUmber employed by age group",
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/observatory/main/Aitken%20Fig%202a%20Formatted%20for%20FF%20and%20S.csv"
  },
  "mark": "line",
  "encoding": {
    "x": {"field": "Period", "type": "nominal"},
    "y": {
      "field": "Number employed (thousands)",
      "type": "quantitative",
      "title": "UK employment by age, seasonally adjusted, cumulative growth (thousands)"
    },
    "color": {
      "field": "Age Group",
      "type": "nominal",
      "scale": {
        "range": ["#233a58", "#e54753", "#FFD859", "#ff8f32", "#1771b2"]
      }
    }
  }
}